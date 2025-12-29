import { neon, NeonQueryFunction } from '@neondatabase/serverless'

// Lazy initialization to avoid build-time errors
let _sql: NeonQueryFunction<false, false> | null = null

function getDb() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set')
    }
    _sql = neon(process.env.DATABASE_URL)
  }
  return _sql
}

// Initialize all database tables
export async function initializeDatabase() {
  const sql = getDb()

  // Newsletter subscribers
  await sql`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255),
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      source VARCHAR(100) DEFAULT 'launch_page',
      is_active BOOLEAN DEFAULT true
    )
  `

  // Users table
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255),
      password_hash VARCHAR(255),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      email_verified BOOLEAN DEFAULT false,
      email_verified_at TIMESTAMP WITH TIME ZONE,
      is_active BOOLEAN DEFAULT true,
      role VARCHAR(50) DEFAULT 'user',
      avatar_url TEXT,

      -- SSO fields
      auth_provider VARCHAR(50) DEFAULT 'email',
      provider_id VARCHAR(255),

      -- API & billing prep
      api_key_hash VARCHAR(255),
      stripe_customer_id VARCHAR(255),
      plan VARCHAR(50) DEFAULT 'free'
    )
  `

  // Sessions table for auth
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      token VARCHAR(255) UNIQUE NOT NULL,
      expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      ip_address VARCHAR(45),
      user_agent TEXT
    )
  `

  // Create index on sessions token
  await sql`
    CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token)
  `

  // Create index on users email
  await sql`
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
  `
}

// Add a subscriber
export async function addSubscriber(email: string, name?: string) {
  try {
    const sql = getDb()
    const result = await sql`
      INSERT INTO newsletter_subscribers (email, name)
      VALUES (${email}, ${name || null})
      ON CONFLICT (email) DO UPDATE SET
        name = COALESCE(EXCLUDED.name, newsletter_subscribers.name),
        is_active = true
      RETURNING id, email, subscribed_at
    `
    return { success: true, data: result[0] }
  } catch (error) {
    console.error('Error adding subscriber:', error)
    return { success: false, error: 'Failed to add subscriber' }
  }
}

// Get subscriber count
export async function getSubscriberCount() {
  const sql = getDb()
  const result = await sql`
    SELECT COUNT(*) as count FROM newsletter_subscribers WHERE is_active = true
  `
  return result[0].count
}

// Get all subscribers (for admin/export)
export async function getAllSubscribers() {
  const sql = getDb()
  return await sql`
    SELECT id, email, name, subscribed_at, source
    FROM newsletter_subscribers
    WHERE is_active = true
    ORDER BY subscribed_at DESC
  `
}

// ============================================
// User Management
// ============================================

export interface User {
  id: number
  email: string
  name: string | null
  created_at: Date
  email_verified: boolean
  role: string
  avatar_url: string | null
  auth_provider: string
  plan: string
}

// Create a new user
export async function createUser(
  email: string,
  passwordHash: string,
  name?: string
): Promise<{ success: boolean; data?: User; error?: string }> {
  try {
    const sql = getDb()
    const result = await sql`
      INSERT INTO users (email, password_hash, name)
      VALUES (${email.toLowerCase().trim()}, ${passwordHash}, ${name || null})
      RETURNING id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
    `
    return { success: true, data: result[0] as User }
  } catch (error: unknown) {
    console.error('Error creating user:', error)
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return { success: false, error: 'Email already registered' }
    }
    return { success: false, error: 'Failed to create user' }
  }
}

// Get user by email
export async function getUserByEmail(email: string): Promise<User | null> {
  const sql = getDb()
  const result = await sql`
    SELECT id, email, name, password_hash, created_at, email_verified, role, avatar_url, auth_provider, plan
    FROM users
    WHERE email = ${email.toLowerCase().trim()} AND is_active = true
  `
  return result[0] as User | null
}

// Get user by ID
export async function getUserById(id: number): Promise<User | null> {
  const sql = getDb()
  const result = await sql`
    SELECT id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
    FROM users
    WHERE id = ${id} AND is_active = true
  `
  return result[0] as User | null
}

// Get password hash for authentication
export async function getPasswordHash(email: string): Promise<string | null> {
  const sql = getDb()
  const result = await sql`
    SELECT password_hash FROM users
    WHERE email = ${email.toLowerCase().trim()} AND is_active = true
  `
  return result[0]?.password_hash || null
}

// ============================================
// Session Management
// ============================================

// Create a session
export async function createSession(
  userId: number,
  token: string,
  expiresAt: Date,
  ipAddress?: string,
  userAgent?: string
): Promise<boolean> {
  try {
    const sql = getDb()
    await sql`
      INSERT INTO sessions (user_id, token, expires_at, ip_address, user_agent)
      VALUES (${userId}, ${token}, ${expiresAt}, ${ipAddress || null}, ${userAgent || null})
    `
    return true
  } catch (error) {
    console.error('Error creating session:', error)
    return false
  }
}

// Get session with user
export async function getSessionWithUser(token: string): Promise<{ session: { id: number; expires_at: Date }; user: User } | null> {
  const sql = getDb()
  const result = await sql`
    SELECT
      s.id as session_id, s.expires_at,
      u.id, u.email, u.name, u.created_at, u.email_verified, u.role, u.avatar_url, u.auth_provider, u.plan
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ${token}
      AND s.expires_at > NOW()
      AND u.is_active = true
  `
  if (!result[0]) return null

  const row = result[0]
  return {
    session: { id: row.session_id, expires_at: row.expires_at },
    user: {
      id: row.id,
      email: row.email,
      name: row.name,
      created_at: row.created_at,
      email_verified: row.email_verified,
      role: row.role,
      avatar_url: row.avatar_url,
      auth_provider: row.auth_provider,
      plan: row.plan
    }
  }
}

// Delete session (logout)
export async function deleteSession(token: string): Promise<boolean> {
  try {
    const sql = getDb()
    await sql`DELETE FROM sessions WHERE token = ${token}`
    return true
  } catch (error) {
    console.error('Error deleting session:', error)
    return false
  }
}

// Delete all sessions for a user
export async function deleteAllUserSessions(userId: number): Promise<boolean> {
  try {
    const sql = getDb()
    await sql`DELETE FROM sessions WHERE user_id = ${userId}`
    return true
  } catch (error) {
    console.error('Error deleting user sessions:', error)
    return false
  }
}

// Clean up expired sessions
export async function cleanupExpiredSessions(): Promise<number> {
  const sql = getDb()
  const result = await sql`
    DELETE FROM sessions WHERE expires_at < NOW()
    RETURNING id
  `
  return result.length
}

// Update user
export async function updateUser(
  userId: number,
  updates: { name?: string; avatar_url?: string; email_verified?: boolean }
): Promise<User | null> {
  const sql = getDb()
  const result = await sql`
    UPDATE users
    SET
      name = COALESCE(${updates.name}, name),
      avatar_url = COALESCE(${updates.avatar_url}, avatar_url),
      email_verified = COALESCE(${updates.email_verified}, email_verified),
      updated_at = NOW()
    WHERE id = ${userId} AND is_active = true
    RETURNING id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
  `
  return result[0] as User | null
}

// Get user count
export async function getUserCount(): Promise<number> {
  const sql = getDb()
  const result = await sql`
    SELECT COUNT(*) as count FROM users WHERE is_active = true
  `
  return parseInt(result[0].count, 10)
}

// ============================================
// SSO User Management
// ============================================

// Create or get user from OAuth provider
export async function findOrCreateOAuthUser(
  provider: 'google' | 'github',
  providerId: string,
  email: string,
  name: string | null,
  avatarUrl: string | null
): Promise<{ success: boolean; user?: User; isNew?: boolean; error?: string }> {
  try {
    const sql = getDb()

    // First, check if user exists with this provider ID
    const existingByProvider = await sql`
      SELECT id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
      FROM users
      WHERE auth_provider = ${provider} AND provider_id = ${providerId} AND is_active = true
    `

    if (existingByProvider[0]) {
      // Update avatar if changed
      if (avatarUrl && existingByProvider[0].avatar_url !== avatarUrl) {
        await sql`
          UPDATE users SET avatar_url = ${avatarUrl}, updated_at = NOW()
          WHERE id = ${existingByProvider[0].id}
        `
      }
      return { success: true, user: existingByProvider[0] as User, isNew: false }
    }

    // Check if user exists with this email (might have signed up with email first)
    const existingByEmail = await sql`
      SELECT id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
      FROM users
      WHERE email = ${email.toLowerCase().trim()} AND is_active = true
    `

    if (existingByEmail[0]) {
      // Link the OAuth provider to existing account
      await sql`
        UPDATE users
        SET auth_provider = ${provider},
            provider_id = ${providerId},
            avatar_url = COALESCE(${avatarUrl}, avatar_url),
            email_verified = true,
            email_verified_at = NOW(),
            updated_at = NOW()
        WHERE id = ${existingByEmail[0].id}
      `

      const updated = await sql`
        SELECT id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
        FROM users WHERE id = ${existingByEmail[0].id}
      `

      return { success: true, user: updated[0] as User, isNew: false }
    }

    // Create new user
    const result = await sql`
      INSERT INTO users (email, name, avatar_url, auth_provider, provider_id, email_verified, email_verified_at)
      VALUES (
        ${email.toLowerCase().trim()},
        ${name},
        ${avatarUrl},
        ${provider},
        ${providerId},
        true,
        NOW()
      )
      RETURNING id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
    `

    return { success: true, user: result[0] as User, isNew: true }
  } catch (error: unknown) {
    console.error('Error finding/creating OAuth user:', error)
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return { success: false, error: 'Email already registered with a different account' }
    }
    return { success: false, error: 'Failed to authenticate with provider' }
  }
}

// Get user by provider
export async function getUserByProvider(
  provider: 'google' | 'github',
  providerId: string
): Promise<User | null> {
  const sql = getDb()
  const result = await sql`
    SELECT id, email, name, created_at, email_verified, role, avatar_url, auth_provider, plan
    FROM users
    WHERE auth_provider = ${provider} AND provider_id = ${providerId} AND is_active = true
  `
  return result[0] as User | null
}

// ============================================
// API Key Management
// ============================================

export interface ApiKey {
  id: number
  user_id: number
  name: string
  key_prefix: string
  created_at: Date
  last_used_at: Date | null
  expires_at: Date | null
  is_active: boolean
  scopes: string[]
  usage_count: number
}

// Initialize API keys table
export async function initializeApiKeysTable() {
  const sql = getDb()
  await sql`
    CREATE TABLE IF NOT EXISTS api_keys (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      name VARCHAR(255) NOT NULL,
      key_hash VARCHAR(255) NOT NULL,
      key_prefix VARCHAR(12) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      last_used_at TIMESTAMP WITH TIME ZONE,
      expires_at TIMESTAMP WITH TIME ZONE,
      is_active BOOLEAN DEFAULT true,
      scopes TEXT[] DEFAULT ARRAY['read'],
      usage_count INTEGER DEFAULT 0
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_api_keys_user ON api_keys(user_id)`
  await sql`CREATE INDEX IF NOT EXISTS idx_api_keys_hash ON api_keys(key_hash)`
}

// Create API key
export async function createApiKey(
  userId: number,
  name: string,
  keyHash: string,
  keyPrefix: string,
  scopes: string[] = ['read'],
  expiresAt?: Date
): Promise<{ success: boolean; data?: ApiKey; error?: string }> {
  try {
    const sql = getDb()
    const result = await sql`
      INSERT INTO api_keys (user_id, name, key_hash, key_prefix, scopes, expires_at)
      VALUES (${userId}, ${name}, ${keyHash}, ${keyPrefix}, ${scopes}, ${expiresAt || null})
      RETURNING id, user_id, name, key_prefix, created_at, last_used_at, expires_at, is_active, scopes, usage_count
    `
    return { success: true, data: result[0] as ApiKey }
  } catch (error) {
    console.error('Error creating API key:', error)
    return { success: false, error: 'Failed to create API key' }
  }
}

// Get user's API keys (without hash)
export async function getUserApiKeys(userId: number): Promise<ApiKey[]> {
  const sql = getDb()
  const result = await sql`
    SELECT id, user_id, name, key_prefix, created_at, last_used_at, expires_at, is_active, scopes, usage_count
    FROM api_keys
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
  `
  return result as ApiKey[]
}

// Validate API key and get user
export async function validateApiKey(rawApiKey: string): Promise<{ valid: boolean; user?: User; key?: ApiKey; error?: string }> {
  try {
    // Import hashApiKey dynamically to avoid circular dependency
    const { hashApiKey, isValidApiKeyFormat } = await import('./api-keys')

    // Check format first
    if (!isValidApiKeyFormat(rawApiKey)) {
      return { valid: false, error: 'Invalid API key format' }
    }

    const keyHash = hashApiKey(rawApiKey)
    const sql = getDb()
    const result = await sql`
      SELECT
        k.id as key_id, k.user_id, k.name as key_name, k.key_prefix, k.created_at as key_created_at,
        k.last_used_at, k.expires_at, k.is_active as key_active, k.scopes, k.usage_count,
        u.id, u.email, u.name, u.created_at, u.email_verified, u.role, u.avatar_url, u.auth_provider, u.plan
      FROM api_keys k
      JOIN users u ON k.user_id = u.id
      WHERE k.key_hash = ${keyHash}
        AND k.is_active = true
        AND u.is_active = true
        AND (k.expires_at IS NULL OR k.expires_at > NOW())
    `

    if (!result[0]) {
      return { valid: false, error: 'Invalid or expired API key' }
    }

    const row = result[0]

    return {
      valid: true,
      user: {
        id: row.id,
        email: row.email,
        name: row.name,
        created_at: row.created_at,
        email_verified: row.email_verified,
        role: row.role,
        avatar_url: row.avatar_url,
        auth_provider: row.auth_provider,
        plan: row.plan
      },
      key: {
        id: row.key_id,
        user_id: row.user_id,
        name: row.key_name,
        key_prefix: row.key_prefix,
        created_at: row.key_created_at,
        last_used_at: row.last_used_at,
        expires_at: row.expires_at,
        is_active: row.key_active,
        scopes: row.scopes,
        usage_count: row.usage_count
      }
    }
  } catch (error) {
    console.error('Error validating API key:', error)
    return { valid: false, error: 'Failed to validate API key' }
  }
}

// Update API key usage count
export async function updateApiKeyUsage(keyId: number): Promise<void> {
  try {
    const sql = getDb()
    await sql`
      UPDATE api_keys
      SET last_used_at = NOW(), usage_count = usage_count + 1
      WHERE id = ${keyId}
    `
  } catch (error) {
    console.error('Error updating API key usage:', error)
  }
}

// Delete API key
export async function deleteApiKey(keyId: string | number, userId: number): Promise<{ success: boolean; error?: string }> {
  try {
    const sql = getDb()
    const id = typeof keyId === 'string' ? parseInt(keyId, 10) : keyId
    const result = await sql`
      DELETE FROM api_keys
      WHERE id = ${id} AND user_id = ${userId}
      RETURNING id
    `
    if (result.length === 0) {
      return { success: false, error: 'API key not found or unauthorized' }
    }
    return { success: true }
  } catch (error) {
    console.error('Error deleting API key:', error)
    return { success: false, error: 'Failed to delete API key' }
  }
}

// Revoke or reactivate API key
export async function revokeApiKey(keyId: string | number, userId: number, revoke: boolean = true): Promise<{ success: boolean; error?: string }> {
  try {
    const sql = getDb()
    const id = typeof keyId === 'string' ? parseInt(keyId, 10) : keyId
    const result = await sql`
      UPDATE api_keys
      SET is_active = ${!revoke}
      WHERE id = ${id} AND user_id = ${userId}
      RETURNING id
    `
    if (result.length === 0) {
      return { success: false, error: 'API key not found or unauthorized' }
    }
    return { success: true }
  } catch (error) {
    console.error('Error updating API key:', error)
    return { success: false, error: 'Failed to update API key' }
  }
}

// Get API key count for user
export async function getApiKeyCount(userId: number): Promise<number> {
  const sql = getDb()
  const result = await sql`
    SELECT COUNT(*) as count FROM api_keys
    WHERE user_id = ${userId} AND is_active = true
  `
  return parseInt(result[0].count, 10)
}

// Get API usage stats for user
export async function getApiUsageStats(userId: number): Promise<{
  totalKeys: number
  activeKeys: number
  totalRequests: number
}> {
  const sql = getDb()
  const result = await sql`
    SELECT
      COUNT(*) as total_keys,
      COUNT(*) FILTER (WHERE is_active = true) as active_keys,
      COALESCE(SUM(usage_count), 0) as total_requests
    FROM api_keys
    WHERE user_id = ${userId}
  `
  return {
    totalKeys: parseInt(result[0].total_keys, 10),
    activeKeys: parseInt(result[0].active_keys, 10),
    totalRequests: parseInt(result[0].total_requests, 10)
  }
}

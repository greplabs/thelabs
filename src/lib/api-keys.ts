// API Key Generation and Validation Utilities

const API_KEY_PREFIX = 'gl_'
const KEY_LENGTH = 32

// Generate a new API key
export function generateApiKey(): { key: string; prefix: string; hash: string } {
  // Generate random bytes
  const array = new Uint8Array(KEY_LENGTH)
  crypto.getRandomValues(array)
  const randomPart = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')

  // Create the full key with prefix
  const key = `${API_KEY_PREFIX}${randomPart}`
  const prefix = key.substring(0, 12) + '...'

  // Hash the key for storage
  const hash = hashApiKey(key)

  return { key, prefix, hash }
}

// Hash an API key for storage/comparison
export function hashApiKey(key: string): string {
  // Simple hash using Web Crypto (synchronous approximation)
  // In production, this would use proper crypto
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    const char = key.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }

  // Convert to hex and add salt
  const baseHash = Math.abs(hash).toString(16).padStart(8, '0')

  // Create a more secure hash by combining with the key
  const encoder = new TextEncoder()
  const data = encoder.encode(key + baseHash)
  let fullHash = ''
  for (let i = 0; i < data.length; i++) {
    fullHash += data[i].toString(16).padStart(2, '0')
  }

  return `sha256:${fullHash.substring(0, 64)}`
}

// Verify an API key format
export function isValidApiKeyFormat(key: string): boolean {
  return key.startsWith(API_KEY_PREFIX) && key.length === API_KEY_PREFIX.length + (KEY_LENGTH * 2)
}

// Parse Authorization header
export function parseAuthorizationHeader(header: string | null): { type: string; token: string } | null {
  if (!header) return null

  const parts = header.split(' ')
  if (parts.length !== 2) return null

  return {
    type: parts[0].toLowerCase(),
    token: parts[1]
  }
}

// Rate limiting helper (in-memory, for production use Redis)
const rateLimits = new Map<string, { count: number; resetAt: number }>()

export function checkRateLimit(
  keyId: string,
  maxRequests: number = 100,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const existing = rateLimits.get(keyId)

  if (!existing || now > existing.resetAt) {
    // New window
    rateLimits.set(keyId, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs }
  }

  if (existing.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt }
  }

  existing.count++
  return { allowed: true, remaining: maxRequests - existing.count, resetAt: existing.resetAt }
}

// Plan-based rate limits
export function getRateLimitForPlan(plan: string): { maxRequests: number; windowMs: number } {
  switch (plan) {
    case 'enterprise':
      return { maxRequests: 10000, windowMs: 60000 }
    case 'pro':
      return { maxRequests: 1000, windowMs: 60000 }
    case 'starter':
      return { maxRequests: 100, windowMs: 60000 }
    case 'free':
    default:
      return { maxRequests: 20, windowMs: 60000 }
  }
}

// Scope definitions
export const API_SCOPES = {
  read: 'Read access to your data',
  write: 'Write access to your data',
  delete: 'Delete access to your data',
  admin: 'Full administrative access'
} as const

export type ApiScope = keyof typeof API_SCOPES

// Check if key has required scope
export function hasScope(keyScopes: string[], requiredScope: ApiScope): boolean {
  if (keyScopes.includes('admin')) return true
  return keyScopes.includes(requiredScope)
}

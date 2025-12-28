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

// Initialize the newsletter_subscribers table
export async function initializeDatabase() {
  const sql = getDb()
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

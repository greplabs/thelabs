import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import {
  getUserApiKeys,
  createApiKey,
  initializeApiKeysTable,
  getApiKeyCount
} from '@/lib/db'
import { generateApiKey } from '@/lib/api-keys'

const MAX_KEYS_FREE = 2
const MAX_KEYS_PRO = 10
const MAX_KEYS_ENTERPRISE = 50

let initialized = false

// GET - List user's API keys
export async function GET() {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Initialize table if needed
    if (!initialized) {
      await initializeApiKeysTable()
      initialized = true
    }

    const keys = await getUserApiKeys(session.user.id)

    return NextResponse.json({
      success: true,
      keys: keys.map(k => ({
        id: k.id,
        name: k.name,
        prefix: k.key_prefix,
        createdAt: k.created_at,
        lastUsedAt: k.last_used_at,
        expiresAt: k.expires_at,
        isActive: k.is_active,
        scopes: k.scopes,
        usageCount: k.usage_count
      }))
    })
  } catch (error) {
    console.error('Error getting API keys:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to get API keys' },
      { status: 500 }
    )
  }
}

// POST - Create new API key
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Initialize table if needed
    if (!initialized) {
      await initializeApiKeysTable()
      initialized = true
    }

    const body = await request.json()
    const { name, scopes = ['read'], expiresInDays } = body

    if (!name || name.length < 1 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 1 and 100 characters' },
        { status: 400 }
      )
    }

    // Check key limit based on plan
    const keyCount = await getApiKeyCount(session.user.id)
    const maxKeys = session.user.plan === 'enterprise' ? MAX_KEYS_ENTERPRISE
                  : session.user.plan === 'pro' ? MAX_KEYS_PRO
                  : MAX_KEYS_FREE

    if (keyCount >= maxKeys) {
      return NextResponse.json(
        { success: false, error: `You've reached the maximum of ${maxKeys} API keys for your plan` },
        { status: 403 }
      )
    }

    // Generate new key
    const { key, prefix, hash } = generateApiKey()

    // Calculate expiration
    const expiresAt = expiresInDays
      ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000)
      : undefined

    // Store in database
    const result = await createApiKey(
      session.user.id,
      name,
      hash,
      prefix,
      scopes,
      expiresAt
    )

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      key, // Return full key only once!
      keyInfo: {
        id: result.data!.id,
        name: result.data!.name,
        prefix: result.data!.key_prefix,
        createdAt: result.data!.created_at,
        expiresAt: result.data!.expires_at,
        scopes: result.data!.scopes
      },
      message: 'Save this key now - you won\'t be able to see it again!'
    })
  } catch (error) {
    console.error('Error creating API key:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create API key' },
      { status: 500 }
    )
  }
}

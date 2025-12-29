import { NextRequest, NextResponse } from 'next/server'
import { validateApiKey, updateApiKeyUsage } from '@/lib/db'
import { parseAuthorizationHeader, checkRateLimit, getRateLimitForPlan } from '@/lib/api-keys'

export async function GET(request: NextRequest) {
  try {
    // Parse authorization header
    const authHeader = request.headers.get('authorization')
    const auth = parseAuthorizationHeader(authHeader)

    if (!auth || auth.type !== 'bearer') {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing or invalid authorization header',
          hint: 'Use: Authorization: Bearer gl_your_api_key'
        },
        { status: 401 }
      )
    }

    // Validate API key
    const keyResult = await validateApiKey(auth.token)

    if (!keyResult.valid || !keyResult.key || !keyResult.user) {
      return NextResponse.json(
        {
          success: false,
          error: keyResult.error || 'Invalid API key'
        },
        { status: 401 }
      )
    }

    const { key, user } = keyResult

    // Check rate limit
    const rateLimit = getRateLimitForPlan(user.plan)
    const rateLimitResult = checkRateLimit(String(key.id), rateLimit.maxRequests, rateLimit.windowMs)

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimit.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetAt.toString(),
            'Retry-After': Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000).toString()
          }
        }
      )
    }

    // Update usage count
    await updateApiKeyUsage(key.id)

    // Return status
    return NextResponse.json(
      {
        success: true,
        status: 'operational',
        timestamp: new Date().toISOString(),
        user: {
          id: user.id,
          plan: user.plan
        },
        apiKey: {
          name: key.name,
          scopes: key.scopes
        },
        rateLimit: {
          limit: rateLimit.maxRequests,
          remaining: rateLimitResult.remaining,
          resetAt: new Date(rateLimitResult.resetAt).toISOString()
        },
        services: {
          api: 'operational',
          database: 'operational',
          auth: 'operational'
        }
      },
      {
        headers: {
          'X-RateLimit-Limit': rateLimit.maxRequests.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetAt.toString()
        }
      }
    )
  } catch (error) {
    console.error('API status error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

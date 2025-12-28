import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { exchangeGoogleCode, getGoogleUser, getBaseUrl } from '@/lib/oauth'
import { findOrCreateOAuthUser, initializeDatabase } from '@/lib/db'
import { createAuthSession, setSessionCookie } from '@/lib/auth'

let initialized = false

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const error = searchParams.get('error')

    const baseUrl = getBaseUrl()

    // Handle OAuth errors
    if (error) {
      console.error('Google OAuth error:', error)
      return NextResponse.redirect(`${baseUrl}/login?error=oauth_denied`)
    }

    if (!code || !state) {
      return NextResponse.redirect(`${baseUrl}/login?error=oauth_failed`)
    }

    // Verify state
    const cookieStore = await cookies()
    const storedState = cookieStore.get('oauth_state')?.value

    if (!storedState || storedState !== state) {
      return NextResponse.redirect(`${baseUrl}/login?error=oauth_state_mismatch`)
    }

    // Clear the state cookie
    cookieStore.delete('oauth_state')

    // Initialize database if needed
    if (!initialized) {
      await initializeDatabase()
      initialized = true
    }

    // Exchange code for tokens
    const tokens = await exchangeGoogleCode(code)

    // Get user info
    const googleUser = await getGoogleUser(tokens.access_token)

    if (!googleUser.email) {
      return NextResponse.redirect(`${baseUrl}/login?error=no_email`)
    }

    // Find or create user
    const result = await findOrCreateOAuthUser(
      'google',
      googleUser.id,
      googleUser.email,
      googleUser.name,
      googleUser.picture
    )

    if (!result.success || !result.user) {
      return NextResponse.redirect(`${baseUrl}/login?error=${encodeURIComponent(result.error || 'oauth_failed')}`)
    }

    // Create session
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined
    const userAgent = request.headers.get('user-agent') || undefined
    const sessionToken = await createAuthSession(result.user.id, ipAddress, userAgent)

    if (!sessionToken) {
      return NextResponse.redirect(`${baseUrl}/login?error=session_failed`)
    }

    // Set session cookie
    await setSessionCookie(sessionToken)

    // Redirect to dashboard
    return NextResponse.redirect(`${baseUrl}/dashboard`)
  } catch (error) {
    console.error('Google OAuth callback error:', error)
    const baseUrl = getBaseUrl()
    return NextResponse.redirect(`${baseUrl}/login?error=oauth_failed`)
  }
}

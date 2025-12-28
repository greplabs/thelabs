import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getGitHubAuthUrl, generateOAuthState } from '@/lib/oauth'

export async function GET() {
  try {
    // Check if GitHub OAuth is configured
    if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'GitHub OAuth not configured' },
        { status: 503 }
      )
    }

    // Generate state for CSRF protection
    const state = generateOAuthState()

    // Store state in cookie for verification
    const cookieStore = await cookies()
    cookieStore.set('oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 10 // 10 minutes
    })

    // Redirect to GitHub
    const authUrl = getGitHubAuthUrl(state)
    return NextResponse.redirect(authUrl)
  } catch (error) {
    console.error('GitHub OAuth init error:', error)
    return NextResponse.redirect(new URL('/login?error=oauth_failed', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'))
  }
}

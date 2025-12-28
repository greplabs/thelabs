import { NextRequest, NextResponse } from 'next/server'
import { getUserByEmail, getPasswordHash, initializeDatabase } from '@/lib/db'
import { verifyPassword, createAuthSession, setSessionCookie, isValidEmail } from '@/lib/auth'

let initialized = false

export async function POST(request: NextRequest) {
  try {
    // Initialize database if needed
    if (!initialized) {
      await initializeDatabase()
      initialized = true
    }

    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      )
    }

    // Get user and password hash
    const user = await getUserByEmail(email)
    const storedHash = await getPasswordHash(email)

    if (!user || !storedHash) {
      // Use generic error to prevent user enumeration
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Verify password
    const isValid = await verifyPassword(password, storedHash)

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Create session
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined
    const userAgent = request.headers.get('user-agent') || undefined
    const sessionToken = await createAuthSession(user.id, ipAddress, userAgent)

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: 'Failed to create session. Please try again.' },
        { status: 500 }
      )
    }

    // Set session cookie
    await setSessionCookie(sessionToken)

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: user.plan
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

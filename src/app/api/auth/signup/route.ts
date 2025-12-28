import { NextRequest, NextResponse } from 'next/server'
import { createUser, initializeDatabase, getUserByEmail } from '@/lib/db'
import { hashPassword, createAuthSession, setSessionCookie, isValidEmail, isValidPassword } from '@/lib/auth'

let initialized = false

export async function POST(request: NextRequest) {
  try {
    // Initialize database if needed
    if (!initialized) {
      await initializeDatabase()
      initialized = true
    }

    const body = await request.json()
    const { email, password, name } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Validate password
    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      )
    }

    const passwordValidation = isValidPassword(password)
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { success: false, error: passwordValidation.error },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Hash password and create user
    const passwordHash = await hashPassword(password)
    const result = await createUser(email, passwordHash, name)

    if (!result.success || !result.data) {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to create account' },
        { status: 500 }
      )
    }

    // Create session
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined
    const userAgent = request.headers.get('user-agent') || undefined
    const sessionToken = await createAuthSession(result.data.id, ipAddress, userAgent)

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: 'Account created but failed to log in. Please try logging in.' },
        { status: 500 }
      )
    }

    // Set session cookie
    await setSessionCookie(sessionToken)

    return NextResponse.json({
      success: true,
      user: {
        id: result.data.id,
        email: result.data.email,
        name: result.data.name,
        plan: result.data.plan
      }
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

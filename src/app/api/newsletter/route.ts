import { NextRequest, NextResponse } from 'next/server'
import { addSubscriber, initializeDatabase } from '@/lib/db'

// Initialize database on first request
let initialized = false

export async function POST(request: NextRequest) {
  try {
    // Initialize database if not already done
    if (!initialized) {
      await initializeDatabase()
      initialized = true
    }

    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Add subscriber
    const result = await addSubscriber(email.toLowerCase().trim(), name?.trim())

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to the newsletter!'
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Newsletter API is running' })
}

import { cookies } from 'next/headers'
import { createSession, getSessionWithUser, deleteSession, User } from './db'

const SESSION_COOKIE_NAME = 'greplabs_session'
const SESSION_DURATION_DAYS = 30

// Generate a secure random token
export function generateSessionToken(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// Hash password using Web Crypto API (works in Edge runtime)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

  // Add salt prefix for future bcrypt migration
  const salt = generateSessionToken().slice(0, 16)
  const saltedHash = await crypto.subtle.digest(
    'SHA-256',
    encoder.encode(salt + hashHex)
  )
  const saltedHashHex = Array.from(new Uint8Array(saltedHash))
    .map(b => b.toString(16).padStart(2, '0')).join('')

  return `sha256:${salt}:${saltedHashHex}`
}

// Verify password
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

  const [algorithm, salt, expectedHash] = storedHash.split(':')

  if (algorithm !== 'sha256' || !salt || !expectedHash) {
    return false
  }

  const saltedHash = await crypto.subtle.digest(
    'SHA-256',
    encoder.encode(salt + hashHex)
  )
  const saltedHashHex = Array.from(new Uint8Array(saltedHash))
    .map(b => b.toString(16).padStart(2, '0')).join('')

  return saltedHashHex === expectedHash
}

// Create session and set cookie
export async function createAuthSession(
  userId: number,
  ipAddress?: string,
  userAgent?: string
): Promise<string | null> {
  const token = generateSessionToken()
  const expiresAt = new Date(Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000)

  const success = await createSession(userId, token, expiresAt, ipAddress, userAgent)

  if (!success) return null

  return token
}

// Set session cookie
export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION_DAYS * 24 * 60 * 60 // seconds
  })
}

// Get current session from cookie
export async function getSession(): Promise<{ user: User } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value

  if (!token) return null

  const sessionData = await getSessionWithUser(token)
  if (!sessionData) return null

  return { user: sessionData.user }
}

// Clear session (logout)
export async function clearSession(): Promise<void> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value

  if (token) {
    await deleteSession(token)
  }

  cookieStore.delete(SESSION_COOKIE_NAME)
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate password strength
export function isValidPassword(password: string): { valid: boolean; error?: string } {
  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters' }
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one uppercase letter' }
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one lowercase letter' }
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one number' }
  }
  return { valid: true }
}

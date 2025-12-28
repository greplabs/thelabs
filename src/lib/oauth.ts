// OAuth Configuration and Utilities

export const oauthConfig = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    userInfoUrl: 'https://www.googleapis.com/oauth2/v2/userinfo',
    scopes: ['openid', 'email', 'profile']
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    authUrl: 'https://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    userInfoUrl: 'https://api.github.com/user',
    emailUrl: 'https://api.github.com/user/emails',
    scopes: ['read:user', 'user:email']
  }
}

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export function getGoogleAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: oauthConfig.google.clientId,
    redirect_uri: `${getBaseUrl()}/api/auth/callback/google`,
    response_type: 'code',
    scope: oauthConfig.google.scopes.join(' '),
    state,
    access_type: 'offline',
    prompt: 'consent'
  })
  return `${oauthConfig.google.authUrl}?${params.toString()}`
}

export function getGitHubAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: oauthConfig.github.clientId,
    redirect_uri: `${getBaseUrl()}/api/auth/callback/github`,
    scope: oauthConfig.github.scopes.join(' '),
    state
  })
  return `${oauthConfig.github.authUrl}?${params.toString()}`
}

export async function exchangeGoogleCode(code: string): Promise<{
  access_token: string
  id_token: string
  refresh_token?: string
}> {
  const response = await fetch(oauthConfig.google.tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: oauthConfig.google.clientId,
      client_secret: oauthConfig.google.clientSecret,
      redirect_uri: `${getBaseUrl()}/api/auth/callback/google`,
      grant_type: 'authorization_code'
    })
  })

  if (!response.ok) {
    throw new Error('Failed to exchange Google code')
  }

  return response.json()
}

export async function getGoogleUser(accessToken: string): Promise<{
  id: string
  email: string
  name: string
  picture: string
  verified_email: boolean
}> {
  const response = await fetch(oauthConfig.google.userInfoUrl, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })

  if (!response.ok) {
    throw new Error('Failed to get Google user info')
  }

  return response.json()
}

export async function exchangeGitHubCode(code: string): Promise<{
  access_token: string
  token_type: string
  scope: string
}> {
  const response = await fetch(oauthConfig.github.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      code,
      client_id: oauthConfig.github.clientId,
      client_secret: oauthConfig.github.clientSecret,
      redirect_uri: `${getBaseUrl()}/api/auth/callback/github`
    })
  })

  if (!response.ok) {
    throw new Error('Failed to exchange GitHub code')
  }

  return response.json()
}

export async function getGitHubUser(accessToken: string): Promise<{
  id: number
  login: string
  name: string | null
  email: string | null
  avatar_url: string
}> {
  const response = await fetch(oauthConfig.github.userInfoUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github.v3+json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to get GitHub user info')
  }

  return response.json()
}

export async function getGitHubEmail(accessToken: string): Promise<string | null> {
  const response = await fetch(oauthConfig.github.emailUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github.v3+json'
    }
  })

  if (!response.ok) {
    return null
  }

  const emails = await response.json()
  const primary = emails.find((e: { primary: boolean; verified: boolean; email: string }) =>
    e.primary && e.verified
  )

  return primary?.email || emails[0]?.email || null
}

// Generate a secure random state for OAuth
export function generateOAuthState(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

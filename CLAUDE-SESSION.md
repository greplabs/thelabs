# Claude Session - GrepLabs Website

**Last Updated:** December 28, 2025
**Status:** API Key System Complete, Ready to Deploy

---

## Project Overview

GrepLabs is a privacy-first software company building AI-powered products. This is the main website repository with user authentication, API key management, and product pages.

**Tech Stack:**
- Next.js 15.5 (App Router)
- TypeScript
- Tailwind CSS + Framer Motion
- Neon Postgres (Serverless)
- Vercel Deployment

**Live URL:** https://greplabs.com

---

## Recent Session Work (Dec 28, 2025)

### Completed Tasks

1. **Database Setup**
   - Connected to Neon Postgres
   - DATABASE_URL stored in `.env.local`
   - Fixed lazy initialization in `db.ts` to avoid build-time errors

2. **User Authentication System**
   - Email/password signup and login
   - Password hashing with Web Crypto API
   - Session management with HTTP-only cookies
   - Google OAuth SSO
   - GitHub OAuth SSO
   - `/signup`, `/login`, `/dashboard` pages

3. **API Key Management System**
   - Full CRUD for API keys
   - Keys stored as hashes (never plain text)
   - Plan-based limits: free=2, pro=10, enterprise=50
   - Rate limiting: free=20/min, pro=1000/min, enterprise=10000/min
   - Scopes: read, write, delete, admin
   - Dashboard UI with create modal, keys table, delete functionality

4. **v1 API with Key Authentication**
   - `/api/v1/status` - Status endpoint requiring Bearer token auth
   - Rate limit headers (X-RateLimit-*)
   - Usage tracking

---

## Key Files

### Authentication
- `/src/lib/auth.ts` - Password hashing, session management, getSession()
- `/src/lib/oauth.ts` - Google/GitHub OAuth configuration
- `/src/app/api/auth/signup/route.ts` - Email signup
- `/src/app/api/auth/login/route.ts` - Email login
- `/src/app/api/auth/logout/route.ts` - Logout
- `/src/app/api/auth/google/route.ts` - Google OAuth init
- `/src/app/api/auth/github/route.ts` - GitHub OAuth init
- `/src/app/api/auth/callback/google/route.ts` - Google callback
- `/src/app/api/auth/callback/github/route.ts` - GitHub callback

### API Keys
- `/src/lib/api-keys.ts` - Key generation, hashing, rate limiting
- `/src/lib/db.ts` - All database functions including API key CRUD
- `/src/app/api/keys/route.ts` - List (GET) and Create (POST) keys
- `/src/app/api/keys/[id]/route.ts` - Delete and Revoke keys

### Dashboard
- `/src/app/dashboard/page.tsx` - Server component with auth check
- `/src/app/dashboard/DashboardClient.tsx` - Client component with API keys UI

### v1 API
- `/src/app/api/v1/status/route.ts` - Authenticated status endpoint

---

## Database Schema

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  password_hash VARCHAR(255),
  auth_provider VARCHAR(50) DEFAULT 'email',
  provider_id VARCHAR(255),
  avatar_url TEXT,
  email_verified BOOLEAN DEFAULT false,
  role VARCHAR(50) DEFAULT 'user',
  plan VARCHAR(50) DEFAULT 'free',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sessions table
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- API Keys table
CREATE TABLE api_keys (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  key_hash VARCHAR(255) NOT NULL,
  key_prefix VARCHAR(12) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  last_used_at TIMESTAMP,
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  scopes TEXT[] DEFAULT ARRAY['read'],
  usage_count INTEGER DEFAULT 0
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW()
);
```

---

## Environment Variables

Required in `.env.local` and Vercel:

```bash
DATABASE_URL=postgresql://...  # Neon Postgres connection string

# OAuth (need to set up in Google/GitHub consoles)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

NEXT_PUBLIC_SITE_URL=https://greplabs.com
```

---

## Pending / Future Work

1. **OAuth Credentials** - User needs to create OAuth apps and add credentials to Vercel:
   - Google: https://console.cloud.google.com/apis/credentials
   - GitHub: https://github.com/settings/developers

2. **More v1 API Endpoints** - Currently only `/api/v1/status` exists. Add:
   - User profile endpoint
   - Product-specific endpoints (Shields, Hippo, Chai)

3. **Billing Integration** - Stripe setup for paid plans:
   - Upgrade from free to pro/enterprise
   - Usage-based billing

4. **Email Verification** - Send verification emails on signup

5. **Password Reset** - Forgot password flow

6. **Profile Settings** - Let users update name, avatar, password

---

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Deploy to Vercel
vercel --prod

# Add env vars to Vercel
vercel env add DATABASE_URL production
```

---

## Related Repository

- **greplabs-internal** (`~/greplabs-internal`) - Internal documentation site with Vercel authentication protection

---

## Session Notes

- Build passes successfully
- All API key functionality is tested and working
- Dashboard shows API keys tab with full management UI
- Rate limiting is in-memory (for production, consider Redis)
- API keys use `gl_` prefix and are 67 characters total

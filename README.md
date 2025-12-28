<div align="center">

# GrepLabs

### Privacy-First Software. Built for Tomorrow.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://greplabs.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

[Website](https://greplabs.com) · [Blog](https://greplabs.com/blog) · [Docs](https://greplabs.com/docs) · [Launch](https://greplabs.com/launch)

</div>

---

## Overview

GrepLabs is building a suite of privacy-first, AI-powered software products. We believe your data should stay yours — processed locally, encrypted end-to-end, and never sold.

**Launching January 1, 2026**

## Products

| Product | Description | Status |
|---------|-------------|--------|
| **Shields AI** | AI-powered DNS security and privacy protection | Coming Soon |
| **Hippo** | Local-first semantic file search with AI | Coming Soon |
| **Chai.im** | End-to-end encrypted messaging | Coming Soon |
| **GrepCoin** | Developer arcade on Base L2 | [Live](https://grepcoin.io) |

## Tech Stack

```
Frontend        Next.js 15 (App Router) + React 19 + TypeScript
Styling         Tailwind CSS + Framer Motion
Database        Neon Postgres (Serverless)
Auth            Custom OAuth (Google, GitHub) + Sessions
Deployment      Vercel (Edge)
```

## Quick Start

```bash
# Clone
git clone https://github.com/greplabs/thelabs.git
cd thelabs

# Install
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your values

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```bash
# Database (Neon Postgres)
DATABASE_URL=postgresql://...

# OAuth - Google
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# OAuth - GitHub
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...

# Site URL (for OAuth callbacks)
NEXT_PUBLIC_SITE_URL=https://greplabs.com
```

### Setting Up OAuth

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create OAuth 2.0 Client ID
3. Add redirect URI: `https://greplabs.com/api/auth/callback/google`

#### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Set callback URL: `https://greplabs.com/api/auth/callback/github`

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── auth/          # Authentication endpoints
│   │   │   ├── signup/    # Email signup
│   │   │   ├── login/     # Email login
│   │   │   ├── logout/    # Logout
│   │   │   ├── google/    # Google OAuth init
│   │   │   ├── github/    # GitHub OAuth init
│   │   │   └── callback/  # OAuth callbacks
│   │   └── newsletter/    # Newsletter subscription
│   ├── signup/            # Signup page
│   ├── login/             # Login page
│   ├── dashboard/         # User dashboard
│   ├── products/          # Product pages
│   └── blog/              # Blog posts
├── components/            # React components
├── lib/                   # Utilities
│   ├── db.ts             # Database functions
│   ├── auth.ts           # Auth utilities
│   └── oauth.ts          # OAuth utilities
└── data/                  # Static data
```

## API Reference

### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/signup` | POST | Create account with email/password |
| `/api/auth/login` | POST | Login with email/password |
| `/api/auth/logout` | POST | Clear session |
| `/api/auth/me` | GET | Get current user |
| `/api/auth/google` | GET | Initiate Google OAuth |
| `/api/auth/github` | GET | Initiate GitHub OAuth |

### Newsletter

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/newsletter` | POST | Subscribe to newsletter |

## Database Schema

```sql
-- Users
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

-- Sessions
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW()
);
```

## Deployment

### Vercel (Recommended)

```bash
# Deploy
vercel --prod

# Set environment variables
vercel env add DATABASE_URL production
vercel env add GOOGLE_CLIENT_ID production
vercel env add GOOGLE_CLIENT_SECRET production
vercel env add GITHUB_CLIENT_ID production
vercel env add GITHUB_CLIENT_SECRET production
vercel env add NEXT_PUBLIC_SITE_URL production
```

### Manual Build

```bash
npm run build
npm start
```

## Open-Core Model

We build with an open-core philosophy:

| Open Source (MIT/Apache) | Commercial |
|-------------------------|------------|
| Core engines | Desktop/mobile apps |
| Libraries | Enterprise features |
| CLIs & SDKs | Premium support |

Learn more: [greplabs.com/open-source](https://greplabs.com/open-source)

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

## Security

Found a security issue? Please email security@greplabs.com instead of opening a public issue.

## License

This website is proprietary. Core product engines are open source under MIT/Apache licenses.

---

<div align="center">

**GrepLabs** · Privacy-First Software

[Website](https://greplabs.com) · [Twitter](https://twitter.com/greplabs) · [GitHub](https://github.com/greplabs)

</div>

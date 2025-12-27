# GrepLabs Website - Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Navigate to project directory
cd greplabs-website

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure settings
5. Deploy!

### Option 3: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import Git repository
3. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./greplabs-website`
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add environment variables (if needed)
5. Deploy

## Domain Configuration

### Setup Custom Domains

1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add domains:
   - `greplab.com`
   - `greplabs.com`
   - `www.greplab.com` (optional)
   - `www.greplabs.com` (optional)

4. Configure DNS records:
   - Add CNAME records pointing to Vercel
   - Or add A records if using apex domain

### DNS Configuration Example

```
Type    Name    Value
CNAME   www     cname.vercel-dns.com
A       @       76.76.21.21
```

## Environment Variables

Currently, no environment variables are required for basic deployment. If you add features that need API keys or other secrets, add them in Vercel dashboard:

Settings → Environment Variables

## Build Configuration

The project uses Next.js 15 with:
- App Router
- TypeScript
- Tailwind CSS
- Framer Motion

All build settings are automatically detected by Vercel.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests = Preview deployment with unique URL

## Performance Optimization

- Images are optimized automatically by Next.js
- Static pages are pre-rendered
- Dynamic routes use ISR (Incremental Static Regeneration) where applicable

## Monitoring

- Vercel Analytics (optional): Enable in project settings
- Error tracking: Consider adding Sentry or similar
- Performance: Vercel provides built-in analytics

## Backup & Recovery

- Code is stored in Git repository
- Deployments are versioned in Vercel
- Rollback: Go to Deployments → Click on previous deployment → Promote to Production

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Check Node.js version (should be 18+)

### Domain Not Working

1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check SSL certificate status in Vercel

### Styles Not Loading

1. Ensure Tailwind is configured correctly
2. Check `tailwind.config.ts` includes all content paths
3. Verify PostCSS configuration

## Security

- HTTPS is automatically enabled by Vercel
- Environment variables are encrypted
- DDoS protection included
- WAF (Web Application Firewall) available

## Next Steps

1. Set up custom domains
2. Configure analytics
3. Set up monitoring/error tracking
4. Configure preview deployments for PRs
5. Set up staging environment (optional)

---

**Questions?** Contact hello@greplabs.com


# GrepLabs Website - Project Organization

**Last Updated:** December 26, 2024

---

## 📁 Directory Structure

```
greplabs-website/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Homepage (all sections)
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   ├── products/                 # Product pages
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Dynamic product pages
│   │   ├── blog/                     # Blog section
│   │   │   └── page.tsx              # Blog listing
│   │   ├── business-plan/            # Business plan page
│   │   ├── monetization/             # Monetization strategy
│   │   ├── growth-strategy/          # Growth strategy
│   │   ├── open-source/              # Open source philosophy
│   │   ├── freemium/                 # Freemium model
│   │   ├── app-store/                # App store/marketplace
│   │   ├── open-revenue-strategy/    # Open revenue strategy
│   │   ├── privacy/                  # Privacy policy
│   │   └── terms/                    # Terms of service
│   └── components/                   # React components
│       ├── Hero.tsx                  # Hero section
│       ├── Logo.tsx                  # Hippo logo (SVG)
│       ├── Navbar.tsx                # Navigation
│       ├── Footer.tsx                # Footer
│       ├── Stats.tsx                 # Statistics
│       ├── Vision.tsx                # Vision section
│       ├── ProductShowcase.tsx       # Product grid
│       ├── ProductCard.tsx           # Product card
│       ├── About.tsx                 # About section
│       ├── Technology.tsx            # Tech stack
│       ├── CaseStudies.tsx           # Case studies
│       ├── Philosophy.tsx            # Core principles
│       ├── Roadmap.tsx               # Product roadmap
│       ├── Community.tsx             # Community section
│       ├── DeveloperResources.tsx    # Dev resources
│       ├── FAQ.tsx                   # FAQ section
│       ├── Blog.tsx                  # Blog preview
│       ├── AppStore.tsx              # App store section
│       ├── CTA.tsx                   # Call to action
│       ├── CodeBlock.tsx             # Code examples
│       ├── ASCIIArt.tsx              # ASCII art
│       └── TerminalCursor.tsx        # Blinking cursor
├── public/                           # Static assets
│   └── hippo-logo.svg                # Logo file
├── Documentation/                    # Documentation files
│   ├── BUSINESS-PLAN.md              # Business plan
│   ├── MONETIZATION-STRATEGY.md      # Monetization strategy
│   ├── GROWTH-STRATEGY.md            # Growth strategy
│   ├── OPEN-REVENUE-STRATEGY.md      # Open revenue strategy
│   ├── INCUBATION-STORIES.md         # Development stories
│   ├── PROJECT-DIARY.md              # Development diary
│   ├── PROJECT-PLAN.md               # Project roadmap
│   ├── PROJECT-ORGANIZATION.md       # This file
│   └── DEPLOYMENT.md                 # Deployment guide
└── Configuration Files
    ├── package.json                  # Dependencies
    ├── tsconfig.json                 # TypeScript config
    ├── tailwind.config.ts            # Tailwind config
    ├── next.config.js                # Next.js config
    └── .gitignore                    # Git ignore
```

---

## 📄 Key Documents

### Strategic Documents
1. **BUSINESS-PLAN.md** - Comprehensive business plan
2. **MONETIZATION-STRATEGY.md** - Revenue models and pricing
3. **GROWTH-STRATEGY.md** - Growth tactics and funding
4. **OPEN-REVENUE-STRATEGY.md** - Transparent economic model

### Development Documents
5. **INCUBATION-STORIES.md** - 6-month development stories
6. **PROJECT-DIARY.md** - Development memory and decisions
7. **PROJECT-PLAN.md** - Project roadmap and checklist
8. **PROJECT-ORGANIZATION.md** - File organization (this doc)

### Deployment
9. **DEPLOYMENT.md** - Deployment instructions

---

## 🎯 Page Organization

### Homepage Sections (in order)
1. Hero - Main landing section with ASCII art
2. Stats - Key statistics
3. Vision - Mission and goals
4. Products - Product showcase grid
5. About - Company story and team
6. Technology - Tech stack deep dive
7. Case Studies - Product development stories
8. Philosophy - Core principles
9. Roadmap - Product timeline
10. Community - Community section
11. Developer Resources - Dev tools and docs
12. FAQ - Frequently asked questions
13. Blog - Blog preview
14. App Store - Marketplace section
15. CTA - Final call to action

### Individual Pages
- `/products/[slug]` - Dynamic product pages (grepcoin, chai, shields, hippo)
- `/blog` - Blog listing
- `/business-plan` - Business plan overview
- `/monetization` - Monetization strategy
- `/growth-strategy` - Growth strategy
- `/open-source` - Open source philosophy
- `/freemium` - Freemium model explanation
- `/app-store` - App store/marketplace
- `/open-revenue-strategy` - Transparent revenue model
- `/privacy` - Privacy policy
- `/terms` - Terms of service

---

## 💰 Revenue Documentation

### Open Revenue Strategy
The **OPEN-REVENUE-STRATEGY.md** document provides complete transparency:

1. **Revenue by Product**
   - GrepCoin: $150K/month (32%)
   - Shields AI: $115K/month (25%)
   - Hippo: $120K/month (26%)
   - Chai.im: $80K/month (17%)

2. **Revenue Allocation**
   - 30% Product Development
   - 20% Infrastructure & Operations
   - 20% Marketing & Growth
   - 10% Open Source Support
   - 10% Customer Support
   - 5% Legal & Compliance
   - 5% Reserves & Profit

3. **Each Product Page** includes:
   - Revenue streams breakdown
   - Pricing tiers
   - Revenue targets
   - Link to full revenue strategy

---

## 🔧 Component Organization

### Layout Components
- `Navbar.tsx` - Navigation bar
- `Footer.tsx` - Footer with links
- `layout.tsx` - Root layout

### Section Components
- `Hero.tsx` - Hero section
- `Stats.tsx` - Statistics display
- `Vision.tsx` - Vision & purpose
- `About.tsx` - About company
- `ProductShowcase.tsx` - Product grid
- `CaseStudies.tsx` - Case studies
- `Technology.tsx` - Tech stack
- `Philosophy.tsx` - Core principles
- `Roadmap.tsx` - Product roadmap
- `Community.tsx` - Community section
- `DeveloperResources.tsx` - Dev resources
- `FAQ.tsx` - FAQ section
- `Blog.tsx` - Blog preview
- `AppStore.tsx` - App store
- `CTA.tsx` - Call to action

### UI Components
- `Logo.tsx` - Hippo logo (SVG)
- `ProductCard.tsx` - Product card
- `CodeBlock.tsx` - Code examples
- `ASCIIArt.tsx` - ASCII art
- `TerminalCursor.tsx` - Blinking cursor

---

## 📊 Content Organization

### Product Information
Each product has:
- Name, tagline, description
- Long description (incubation story)
- Features list (10+ features)
- Metrics (performance, capacity)
- Tech stack
- Revenue model (streams, targets)
- Development story (timeline, achievements)
- Code examples

### Revenue Information
- Product-level revenue breakdown
- Overall company revenue allocation
- Transparent expense breakdown
- Open source commitment
- Quarterly reporting commitments

---

## 🎨 Design System

### Colors
- Primary: Grep brand colors (purple, pink, orange)
- Terminal: Green accents
- Background: White/black with gradients

### Typography
- Sans-serif: Inter (body text)
- Monospace: JetBrains Mono (code, terminal)

### Components
- Terminal windows for code
- ASCII art for branding
- Gradient text for emphasis
- Smooth animations (Framer Motion)

---

## 📝 Content Guidelines

### Writing Style
- Clear and concise
- Technical but accessible
- Honest and transparent
- Professional yet friendly

### Updates
- Revenue strategy: Quarterly
- Product pages: As products evolve
- Roadmap: Monthly
- Documentation: As needed

---

## 🔗 Navigation Structure

### Main Navigation
- Products
- App Store
- Plans (Business Plan)
- Revenue (Open Revenue Strategy)
- Contact

### Footer Links
- Products (all 4)
- Company (Plans, Monetization, Growth, Contact)
- Resources (Open Source, Freemium, App Store, Revenue)
- Legal (Privacy, Terms)

---

## 🚀 Deployment Organization

### Build Process
1. TypeScript compilation
2. Next.js build
3. Static generation
4. Optimization (images, code splitting)

### Deployment
- Platform: Vercel
- Domains: greplabs.com, greplab.com
- CI/CD: GitHub Actions

---

## 📈 Metrics & Tracking

### Key Metrics Documented
- Revenue by product
- Revenue allocation
- User targets
- Conversion rates
- Development timelines

### Public Reporting
- Quarterly revenue reports (starting Q1 2026)
- Open source contribution tracking
- Community impact metrics

---

**Last Updated:** December 26, 2024  
**Maintained By:** GrepLabs Team  
**Purpose:** Project organization and documentation reference


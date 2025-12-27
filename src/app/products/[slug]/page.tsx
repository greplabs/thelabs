import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, CheckCircle, Code, DollarSign, Calendar, Zap, Users, Shield, Database, Sparkles, Play, Lock, Search, ArrowRight, Gamepad2, MessageSquare, Shield as ShieldIcon, Folder, TrendingUp, BarChart3, Globe, FileText, Cpu, Server, Network, AlertTriangle, HelpCircle, BookOpen, GitBranch } from 'lucide-react'
import CodeBlock, { codeExamples } from '@/components/CodeBlock'

const products = {
  grepcoin: {
    name: 'GrepCoin',
    tagline: 'Developer Arcade on Base L2',
    description: 'Quality games first, token rewards second. 9 polished arcade games with optional crypto integration.',
    longDescription: `GrepCoin is a gaming platform where gameplay comes first. Built on Base L2, it features 9 polished arcade games with optional token rewards. This is not play-to-earn hype—these are real games with sustainable economics.

Unlike failed P2E projects, GrepCoin focuses on genuine entertainment value. Token rewards are optional bonuses, not the core experience. During our 6-month incubation (June-December 2024), we built quality games first, then added blockchain integration.`,
    icon: Gamepad2,
    color: 'purple',
    url: 'https://grepcoin.io',
    status: 'Live',
    launchDate: 'Q1 2026 (Mainnet)',
    incubation: 'June - December 2024',
    howItWorks: {
      overview: 'GrepCoin combines traditional arcade gaming with blockchain rewards. Play games, earn GREP tokens, stake for yield, and participate in governance.',
      steps: [
        {
          title: 'Connect Wallet',
          description: 'Connect your Web3 wallet (MetaMask, Coinbase Wallet) using Sign-In with Ethereum (SIWE). Your wallet address becomes your player identity.',
          icon: Lock,
        },
        {
          title: 'Play Games',
          description: 'Choose from 9 arcade games: Snake, Tetris, Pong, Asteroids, Breakout, Space Invaders, Pac-Man, Minesweeper, or Tic-Tac-Toe. Play anytime, anywhere in your browser.',
          icon: Gamepad2,
        },
        {
          title: 'Earn Rewards',
          description: 'Earn GREP tokens based on your performance. High scores, daily challenges, and tournament wins all reward tokens. Tokens are distributed immediately via smart contracts.',
          icon: TrendingUp,
        },
        {
          title: 'Stake & Grow',
          description: 'Stake your GREP tokens in one of 4 tiers (Bronze, Silver, Gold, Platinum) to earn real yield from platform revenue. Higher tiers = higher APY.',
          icon: BarChart3,
        },
        {
          title: 'Trade NFTs',
          description: 'Buy, sell, and trade NFT items in our marketplace. AI-generated collectibles, achievement badges, and rare items. 2.5% platform fee funds development.',
          icon: Database,
        },
        {
          title: 'Govern & Decide',
          description: 'Participate in DAO governance. Vote on proposals, suggest features, and help shape the platform. GREP tokens give you voting power.',
          icon: Users,
        },
      ],
    },
    useCases: [
      {
        title: 'Casual Gaming',
        description: 'Play classic arcade games in your browser. No downloads, no complex setup. Just fun games with crypto rewards.',
        users: 'Gamers, casual players, retro game enthusiasts',
      },
      {
        title: 'Competitive Gaming',
        description: 'Join tournaments, compete with guilds, climb leaderboards. Earn more tokens through skill and strategy.',
        users: 'Competitive gamers, esports players, tournament organizers',
      },
      {
        title: 'Crypto Earning',
        description: 'Earn GREP tokens while having fun. Stake tokens for passive income, trade NFTs, or use tokens in governance.',
        users: 'Crypto enthusiasts, DeFi users, token holders',
      },
      {
        title: 'Community Building',
        description: 'Join guilds, make friends, participate in community events. Build your gaming reputation and earn achievements.',
        users: 'Community builders, social gamers, NFT collectors',
      },
    ],
    features: [
      {
        title: '9 Fully Functional Arcade Games',
        description: 'Classic games rebuilt for modern browsers with smooth gameplay, leaderboards, and crypto rewards. Each game has unique mechanics and token rewards.',
        details: ['Snake', 'Tetris', 'Pong', 'Asteroids', 'Breakout', 'Space Invaders', 'Pac-Man', 'Minesweeper', 'Tic-Tac-Toe'],
      },
      {
        title: '500M GREP Token Supply',
        description: 'Fixed supply token (no inflation) on Base L2. Low gas fees, fast transactions. Token distribution: staking rewards, gameplay rewards, NFT purchases.',
        details: ['Fixed supply (no minting)', 'ERC-20 standard', 'Base L2 deployment', 'Low gas fees (<$0.01)'],
      },
      {
        title: '4-Tier Staking System',
        description: 'Stake GREP tokens to earn real yield from platform revenue. Higher tiers offer better APY and exclusive benefits.',
        details: ['Bronze: 5% APY (100 GREP minimum)', 'Silver: 8% APY (1,000 GREP minimum)', 'Gold: 12% APY (10,000 GREP minimum)', 'Platinum: 18% APY (100,000 GREP minimum)'],
      },
      {
        title: 'NFT Marketplace',
        description: 'Buy, sell, and trade NFT items. AI-generated collectibles, achievement badges, rare items, and game assets. 2.5% platform fee.',
        details: ['AI-generated collectibles', 'Achievement badges (Soulbound NFTs)', 'Rare items', 'Game assets', '2.5% transaction fee'],
      },
      {
        title: 'Tournament System',
        description: 'Weekly tournaments with prize pools. Join guilds, compete in teams, earn substantial token rewards. 10% platform fee funds operations.',
        details: ['Weekly tournaments', 'Guild competitions', 'Prize pools', 'Leaderboards', '10% entry fee'],
      },
      {
        title: 'Governance (DAO)',
        description: 'Participate in platform governance. Vote on proposals, suggest features, and shape the future of GrepCoin.',
        details: ['Token-based voting', 'Proposal system', 'Treasury management', 'Feature requests'],
      },
      {
        title: 'Achievement System',
        description: 'Earn Soulbound NFTs for milestones. Achievements are permanent, non-transferable badges of accomplishment.',
        details: ['Soulbound NFTs', 'Milestone tracking', 'Exclusive rewards', 'Permanent records'],
      },
      {
        title: 'Daily Challenges',
        description: 'Complete daily challenges for bonus rewards. New challenges every day keep the gameplay fresh and rewarding.',
        details: ['Daily rotating challenges', 'Bonus token rewards', 'Streak bonuses', 'Exclusive achievements'],
      },
    ],
    pricing: {
      free: {
        title: 'Free to Play',
        features: [
          'Play all 9 games unlimited',
          'Earn GREP tokens',
          'Join tournaments',
          'Create/join guilds',
          'Access NFT marketplace',
          'Participate in governance',
        ],
        price: '$0',
      },
      premium: {
        title: 'Premium Battle Pass',
        features: [
          'All free features',
          '2x token rewards',
          'Exclusive NFT airdrops',
          'Early access to new games',
          'Premium tournament access',
          'Priority customer support',
        ],
        price: '$9.99/month',
      },
    },
    metrics: {
      games: '9',
      tokens: '500M GREP',
      apiEndpoints: '91',
      components: '112',
      smartContracts: '4',
      community: 'Discord community',
    },
    tech: ['Next.js 15', 'Solidity', 'Base L2', 'PostgreSQL', 'Prisma', 'Web3.js'],
    revenue: {
      streams: [
        { name: 'NFT Marketplace Fees', percentage: 50, amount: '$15-25K/month', description: '2.5% transaction fee on all NFT sales' },
        { name: 'Tournament Entry Fees', percentage: 30, amount: '$9-15K/month', description: '10% platform fee on tournament entries' },
        { name: 'Premium Battle Pass', percentage: 20, amount: '$6-10K/month', description: '$9.99/month subscriptions' },
      ],
      total: '$30-50K/month',
      annual: '$360-600K/year (market-dependent)',
    },
    development: {
      timeline: '6 months (June-December 2024)',
      achievements: [
        'Built 9 complete games through human-AI collaboration',
        'Deployed 4 smart contracts (Token, Staking, Achievements, Governance)',
        'Created 91 RESTful API endpoints',
        'Built 112 reusable React components',
        'Established Discord community',
        'Designed balanced tokenomics (500M fixed supply)',
      ],
    },
    code: codeExamples.grepcoin,
  },
  chai: {
    name: 'Chai.im',
    tagline: 'Enterprise Encrypted Messaging',
    description: 'HIPAA-ready secure messaging for healthcare, legal, and regulated industries.',
    longDescription: `Chai.im provides Signal Protocol encryption with enterprise compliance features. Built for healthcare, legal, and finance sectors that require audit trails, HIPAA compliance, and hardware key authentication.

Consumer messaging is dominated by WhatsApp and Telegram—we're not competing there. Instead, we target regulated industries that pay premium for compliance. Our enterprise focus means sustainable revenue from organizations that need our security guarantees.`,
    icon: MessageSquare,
    color: 'blue',
    url: 'https://chai.im',
    status: 'Enterprise Beta',
    launchDate: 'Q2 2026 (Enterprise Beta)',
    incubation: 'July - December 2024',
    howItWorks: {
      overview: 'Chai.im uses Signal Protocol for end-to-end encryption, processes AI locally on your device, and supports hardware key authentication for maximum security.',
      steps: [
        {
          title: 'Create Account',
          description: 'Sign up with email or phone. Set up hardware key authentication (YubiKey, Touch ID, Face ID) for enhanced security. No password needed.',
          icon: Users,
        },
        {
          title: 'Add Contacts',
          description: 'Add contacts via username, email, or QR code. Each contact gets a unique encryption key automatically. Keys are exchanged securely using X3DH protocol.',
          icon: Users,
        },
        {
          title: 'Send Messages',
          description: 'Type your message and send. Messages are encrypted on your device before transmission using Double Ratchet protocol. Only the recipient can decrypt.',
          icon: MessageSquare,
        },
        {
          title: 'AI Processing (Local)',
          description: 'AI features (summaries, smart replies, suggestions) run entirely on your device using WebAssembly. No message content ever leaves your device unencrypted.',
          icon: Zap,
        },
        {
          title: 'Group Messaging',
          description: 'Create groups of any size (Free: up to 10, Pro: unlimited). All messages are end-to-end encrypted. Perfect forward secrecy ensures old messages stay secure even if keys are compromised.',
          icon: Users,
        },
        {
          title: 'Secure Sync (Optional)',
          description: 'Enable encrypted cloud backup to sync messages across devices. All data is encrypted before leaving your device. You control the encryption keys.',
          icon: Database,
        },
      ],
    },
    useCases: [
      {
        title: 'Personal Messaging',
        description: 'Private conversations with friends and family. Signal-level encryption with modern features like AI summaries and smart replies.',
        users: 'Privacy-conscious individuals, families, friends',
      },
      {
        title: 'Business Communication',
        description: 'Secure team communication with enterprise features. SSO integration, admin controls, compliance features (HIPAA, GDPR).',
        users: 'Businesses, healthcare providers, legal firms',
      },
      {
        title: 'Developer Collaboration',
        description: 'Terminal client (TUI) for developers. Chat from your terminal, integrate with tools, automate workflows.',
        users: 'Developers, DevOps teams, technical teams',
      },
      {
        title: 'High-Security Use Cases',
        description: 'Hardware key authentication (YubiKey), perfect forward secrecy, local AI processing. Ideal for sensitive communications.',
        users: 'Journalists, activists, security professionals',
      },
    ],
    features: [
      {
        title: 'Signal Protocol Encryption',
        description: 'Industry-standard end-to-end encryption used by Signal, WhatsApp, and others. X3DH key exchange + Double Ratchet for perfect forward secrecy.',
        details: ['X3DH key exchange', 'Double Ratchet protocol', 'Perfect forward secrecy', 'AES-256-GCM encryption'],
      },
      {
        title: 'Hardware Key Authentication',
        description: 'Use hardware security keys (YubiKey), Touch ID, or Face ID for authentication. More secure than passwords, resistant to phishing.',
        details: ['FIDO2/WebAuthn standard', 'YubiKey support', 'Touch ID / Face ID', 'No passwords needed'],
      },
      {
        title: 'Local AI Processing',
        description: 'AI features run entirely on your device using WebAssembly. Summaries, smart replies, and suggestions—all processed locally, nothing sent to cloud.',
        details: ['WebAssembly-based', '100% on-device', 'No cloud AI', 'Privacy-preserving'],
      },
      {
        title: 'Terminal Client (TUI)',
        description: 'Power users can use Chai.im from the terminal. Full-featured CLI with keyboard shortcuts, automation support, and developer-friendly design.',
        details: ['Full terminal UI', 'Keyboard shortcuts', 'Scriptable', 'Developer-focused'],
      },
      {
        title: 'Group Messaging',
        description: 'Create groups of any size (Free: up to 10 members, Pro: unlimited). All messages encrypted end-to-end. Admin controls and moderation tools.',
        details: ['Unlimited groups (Pro)', 'End-to-end encrypted', 'Admin controls', 'Moderation tools'],
      },
      {
        title: 'File & Media Sharing',
        description: 'Share files, images, videos securely. All files encrypted before upload. Large file support with Pro subscription (up to 1GB per file).',
        details: ['Encrypted file sharing', 'Up to 1GB per file (Pro)', 'Media previews', 'Secure storage'],
      },
      {
        title: 'Encrypted Cloud Backup',
        description: 'Optional encrypted backup to sync messages across devices. You control encryption keys. End-to-end encrypted storage.',
        details: ['Optional cloud sync', 'E2EE encrypted', 'User-controlled keys', 'Cross-device sync'],
      },
      {
        title: 'Message Scheduling',
        description: 'Schedule messages to send later. Useful for reminders, timed announcements, or sending messages across time zones.',
        details: ['Schedule messages', 'Recurring messages', 'Time zone support', 'Bulk scheduling'],
      },
    ],
    pricing: {
      free: {
        title: 'Free Tier',
        features: [
          'Unlimited 1-on-1 messaging',
          'Basic groups (up to 10 members)',
          'Standard encryption',
          'Local AI processing',
          'Terminal client',
          'Community support',
        ],
        price: '$0',
      },
      pro: {
        title: 'Pro Subscription',
        features: [
          'All free features',
          'Unlimited groups (any size)',
          'Advanced AI features',
          'Cloud backup (encrypted)',
          'Priority support',
          'Custom themes',
          'Message scheduling',
          'File sharing (up to 1GB)',
        ],
        price: '$9.99/month',
      },
      enterprise: {
        title: 'Enterprise',
        features: [
          'All Pro features',
          'SSO/SAML integration',
          'Admin dashboard',
          'Compliance features (HIPAA, GDPR)',
          'SLA guarantees (99.9%)',
          'Custom deployment',
          'Dedicated support',
          'Audit logs',
        ],
        price: '$49/user/month',
      },
    },
    metrics: {
      encryption: 'AES-256-GCM',
      protocol: 'Signal Protocol',
      auth: 'FIDO2/WebAuthn',
      latency: '<100ms',
      aiProcessing: '100% Local',
    },
    tech: ['Rust', 'Axum', 'Next.js 14', 'PostgreSQL', 'WebAssembly', 'Signal Protocol', 'FIDO2'],
    revenue: {
      streams: [
        { name: 'Enterprise Subscriptions', percentage: 70, amount: '$14-28K/month', description: '$29/seat + compliance logging fees' },
        { name: 'Pro Subscriptions', percentage: 30, amount: '$6-12K/month', description: '$9.99/month for individual professionals' },
      ],
      total: '$20-40K/month',
      annual: '$240-480K/year',
    },
    development: {
      timeline: 'Research & Design (July-December 2024)',
      achievements: [
        'Designed Signal Protocol architecture (X3DH + Double Ratchet)',
        'Created local AI processing pipeline (WebAssembly-based)',
        'Planned FIDO2/WebAuthn authentication flow',
        'Built terminal client (TUI) prototype',
        'Designed privacy-preserving analytics (no message content)',
        'Created Progressive Web App architecture',
      ],
    },
    code: codeExamples.chai,
  },
  shields: {
    name: 'Shields AI',
    tagline: 'AI-Powered DNS Protection',
    description: 'Intelligent DNS security with ML threat detection. Usage-based pricing that scales with your needs.',
    longDescription: `Shields AI provides next-generation DNS security with machine learning-powered threat detection. It blocks malware, phishing, and trackers in real-time with sub-millisecond latency using eBPF kernel-level filtering.

This is our flagship product with the clearest path to market. The SMB segment is underserved—Pi-hole requires technical setup, while Cisco Umbrella is enterprise-priced. Shields AI fills the gap with genuine AI differentiation and usage-based pricing.`,
    icon: ShieldIcon,
    color: 'green',
    url: '#',
    status: 'Flagship',
    launchDate: 'Q1 2026 (Alpha)',
    incubation: 'August - December 2024',
    howItWorks: {
      overview: 'Shields AI filters DNS queries at the kernel level using eBPF, uses ML models for threat detection, and maintains <1ms latency while blocking threats in real-time.',
      steps: [
        {
          title: 'Install Shield',
          description: 'Install Shields AI on your device or network. Works on Windows, macOS, Linux, routers, and Kubernetes clusters. One-click setup.',
          icon: Shield,
        },
        {
          title: 'Configure DNS',
          description: 'Point your DNS to Shields AI (or use as default resolver). Works alongside existing DNS setups. No breaking changes to your network.',
          icon: Globe,
        },
        {
          title: 'Real-Time Filtering',
          description: 'Every DNS query is processed in real-time. eBPF kernel-level filtering ensures <1ms latency. Queries checked against blocklists and ML models instantly.',
          icon: Zap,
        },
        {
          title: 'Threat Detection',
          description: 'ML models analyze queries for malware, phishing, DGA (Domain Generation Algorithms), and suspicious patterns. Blocks threats before they reach your devices.',
          icon: Shield,
        },
        {
          title: 'Custom Rules',
          description: 'Create custom blocklists, whitelist trusted domains, set time-based rules, and configure family profiles. Full control over your network security.',
          icon: Database,
        },
        {
          title: 'Monitor & Analyze',
          description: 'Real-time dashboard shows blocked threats, query statistics, privacy scores, and network health. Export logs for compliance and analysis.',
          icon: BarChart3,
        },
      ],
    },
    useCases: [
      {
        title: 'Home Network Protection',
        description: 'Protect all devices on your home network. Block malware, phishing, and trackers. Parental controls for safe browsing.',
        users: 'Families, parents, home users',
      },
      {
        title: 'Business Network Security',
        description: 'Enterprise-grade DNS security for businesses. Protect entire networks from threats, compliance reporting, centralized management.',
        users: 'Businesses, IT departments, MSPs',
      },
      {
        title: 'Privacy Enhancement',
        description: 'Block trackers, ads, and data harvesting. Privacy scoring shows which domains track you. Minimize your digital footprint.',
        users: 'Privacy-conscious individuals, activists',
      },
      {
        title: 'Development & Testing',
        description: 'Block malicious domains in development environments. Prevent accidental connections to dangerous sites during testing.',
        users: 'Developers, DevOps teams, security researchers',
      },
    ],
    features: [
      {
        title: 'Sub-Millisecond Latency',
        description: 'eBPF kernel-level filtering processes DNS queries in <1ms. No noticeable impact on browsing speed. Handles 100K+ queries per second.',
        details: ['<1ms query latency', '100K+ QPS capacity', 'eBPF kernel filtering', 'Zero user impact'],
      },
      {
        title: 'ML-Powered Threat Detection',
        description: 'Machine learning models detect malware, phishing, DGA domains, and behavioral anomalies. Continuously learning and improving.',
        details: ['Malware detection', 'Phishing protection', 'DGA detection', 'Anomaly detection'],
      },
      {
        title: 'Customizable Blocklists',
        description: 'Built-in blocklists plus custom lists. Import from community sources, create your own, whitelist trusted domains.',
        details: ['8+ built-in blocklists', 'Custom blocklists', 'Whitelist support', 'Community lists'],
      },
      {
        title: 'Privacy Scoring',
        description: 'Privacy score algorithm analyzes domains for tracking behavior. See which sites collect data and how aggressively.',
        details: ['50+ privacy signals', 'Tracker categorization', 'Privacy scores', 'Data flow mapping'],
      },
      {
        title: 'Family Profiles',
        description: 'Create profiles for different family members. Age-appropriate filtering, time-based rules, and usage reports.',
        details: ['Multiple profiles', 'Age-based filtering', 'Time rules', 'Usage reports'],
      },
      {
        title: 'Real-Time Dashboard',
        description: 'Monitor blocked threats, query statistics, network health, and privacy scores in real-time. Beautiful, intuitive interface.',
        details: ['Real-time statistics', 'Threat visualization', 'Network health', 'Export capabilities'],
      },
      {
        title: 'DNS-over-HTTPS (DoH)',
        description: 'Encrypt DNS queries using DoH. Prevent ISP snooping and DNS hijacking. Enhanced privacy and security.',
        details: ['DoH support', 'Encrypted queries', 'ISP privacy', 'DNS hijacking prevention'],
      },
      {
        title: 'Kubernetes Integration',
        description: 'Deploy as Kubernetes service for container environments. Protect microservices, APIs, and containerized applications.',
        details: ['K8s deployment', 'Service mesh integration', 'Container protection', 'API security'],
      },
    ],
    pricing: {
      free: {
        title: 'Free Tier',
        features: [
          'Basic DNS filtering',
          'Up to 5 devices',
          'Standard blocklists',
          'Basic dashboard',
          '100K queries/month',
          'Community support',
        ],
        price: '$0',
      },
      home: {
        title: 'Home Subscription',
        features: [
          'All free features',
          'Unlimited devices',
          'Advanced AI threat detection',
          'Custom blocklists',
          'Family profiles',
          'Parental controls',
          'Advanced analytics',
          'Priority support',
        ],
        price: '$4.99/month',
      },
      family: {
        title: 'Family Subscription',
        features: [
          'All Home features',
          'Multiple family profiles',
          'Advanced parental controls',
          'Usage reports',
          'Scheduled filtering',
          'Whitelist management',
          'API access',
        ],
        price: '$9.99/month',
      },
      enterprise: {
        title: 'Enterprise',
        features: [
          'All Family features',
          'Unlimited devices/users',
          'Advanced threat intelligence',
          'Custom deployment',
          'API access',
          'Dedicated support',
          'SLA guarantees',
          'Compliance reporting',
        ],
        price: '$499/month',
      },
    },
    metrics: {
      latency: '<1ms',
      throughput: '100K+ QPS',
      detection: '99.9% accuracy',
      blocklists: '8+ sources',
    },
    tech: ['Rust', 'eBPF', 'Kubernetes', 'Vector DBs', 'TensorFlow', 'ML Models'],
    revenue: {
      streams: [
        { name: 'Usage-Based (Home)', percentage: 30, amount: '$18-30K/month', description: '$0.01/1K queries over free tier (capped $4.99/mo)' },
        { name: 'Usage-Based (Family)', percentage: 35, amount: '$21-35K/month', description: '$0.008/1K queries (capped $9.99/mo)' },
        { name: 'Enterprise', percentage: 35, amount: '$21-35K/month', description: '$0.005/1K queries, volume discounts' },
      ],
      total: '$60-100K/month',
      annual: '$720K-1.2M/year',
    },
    development: {
      timeline: 'Research & Design (August-December 2024)',
      achievements: [
        'Benchmarked existing DNS solutions (50+ performance tests)',
        'Designed eBPF kernel-level filtering architecture',
        'Planned lightweight ML models (<1ms inference)',
        'Created high-performance blocklist system',
        'Designed zero-trust DNS architecture',
        'Researched sub-millisecond optimization strategies',
      ],
    },
    code: codeExamples.shields,
  },
  hippo: {
    name: 'Hippo',
    tagline: 'The Memory That Never Forgets',
    description: 'Local-first file organizer with AI-powered semantic search. Index 100K+ files, find anything instantly with local AI.',
    longDescription: `Hippo is a local-first file organizer that indexes your files and enables natural language search. All processing happens on your device using vector embeddings and semantic search. The platform can index 100K+ files and search them instantly.

During our design phase (September-December 2024), we designed the local-first architecture, planned vector embedding strategy with quantized models, created incremental indexing system, and built prototype tests showing 50K files indexed in 8 minutes with <100ms search latency.`,
    icon: Folder,
    color: 'orange',
    url: '#',
    status: 'Development',
    launchDate: 'Q3 2026 (MVP)',
    incubation: 'September - December 2024',
    howItWorks: {
      overview: 'Hippo indexes your files locally, creates vector embeddings for semantic search, processes everything on your device, and optionally syncs encrypted across devices.',
      steps: [
        {
          title: 'Install Hippo',
          description: 'Download and install Hippo on your device (Windows, macOS, Linux). Native app built with Tauri for performance and privacy.',
          icon: Database,
        },
        {
          title: 'Choose Folders',
          description: 'Select folders to index. Hippo scans files, extracts metadata, and creates searchable index. All processing happens on your device.',
          icon: Folder,
        },
        {
          title: 'Background Indexing',
          description: 'Hippo indexes files in the background. Incremental updates only process new/changed files. Index 100K files in ~10 minutes.',
          icon: Zap,
        },
        {
          title: 'Semantic Search',
          description: 'Search using natural language: "privacy policy from 2024" or "photos from vacation". Vector embeddings understand meaning, not just keywords.',
          icon: Search,
        },
        {
          title: 'AI-Powered Features',
          description: 'AI analyzes files, suggests tags, generates summaries, and answers questions about your files. All AI processing is local using Ollama.',
          icon: Zap,
        },
        {
          title: 'Sync Across Devices',
          description: 'Optionally sync your index across devices using encrypted cloud backup. All data encrypted end-to-end. You control the keys.',
          icon: Database,
        },
      ],
    },
    useCases: [
      {
        title: 'Personal File Organization',
        description: 'Organize personal files, photos, documents. Find anything instantly with natural language search. Never lose a file again.',
        users: 'Individuals, students, professionals',
      },
      {
        title: 'Development Projects',
        description: 'Index code repositories, documentation, and project files. Semantic search finds code by meaning, not just text matching.',
        users: 'Developers, software teams, technical writers',
      },
      {
        title: 'Research & Documentation',
        description: 'Organize research papers, notes, and documentation. AI-powered summaries and tagging help you find relevant information quickly.',
        users: 'Researchers, academics, knowledge workers',
      },
      {
        title: 'Team Collaboration',
        description: 'Shared workspaces for teams. Collaborative tagging, shared indexes, and team-wide search. Perfect for organizations.',
        users: 'Teams, organizations, enterprises',
      },
    ],
    features: [
      {
        title: '100K+ File Capacity',
        description: 'Index up to 100K files with minimal storage overhead. Incremental indexing only processes new/changed files. Efficient storage.',
        details: ['100K+ file capacity', 'Incremental indexing', 'Minimal storage', 'Fast updates'],
      },
      {
        title: 'Semantic Vector Search',
        description: 'Search by meaning, not just keywords. Vector embeddings understand context and relationships. Natural language queries.',
        details: ['Vector embeddings', 'Semantic understanding', 'Natural language', '<100ms search'],
      },
      {
        title: 'Local AI Processing',
        description: 'AI features run locally using Ollama. File analysis, tagging, summaries, and Q&A—all processed on your device for privacy.',
        details: ['Ollama integration', '100% local', 'No cloud AI', 'Privacy-preserving'],
      },
      {
        title: '70+ File Types',
        description: 'Support for images, videos, audio, code, documents, archives, and more. Automatic metadata extraction and content indexing.',
        details: ['Images (JPEG, PNG, GIF)', 'Videos (MP4, MOV, AVI)', 'Audio (MP3, WAV, FLAC)', 'Code (70+ languages)', 'Documents (PDF, DOC, MD)'],
      },
      {
        title: 'Auto-Tagging',
        description: 'AI automatically suggests tags based on file content, location, and metadata. Organize files without manual work.',
        details: ['AI-generated tags', 'Smart categorization', 'Hierarchical tags', 'Custom tags'],
      },
      {
        title: 'Version Control',
        description: 'Track file changes over time. See history, restore previous versions, and understand file evolution.',
        details: ['Change tracking', 'Version history', 'Restore versions', 'Timeline view'],
      },
      {
        title: 'Cross-Device Sync',
        description: 'Sync your index across devices using encrypted cloud backup. Optional feature—all data encrypted end-to-end.',
        details: ['Encrypted sync', 'E2EE encryption', 'Cross-platform', 'Optional feature'],
      },
      {
        title: 'RAG-Powered Q&A',
        description: 'Ask questions about your files. "What did I write about privacy last month?" AI answers using your indexed files.',
        details: ['Natural language Q&A', 'Context-aware', 'File-based answers', 'Conversational'],
      },
    ],
    pricing: {
      free: {
        title: 'Free Tier',
        features: [
          'Basic file indexing (up to 10K files)',
          'Simple search',
          'Basic tagging',
          'Local AI (limited queries)',
          'Community support',
        ],
        price: '$0',
      },
      pro: {
        title: 'Pro Subscription',
        features: [
          'All free features',
          'Unlimited files',
          'Advanced AI features',
          'Semantic search',
          'Auto-tagging',
          'Cloud sync (encrypted)',
          'Advanced analytics',
          'Priority support',
        ],
        price: '$19.99/month',
      },
      team: {
        title: 'Team Subscription',
        features: [
          'All Pro features',
          'Shared workspaces',
          'Team collaboration',
          'Admin controls',
          'Usage analytics',
          'Priority support',
          'Custom integrations',
        ],
        price: '$99/month (5 users)',
      },
      enterprise: {
        title: 'Enterprise',
        features: [
          'All Team features',
          'On-premise deployment',
          'SSO integration',
          'Custom AI models',
          'Dedicated support',
          'SLA guarantees',
          'Compliance features',
        ],
        price: 'Custom pricing',
      },
    },
    metrics: {
      capacity: '100K+ files',
      searchSpeed: '<100ms',
      indexTime: '50K files in 8 minutes',
      fileTypes: '70+',
    },
    tech: ['Rust', 'Tauri 2.0', 'SQLite', 'Qdrant', 'Ollama', 'WebAssembly'],
    revenue: {
      streams: [
        { name: 'Usage-Based (Pro)', percentage: 50, amount: '$20-35K/month', description: '$0.002/file over 10K (capped $19.99/mo)' },
        { name: 'Team Plans', percentage: 30, amount: '$12-21K/month', description: '$0.001/file + $5/user collaboration' },
        { name: 'Enterprise', percentage: 20, amount: '$8-14K/month', description: 'Custom pricing, on-premise options' },
      ],
      total: '$40-70K/month',
      annual: '$480-840K/year',
    },
    development: {
      timeline: 'Design & Prototype (September-December 2024)',
      achievements: [
        'Designed local-first architecture (SQLite + vector DBs)',
        'Planned vector embedding strategy (quantized models)',
        'Created incremental indexing system',
        'Designed encrypted cross-device sync (E2EE)',
        'Prototype tested: 50K files in 8 minutes',
        'Achieved <100ms search latency target',
      ],
    },
    code: codeExamples.hippo,
  },
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  const Icon = product.icon
  const colorClasses = {
    purple: 'from-grep-purple to-grep-pink',
    blue: 'from-grep-blue to-grep-cyan',
    green: 'from-grep-green to-grep-cyan',
    orange: 'from-grep-orange to-grep-yellow',
  }

  return (
    <main className="min-h-screen pt-16 bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/20 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">
                <span className={`w-2 h-2 rounded-full ${
                  product.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></span>
                {product.status}
              </div>

              <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-light">
                {product.tagline}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-light">
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {product.url !== '#' ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Visit {product.name}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full font-medium">
                    Coming Soon
                  </div>
                )}
                <Link
                  href="/open-source"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  <Code className="w-5 h-5" />
                  Licensing Model
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Launch: {product.launchDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>Incubation: {product.incubation}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses]} flex items-center justify-center shadow-2xl mx-auto`}>
                <Icon className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      {product.code && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-extralight text-gray-900 dark:text-white mb-6">Quick Start</h2>
            <CodeBlock code={product.code} language="bash" showCopy={true} />
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {product.howItWorks && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Play className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">How It Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
                How <span className="gradient-text">{product.name}</span> Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                {product.howItWorks.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.howItWorks.steps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <div
                    key={index}
                    className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                  >
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-grep-purple to-grep-pink flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses]} bg-opacity-10 flex items-center justify-center mb-4`}>
                      <StepIcon className={`w-6 h-6 text-${product.color === 'purple' ? 'grep-purple' : product.color === 'blue' ? 'grep-blue' : product.color === 'green' ? 'grep-green' : 'grep-orange'}`} />
                    </div>
                    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {product.useCases && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-12 text-center">
              Use <span className="gradient-text">Cases</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {product.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="font-light">{useCase.users}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-12 text-center">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="space-y-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-grep-purple dark:text-grep-pink flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <ul className="space-y-1">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 font-light flex items-start gap-2">
                            <span className="text-grep-purple dark:text-grep-pink mt-1.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {product.pricing && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-12 text-center">
              Pricing <span className="gradient-text">Plans</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(product.pricing).map(([key, plan]) => (
                <div
                  key={key}
                  className={`bg-white dark:bg-black border-2 rounded-xl p-8 ${
                    key === 'pro' || key === 'home' || key === 'premium'
                      ? 'border-grep-purple dark:border-grep-purple shadow-lg'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-4xl font-extralight text-gray-900 dark:text-white mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 font-light">
                        <CheckCircle className="w-5 h-5 text-grep-purple dark:text-grep-pink flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {product.url !== '#' && (
                    <a
                      href={product.url}
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-medium transition-all ${
                        key === 'pro' || key === 'home' || key === 'premium'
                          ? 'bg-black dark:bg-white text-white dark:text-black hover:scale-105'
                          : 'border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-600'
                      }`}
                    >
                      Get Started
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Metrics Section */}
      {product.metrics && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-12 text-center">
              Key <span className="gradient-text">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(product.metrics).map(([key, value]) => (
                <div key={key} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                  <div className="text-3xl font-extralight text-gray-900 dark:text-white mb-2">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-light capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Revenue Model Section */}
      {product.revenue && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue Model</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
                Open <span className="gradient-text">Revenue Strategy</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
                Complete transparency about how {product.name} generates revenue and where the money goes.
              </p>
            </div>

            <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-extralight text-gray-900 dark:text-white mb-4">Total Revenue</h3>
                  <div className="text-4xl font-extralight text-gray-900 dark:text-white mb-2">{product.revenue.total}</div>
                  <div className="text-lg text-gray-600 dark:text-gray-400 font-light">{product.revenue.annual} annually</div>
                </div>
                <div>
                  <Link
                    href="/open-source"
                    className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors font-medium"
                  >
                    View Licensing Model
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light mt-2">
                    See our open-core licensing approach
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-light text-gray-900 dark:text-white mb-4">Revenue Streams</h4>
                {product.revenue.streams.map((stream, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-lg font-light text-gray-900 dark:text-white">{stream.name}</h5>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{stream.percentage}%</span>
                    </div>
                    <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-2">{stream.amount}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">{stream.description}</p>
                    <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-grep-purple to-grep-pink rounded-full"
                        style={{ width: `${stream.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Development Story */}
      {product.development && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-12 text-center">
              Development <span className="gradient-text">Story</span>
            </h2>
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
              <div className="mb-6">
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Incubation Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light">{product.development.timeline}</p>
              </div>
              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {product.development.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-light">
                      <CheckCircle className="w-5 h-5 text-grep-purple dark:text-grep-pink flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors font-medium"
              >
                Read More on Our Blog
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Technical Architecture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <GitBranch className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
              Technical <span className="gradient-text">Architecture</span>
            </h2>
          </div>

          {slug === 'grepcoin' && (
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Smart Contract Architecture</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">GrepToken.sol</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">ERC-20 token with 500M fixed supply. Includes minting caps, burnable functionality, and pause capability for emergency situations.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">GrepStakingPool.sol</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">4-tier staking system (Bronze, Silver, Gold, Platinum) with time-locked periods. Real yield from platform revenue distribution.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">GrepAchievements.sol</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">ERC-1155 Soulbound NFTs for player milestones. Non-transferable achievement badges stored on-chain.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">GrepGovernor.sol</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">DAO governance contract with proposal creation, voting, and treasury management. Token-weighted voting system.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frontend Stack</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">Next.js 15 (App Router), React 18, TailwindCSS, Web3.js for blockchain interactions, Framer Motion for animations.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend Infrastructure</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">PostgreSQL on NeonDB, Prisma ORM, Next.js API Routes (91 endpoints), Redis for caching, Discord.js bot integration.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Blockchain Integration</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Base L2 network for low fees, Sign-In with Ethereum (SIWE) for wallet authentication, OpenZeppelin contracts library.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Development Tools</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Hardhat for contract development, TypeScript for type safety, ESLint/Prettier for code quality, GitHub Actions for CI/CD.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Security Features</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Audited smart contracts (CertiK)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">OpenZeppelin battle-tested libraries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Multi-sig wallet for admin functions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Pausable contracts for emergencies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Rate limiting on API endpoints</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Anti-cheat detection systems</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {slug === 'chai' && (
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Encryption & Security Architecture</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Signal Protocol Implementation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">X3DH key exchange for initial key establishment, Double Ratchet for forward secrecy, AES-256-GCM encryption for message content.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">FIDO2/WebAuthn Authentication</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Hardware key support (YubiKey, Touch ID, Face ID), passwordless authentication, phishing-resistant security keys.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Local AI Processing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">WebAssembly-based AI models run entirely on-device. TensorFlow.js for lightweight inference, no cloud AI processing.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend Stack (Rust)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Axum web framework, PostgreSQL database, Redis for caching, tokio async runtime, message queue for delivery.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frontend Applications</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">Next.js 14 PWA, Terminal UI (TUI) built with Ratatui, React Native mobile apps (future), WebAssembly for crypto operations.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Encrypted Storage</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">Optional E2EE cloud backup using user-controlled keys. Local SQLite database with encrypted columns. Key derivation using PBKDF2.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Enterprise Features</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">SSO/SAML integration, audit logging (metadata only), compliance reporting (HIPAA, GDPR), admin dashboard, role-based access control.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Network Protocol</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">WebSocket for real-time messaging, HTTP/2 for REST API, DNS-over-HTTPS for secure DNS resolution, certificate pinning for MITM protection.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Compliance & Security</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">HIPAA-ready (with Enterprise plan)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">GDPR compliant data handling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">SOC 2 Type II readiness</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">End-to-end encryption (E2EE)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Perfect forward secrecy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Zero-knowledge architecture</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {slug === 'shields' && (
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">DNS Filtering Architecture</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">eBPF Kernel Filtering</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Kernel-level packet processing for {'<'}1ms latency. Zero-copy packet inspection, lock-free data structures, per-CPU cache design.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">ML Threat Detection</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">TensorFlow Lite models for DGA detection, behavioral anomaly detection, phishing pattern recognition. {'<'}0.1ms inference latency per query.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Blocklist System</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Memory-mapped blocklists for instant lookup, 50K+ entry LRU cache, 8+ built-in blocklist sources, automatic updates every 4 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Rust Core Engine</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Hickory DNS library for resolution, tokio async runtime, DashMap for concurrent lookups, AHash for fast hashing.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Dashboard & API</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">Next.js dashboard with WebSocket real-time updates, RESTful API with OpenAPI docs, Prometheus metrics export, GraphQL query interface.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Privacy Scoring Engine</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">50+ privacy signals analyzed per domain, tracker categorization (analytics, ads, social, etc.), data flow mapping visualization.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Deployment Options</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Docker containers, Kubernetes operators, systemd services, router firmware (OpenWrt), home automation (Home Assistant).</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Vector Database</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Qdrant for threat intelligence storage, vector embeddings for similarity search, real-time threat correlation engine.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Performance Benchmarks</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">&lt;1ms</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-light">P50 Query Latency</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">100K+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-light">Queries/Second</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">&lt;50MB</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-light">Base Memory Usage</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">99.9%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-light">Threat Detection Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {slug === 'hippo' && (
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Local-First Architecture</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">File Indexing Engine</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Rust-based incremental indexing, SQLite for metadata storage, file system watching (inotify/fsevents), change detection algorithms.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Vector Search System</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Local Qdrant instance for embeddings, quantized models for efficiency, semantic similarity search, {'<'}100ms query latency.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Processing (Ollama)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Local LLM integration for tagging, summarization, and Q&A. Models run entirely on-device. No cloud AI calls.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Tauri Desktop App</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Tauri 2.0 framework for native performance, Rust backend, web frontend (React/Svelte), small bundle size (~10MB), cross-platform.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Encrypted Sync</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">Optional E2EE cloud backup, user-controlled encryption keys, incremental sync, conflict resolution, peer-to-peer sync (future).</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">File Type Support</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-2">70+ file types: documents (PDF, DOC, MD), images (JPEG, PNG, GIF), videos (MP4, MOV), code (70+ languages), audio (MP3, WAV).</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">RAG System</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Retrieval-Augmented Generation for document Q&A, context-aware answers, citation support, conversational AI interface.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Index 50K files in 8 minutes, {'<'}100ms search latency, minimal memory footprint, background processing, incremental updates.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Privacy Guarantees</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">100% local processing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">No cloud AI calls</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Zero telemetry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">E2EE optional sync</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">User-controlled keys</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-grep-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-light">Open source core</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Technology Stack</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {product.tech.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="font-mono font-medium text-gray-900 dark:text-white">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {slug === 'grepcoin' && (
              <>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Is GrepCoin a play-to-earn game?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">GrepCoin focuses on gameplay first, with token rewards as optional bonuses. Unlike failed P2E projects, we built quality games first, then added blockchain integration. The games are fun and engaging even without crypto rewards.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How do I earn GREP tokens?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">You earn tokens by playing games (score-based rewards), completing daily challenges, winning tournaments, and participating in governance. Staking tokens also earns yield from platform revenue.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Are smart contracts audited?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Yes, our smart contracts are audited by CertiK. We use OpenZeppelin's battle-tested libraries and have emergency pause functionality. All contracts are open source and verifiable on Base network.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">What is the token supply?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">GREP has a fixed supply of 500 million tokens with no inflation. Tokens are distributed through staking rewards, gameplay rewards, NFT purchases, and governance participation. Burn mechanisms make the token deflationary over time.</p>
                </div>
              </>
            )}

            {slug === 'chai' && (
              <>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Is Chai.im truly private?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Yes. Messages are end-to-end encrypted using Signal Protocol, which means we cannot read your messages. AI features run locally on your device—no message content ever leaves your device unencrypted. We minimize data collection and process everything locally where possible.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">What makes Chai.im different from Signal?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Chai.im adds enterprise features like HIPAA compliance, SSO integration, audit logging, and hardware key authentication (FIDO2/WebAuthn). We also offer a terminal client for developers and focus on regulated industries that need compliance features.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How does local AI processing work?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">AI features (summaries, smart replies, translations) run entirely on your device using WebAssembly and TensorFlow.js. Small, optimized models provide useful features without sending data to the cloud. Everything processes locally for maximum privacy.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Is Chai.im HIPAA compliant?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Enterprise plans include HIPAA-ready features like audit logs, compliance reporting, and business associate agreements (BAAs). We follow HIPAA guidelines for secure messaging in healthcare settings.</p>
                </div>
              </>
            )}

            {slug === 'shields' && (
              <>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How fast is Shields AI?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Shields AI processes DNS queries in under 1ms (P50 latency) using eBPF kernel-level filtering. It can handle 100K+ queries per second with minimal resource usage. You won't notice any impact on browsing speed.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How does AI threat detection work?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">ML models analyze domains for patterns indicating malware, phishing, or DGA (Domain Generation Algorithm) behavior. We use TensorFlow Lite models that run inference in {'<'}0.1ms per query. The system learns from threat intelligence feeds and continuously improves.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Is Shields AI open source?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Yes, the core DNS filtering engine and basic features are open source (MIT license). You can self-host for free. Premium features like advanced AI detection, privacy scoring, and enterprise tools require a subscription.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How does usage-based pricing work?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Free tier includes 100K queries/month. Home plan charges $0.01 per 1K queries over the free tier, capped at $4.99/month. Family plan is $0.008 per 1K queries, capped at $9.99/month. Enterprise uses volume-based pricing with discounts.</p>
                </div>
              </>
            )}

            {slug === 'hippo' && (
              <>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Is my data private with Hippo?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Yes. All file indexing and AI processing happens locally on your device. We never see your files. Optional cloud sync is encrypted end-to-end with keys you control. There's zero telemetry and no data collection.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How fast is semantic search?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Semantic search queries return results in under 100ms, even with 100K+ indexed files. Vector embeddings enable fast similarity search, and the local Qdrant database is optimized for low-latency queries.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">What AI models does Hippo use?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Hippo uses Ollama for local AI processing. You can use models like Llama 3, Mistral, or CodeLlama. All models run entirely on your device. Quantized models keep resource usage low while maintaining quality.</p>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">How does usage-based pricing work?</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Free tier indexes up to 10K files. Pro plan charges $0.002 per file over 10K, capped at $19.99/month. Team plans add $5 per user plus $0.001 per file. Enterprise uses custom pricing with volume discounts.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            {product.status === 'Live' 
              ? `Visit ${product.name} to start using the platform.` 
              : `Stay tuned for ${product.name}'s launch in ${product.launchDate}.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {product.url !== '#' && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                Visit {product.name}
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

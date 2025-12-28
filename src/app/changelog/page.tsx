import Link from 'next/link'
import { ArrowLeft, Sparkles, Bug, Zap, Shield, Folder, MessageSquare, Gamepad2 } from 'lucide-react'

const changelog = [
  {
    version: '0.9.0',
    date: 'January 2025',
    title: 'Public Beta Launch',
    description: 'Initial public release of all GrepLabs products.',
    changes: [
      {
        type: 'feature',
        product: 'all',
        items: [
          'Launched GrepLabs website with full product information',
          'Community funding page with GitHub Sponsors integration',
          'Open revenue strategy documentation',
          'Comprehensive API documentation',
        ],
      },
      {
        type: 'feature',
        product: 'shields',
        items: [
          'ML-powered threat detection engine',
          'Sub-millisecond DNS query processing',
          'Community blocklist aggregation',
          'Usage-based pricing with 100K free queries/month',
        ],
      },
      {
        type: 'feature',
        product: 'hippo',
        items: [
          'Local-first file indexing with Rust backend',
          'Semantic search using vector embeddings',
          'Support for 100K+ files per index',
          'Auto-tagging with local AI models',
        ],
      },
      {
        type: 'feature',
        product: 'chai',
        items: [
          'Signal Protocol end-to-end encryption',
          'FIDO2/WebAuthn authentication support',
          'HIPAA compliance features for healthcare',
          'Local AI message summarization',
        ],
      },
      {
        type: 'feature',
        product: 'grepcoin',
        items: [
          '9 arcade games available at launch',
          'GREP token on Base L2',
          'Guild system and tournaments',
          'Daily challenges and achievements',
        ],
      },
    ],
  },
  {
    version: '0.8.5',
    date: 'December 2025',
    title: 'Pre-Launch Improvements',
    description: 'Final polish before public beta.',
    changes: [
      {
        type: 'improvement',
        product: 'shields',
        items: [
          'Improved threat detection accuracy by 15%',
          'Added support for custom blocklist URLs',
          'Reduced memory usage by 30%',
        ],
      },
      {
        type: 'fix',
        product: 'hippo',
        items: [
          'Fixed file watcher memory leak on Windows',
          'Resolved indexing issues with symbolic links',
          'Improved PDF text extraction accuracy',
        ],
      },
      {
        type: 'improvement',
        product: 'chai',
        items: [
          'Optimized message sync performance',
          'Added message search within conversations',
          'Improved group creation flow',
        ],
      },
    ],
  },
  {
    version: '0.8.0',
    date: 'November 2025',
    title: 'Multi-Product Integration',
    description: 'Unified authentication and cross-product features.',
    changes: [
      {
        type: 'feature',
        product: 'all',
        items: [
          'Single sign-on across all GrepLabs products',
          'Unified billing dashboard',
          'Cross-product usage analytics',
        ],
      },
      {
        type: 'improvement',
        product: 'grepcoin',
        items: [
          'Added 3 new arcade games',
          'Improved token reward distribution',
          'Enhanced guild management features',
        ],
      },
      {
        type: 'fix',
        product: 'shields',
        items: [
          'Fixed DNS-over-HTTPS compatibility issues',
          'Resolved IPv6 query handling bugs',
        ],
      },
    ],
  },
  {
    version: '0.7.0',
    date: 'October 2025',
    title: 'Performance Optimizations',
    description: 'Major performance improvements across all products.',
    changes: [
      {
        type: 'improvement',
        product: 'shields',
        items: [
          'eBPF packet processing for kernel-level speed',
          'Achieved consistent <1ms latency',
          'Scaled to 100K+ queries per second',
        ],
      },
      {
        type: 'improvement',
        product: 'hippo',
        items: [
          'Batch indexing for faster initial setup',
          'Reduced search latency to <50ms for 100K files',
          'Memory-mapped index for lower RAM usage',
        ],
      },
      {
        type: 'feature',
        product: 'chai',
        items: [
          'Voice message support',
          'Read receipts (optional)',
          'Typing indicators',
        ],
      },
    ],
  },
  {
    version: '0.6.0',
    date: 'September 2025',
    title: 'Enterprise Features',
    description: 'Added features for business and enterprise users.',
    changes: [
      {
        type: 'feature',
        product: 'chai',
        items: [
          'Enterprise SSO integration (SAML, OIDC)',
          'Compliance audit logging',
          'Data retention policies',
          'Admin console for user management',
        ],
      },
      {
        type: 'feature',
        product: 'shields',
        items: [
          'Team and organization management',
          'Centralized policy configuration',
          'Per-device analytics',
        ],
      },
      {
        type: 'feature',
        product: 'hippo',
        items: [
          'Team sharing with encrypted sync',
          'Workspace collaboration features',
          'Admin controls for team accounts',
        ],
      },
    ],
  },
]

const typeIcons = {
  feature: Sparkles,
  improvement: Zap,
  fix: Bug,
}

const typeColors = {
  feature: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  improvement: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  fix: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
}

const productIcons = {
  all: Sparkles,
  shields: Shield,
  hippo: Folder,
  chai: MessageSquare,
  grepcoin: Gamepad2,
}

const productNames = {
  all: 'All Products',
  shields: 'Shields AI',
  hippo: 'Hippo',
  chai: 'Chai.im',
  grepcoin: 'GrepCoin',
}

export default function ChangelogPage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Changelog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            What&apos;s New
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400">
            Track updates, improvements, and fixes across all GrepLabs products.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-12 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {Object.entries(typeColors).map(([type, color]) => {
            const Icon = typeIcons[type as keyof typeof typeIcons]
            return (
              <div key={type} className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>
                  <Icon className="w-3 h-3 inline mr-1" />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </div>
            )
          })}
        </div>

        {/* Changelog entries */}
        <div className="space-y-12">
          {changelog.map((release) => (
            <article
              key={release.version}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
            >
              {/* Version dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-r from-grep-purple to-grep-pink rounded-full" />

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl font-light text-gray-900 dark:text-white">
                    v{release.version}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {release.date}
                  </span>
                </div>
                <h2 className="text-xl font-light text-gray-900 dark:text-white mb-2">
                  {release.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  {release.description}
                </p>
              </div>

              {/* Changes */}
              <div className="space-y-6">
                {release.changes.map((change, i) => {
                  const TypeIcon = typeIcons[change.type as keyof typeof typeIcons]
                  const ProductIcon = productIcons[change.product as keyof typeof productIcons]
                  return (
                    <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${typeColors[change.type as keyof typeof typeColors]}`}>
                          <TypeIcon className="w-3 h-3 inline mr-1" />
                          {change.type.charAt(0).toUpperCase() + change.type.slice(1)}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <ProductIcon className="w-4 h-4" />
                          {productNames[change.product as keyof typeof productNames]}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {change.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400 font-light"
                          >
                            <span className="text-grep-purple dark:text-grep-pink mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-grep-purple/10 to-grep-pink/10 border border-grep-purple/20 rounded-2xl text-center">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
            Get notified when we release new features and improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-grep-purple dark:focus:ring-grep-pink"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

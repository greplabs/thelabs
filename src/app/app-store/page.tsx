import Link from 'next/link'
import { ArrowLeft, Download, Star, Users, Zap, Shield, Code } from 'lucide-react'

const products = [
  {
    id: 'grepcoin',
    name: 'GrepCoin',
    tagline: 'Developer Arcade on Base L2',
    description: 'Play 9 arcade games and earn GREP tokens on Base L2',
    rating: null,
    reviews: 0,
    users: 'Live',
    status: 'Live',
    category: 'Gaming',
    url: 'https://grepcoin.io',
    icon: '🎮',
  },
  {
    id: 'shields',
    name: 'Shields AI',
    tagline: 'AI-Powered DNS Protection',
    description: 'ML-powered DNS security with sub-millisecond latency',
    rating: null,
    reviews: 0,
    users: 'Flagship',
    status: 'Flagship',
    category: 'Security',
    url: '#',
    icon: '🛡️',
  },
  {
    id: 'hippo',
    name: 'Hippo',
    tagline: 'The Memory That Never Forgets',
    description: 'Local-first file organizer with AI semantic search',
    rating: null,
    reviews: 0,
    users: 'Development',
    status: 'Development',
    category: 'Productivity',
    url: '#',
    icon: '🦛',
  },
  {
    id: 'chai',
    name: 'Chai.im',
    tagline: 'Enterprise Encrypted Messaging',
    description: 'HIPAA-ready secure messaging for regulated industries',
    rating: null,
    reviews: 0,
    users: 'Enterprise Beta',
    status: 'Enterprise Beta',
    category: 'Communication',
    url: '#',
    icon: '💬',
  },
]

export default function AppStorePage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            GrepLabs App Store
          </h1>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Discover, download, and support our products. Every download helps fund open source development.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Open Source Core</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>AI Powered</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-3xl">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                      {product.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  product.status === 'Live'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : product.status === 'Flagship'
                    ? 'bg-gradient-to-r from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 text-green-700 dark:text-green-400'
                    : product.status === 'Enterprise Beta'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  {product.status}
                </span>
              </div>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                {product.tagline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900 dark:text-white">{product.rating}</span>
                    <span>({product.reviews})</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{product.users}</span>
                </div>
              </div>

              {product.url !== '#' ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Try Now
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-400 rounded-full font-medium cursor-not-allowed w-full justify-center"
                >
                  Coming Soon
                </button>
              )}

              <Link
                href={`/products/${product.id}`}
                className="block mt-4 text-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* Funding Note */}
        <div className="max-w-3xl mx-auto text-center p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-900">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Supporting Open Source Development
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
            Our App Store model supports sustainable open source development. Premium features and subscriptions 
            directly fund continued innovation, security updates, and new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/open-source"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Open-Core Licensing
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}


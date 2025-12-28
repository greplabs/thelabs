import Link from 'next/link'
import { ArrowLeft, Book, ExternalLink, ArrowRight, Shield, Folder, MessageSquare, Gamepad2, Rocket } from 'lucide-react'

export default function DocsPage() {
  const products = [
    {
      name: 'Shields AI',
      icon: Shield,
      description: 'ML-powered DNS security with sub-millisecond latency',
      href: '/products/shields',
      signupUrl: '#', // Will link to app signup
      color: 'from-green-500 to-cyan-500',
      status: 'Flagship',
    },
    {
      name: 'GrepCoin',
      icon: Gamepad2,
      description: '9 arcade games with token rewards on Base L2',
      href: '/products/grepcoin',
      signupUrl: 'https://grepcoin.io',
      color: 'from-purple-500 to-pink-500',
      status: 'Live',
    },
    {
      name: 'Chai.im',
      icon: MessageSquare,
      description: 'Enterprise encrypted messaging with local AI',
      href: '/products/chai',
      signupUrl: '#', // Will link to app signup
      color: 'from-blue-500 to-cyan-500',
      status: 'Beta',
    },
    {
      name: 'Hippo',
      icon: Folder,
      description: 'Local-first file organizer with semantic search',
      href: '/products/hippo',
      signupUrl: '#', // Will link to app signup
      color: 'from-orange-500 to-yellow-500',
      status: 'Dev',
    },
  ]

  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Book className="w-5 h-5 text-purple-500 dark:text-pink-500" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product Docs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Product
            <br />
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl">
            Learn how each GrepLabs product works. Explore features, understand pricing, and sign up to get started.
          </p>
        </div>

        {/* Product Cards with Sign Up CTAs */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="group p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    product.status === 'Live' || product.status === 'Flagship'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : product.status === 'Beta'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
                  {product.description}
                </p>

                <div className="flex gap-3">
                  <Link
                    href={product.href}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {product.signupUrl !== '#' ? (
                    <a
                      href={product.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:scale-105 transition-all text-sm"
                    >
                      <Rocket className="w-4 h-4" />
                      Sign Up
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg font-medium text-sm cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* How It Works */}
        <div className="mb-16 p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                <span className="text-purple-600 dark:text-purple-400 font-medium">1</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Explore Products</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Learn about each product, its features, and pricing on the product detail pages.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-3">
                <span className="text-pink-600 dark:text-pink-400 font-medium">2</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Sign Up Directly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Each product has its own platform. Sign up directly on the product's website.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3">
                <span className="text-orange-600 dark:text-orange-400 font-medium">3</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Start Using</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Configure your settings, explore features, and start using the product immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Open Source</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              All our core engines are open source. Audit the code, contribute, or self-host.
            </p>
            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 text-purple-500 dark:text-pink-500 hover:underline"
            >
              Learn about our open-core model
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Need Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              Questions about which product is right for you? Get in touch with our team.
            </p>
            <a
              href="mailto:hello@greplabs.com"
              className="inline-flex items-center gap-2 text-purple-500 dark:text-pink-500 hover:underline"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

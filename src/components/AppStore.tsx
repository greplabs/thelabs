'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Star, Users, Sparkles } from 'lucide-react'

export default function AppStore() {
  const featured = [
    {
      name: 'GrepCoin',
      tagline: 'Play. Earn. Own.',
      rating: 4.8,
      users: '10K+',
      status: 'Live',
      url: 'https://grepcoin.io',
      gradient: 'from-grep-purple to-grep-pink',
    },
    {
      name: 'Chai.im',
      tagline: 'Private messaging reimagined',
      rating: null,
      users: 'Coming soon',
      status: 'Beta',
      url: '#',
      gradient: 'from-grep-blue to-grep-cyan',
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-black dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-grep-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-grep-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">App Store</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            Discover. Download.
            <br />
            <span className="gradient-text">Support Open Source.</span>
          </h2>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Every download helps fund open source development. Premium features directly support continued innovation.
          </p>
          <Link
            href="/app-store"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
          >
            Browse all products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Featured apps */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {featured.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-xl bg-white dark:bg-black"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.gradient} rounded-t-2xl`}></div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {app.tagline}
                  </p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  app.status === 'Live' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                }`}>
                  {app.status}
                </span>
              </div>

              <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                {app.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900 dark:text-white">{app.rating}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{app.users}</span>
                </div>
              </div>

              {app.url !== '#' ? (
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-all w-full justify-center"
                >
                  <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
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
            </motion.div>
          ))}
        </div>

        {/* Funding note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gradient-to-br from-grep-purple/5 via-grep-pink/5 to-grep-orange/5 backdrop-blur-sm"
        >
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
            Supporting Open Source Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
            Our App Store model supports sustainable open source development. Premium features and subscriptions 
            directly fund continued innovation, security updates, and new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/monetization"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Monetization Strategy
            </Link>
            <Link
              href="/open-source"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Open Source Strategy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

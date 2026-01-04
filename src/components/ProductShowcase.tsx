'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Gamepad2, MessageSquare, Shield, Folder } from 'lucide-react'

const products = [
  {
    id: 'shields',
    name: 'Shields AI',
    tagline: 'AI-Powered DNS Protection',
    description: 'ML-powered DNS security with sub-millisecond latency. Block threats before they reach you.',
    icon: Shield,
    url: '#',
    status: 'Flagship',
    gradient: 'from-green-500 to-cyan-500',
    features: ['Real-time ML Detection', '<1ms Latency', '100K+ QPS', 'Usage-Based Pricing'],
  },
  {
    id: 'hippo',
    name: 'Hippo',
    tagline: 'The Memory That Never Forgets',
    description: 'Local-first file organizer with AI semantic search. Your files stay on your device.',
    icon: Folder,
    url: '#',
    status: 'Development',
    gradient: 'from-orange-500 to-yellow-500',
    features: ['Local-First', 'AI Search', '100K+ Files', 'E2EE Sync'],
  },
  {
    id: 'grepcoin',
    name: 'GrepCoin',
    tagline: 'Developer Arcade on Base L2',
    description: '9 polished arcade games with optional crypto rewards. Games first, tokens second.',
    icon: Gamepad2,
    url: 'https://grepcoin.io',
    status: 'Live',
    gradient: 'from-purple-500 to-pink-500',
    features: ['9 Arcade Games', 'Base L2', 'Tournaments', 'NFT Marketplace'],
  },
  {
    id: 'chai',
    name: 'Chai.im',
    tagline: 'Enterprise Encrypted Messaging',
    description: 'HIPAA-ready secure messaging for healthcare, legal, and regulated industries.',
    icon: MessageSquare,
    url: '#',
    status: 'Enterprise Beta',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Signal Protocol', 'FIDO2 Auth', 'HIPAA Ready', 'Local AI'],
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
            Four Products. <span className="gradient-text">One Vision.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
            Privacy-first, AI-powered, open core software
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <Link
                  href={`/products/${product.id}`}
                  className="block bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 line-clamp-1">
                      {product.tagline}
                    </p>

                    {/* Status badge */}
                    <span className={`inline-block text-[9px] font-medium px-2 py-0.5 rounded-full ${
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

                    {/* Features - compact */}
                    <div className="flex flex-wrap justify-center gap-1 mt-3">
                      {product.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="text-[9px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity pointer-events-none`} />
                </Link>
                {product.url !== '#' && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 text-[9px] p-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full flex items-center gap-0.5 transition-colors"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/app-store"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View all in app store <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

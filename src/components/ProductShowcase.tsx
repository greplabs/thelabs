'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { Gamepad2, MessageSquare, Shield, Folder } from 'lucide-react'
import CodeBlock, { codeExamples } from './CodeBlock'

const products = [
  {
    id: 'shields',
    name: 'Shields AI',
    tagline: 'AI-Powered DNS Protection',
    description: 'Intelligent DNS security with ML threat detection. Usage-based pricing: pay only for what you use.',
    detailedDescription: 'Shields AI provides next-generation DNS security with machine learning-powered threat detection. It blocks malware, phishing, and trackers in real-time with sub-millisecond latency. The clearest path to market with underserved SMB segment and genuine AI differentiation.',
    icon: Shield,
    url: '#',
    status: 'Flagship',
    color: 'from-grep-green/20 to-grep-cyan/20',
    borderColor: 'border-grep-green/30 dark:border-grep-green/20',
    glowColor: 'glow-green',
    code: codeExamples.shields,
    features: [
      'Real-time ML Threat Detection',
      '<1ms Query Latency (eBPF)',
      '100K+ Queries Per Second',
      'Usage-Based Pricing',
      'Zero-Trust DNS Architecture',
      'Cross-Platform Support',
      'Privacy-Focused Logging',
      'Enterprise API Access',
    ],
    metrics: [
      { label: 'Latency', value: '<1ms' },
      { label: 'Throughput', value: '100K+ QPS' },
      { label: 'Free Tier', value: '100K queries/mo' },
      { label: 'Target MRR', value: '$60-100K' },
    ],
    tech: ['Rust', 'eBPF', 'Kubernetes', 'Vector DBs', 'TensorFlow', 'ML Models'],
  },
  {
    id: 'hippo',
    name: 'Hippo',
    tagline: 'The Memory That Never Forgets',
    description: 'Local-first file organizer with AI semantic search. Your files, your device, instant results.',
    detailedDescription: 'Hippo indexes your files locally and enables natural language search. All AI processing happens on your device. Growing market for local-first, privacy-preserving productivity tools.',
    icon: Folder,
    url: '#',
    status: 'Development',
    color: 'from-grep-orange/20 to-grep-yellow/20',
    borderColor: 'border-grep-orange/30 dark:border-grep-orange/20',
    glowColor: 'glow-orange',
    code: codeExamples.hippo,
    features: [
      'Local-First Architecture',
      'AI Semantic Search',
      'Usage-Based Pricing',
      'Cross-Device Sync (E2EE)',
      'Version Control',
      'Auto-Tagging with AI',
      '100K+ File Capacity',
      '<100ms Search Speed',
    ],
    metrics: [
      { label: 'Capacity', value: '100K+ files' },
      { label: 'Search Speed', value: '<100ms' },
      { label: 'Free Tier', value: '10K files' },
      { label: 'Target MRR', value: '$40-70K' },
    ],
    tech: ['Rust', 'Tauri', 'SQLite', 'Vector Embeddings', 'WebAssembly', 'Local AI'],
  },
  {
    id: 'grepcoin',
    name: 'GrepCoin',
    tagline: 'Developer Arcade on Base L2',
    description: 'Quality games first, token rewards second. 9 arcade games with optional crypto integration.',
    detailedDescription: 'GrepCoin is a gaming platform where gameplay comes first. Built on Base L2, it features 9 polished arcade games with optional token rewards. Not play-to-earn hype—real games with sustainable economics.',
    icon: Gamepad2,
    url: 'https://grepcoin.io',
    status: 'Live',
    color: 'from-grep-purple/20 to-grep-pink/20',
    borderColor: 'border-grep-purple/30 dark:border-grep-purple/20',
    glowColor: 'glow-purple',
    code: codeExamples.grepcoin,
    features: [
      '9 Polished Arcade Games',
      'Gaming First, Rewards Second',
      'Smart Contracts on Base L2',
      'Guild Systems & Tournaments',
      'Daily Challenges',
      'Optional NFT Integration',
      'Sustainable Token Economics',
      'No Pay-to-Win Mechanics',
    ],
    metrics: [
      { label: 'Games', value: '9+' },
      { label: 'Token Supply', value: '500M GREP' },
      { label: 'Platform Fee', value: '2.5-10%' },
      { label: 'Target MRR', value: '$30-50K' },
    ],
    tech: ['Next.js 15', 'Solidity', 'Base L2', 'PostgreSQL', 'Prisma', 'Web3'],
  },
  {
    id: 'chai',
    name: 'Chai.im',
    tagline: 'Enterprise Encrypted Messaging',
    description: 'HIPAA-ready secure messaging for healthcare, legal, and regulated industries.',
    detailedDescription: 'Chai.im provides Signal Protocol encryption with enterprise compliance features. Built for healthcare, legal, and finance sectors that require audit trails, HIPAA compliance, and hardware key authentication.',
    icon: MessageSquare,
    url: 'https://chai.im',
    status: 'Enterprise Beta',
    color: 'from-grep-blue/20 to-grep-cyan/20',
    borderColor: 'border-grep-blue/30 dark:border-grep-blue/20',
    glowColor: 'glow-blue',
    code: codeExamples.chai,
    features: [
      'Signal Protocol (E2EE)',
      'HIPAA Compliance Ready',
      'FIDO2/WebAuthn Auth',
      'Audit Trail & Compliance Logging',
      'Local AI Processing',
      'Enterprise SSO',
      'On-Premise Deployment',
      'Regulated Industry Focus',
    ],
    metrics: [
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Compliance', value: 'HIPAA Ready' },
      { label: 'Target Market', value: 'Healthcare/Legal' },
      { label: 'Target MRR', value: '$20-40K' },
    ],
    tech: ['Rust', 'Axum', 'Next.js 14', 'PostgreSQL', 'WebAssembly', 'Signal Protocol'],
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/20 dark:to-black relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-grep-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-grep-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Products</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Four Products.
            <br />
            <span className="gradient-text">One Vision.</span>
          </h2>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Privacy-first • AI-powered • Open source
            <br />
            <span className="text-lg text-gray-400 dark:text-gray-500">Building the future of software, one product at a time</span>
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white dark:bg-black p-8 md:p-10 rounded-2xl border-2 ${product.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full terminal-text ${
                    product.status === 'Live'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : product.status === 'Flagship'
                      ? 'bg-gradient-to-r from-grep-green to-grep-cyan text-white'
                      : product.status === 'Enterprise Beta'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}>
                    {product.status}
                  </span>
                </div>

                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${product.glowColor} group-hover:shadow-lg`}>
                  <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-extralight text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed text-base">
                    {product.description}
                  </p>

                  {/* Code Example */}
                  {product.code && (
                    <div className="mb-6 flex-shrink-0">
                      <CodeBlock
                        code={product.code}
                        showCopy={false}
                      />
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {product.url !== '#' && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm ml-auto"
                    >
                      Visit site
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/app-store"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
          >
            <span className="terminal-prompt">$</span> view all in app store
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

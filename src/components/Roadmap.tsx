'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Circle, Sparkles, Calendar, Rocket } from 'lucide-react'

const roadmapItems = [
  {
    quarter: 'Q1 2026',
    status: 'planned',
    items: [
      { title: 'GrepCoin Mainnet Launch', status: 'planned', description: 'Token launch, DEX liquidity, staking pool activation on Base Mainnet' },
      { title: 'GrepCoin Testnet Deployment', status: 'planned', description: 'Deploy to Base Sepolia, contract verification, end-to-end testing' },
      { title: 'Chai.im Beta Launch', status: 'planned', description: 'Public beta with Signal Protocol and FIDO2 authentication' },
      { title: 'Shields AI Alpha Testing', status: 'planned', description: 'Internal testing of DNS protection system' },
      { title: 'Hippo MVP Development', status: 'in-progress', description: 'Core file indexing and search functionality' },
      { title: 'Website Launch', status: 'in-progress', description: 'Official GrepLabs website (greplabs.com, greplab.com)' },
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'planned',
    items: [
      { title: 'Chai.im v1.0 Launch', status: 'planned', description: 'Full release with group messaging and terminal client' },
      { title: 'Shields AI Public Beta', status: 'planned', description: 'Beta release for early adopters' },
      { title: 'Hippo Beta Launch', status: 'planned', description: 'Public beta with semantic search' },
      { title: 'Enterprise Features - Chai.im', status: 'planned', description: 'Team workspaces and admin controls' },
      { title: 'API Documentation', status: 'planned', description: 'Public APIs and SDKs for all products' },
      { title: 'Revenue Target: $170K MRR', status: 'planned', description: 'Freemium conversion and early enterprise customers' },
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    items: [
      { title: 'Shields AI v1.0 Launch', status: 'planned', description: 'Full production release' },
      { title: 'Hippo v1.0 Launch', status: 'planned', description: 'Production release with cloud sync' },
      { title: 'Mobile Apps - Chai.im', status: 'planned', description: 'iOS and Android native apps' },
      { title: 'Self-Hosting Support', status: 'planned', description: 'Docker images and deployment guides' },
      { title: 'Community Marketplace', status: 'planned', description: 'Third-party integrations and plugins' },
      { title: 'Revenue Target: $320K MRR', status: 'planned', description: 'Growing user base and enterprise adoption' },
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    items: [
      { title: 'Enterprise Suite Launch', status: 'planned', description: 'Unified enterprise dashboard for all products' },
      { title: 'AI Model Improvements', status: 'planned', description: 'Enhanced local AI processing across products' },
      { title: 'International Expansion', status: 'planned', description: 'Multi-language support and global infrastructure' },
      { title: 'Developer Bounty Program', status: 'planned', description: 'Incentivized contribution program' },
      { title: 'Partnership Announcements', status: 'planned', description: 'Strategic partnerships and integrations' },
      { title: 'Revenue Target: $465K MRR', status: 'planned', description: '$5.6M ARR run rate, sustainable growth' },
    ],
  },
  {
    quarter: '2026+',
    status: 'future',
    items: [
      { title: 'New Products', status: 'future', description: 'Additional privacy-first tools in development' },
      { title: 'Ecosystem Growth', status: 'future', description: 'Community-driven extensions and integrations' },
      { title: 'Research Initiatives', status: 'future', description: 'Privacy and cryptography research contributions' },
      { title: 'Industry Standards', status: 'future', description: 'Contributing to open standards and protocols' },
    ],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-grep-green" />
    case 'in-progress':
      return <Circle className="w-5 h-5 text-grep-orange" />
    default:
      return <Circle className="w-5 h-5 text-gray-400 dark:text-gray-600" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'border-grep-green/30 bg-grep-green/5'
    case 'in-progress':
      return 'border-grep-orange/30 bg-grep-orange/5'
    case 'planned':
      return 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
    default:
      return 'border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
  }
}

export default function Roadmap() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-black dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-grep-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-grep-pink/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Roadmap</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            What's Next
            <br />
            <span className="gradient-text">Coming Soon</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our plans for the next year and beyond. Priorities may shift based on user feedback and community needs.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
          {roadmapItems.map((quarter, index) => (
            <motion.div
              key={quarter.quarter}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Quarter Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-2xl font-extralight text-gray-900 dark:text-white">{quarter.quarter}</h3>
                </div>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  quarter.status === 'in-progress' 
                    ? 'bg-grep-orange/20 text-grep-orange' 
                    : quarter.status === 'completed'
                    ? 'bg-grep-green/20 text-grep-green'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  {quarter.status === 'in-progress' ? 'In Progress' : quarter.status === 'completed' ? 'Completed' : 'Planned'}
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quarter.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                    className={`border rounded-xl p-6 ${getStatusColor(item.status)} transition-all hover:shadow-lg`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      {getStatusIcon(item.status)}
                      <h4 className="text-lg font-light text-gray-900 dark:text-white flex-1">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8">
            <Rocket className="w-8 h-8 text-grep-purple dark:text-grep-pink mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Our roadmap is driven by user feedback and community needs. 
              Have a feature request or want to contribute?{' '}
              <a href="mailto:hello@greplabs.com" className="text-grep-purple dark:text-grep-pink hover:underline">
                Get in touch
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


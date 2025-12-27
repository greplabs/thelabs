'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Gamepad2, MessageSquare, Shield, Folder } from 'lucide-react'

const caseStudies = [
  {
    icon: Shield,
    name: 'Shields AI',
    tagline: 'AI-Powered DNS Protection',
    challenge: 'Build DNS protection with <1ms latency, handling 100K+ QPS.',
    solution: 'eBPF-based kernel filtering with lightweight ML models for threat detection.',
    results: ['<1ms target latency', 'eBPF kernel filtering', 'ML threat detection'],
    gradient: 'from-green-500 to-cyan-500',
    id: 'shields',
  },
  {
    icon: Folder,
    name: 'Hippo',
    tagline: 'Semantic File Search',
    challenge: 'Natural language search across 100K+ files, all processed locally.',
    solution: 'Local-first architecture with quantized embeddings and vector search.',
    results: ['100K+ file capacity', '<100ms search', 'E2EE cross-device sync'],
    gradient: 'from-orange-500 to-yellow-500',
    id: 'hippo',
  },
  {
    icon: Gamepad2,
    name: 'GrepCoin',
    tagline: 'Developer Arcade',
    challenge: 'Build a complete gaming platform in 6 months with sustainable economics.',
    solution: 'Human-AI collaboration accelerated development. Games first, tokens second.',
    results: ['9 arcade games', '4 smart contracts', '91 API endpoints'],
    gradient: 'from-purple-500 to-pink-500',
    id: 'grepcoin',
  },
  {
    icon: MessageSquare,
    name: 'Chai.im',
    tagline: 'Enterprise Messaging',
    challenge: 'Signal-level encryption with enterprise compliance features.',
    solution: 'Signal Protocol with local AI processing and FIDO2 authentication.',
    results: ['Signal Protocol', 'HIPAA-ready', 'Local AI processing'],
    gradient: 'from-blue-500 to-cyan-500',
    id: 'chai',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
            Real Problems. <span className="gradient-text">Real Solutions.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
            How we're building each product
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/products/${study.id}`}
                  className="block bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-gray-300 dark:hover:border-gray-700 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{study.name}</h3>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{study.tagline}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-light mb-3">{study.challenge}</p>
                      <div className="flex flex-wrap gap-1">
                        {study.results.map((result) => (
                          <span key={result} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

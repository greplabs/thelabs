'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Sparkles, Code, Shield, MessageSquare, Folder } from 'lucide-react'

const caseStudies = [
  {
    icon: Code,
    title: 'GrepCoin: AI-Built Gaming Platform',
    challenge: 'Build a complete crypto gaming platform in 6 months—something that traditionally takes years. We needed smart contracts, multiple games, tokenomics, and a scalable platform.',
    solution: 'During our incubation (June-December 2024), we leveraged human-AI collaboration. AI accelerated game logic generation and boilerplate code, while we focused on game design, user experience, and smart contract security. We built 9 games (Snake, Tetris, Pong, Asteroids, Breakout, Space Invaders, Pac-Man, Minesweeper, Tic-Tac-Toe), deployed smart contracts (GrepToken, GrepStakingPool, GrepAchievements, GrepGovernor), and created 91 API endpoints with 112 React components.',
    results: [
      '9 fully functional browser games built in 6 months',
      'Complete smart contract suite (4 contracts) on Base L2',
      '91 API endpoints and 112 React components',
      '500M GREP token supply with balanced tokenomics',
      '4-tier staking system with real yield',
      'Discord community established',
    ],
    tech: ['Next.js 15', 'Solidity', 'Base L2', 'Prisma', 'PostgreSQL', 'React'],
    gradient: 'from-grep-purple/20 to-grep-pink/20',
    link: 'https://grepcoin.io',
    timeline: 'June - December 2024 (6 months)',
  },
  {
    icon: MessageSquare,
    title: 'Chai.im: Privacy-First Messaging',
    challenge: 'Create a messaging platform that combines Signal-level encryption with modern AI features—without compromising privacy. Most solutions either sacrifice features for privacy or privacy for features.',
    solution: 'During research phase (July-December 2024), we designed a local-first architecture where all AI processing happens on-device using WebAssembly. We planned Signal Protocol (X3DH + Double Ratchet) for end-to-end encryption, FIDO2/WebAuthn for hardware key authentication (YubiKey, Touch ID), and built a terminal client prototype for developer adoption. Messages are encrypted before leaving the device, and AI summaries are generated locally.',
    results: [
      'Signal Protocol architecture designed (X3DH + Double Ratchet)',
      'Local AI processing pipeline (WebAssembly-based)',
      'FIDO2/WebAuthn authentication flow designed',
      'Terminal client (TUI) prototype working',
      'Privacy-preserving analytics (no message content)',
      'Progressive Web App architecture planned',
    ],
    tech: ['Rust', 'Axum', 'Next.js 14', 'WebAssembly', 'Signal Protocol', 'FIDO2'],
    gradient: 'from-grep-blue/20 to-grep-cyan/20',
    link: 'https://chai.im',
    timeline: 'July - December 2024 (Research & Design)',
  },
  {
    icon: Shield,
    title: 'Shields AI: High-Performance DNS Security',
    challenge: 'Build DNS protection that blocks threats in real-time with <1ms latency, handling 100K+ queries per second. Existing solutions are slow (>10ms) and can\'t handle enterprise-scale QPS.',
    solution: 'During research phase (August-December 2024), we benchmarked existing solutions and discovered that user-space to kernel-space transitions were the bottleneck. We designed an eBPF-based DNS filtering system that processes queries in kernel space, eliminating context switches. We planned lightweight ML models for threat detection (local, <1ms inference) and designed a high-performance blocklist system (in-memory, indexed).',
    results: [
      'Architecture designed for <1ms query latency',
      'eBPF kernel-level filtering strategy',
      'Lightweight ML models (<1ms inference)',
      '100K+ QPS capacity architecture',
      'Custom blocklist system (incremental updates)',
      'Zero-trust DNS design',
    ],
    tech: ['Rust', 'eBPF', 'Kubernetes', 'Vector DBs', 'ML Models', 'DNS-over-HTTPS'],
    gradient: 'from-grep-green/20 to-grep-cyan/20',
    link: '#',
    timeline: 'August - December 2024 (Research & Design)',
  },
  {
    icon: Folder,
    title: 'Hippo: Semantic File Search',
    challenge: 'Enable natural language search across 100K+ files with instant results, all processed locally for privacy. Cloud-based solutions index your files (privacy risk), and local tools can\'t handle scale or semantics.',
    solution: 'During design phase (September-December 2024), we designed a local-first architecture using SQLite for metadata and vector databases for embeddings. We planned quantized embedding models (10x smaller, 90% accuracy) for on-device processing, incremental indexing (only new/changed files), and encrypted cross-device sync (E2EE). Prototype tests showed 50K files indexed in 8 minutes, with <100ms search latency.',
    results: [
      'Local-first architecture (all data on device)',
      'Vector embedding strategy (quantized models)',
      'Incremental indexing (50K files in 8 minutes)',
      'Semantic search with natural language queries',
      'Encrypted cross-device sync (E2EE)',
      'Tauri framework for native performance',
    ],
    tech: ['Rust', 'Tauri', 'SQLite', 'Vector Embeddings', 'WebAssembly', 'E2EE Sync'],
    gradient: 'from-grep-orange/20 to-grep-yellow/20',
    link: '#',
    timeline: 'September - December 2024 (Design & Prototype)',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/20 dark:to-black relative overflow-hidden">
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Case Studies</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Real Problems.
            <br />
            <span className="gradient-text">Real Solutions.</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deep dives into how we built each product, the challenges we faced, and the solutions we delivered.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-10 md:p-12 hover:border-gray-300 dark:hover:border-gray-700 transition-all`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-4">
                      {study.title}
                    </h3>

                    <div className="space-y-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Challenge
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Solution
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-light">
                              <span className="text-grep-purple dark:text-grep-pink mt-1">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Timeline */}
                    {study.timeline && (
                      <div className="mb-4">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                          Timeline: {study.timeline}
                        </span>
                      </div>
                    )}

                    {/* Link */}
                    {study.link !== '#' && (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors font-medium"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


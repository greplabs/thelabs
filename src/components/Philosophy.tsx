'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Users, Shield, Zap, Sparkles } from 'lucide-react'

const philosophies = [
  {
    icon: Code,
    title: 'Open Source Core',
    description: 'Every product we build has an open-source core. This isn\'t just a marketing strategy—it\'s fundamental to how we operate.',
    details: [
      'Open source ensures transparency, builds trust, and enables community-driven innovation.',
      'Users can audit our code, contribute improvements, and fork our projects if needed.',
      'The core functionality is free and open. Premium features provide value while funding continued development.',
    ],
    link: '/open-source',
    gradient: 'from-grep-purple/10 to-grep-pink/10',
    borderColor: 'border-grep-purple/20',
  },
  {
    icon: Users,
    title: 'Freemium Model',
    description: 'We believe powerful software shouldn\'t be locked behind paywalls. Our freemium model ensures core functionality remains accessible to everyone.',
    details: [
      'Free users get fully functional products.',
      'Premium users get advanced features, priority support, and enhanced capabilities.',
      'This model democratizes access while creating sustainable revenue streams.',
    ],
    link: '/freemium',
    gradient: 'from-grep-blue/10 to-grep-cyan/10',
    borderColor: 'border-grep-blue/20',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Privacy isn\'t a feature—it\'s a fundamental right. Every product is designed with privacy as a core principle, not an afterthought.',
    details: [
      'Local-first architecture where possible.',
      'End-to-end encryption for all communications.',
      'Minimal data collection, maximum transparency.',
    ],
    link: '/privacy',
    gradient: 'from-grep-green/10 to-grep-cyan/10',
    borderColor: 'border-grep-green/20',
  },
  {
    icon: Zap,
    title: 'AI-Powered Innovation',
    description: 'Modern AI enhances every experience while maintaining privacy through local processing. We use AI to solve real problems, not just as a buzzword.',
    details: [
      'Local AI processing keeps data on your device.',
      'Privacy-preserving machine learning.',
      'Intelligent features that respect user autonomy.',
    ],
    link: '/monetization',
    gradient: 'from-grep-orange/10 to-grep-yellow/10',
    borderColor: 'border-grep-orange/20',
  },
]

export default function Philosophy() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-grep-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-grep-pink/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Philosophy</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            Why We Build
            <br />
            <span className="gradient-text">The Way We Do</span>
          </h2>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our principles guide every decision, every line of code, every feature.
          </p>
        </motion.div>

        {/* Philosophy cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon
            return (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${philosophy.gradient} border ${philosophy.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                  {philosophy.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                  {philosophy.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {philosophy.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 font-light flex items-start gap-2">
                      <span className="text-grep-purple dark:text-grep-pink mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={philosophy.link}
                  className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all group/link"
                >
                  Learn more
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

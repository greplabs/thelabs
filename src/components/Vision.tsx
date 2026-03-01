'use client'

import { motion } from 'framer-motion'
import { Code, Shield, Lock, Rocket, Server, Cloud, Building2, Check } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  { icon: Code, title: 'Open Core', description: 'Core engines are MIT licensed. Audit, contribute, self-host.' },
  { icon: Shield, title: 'Enterprise Ready', description: 'HIPAA, SOC2 compliance features built-in.' },
  { icon: Lock, title: 'Privacy First', description: 'Local processing. Your data never leaves your infrastructure.' },
  { icon: Rocket, title: 'AI-Powered', description: 'Built with AI agents for rapid development and maintenance.' },
]

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For individual developers and small teams',
    icon: Code,
    features: [
      'Open-source core components',
      'Community support',
      'Self-hosted deployment',
      'Basic documentation',
      'GitHub discussions',
    ],
    cta: 'Get Started',
    href: '/docs/getting-started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49/mo',
    description: 'For growing teams that need more',
    icon: Cloud,
    features: [
      'Everything in Starter',
      'Premium UI components',
      'Email support',
      'Cloud hosting option',
      'Advanced analytics',
      'Priority bug fixes',
    ],
    cta: 'Start Trial',
    href: '/signup',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with specific needs',
    icon: Building2,
    features: [
      'Everything in Pro',
      'Self-hosted or managed cloud',
      'Dedicated support engineer',
      'Custom SLAs',
      'SSO/SAML integration',
      'Audit logs & compliance',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    href: '/enterprise',
    highlight: false,
  },
]

const deploymentOptions = [
  {
    icon: Server,
    title: 'Self-Hosted',
    description: 'Deploy on your infrastructure. Full control, full privacy.',
    features: ['Docker/Kubernetes', 'Air-gapped support', 'Custom domains'],
  },
  {
    icon: Cloud,
    title: 'Managed Cloud',
    description: 'We handle the infrastructure. You focus on your work.',
    features: ['99.9% SLA', 'Auto-scaling', 'Global edge network'],
  },
]

export default function Vision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
            Enterprise <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Open-source core with premium tiers. Self-host or use our managed cloud.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-light">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6 text-center">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white dark:bg-black border rounded-xl p-6 ${
                    tier.highlight
                      ? 'border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-500/10'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-medium bg-purple-500 text-white rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{tier.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-extralight text-gray-900 dark:text-white">{tier.price}</span>
                    {tier.price !== 'Free' && tier.price !== 'Custom' && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">/user</span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`block w-full py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
                      tier.highlight
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6 text-center">Deployment Options</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {deploymentOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-black flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{option.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{option.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded text-gray-600 dark:text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

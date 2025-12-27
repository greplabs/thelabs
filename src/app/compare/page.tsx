import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, X, Minus, Shield, Folder, MessageSquare, Gamepad2 } from 'lucide-react'

const comparisons = [
  {
    product: 'Shields AI',
    icon: Shield,
    color: 'from-grep-green to-grep-cyan',
    competitors: [
      {
        name: 'Pi-hole',
        type: 'Open Source',
        comparison: [
          { feature: 'Setup Complexity', us: 'Simple (1-click)', them: 'Technical (requires hardware/VM)' },
          { feature: 'AI Threat Detection', us: true, them: false },
          { feature: 'Managed Updates', us: true, them: false },
          { feature: 'Mobile Support', us: true, them: 'Limited' },
          { feature: 'Enterprise Features', us: true, them: false },
          { feature: 'Price', us: 'Free - $4.99/mo', them: 'Free (self-hosted costs)' },
        ],
        verdict: 'Pi-hole is great for technical users who want full control. Shields AI is better for those who want AI-powered protection without the setup hassle.',
      },
      {
        name: 'NextDNS',
        type: 'SaaS',
        comparison: [
          { feature: 'AI Threat Detection', us: true, them: false },
          { feature: 'Self-Hosted Option', us: true, them: false },
          { feature: 'Open Source', us: true, them: false },
          { feature: 'Custom Blocklists', us: true, them: true },
          { feature: 'Analytics', us: true, them: true },
          { feature: 'Price', us: 'Free - $4.99/mo', them: 'Free - $19.90/yr' },
        ],
        verdict: 'NextDNS is a solid choice. Shields AI offers AI-powered threat detection and open source transparency that NextDNS lacks.',
      },
      {
        name: 'Cisco Umbrella',
        type: 'Enterprise',
        comparison: [
          { feature: 'SMB Pricing', us: '$4.99/mo', them: '$2-5/user/mo' },
          { feature: 'Setup Time', us: 'Minutes', them: 'Days/Weeks' },
          { feature: 'Self-Hosted', us: true, them: false },
          { feature: 'Open Source', us: true, them: false },
          { feature: 'Enterprise Support', us: true, them: true },
          { feature: 'AI Detection', us: true, them: true },
        ],
        verdict: 'Cisco Umbrella is the enterprise standard but overkill for most. Shields AI offers similar protection at a fraction of the cost and complexity.',
      },
    ],
  },
  {
    product: 'Hippo',
    icon: Folder,
    color: 'from-grep-orange to-grep-yellow',
    competitors: [
      {
        name: 'Spotlight (macOS)',
        type: 'Built-in',
        comparison: [
          { feature: 'Semantic Search', us: true, them: false },
          { feature: 'Cross-Platform', us: true, them: false },
          { feature: 'AI Auto-Tagging', us: true, them: false },
          { feature: 'Cloud Sync', us: 'Optional (E2EE)', them: 'iCloud only' },
          { feature: 'File Limit', us: '100K+', them: 'Unlimited' },
          { feature: 'Price', us: 'Free - $19.99/mo', them: 'Free' },
        ],
        verdict: 'Spotlight is convenient but limited to keywords. Hippo understands what you\'re looking for, even if you don\'t use exact terms.',
      },
      {
        name: 'Alfred',
        type: 'Productivity App',
        comparison: [
          { feature: 'Semantic Search', us: true, them: false },
          { feature: 'AI Features', us: true, them: 'Via workflows' },
          { feature: 'File Organization', us: true, them: false },
          { feature: 'Cross-Platform', us: true, them: false },
          { feature: 'Workflows/Automation', us: 'Coming', them: true },
          { feature: 'Price', us: 'Free - $19.99/mo', them: 'Free - £59 one-time' },
        ],
        verdict: 'Alfred excels at workflows and quick actions. Hippo is purpose-built for finding files using natural language.',
      },
      {
        name: 'Notion',
        type: 'SaaS',
        comparison: [
          { feature: 'Local-First', us: true, them: false },
          { feature: 'Privacy', us: 'Full (local)', them: 'Cloud-based' },
          { feature: 'Existing Files', us: true, them: 'Import only' },
          { feature: 'Offline', us: true, them: 'Limited' },
          { feature: 'Semantic Search', us: true, them: 'Basic AI' },
          { feature: 'Price', us: 'Free - $19.99/mo', them: 'Free - $10/mo' },
        ],
        verdict: 'Notion is great for creating new documents. Hippo organizes files you already have, locally and privately.',
      },
    ],
  },
  {
    product: 'Chai.im',
    icon: MessageSquare,
    color: 'from-grep-blue to-grep-cyan',
    competitors: [
      {
        name: 'Signal',
        type: 'Consumer',
        comparison: [
          { feature: 'E2E Encryption', us: true, them: true },
          { feature: 'Enterprise Features', us: true, them: false },
          { feature: 'HIPAA Compliance', us: true, them: false },
          { feature: 'SSO Integration', us: true, them: false },
          { feature: 'Audit Logging', us: true, them: false },
          { feature: 'Self-Hosted', us: true, them: false },
          { feature: 'Price', us: 'Free - $49/user', them: 'Free' },
        ],
        verdict: 'Signal is excellent for personal use. Chai.im adds the enterprise features (compliance, SSO, audit logs) that businesses need.',
      },
      {
        name: 'Slack',
        type: 'Enterprise',
        comparison: [
          { feature: 'E2E Encryption', us: true, them: 'Enterprise only' },
          { feature: 'Privacy Focus', us: true, them: false },
          { feature: 'HIPAA Compliance', us: true, them: 'Enterprise only' },
          { feature: 'Self-Hosted', us: true, them: false },
          { feature: 'Integrations', us: 'Growing', them: 'Extensive' },
          { feature: 'Price', us: 'Free - $49/user', them: 'Free - $15/user' },
        ],
        verdict: 'Slack dominates workplace chat but lacks true E2E encryption. Chai.im is for teams that can\'t compromise on security.',
      },
      {
        name: 'Microsoft Teams',
        type: 'Enterprise',
        comparison: [
          { feature: 'E2E Encryption', us: true, them: '1:1 only' },
          { feature: 'Privacy Focus', us: true, them: false },
          { feature: 'HIPAA Compliance', us: true, them: true },
          { feature: 'Self-Hosted', us: true, them: false },
          { feature: 'Office Integration', us: false, them: true },
          { feature: 'Price', us: 'Free - $49/user', them: 'Part of M365' },
        ],
        verdict: 'Teams is great if you\'re all-in on Microsoft. Chai.im offers better encryption and works for privacy-conscious teams.',
      },
    ],
  },
  {
    product: 'GrepCoin',
    icon: Gamepad2,
    color: 'from-grep-purple to-grep-pink',
    competitors: [
      {
        name: 'Traditional Mobile Games',
        type: 'Gaming',
        comparison: [
          { feature: 'Free to Play', us: true, them: 'Usually' },
          { feature: 'Optional Rewards', us: 'Crypto', them: 'None' },
          { feature: 'Pay-to-Win', us: false, them: 'Often' },
          { feature: 'Data Privacy', us: true, them: 'Varies' },
          { feature: 'Ownership of Assets', us: 'Optional NFTs', them: false },
          { feature: 'Price', us: 'Free', them: 'Free + IAP' },
        ],
        verdict: 'Traditional games often push aggressive monetization. GrepCoin games are fun first, with optional crypto rewards that don\'t affect gameplay.',
      },
      {
        name: 'Play-to-Earn Games',
        type: 'Crypto Gaming',
        comparison: [
          { feature: 'Fun Gameplay', us: true, them: 'Often lacking' },
          { feature: 'Sustainable Economics', us: true, them: 'Usually not' },
          { feature: 'Entry Cost', us: 'Free', them: 'Often expensive' },
          { feature: 'Token Stability', us: 'Capped rewards', them: 'Volatile' },
          { feature: 'No Ponzi Mechanics', us: true, them: 'Varies' },
        ],
        verdict: 'Most P2E games failed because they prioritized token speculation over fun. GrepCoin is gaming-first, rewards-second.',
      },
    ],
  },
]

export default function ComparePage() {
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
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            How We
            <br />
            <span className="gradient-text">Compare</span>
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl">
            Honest comparisons with alternatives. We&apos;ll tell you when another product might be a better fit.
          </p>
        </div>

        {/* Jump Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          {comparisons.map((section) => {
            const Icon = section.icon
            return (
              <a
                key={section.product}
                href={`#${section.product.toLowerCase().replace(' ', '-')}`}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${section.color} text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity`}
              >
                <Icon className="w-4 h-4" />
                {section.product}
              </a>
            )
          })}
        </div>

        {/* Comparisons */}
        {comparisons.map((section) => {
          const Icon = section.icon
          return (
            <section
              key={section.product}
              id={section.product.toLowerCase().replace(' ', '-')}
              className="mb-20 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-extralight text-gray-900 dark:text-white">{section.product}</h2>
              </div>

              <div className="space-y-8">
                {section.competitors.map((competitor) => (
                  <div
                    key={competitor.name}
                    className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-light text-gray-900 dark:text-white">
                            {section.product} vs {competitor.name}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{competitor.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Feature</th>
                            <th className="text-center p-4 font-medium text-gray-900 dark:text-white">{section.product}</th>
                            <th className="text-center p-4 font-medium text-gray-500 dark:text-gray-400">{competitor.name}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {competitor.comparison.map((row, i) => (
                            <tr key={i} className="border-b border-gray-200 dark:border-gray-800 last:border-0">
                              <td className="p-4 text-gray-600 dark:text-gray-400 font-light">{row.feature}</td>
                              <td className="p-4 text-center">
                                {typeof row.us === 'boolean' ? (
                                  row.us ? (
                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-red-500 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-gray-900 dark:text-white font-light">{row.us}</span>
                                )}
                              </td>
                              <td className="p-4 text-center">
                                {typeof row.them === 'boolean' ? (
                                  row.them ? (
                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-red-500 mx-auto" />
                                  )
                                ) : row.them === 'Limited' || row.them === 'Varies' ? (
                                  <span className="text-yellow-600 dark:text-yellow-400 font-light">{row.them}</span>
                                ) : (
                                  <span className="text-gray-500 dark:text-gray-400 font-light">{row.them}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-900">
                      <p className="text-gray-600 dark:text-gray-400 font-light">
                        <strong className="text-gray-900 dark:text-white font-medium">Our take:</strong> {competitor.verdict}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-grep-purple/10 to-grep-pink/10 border border-grep-purple/20 rounded-2xl">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-4">
            Ready to Try GrepLabs?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-8">
            All products include a generous free tier. No credit card required.
          </p>
          <Link
            href="/app-store"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

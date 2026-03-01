import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Check, Shield, Server, Cloud, Building2, Lock, Users, Headphones, FileCheck, Zap, Bot, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise - GrepLabs',
  description: 'Enterprise-grade AI-built software with self-hosted support, compliance features, and dedicated support.',
}

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'For individual developers and open-source projects',
    icon: Code,
    features: [
      { text: 'All open-source core components', included: true },
      { text: 'Self-hosted deployment', included: true },
      { text: 'Community support (GitHub)', included: true },
      { text: 'Basic documentation', included: true },
      { text: 'MIT license', included: true },
      { text: 'Email support', included: false },
      { text: 'Premium UI components', included: false },
      { text: 'SLA guarantee', included: false },
    ],
    cta: 'Get Started',
    href: '/docs/getting-started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/user/month',
    description: 'For growing teams that need premium features',
    icon: Cloud,
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Premium UI components', included: true },
      { text: 'Cloud or self-hosted', included: true },
      { text: 'Email support (48hr response)', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Team management', included: true },
      { text: 'Priority bug fixes', included: true },
      { text: 'Custom integrations', included: false },
    ],
    cta: 'Start 14-Day Trial',
    href: '/signup?plan=pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with compliance requirements',
    icon: Building2,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Dedicated support engineer', included: true },
      { text: 'Custom SLA (up to 99.99%)', included: true },
      { text: 'SSO/SAML integration', included: true },
      { text: 'HIPAA & SOC2 compliance', included: true },
      { text: 'Audit logs & access controls', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'On-premise deployment', included: true },
    ],
    cta: 'Contact Sales',
    href: 'mailto:enterprise@greplabs.com',
    highlight: false,
  },
]

const features = [
  {
    icon: Server,
    title: 'Self-Hosted Deployment',
    description: 'Deploy on your own infrastructure. Docker, Kubernetes, or bare metal. Air-gapped environments supported.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'HIPAA, SOC2, GDPR compliance features built-in. Audit logs, access controls, and data residency options.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SSO/SAML, hardware key authentication, role-based access control, and encrypted data at rest.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Named support engineer, custom SLAs, priority escalation, and direct access to engineering team.',
  },
  {
    icon: Bot,
    title: 'AI-Powered',
    description: 'Built with AI collaboration. Continuous improvement through AI agents that maintain and enhance the codebase.',
  },
  {
    icon: FileCheck,
    title: 'Open Core',
    description: 'Core engines are MIT licensed. Audit the code, contribute improvements, or build custom extensions.',
  },
]

const products = [
  {
    name: 'Shield AI',
    description: 'AI-powered DNS protection with ML threat detection. <1ms latency, 100K+ QPS.',
    useCase: 'Network security for enterprises',
  },
  {
    name: 'Chai.im',
    description: 'Signal Protocol encrypted messaging with HIPAA compliance features.',
    useCase: 'Secure communication for healthcare & legal',
  },
  {
    name: 'Hippo',
    description: 'Local AI file organization with semantic search across 100K+ files.',
    useCase: 'Document management & knowledge base',
  },
  {
    name: 'GrepCoin',
    description: 'Developer engagement platform with gamification and token rewards.',
    useCase: 'Developer relations & community building',
  },
]

export default function EnterprisePage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Building2 className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enterprise Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            AI-Built Software for <span className="gradient-text">Enterprise</span>
          </h1>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Open-source core with enterprise-grade features. Self-host or use our managed cloud.
          </p>
        </div>

        {/* Pricing Tiers */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => {
              const Icon = tier.icon
              return (
                <div
                  key={tier.name}
                  className={`relative bg-white dark:bg-black border rounded-2xl p-6 ${
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
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">{tier.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-extralight text-gray-900 dark:text-white">{tier.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.included ? 'text-green-500' : 'text-gray-300 dark:text-gray-600'}`} />
                        <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                      tier.highlight
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8 text-center">Enterprise Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="p-6 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Products for Enterprise */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8 text-center">Products for Enterprise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.name} className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{product.description}</p>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{product.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Talk to our enterprise team about your specific requirements. We offer custom deployments, compliance support, and dedicated engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:enterprise@greplabs.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

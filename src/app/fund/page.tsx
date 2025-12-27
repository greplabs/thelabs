import Link from 'next/link'
import { ArrowLeft, Heart, Github, Globe, Coins, Users, Target, CheckCircle, ExternalLink, Zap } from 'lucide-react'

const fundingTiers = [
  {
    name: 'Supporter',
    amount: '$5/month',
    description: 'Help keep the lights on',
    benefits: [
      'Name in supporters list',
      'Discord supporter role',
      'Early access to updates',
    ],
    color: 'from-gray-400 to-gray-500',
  },
  {
    name: 'Backer',
    amount: '$25/month',
    description: 'Fuel active development',
    benefits: [
      'All Supporter benefits',
      'Vote on feature priorities',
      'Monthly dev updates',
      'Beta access to all products',
    ],
    color: 'from-grep-blue to-grep-cyan',
    popular: true,
  },
  {
    name: 'Sponsor',
    amount: '$100/month',
    description: 'Accelerate our mission',
    benefits: [
      'All Backer benefits',
      'Logo on website',
      'Direct chat with team',
      'Priority feature requests',
      'Quarterly strategy calls',
    ],
    color: 'from-grep-purple to-grep-pink',
  },
  {
    name: 'Champion',
    amount: '$500/month',
    description: 'Lead the movement',
    benefits: [
      'All Sponsor benefits',
      'Advisory board seat',
      'Custom integrations support',
      'White-glove onboarding',
      'Annual retreat invitation',
    ],
    color: 'from-grep-orange to-grep-yellow',
  },
]

const fundingPlatforms = [
  {
    name: 'GitHub Sponsors',
    description: 'Direct funding with 0% platform fees. Best for developers.',
    fee: '~3% payment processing only',
    url: 'https://github.com/sponsors/greplabs',
    icon: Github,
    recommended: true,
  },
  {
    name: 'Open Collective',
    description: 'Transparent finances with fiscal hosting. See exactly where funds go.',
    fee: '10% + payment processing',
    url: 'https://opencollective.com/greplabs',
    icon: Globe,
  },
  {
    name: 'Gitcoin Grants',
    description: 'Quadratic funding for public goods. Your $1 could become $10+.',
    fee: '5% + gas fees',
    url: 'https://gitcoin.co/grants',
    icon: Coins,
  },
]

const fundingGoals = [
  {
    target: '$50K',
    title: 'Launch Shields AI Alpha',
    description: 'Fund infrastructure for DNS security alpha testing with 1,000 users.',
    raised: '$0',
    percentage: 0,
    priority: 'Current',
  },
  {
    target: '$150K',
    title: 'Chai.im Enterprise Beta',
    description: 'HIPAA compliance certification and enterprise security audit.',
    raised: '$0',
    percentage: 0,
    priority: 'Next',
  },
  {
    target: '$100K',
    title: 'Hippo Desktop Launch',
    description: 'Native apps for macOS, Windows, and Linux with full AI integration.',
    raised: '$0',
    percentage: 0,
    priority: 'Planned',
  },
  {
    target: '$200K',
    title: 'Full Product Suite Launch',
    description: 'All four products live with dedicated support team.',
    raised: '$0',
    percentage: 0,
    priority: 'Vision',
  },
]

const impactMetrics = [
  { label: 'Products in Development', value: '4' },
  { label: 'Target Launch', value: 'Q1-Q3 2026' },
  { label: 'Open Source Commitment', value: '100% Core' },
  { label: 'Revenue Transparency', value: 'Quarterly Reports' },
]

export default function FundPage() {
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

        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Community Funding</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Fund the
            <br />
            <span className="gradient-text">Future of Privacy</span>
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            GrepLabs is building privacy-first, AI-powered software for everyone.
            We need community support to go from development to launch.
            Every contribution accelerates our mission.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
            <Zap className="w-4 h-4" />
            100% of funds go to product development and infrastructure
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-light">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Funding Goals */}
        <section className="mb-20">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8 text-center">
            Funding <span className="gradient-text">Goals</span>
          </h2>
          <div className="space-y-4">
            {fundingGoals.map((goal) => (
              <div key={goal.title} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-light text-gray-900 dark:text-white">{goal.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        goal.priority === 'Current'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : goal.priority === 'Next'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {goal.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-light">{goal.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extralight text-gray-900 dark:text-white">{goal.target}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">target</div>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-grep-purple to-grep-pink rounded-full transition-all duration-500"
                    style={{ width: `${goal.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{goal.raised} raised</span>
                  <span>{goal.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Funding Platforms */}
        <section className="mb-20">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8 text-center">
            Choose Your <span className="gradient-text">Platform</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fundingPlatforms.map((platform) => {
              const Icon = platform.icon
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative bg-white dark:bg-black border-2 rounded-xl p-6 transition-all hover:shadow-lg hover:scale-[1.02] ${
                    platform.recommended
                      ? 'border-grep-purple dark:border-grep-pink'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  {platform.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-grep-purple to-grep-pink text-white text-xs font-medium px-3 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                    <h3 className="text-xl font-light text-gray-900 dark:text-white">{platform.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-light mb-4">{platform.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Fee: {platform.fee}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="mb-20">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8 text-center">
            Sponsorship <span className="gradient-text">Tiers</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white dark:bg-black border-2 rounded-xl p-6 ${
                  tier.popular
                    ? 'border-grep-purple dark:border-grep-pink'
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-grep-purple to-grep-pink text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-1">{tier.name}</h3>
                <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-2">{tier.amount}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-grep-green flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Fund Us */}
        <section className="mb-20 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8 text-center">
            Why Fund <span className="gradient-text">GrepLabs</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-grep-purple/20 to-grep-pink/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-grep-purple dark:text-grep-pink" />
              </div>
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Privacy for Everyone</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                We believe privacy shouldn&apos;t be a luxury. Your funding helps us keep core features free and open source.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-grep-green/20 to-grep-cyan/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-grep-green" />
              </div>
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Transparent Spending</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                Every dollar is tracked. Quarterly reports show exactly where funds go. Open Collective provides full transparency.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-grep-orange/20 to-grep-yellow/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-grep-orange" />
              </div>
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">Real Products, Real Impact</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                Four products ready for launch. Your funding bridges the gap between development and deployment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-4">
            Ready to Support?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Choose your platform and tier. Every contribution, no matter the size, helps us build a more private future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sponsors/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              Sponsor on GitHub
            </a>
            <a
              href="https://opencollective.com/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Open Collective
            </a>
          </div>
        </section>

        {/* Links */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-6 justify-center text-sm">
          <Link href="/open-revenue-strategy" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Open Revenue Strategy
          </Link>
          <Link href="/monetization" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Monetization Model
          </Link>
          <Link href="/open-source" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Open Source Commitment
          </Link>
        </div>
      </div>
    </main>
  )
}

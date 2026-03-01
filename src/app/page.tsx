import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Rocket, Sparkles, Shield, Gamepad2, MessageSquare, Folder, Bell, Cpu, Layers, Code, Bot, Zap, GitBranch, Container, Terminal, Boxes } from 'lucide-react'
import Logo from '@/components/Logo'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'GrepLabs - AI-Built Enterprise Software | Open Core Platform',
  description: 'Enterprise software built with AI. Open-source core components with premium tiers and self-hosted support. DNS protection, secure messaging, file organization, and developer gaming.',
}

const products = [
  {
    name: 'Shield AI',
    icon: Shield,
    gradient: 'from-green-500 to-cyan-500',
    description: 'AI-Powered DNS Protection',
    status: 'Feb 1, 2026',
    statusColor: 'green',
    features: ['ML threat detection', '<1ms latency', '100K+ QPS'],
  },
  {
    name: 'GrepCoin',
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Developer Arcade on Base L2',
    status: 'Jan 31, 2026',
    statusColor: 'purple',
    features: ['10 arcade games', 'GREP token', 'Guild system'],
  },
  {
    name: 'Chai.im',
    icon: MessageSquare,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Enterprise Encrypted Messaging',
    status: 'Q2 2026',
    statusColor: 'blue',
    features: ['Signal Protocol', 'HIPAA ready', 'Hardware keys'],
  },
  {
    name: 'Hippo',
    icon: Folder,
    gradient: 'from-orange-500 to-yellow-500',
    description: 'AI-Powered File Organization',
    status: 'Q1 2026',
    statusColor: 'orange',
    features: ['Local AI', 'Semantic search', '100K+ files'],
  },
]

const aiAgents = [
  {
    name: 'Code Agent',
    icon: Code,
    description: 'Writes and refactors code across your codebase',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Test Agent',
    icon: GitBranch,
    description: 'Generates tests and validates functionality',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    name: 'Deploy Agent',
    icon: Container,
    description: 'Manages deployments and infrastructure',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Monitor Agent',
    icon: Cpu,
    description: 'Tracks performance and detects issues',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Optimize Agent',
    icon: Zap,
    description: 'Suggests improvements and optimizations',
    gradient: 'from-pink-500 to-rose-500',
  },
]

const sandboxes = [
  { name: 'DevPods', icon: Terminal },
  { name: 'Docker', icon: Container },
  { name: 'VS Code Remote', icon: Code },
  { name: 'GitHub Codespaces', icon: GitBranch },
  { name: 'Railway', icon: Boxes },
]

const platformHighlights = [
  {
    title: 'Built with AI',
    description: 'Every product developed through human-AI collaboration using Claude, GPT, and custom agents',
    icon: Bot,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Open Core',
    description: 'Core engines are MIT licensed. Premium UX commercially licensed. Self-host or use our cloud.',
    icon: Code,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Enterprise Ready',
    description: 'HIPAA compliance, SOC2, hardware key auth, audit logs, and dedicated support',
    icon: Shield,
    gradient: 'from-pink-500 to-rose-500',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section with Countdown */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <Logo size={90} animated={true} />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 dark:border-indigo-500/30 mb-8 backdrop-blur-sm">
            <Bot className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enterprise Software Built with AI</span>
          </div>

          {/* Main heading - ASCII Art */}
          <div className="hidden md:block mb-8 max-w-full overflow-x-auto">
            <pre className="ascii-art text-gray-400 dark:text-gray-500 mx-auto select-none font-mono relative">
{`
   ██████╗ ██████╗ ███████╗██████╗ ██╗      █████╗ ██████╗ ███████╗
  ██╔════╝ ██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗██╔══██╗██╔════╝
  ██║  ███╗██████╔╝█████╗  ██████╔╝██║     ███████║██████╔╝███████╗
  ██║   ██║██╔══██╗██╔══╝  ██╔═══╝ ██║     ██╔══██║██╔══██╗╚════██║
  ╚██████╔╝██║  ██║███████╗██║     ███████╗██║  ██║██████╔╝███████║
   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝`}
            </pre>
          </div>
          {/* Mobile fallback */}
          <h1 className="md:hidden text-5xl font-extralight tracking-tighter text-gray-900 dark:text-white mb-6 leading-none">
            <span className="gradient-text">GrepLabs</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Privacy-first software built through human-AI collaboration.
            <br />
            <span className="text-gray-400 dark:text-gray-500">Open-source core. Premium tiers. Self-hosted support.</span>
          </p>

          {/* Launch Status Badge */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Launching Q1 2026
            </span>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Get notified at launch</span>
            </div>
            <NewsletterSignup />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            >
              <Layers className="w-4 h-4" />
              Try Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/labs"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <Sparkles className="w-4 h-4" />
              Explore Labs
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
              Why <span className="gradient-text">GrepLabs</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
              Enterprise-grade software built transparently with AI, open-source at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {platformHighlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              View open-source components <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
              Four products built with AI. Open-source core with premium tiers and self-hosted support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => {
              const Icon = product.icon
              const slug = product.name === 'Shield AI' ? 'shields' : product.name === 'Chai.im' ? 'chai' : product.name.toLowerCase()
              return (
                <Link
                  key={product.name}
                  href={`/products/${slug}`}
                  className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5 transition-all hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </h3>
                        <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${
                          product.statusColor === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                          product.statusColor === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' :
                          product.statusColor === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                          'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature) => (
                          <span key={feature} className="text-[9px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity pointer-events-none`} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
              AI Agents <span className="gradient-text">Power Everything</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
              Our products are built and maintained by specialized AI agents working alongside humans.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {aiAgents.map((agent) => {
              const Icon = agent.icon
              return (
                <div key={agent.name} className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                  <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{agent.name}</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-light">{agent.description}</p>
                </div>
              )
            })}
          </div>

          {/* Sandbox Support */}
          <div className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="text-center mb-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Deploy Anywhere</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Integrated with your favorite development environments</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {sandboxes.map((sandbox) => {
                const Icon = sandbox.icon
                return (
                  <div key={sandbox.name} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{sandbox.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4', label: 'Products' },
              { value: '5', label: 'AI Agents' },
              { value: '100%', label: 'Open Core' },
              { value: 'Q1 2026', label: 'Launch' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extralight text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2026 GrepLabs LLC. All rights reserved.
          </p>
          {/* Hidden preview link - accessible at /preview */}
          <Link
            href="/preview"
            className="inline-block mt-4 text-[10px] text-gray-300 dark:text-gray-700 hover:text-gray-500 dark:hover:text-gray-500 transition-colors"
          >
            &bull;
          </Link>
        </div>
      </footer>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Rocket, Sparkles, Shield, Gamepad2, MessageSquare, Folder, Bell, Cpu, Layers, Code } from 'lucide-react'
import CountdownTimer from '@/components/CountdownTimer'
import Logo from '@/components/Logo'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'GrepLabs - AI Agent Infrastructure Platform | Launching March 15, 2026',
  description: 'AI Agent Infrastructure Platform. Deploy, manage, and scale AI agents with MCP tool registry, LangGraph workflows, and real-time monitoring. Launching March 15, 2026.',
}

// March 15, 2026 at midnight UTC
const launchDate = new Date('2026-03-15T00:00:00Z')

const products = [
  {
    name: 'Shields AI',
    icon: Shield,
    gradient: 'from-green-500 to-cyan-500',
    description: 'AI-Powered DNS Protection',
    status: 'Flagship',
  },
  {
    name: 'GrepCoin',
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Developer Arcade on Base L2',
    status: 'Live',
  },
  {
    name: 'Chai.im',
    icon: MessageSquare,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Enterprise Encrypted Messaging',
    status: 'Beta',
  },
  {
    name: 'Hippo',
    icon: Folder,
    gradient: 'from-orange-500 to-yellow-500',
    description: 'The Memory That Never Forgets',
    status: 'Development',
  },
]

const platformHighlights = [
  {
    title: 'Agent Lifecycle',
    description: 'Deploy and scale AI agents across LangGraph, AutoGen, and CrewAI',
    icon: Layers,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'MCP Registry',
    description: 'Register, discover, and federate MCP tools across organizations',
    icon: Code,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Live dashboards with agent fleet metrics and workflow tracking',
    icon: Cpu,
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
            <Cpu className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Agent Infrastructure Platform</span>
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

          {/* Countdown Timer */}
          <div className="mb-12 flex justify-center">
            <CountdownTimer targetDate={launchDate} />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Deploy, manage, and scale AI agents at enterprise scale.
            <br />
            <span className="text-gray-400 dark:text-gray-500">MCP tool registry. LangGraph workflows. Real-time monitoring.</span>
          </p>

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
              href="/platform"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            >
              <Layers className="w-4 h-4" />
              Explore Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <Rocket className="w-4 h-4" />
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
              AI Agent <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
              The complete platform for building and operating AI agent systems.
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
              href="/platform"
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Learn more about the platform <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
              What's <span className="gradient-text">Launching</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
              Four products. One vision. Privacy-first, AI-powered, open core software.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.name}
                  href={`/products/${product.name === 'Shields AI' ? 'shields' : product.name === 'Chai.im' ? 'chai' : product.name.toLowerCase()}`}
                  className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 transition-all hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 line-clamp-1">
                      {product.description}
                    </p>
                    <span className={`inline-block text-[9px] font-medium px-2 py-0.5 rounded-full ${
                      product.status === 'Live' || product.status === 'Flagship'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : product.status === 'Beta'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity pointer-events-none`} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4', label: 'Products' },
              { value: '6', label: 'Build Streams' },
              { value: '$25.6B', label: 'Market' },
              { value: '2026', label: 'Launch' },
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

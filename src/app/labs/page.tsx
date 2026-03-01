import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, BookOpen, GitBranch, Sparkles, Clock, Tag, Users, Github, Twitter, Rss, Calendar, Bot, Code, Shield, Gamepad2, MessageSquare, Folder } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Labs - GrepLabs',
  description: 'The central hub for GrepLabs updates, blog posts, releases, and community news.',
}

const latestPosts = [
  {
    id: 'human-ai-collaboration',
    title: 'Building GrepCoin: A Journey in Human-AI Collaboration',
    excerpt: 'How we built a complete gaming platform through collaborative AI development.',
    date: 'January 15, 2025',
    category: 'Development',
    readTime: '8 min',
  },
  {
    id: 'privacy-first-architecture',
    title: 'Designing Privacy-First Architecture',
    excerpt: 'Why local-first processing matters for enterprise security.',
    date: 'December 20, 2025',
    category: 'Architecture',
    readTime: '12 min',
  },
  {
    id: 'shields-ml-engine',
    title: 'Building Shield AI\'s ML Threat Detection',
    excerpt: 'How we achieved 99.7% accuracy in DNS threat detection.',
    date: 'February 1, 2026',
    category: 'Engineering',
    readTime: '10 min',
  },
]

const releases = [
  {
    version: 'v0.9.0',
    date: 'January 2026',
    title: 'Public Beta Launch',
    products: ['All Products'],
    highlights: ['Full product suite launch', 'Enterprise features', 'Self-hosted support'],
  },
  {
    version: 'v0.8.5',
    date: 'December 2025',
    title: 'Pre-Launch Polish',
    products: ['Shield AI', 'Hippo', 'Chai.im'],
    highlights: ['Performance improvements', 'Bug fixes', 'UI refinements'],
  },
]

const roadmapItems = [
  {
    quarter: 'Q1 2026',
    items: [
      { product: 'Shield AI', icon: Shield, status: 'launching', description: 'Public launch with full ML engine' },
      { product: 'GrepCoin', icon: Gamepad2, status: 'launching', description: 'Token launch on Base L2' },
      { product: 'Hippo', icon: Folder, status: 'beta', description: 'Desktop app beta release' },
    ],
  },
  {
    quarter: 'Q2 2026',
    items: [
      { product: 'Chai.im', icon: MessageSquare, status: 'launching', description: 'Enterprise beta with HIPAA compliance' },
      { product: 'Platform', icon: Bot, status: 'development', description: 'Unified dashboard with AI agents' },
    ],
  },
  {
    quarter: 'Q3 2026',
    items: [
      { product: 'Mobile Apps', icon: Code, status: 'planned', description: 'iOS and Android apps for all products' },
      { product: 'Enterprise', icon: Shield, status: 'planned', description: 'SOC2 certification complete' },
    ],
  },
]

export default function LabsPage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GrepLabs Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            The <span className="gradient-text">Labs</span>
          </h1>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Your central hub for updates, blog posts, releases, roadmap, and community news.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Link href="/blog" className="group p-4 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
            <BookOpen className="w-6 h-6 text-purple-500 mb-2" />
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Blog</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Technical articles</p>
          </Link>
          <Link href="/changelog" className="group p-4 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
            <GitBranch className="w-6 h-6 text-green-500 mb-2" />
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Releases</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Version history</p>
          </Link>
          <Link href="/open-source" className="group p-4 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
            <Code className="w-6 h-6 text-blue-500 mb-2" />
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Open Source</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">MIT licensed core</p>
          </Link>
          <a href="https://github.com/greplabs" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-2" />
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">GitHub</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">View repositories</p>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Posts */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-gray-900 dark:text-white">Latest Posts</h2>
              <Link href="/blog" className="text-sm text-purple-500 hover:text-purple-600 flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block p-5 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{post.date}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Releases */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-light text-gray-900 dark:text-white">Recent Releases</h2>
                <Link href="/changelog" className="text-xs text-purple-500 hover:text-purple-600">View all</Link>
              </div>
              <div className="space-y-3">
                {releases.map((release) => (
                  <div key={release.version} className="p-4 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono font-medium text-green-600 dark:text-green-400">{release.version}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{release.date}</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{release.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {release.highlights.slice(0, 2).map((h) => (
                        <span key={h} className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community */}
            <div>
              <h2 className="text-lg font-light text-gray-900 dark:text-white mb-4">Community</h2>
              <div className="space-y-2">
                <a href="https://github.com/greplabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">GitHub</span>
                </a>
                <a href="https://twitter.com/greplabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white">Public Roadmap</h2>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Launching</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> Beta</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Development</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400" /> Planned</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {roadmapItems.map((quarter) => (
              <div key={quarter.quarter} className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <h3 className="font-medium text-gray-900 dark:text-white">{quarter.quarter}</h3>
                </div>
                <div className="space-y-3">
                  {quarter.items.map((item) => {
                    const Icon = item.icon
                    const statusColors = {
                      launching: 'bg-green-500',
                      beta: 'bg-blue-500',
                      development: 'bg-amber-500',
                      planned: 'bg-gray-400',
                    }
                    return (
                      <div key={item.product} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{item.product}</span>
                            <span className={`w-2 h-2 rounded-full ${statusColors[item.status as keyof typeof statusColors]}`} />
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-2">Stay Updated</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Get the latest updates on releases, features, and AI-powered development.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors"
          >
            <Rss className="w-4 h-4" />
            Subscribe to Updates
          </Link>
        </section>
      </div>
    </main>
  )
}

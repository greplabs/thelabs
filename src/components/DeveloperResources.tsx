'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Code2, Terminal, FileText, ExternalLink, ArrowRight, Sparkles, Github } from 'lucide-react'

const resources = [
  {
    category: 'Documentation',
    items: [
      {
        title: 'Getting Started Guides',
        description: 'Quick start guides for each product. Get up and running in minutes.',
        icon: BookOpen,
        link: '/docs',
        gradient: 'from-grep-purple/20 to-grep-pink/20',
      },
      {
        title: 'API Reference',
        description: 'Complete API documentation with examples, authentication, and rate limits.',
        icon: Code2,
        link: '/docs/api',
        gradient: 'from-grep-blue/20 to-grep-cyan/20',
      },
      {
        title: 'SDK Documentation',
        description: 'Client libraries and SDKs for JavaScript, Python, Rust, and more.',
        icon: Terminal,
        link: '/docs/sdk',
        gradient: 'from-grep-green/20 to-grep-cyan/20',
      },
      {
        title: 'Architecture Guides',
        description: 'Deep dives into system architecture, design decisions, and best practices.',
        icon: FileText,
        link: '/docs/architecture',
        gradient: 'from-grep-orange/20 to-grep-yellow/20',
      },
    ],
  },
  {
    category: 'Code & Examples',
    items: [
      {
        title: 'GitHub Repositories',
        description: 'Browse source code, contribute, and explore our open-source projects.',
        icon: Github,
        link: 'https://github.com/greplabs',
        gradient: 'from-grep-purple/20 to-grep-pink/20',
        external: true,
      },
      {
        title: 'Code Examples',
        description: 'Working code examples, snippets, and integration patterns for common use cases.',
        icon: Code2,
        link: '/docs/examples',
        gradient: 'from-grep-blue/20 to-grep-cyan/20',
      },
      {
        title: 'Tutorials',
        description: 'Step-by-step tutorials covering everything from basics to advanced topics.',
        icon: BookOpen,
        link: '/docs/tutorials',
        gradient: 'from-grep-green/20 to-grep-cyan/20',
      },
    ],
  },
]

const quickLinks = [
  { title: 'Contributing Guide', link: '/docs/contributing' },
  { title: 'Code of Conduct', link: '/docs/code-of-conduct' },
  { title: 'Security Policy', link: '/docs/security' },
  { title: 'License Information', link: '/docs/licenses' },
]

const tools = [
  {
    title: 'CLI Tools',
    description: 'Command-line interfaces for all products. Perfect for automation and scripting.',
    examples: ['grepcoin-cli', 'chai-cli', 'shields-cli', 'hippo-cli'],
  },
  {
    title: 'Webhooks',
    description: 'Receive real-time notifications and events from our services.',
    examples: ['Event subscriptions', 'Custom integrations', 'Automation triggers'],
  },
  {
    title: 'Self-Hosting',
    description: 'Deploy GrepLabs products on your own infrastructure.',
    examples: ['Docker images', 'Kubernetes manifests', 'Deployment guides'],
  },
]

export default function DeveloperResources() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-black dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-grep-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-grep-orange/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Developer Resources</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Build With
            <br />
            <span className="gradient-text">GrepLabs</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive documentation, code examples, and tools to help you build amazing things.
          </p>
        </motion.div>

        {/* Resources by Category */}
        <div className="space-y-16 mb-20">
          {resources.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-extralight text-gray-900 dark:text-white mb-8">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (catIndex * 0.1) + (itemIndex * 0.05) }}
                      className={`bg-gradient-to-br ${item.gradient} border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-gray-900 dark:text-white" />
                      </div>
                      <h4 className="text-lg font-light text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.external ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors text-sm font-medium"
                        >
                          Learn More
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors text-sm font-medium"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Developer Tools */}
        <div className="mb-20">
          <h3 className="text-2xl font-extralight text-gray-900 dark:text-white mb-8 text-center">
            Developer Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-8"
              >
                <h4 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                  {tool.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  {tool.description}
                </p>
                <ul className="space-y-2">
                  {tool.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-grep-purple dark:text-grep-pink">•</span>
                      <span className="font-mono">{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6 text-center">
            Quick Links
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 transition-colors text-sm font-light"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


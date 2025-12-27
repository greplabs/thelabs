'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Twitter, MessageSquare, Users, Code, Heart, ArrowRight, Sparkles } from 'lucide-react'

const communityStats = [
  { label: 'Products', value: '4', icon: Code },
  { label: 'Open Source', value: 'Core', icon: Github },
  { label: 'Focus', value: 'Privacy', icon: Users },
  { label: 'Model', value: 'Open Core', icon: MessageSquare },
]

const waysToContribute = [
  {
    title: 'Code Contributions',
    description: 'Submit pull requests, fix bugs, add features. We welcome contributions of all sizes.',
    icon: Code,
    link: 'https://github.com/greplabs',
    gradient: 'from-grep-purple/20 to-grep-pink/20',
  },
  {
    title: 'Documentation',
    description: 'Help improve our docs, write tutorials, translate content, or create video guides.',
    icon: MessageSquare,
    link: '#',
    gradient: 'from-grep-blue/20 to-grep-cyan/20',
  },
  {
    title: 'Testing & Feedback',
    description: 'Test beta releases, report bugs, suggest improvements, and share your use cases.',
    icon: Users,
    link: '#',
    gradient: 'from-grep-green/20 to-grep-cyan/20',
  },
  {
    title: 'Community Support',
    description: 'Help other users in forums, answer questions, and share knowledge with the community.',
    icon: Heart,
    link: '#',
    gradient: 'from-grep-orange/20 to-grep-yellow/20',
  },
]


export default function Community() {
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Community</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Join the
            <br />
            <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're building privacy-first software and we welcome contributors. Join us in building the next generation of privacy-respecting tools.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
              >
                <Icon className="w-8 h-8 text-grep-purple dark:text-grep-pink mx-auto mb-3" />
                <div className="text-3xl font-extralight text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-light">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Ways to Contribute */}
        <div className="mb-20">
          <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-12 text-center">
            Ways to Contribute
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {waysToContribute.map((way, index) => {
              const Icon = way.icon
              return (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${way.gradient} border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <h4 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                    {way.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6">
                    {way.description}
                  </p>
                  <Link
                    href={way.link}
                    className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors font-medium"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


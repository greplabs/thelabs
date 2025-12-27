'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, MessageSquare, Code, Heart, Users } from 'lucide-react'

const ways = [
  { icon: Code, title: 'Code', description: 'Submit PRs, fix bugs, add features' },
  { icon: MessageSquare, title: 'Docs', description: 'Improve docs and tutorials' },
  { icon: Users, title: 'Test', description: 'Test releases and report bugs' },
  { icon: Heart, title: 'Support', description: 'Help others in the community' },
]

export default function Community() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
            Join the <span className="gradient-text">Community</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light">
            We're building privacy-first software and we welcome contributors
          </p>
        </motion.div>

        {/* Ways to contribute */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {ways.map((way, index) => {
            const Icon = way.icon
            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-900"
              >
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{way.title}</h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">{way.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/greplabs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/greplabs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

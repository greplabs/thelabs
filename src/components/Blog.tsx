'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { getBlogPosts } from '@/data/blog-posts'

const blogPosts = getBlogPosts().slice(0, 6)

export default function Blog() {
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Blog & Insights</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Stories from
            <br />
            <span className="gradient-text">The Lab</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technical deep-dives, development stories, and insights from building privacy-first, AI-powered software.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-xl flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3 group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 text-gray-900 dark:text-white hover:gap-2 transition-all font-medium"
                >
                  Read
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


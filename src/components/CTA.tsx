'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extralight text-white mb-3">
            Ready to Build <span className="gradient-text">The Future?</span>
          </h2>
          <p className="text-gray-400 font-light mb-6 max-w-lg mx-auto text-sm">
            Join us in creating privacy-first, AI-powered software that solves real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="mailto:hello@greplabs.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-medium text-sm transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-gray-600 text-white rounded-full font-medium text-sm transition-all"
            >
              Open Core Model
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

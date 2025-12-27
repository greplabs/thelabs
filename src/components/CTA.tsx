'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, Github, Twitter, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-grep-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-grep-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-grep-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-grep-pink" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 tracking-tight">
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-grep-purple via-grep-pink to-grep-orange bg-clip-text text-transparent">
              The Future?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join us in creating privacy-first, AI-powered software that solves real problems.
            Let's connect and explore how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="mailto:hello@greplabs.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-all"
            >
              Our Open-Core Model
            </Link>
          </div>

          <div className="flex gap-6 justify-center items-center text-gray-400">
            <a
              href="https://github.com/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

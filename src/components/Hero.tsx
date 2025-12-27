'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Sparkles } from 'lucide-react'
import Logo from './Logo'
import TerminalCursor from './TerminalCursor'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-grep-purple/10 to-grep-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-grep-orange/10 to-grep-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-grep-purple/5 via-grep-pink/5 to-grep-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Logo size={100} animated={true} />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-grep-purple/10 via-grep-pink/10 to-grep-orange/10 border border-grep-purple/20 dark:border-grep-purple/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GrepLabs LLC</span>
          </motion.div>

          {/* Main heading with terminal style */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tighter text-gray-900 dark:text-white mb-6 leading-none">
              <span className="gradient-text">GrepLabs</span>
            </h1>

            {/* ASCII Art Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:block mb-8"
            >
              <pre className="ascii-art text-gray-400 dark:text-gray-500 text-center text-[0.5rem] md:text-xs lg:text-sm leading-none select-none font-mono">
{`   ██████╗ ██████╗ ███████╗██████╗ ██╗      █████╗ ██████╗ ███████╗
  ██╔════╝ ██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗██╔══██╗██╔════╝
  ██║  ███╗██████╔╝█████╗  ██████╔╝██║     ███████║██████╔╝███████╗
  ██║   ██║██╔══██╗██╔══╝  ██╔═══╝ ██║     ██╔══██║██╔══██╗╚════██║
  ╚██████╔╝██║  ██║███████╗██║     ███████╗██║  ██║██████╔╝███████║
   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝`}
              </pre>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 tracking-wide leading-relaxed max-w-3xl mx-auto"
            >
              Privacy-first software.
              <br />
              Built for tomorrow.
            </motion.p>
          </div>

          {/* Terminal-style description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="terminal-window text-left mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-auto text-xs text-gray-500 terminal-text">greplabs ~</span>
              </div>
              <div className="terminal-body">
                <div className="space-y-2">
                  <div>
                    <span className="terminal-prompt">$</span>{' '}
                    <span className="terminal-function">cat</span>{' '}
                    <span className="terminal-string">vision.txt</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="terminal-comment">// We build innovative, AI-powered products</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="terminal-comment">// that respect your privacy.</span>
                  </div>
                  <div className="text-gray-300 mt-4">
                    <span className="terminal-prompt">→</span>{' '}
                    Four products. One mission. Zero compromise.
                  </div>
                  <div className="mt-4">
                    <span className="terminal-prompt">$</span>{' '}
                    <TerminalCursor />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="#products"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              Explore Products
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/app-store"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 dark:border-white rounded-full font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              Visit App Store
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <Link
              href="/business-plan"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
            >
              Business Plan
            </Link>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <Link
              href="/monetization"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
            >
              Monetization
            </Link>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <Link
              href="/open-source"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
            >
              Open Source
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#products"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
          >
            <span className="text-xs font-light">scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

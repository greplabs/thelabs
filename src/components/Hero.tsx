'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Shield, Gamepad2, MessageSquare, Folder, Sparkles, Zap } from 'lucide-react'
import Logo from './Logo'
import TerminalCursor from './TerminalCursor'

const products = [
  { name: 'Shields AI', icon: Shield, color: 'from-green-500 to-cyan-500', status: 'Flagship', id: 'shields', glow: 'from-green-400/20 to-cyan-400/20' },
  { name: 'GrepCoin', icon: Gamepad2, color: 'from-purple-500 to-pink-500', status: 'Live', id: 'grepcoin', glow: 'from-purple-400/20 to-pink-400/20' },
  { name: 'Hippo', icon: Folder, color: 'from-orange-500 to-yellow-500', status: 'Dev', id: 'hippo', glow: 'from-orange-400/20 to-yellow-400/20' },
  { name: 'Chai.im', icon: MessageSquare, color: 'from-blue-500 to-cyan-500', status: 'Beta', id: 'chai', glow: 'from-blue-400/20 to-cyan-400/20' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-6xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo with enhanced glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <Logo size={90} animated={true} />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 dark:border-purple-500/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-500 dark:text-pink-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GrepLabs LLC</span>
          </motion.div>

          {/* Main heading with enhanced gradient */}
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tighter text-gray-900 dark:text-white mb-6 leading-none"
          >
            <span className="gradient-text">GrepLabs</span>
          </motion.h1> */}

          {/* ASCII Art Banner - Enhanced with animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block mb-8 max-w-full overflow-x-auto"
          >
            <pre className="ascii-art text-gray-400 dark:text-gray-500 mx-auto select-none font-mono relative">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
{`
   ██████╗ ██████╗ ███████╗██████╗ ██╗      █████╗ ██████╗ ███████╗
  ██╔════╝ ██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗██╔══██╗██╔════╝
  ██║  ███╗██████╔╝█████╗  ██████╔╝██║     ███████║██████╔╝███████╗
  ██║   ██║██╔══██╗██╔══╝  ██╔═══╝ ██║     ██╔══██║██╔══██╗╚════██║
  ╚██████╔╝██║  ██║███████╗██║     ███████╗██║  ██║██████╔╝███████║
   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝`}
              </motion.span>
            </pre>
          </motion.div>

          {/* Enhanced tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 tracking-wide leading-relaxed max-w-3xl mx-auto mb-4"
          >
            Privacy-first software.
            <br />
            <span className="text-gray-500 dark:text-gray-500">Built for tomorrow.</span>
          </motion.p>

          {/* Terminal window - Enhanced */}
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
                    <span className="terminal-comment">{`// We build innovative, AI-powered products`}</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="terminal-comment">{`// that respect your privacy.`}</span>
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

          {/* Interactive Product Pills - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm hover:shadow-lg"
                  >
                    <motion.div
                      className={`w-7 h-7 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      product.status === 'Live' || product.status === 'Flagship'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : product.status === 'Beta'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {product.status}
                    </span>
                  </Link>
                  {/* Enhanced hover glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${product.glow} rounded-full blur-2xl -z-10`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:shadow-2xl shadow-lg"
              >
                Explore Products
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/open-source"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <Zap className="w-4 h-4" />
                Open Core Model
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex items-center justify-center gap-8 text-sm"
          >
            {[
              { value: '4', label: 'Products' },
              { value: 'Open', label: 'Core' },
              { value: 'Local', label: 'First' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#products"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
          >
            <span className="text-xs font-light uppercase tracking-wider">scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:text-purple-500 dark:group-hover:text-pink-500 transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

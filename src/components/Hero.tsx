'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Shield, Gamepad2, MessageSquare, Folder } from 'lucide-react'
import Logo from './Logo'

const products = [
  { name: 'Shields AI', icon: Shield, color: 'from-green-500 to-cyan-500', status: 'Flagship', id: 'shields' },
  { name: 'GrepCoin', icon: Gamepad2, color: 'from-purple-500 to-pink-500', status: 'Live', id: 'grepcoin' },
  { name: 'Hippo', icon: Folder, color: 'from-orange-500 to-yellow-500', status: 'Dev', id: 'hippo' },
  { name: 'Chai.im', icon: MessageSquare, color: 'from-blue-500 to-cyan-500', status: 'Beta', id: 'chai' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden pt-14">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gray-100 via-transparent to-transparent dark:from-gray-900 dark:via-transparent rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gray-100 via-transparent to-transparent dark:from-gray-900 dark:via-transparent rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Logo with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400 rounded-full blur-xl opacity-20 scale-150" />
              <Logo size={80} animated={true} />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter text-gray-900 dark:text-white mb-4 leading-none"
          >
            <span className="gradient-text">GrepLabs</span>
          </motion.h1>

          {/* ASCII Art Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block mb-6"
          >
            <pre className="text-gray-400 dark:text-gray-600 text-center text-[0.4rem] md:text-[0.5rem] lg:text-xs leading-none select-none font-mono">
{`   ██████╗ ██████╗ ███████╗██████╗ ██╗      █████╗ ██████╗ ███████╗
  ██╔════╝ ██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗██╔══██╗██╔════╝
  ██║  ███╗██████╔╝█████╗  ██████╔╝██║     ███████║██████╔╝███████╗
  ██║   ██║██╔══██╗██╔══╝  ██╔═══╝ ██║     ██╔══██║██╔══██╗╚════██║
  ╚██████╔╝██║  ██║███████╗██║     ███████╗██║  ██║██████╔╝███████║
   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝`}
            </pre>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Privacy-first software. Open core. Built for tomorrow.
          </motion.p>

          {/* Interactive Product Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-500 dark:text-gray-400">
                      {product.status}
                    </span>
                  </Link>
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-full blur-xl opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          >
            <Link
              href="#products"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl text-sm"
            >
              Explore Products
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-900 text-sm"
            >
              Open Core Model
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-500"
          >
            <div className="text-center">
              <div className="text-xl font-light text-gray-900 dark:text-white">4</div>
              <div className="text-xs">Products</div>
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <div className="text-xl font-light text-gray-900 dark:text-white">Open</div>
              <div className="text-xs">Core</div>
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <div className="text-xl font-light text-gray-900 dark:text-white">Local</div>
              <div className="text-xs">First</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#products"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider">scroll</span>
            <ArrowDown className="w-3 h-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

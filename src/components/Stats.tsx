'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function Stats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { value: '4', label: 'Products', sublabel: 'Privacy-first tools', gradient: 'from-purple-500 to-pink-500' },
    { value: '9', label: 'Arcade Games', sublabel: 'Built on GrepCoin', gradient: 'from-blue-500 to-cyan-500' },
    { value: 'Open', label: 'Core Model', sublabel: 'MIT/Apache licensed', gradient: 'from-green-500 to-cyan-500' },
    { value: 'Local', label: 'First Approach', sublabel: 'Your data stays yours', gradient: 'from-orange-500 to-yellow-500' },
  ]

  if (!mounted) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-light bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-4 h-4 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">By The Numbers</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`text-4xl md:text-5xl font-extralight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-light">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface FeatureHighlight {
  title: string
  description: string
  benefits?: string[]
  stats?: { label: string; value: string }[]
}

interface InteractiveFeatureProps {
  icon: LucideIcon
  title: string
  description: string
  highlights: FeatureHighlight[]
  gradient?: string
  index?: number
}

export default function InteractiveFeature({
  icon: Icon,
  title,
  description,
  highlights,
  gradient = 'from-purple-500 to-pink-500',
  index = 0,
}: InteractiveFeatureProps) {
  const [activeHighlight, setActiveHighlight] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {highlights.map((highlight, idx) => (
          <button
            key={idx}
            onClick={() => setActiveHighlight(idx)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeHighlight === idx
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
            }`}
          >
            {highlight.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeHighlight}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {highlights[activeHighlight].description}
        </p>

        {/* Benefits */}
        {highlights[activeHighlight].benefits && (
          <div className="space-y-2">
            {highlights[activeHighlight].benefits!.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-light">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {highlights[activeHighlight].stats && (
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            {highlights[activeHighlight].stats!.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Progress indicator */}
      <div className="flex gap-1 mt-6">
        {highlights.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full flex-1 transition-all ${
              idx === activeHighlight
                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                : 'bg-gray-200 dark:bg-gray-800'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}


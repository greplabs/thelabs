'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  details?: string[]
  gradient?: string
  index?: number
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  details,
  gradient = 'from-purple-500 to-pink-500',
  index = 0,
}: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-pointer"
        whileHover={{ y: -4 }}
        onClick={() => details && setIsExpanded(!isExpanded)}
      >
        {/* Icon */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Expandable details */}
        {details && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
              <ul className="space-y-2">
                {details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 font-light flex items-start gap-2">
                    <span className="text-purple-500 dark:text-pink-500 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Expand indicator */}
        {details && (
          <div className="mt-4 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 dark:text-gray-600 text-xs font-medium flex items-center gap-1"
            >
              {isExpanded ? 'Less' : 'More'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.02] rounded-xl transition-opacity pointer-events-none`} />
      </motion.div>
    </motion.div>
  )
}


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
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <motion.div
        className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all cursor-pointer h-full"
        whileHover={{ y: -4 }}
        onClick={() => details && setIsExpanded(!isExpanded)}
      >
        {/* Icon and Title */}
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Expandable details */}
        {details && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-1">
                {details.map((detail, idx) => (
                  <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Expand indicator */}
        {details && !isExpanded && (
          <div className="mt-2 flex items-center justify-center">
            <div className="text-[10px] text-gray-400 dark:text-gray-600 flex items-center gap-0.5">
              <span>+{details.length}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}

        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity pointer-events-none`} />
      </motion.div>
    </motion.div>
  )
}


'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureGridItemProps {
  icon: LucideIcon
  title: string
  description: string
  stats?: { value: string; label: string }[]
  gradient?: string
  index?: number
}

export default function FeatureGridItem({
  icon: Icon,
  title,
  description,
  stats,
  gradient = 'from-purple-500 to-pink-500',
  index = 0,
}: FeatureGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
    >
      {/* Icon */}
      <div className="mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
        {description}
      </p>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-lg font-light text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hover effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.02] rounded-xl transition-opacity pointer-events-none`} />
    </motion.div>
  )
}


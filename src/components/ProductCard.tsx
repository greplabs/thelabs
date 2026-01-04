'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    tagline: string
    description: string
    icon: LucideIcon
    color: string
    url: string
    status: string
    features: string[]
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon
  const colorClasses = {
    purple: 'from-purple-500 to-pink-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link
        href={`/products/${product.id}`}
        className="block bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <div className="text-center">
          {/* Icon */}
          <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{product.name}</h3>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 line-clamp-1">{product.tagline}</p>

          {/* Status badge */}
          <span className={`inline-block text-[9px] font-medium px-2 py-0.5 rounded-full ${
            product.status === 'Live'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}>
            {product.status}
          </span>

          {/* Features - compact */}
          <div className="flex flex-wrap justify-center gap-1 mt-3">
            {product.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="text-[9px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Hover gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity pointer-events-none`} />
      </Link>

      {/* External link */}
      {product.url !== '#' && (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 text-[9px] p-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full flex items-center transition-colors"
        >
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      )}
    </motion.div>
  )
}


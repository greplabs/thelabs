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
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-xl"
    >
      {/* Status badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          product.status === 'Live' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
        }`}>
          {product.status}
        </span>
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-4">{product.tagline}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all duration-200"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
        {product.url !== '#' && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-sm"
          >
            Visit Site
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  )
}


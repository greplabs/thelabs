'use client'

import { motion } from 'framer-motion'

export default function TerminalCursor({ className = '' }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block w-3 h-5 bg-grep-green ${className}`}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}


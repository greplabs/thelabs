'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
            <Logo size={28} animated={false} />
            <span className="text-xl font-light tracking-tight gradient-text">GrepLabs</span>
          </Link>

          {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/#products" className="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Products
                </Link>
                <Link href="/docs" className="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Docs
                </Link>
                <Link href="/blog" className="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Blog
                </Link>
                <Link
                  href="/fund"
                  className="px-4 py-2 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Fund Us
                </Link>
              </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/#products"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/docs"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/case-studies"
              className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/fund"
              className="block px-4 py-2 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full font-medium transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fund Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}


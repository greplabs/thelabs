'use client'

import Link from 'next/link'
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const products = [
    { name: 'Shields AI', url: '#', external: false, slug: 'shields' },
    { name: 'Hippo', url: '#', external: false, slug: 'hippo' },
    { name: 'GrepCoin', url: 'https://grepcoin.io', external: true, slug: 'grepcoin' },
    { name: 'Chai.im', url: 'https://chai.im', external: true, slug: 'chai' },
  ]

  const company = [
    { name: 'Fund Us', url: '/fund' },
    { name: 'Open Source', url: '/open-source' },
    { name: 'Security', url: '/security' },
    { name: 'Contact', url: 'mailto:hello@greplabs.com' },
  ]

      const resources = [
        { name: 'Documentation', url: '/docs' },
        { name: 'Blog', url: '/blog' },
        { name: 'Changelog', url: '/changelog' },
        { name: 'Open Source', url: '/open-source' },
      ]

      const learn = [
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Compare', url: '/compare' },
        { name: 'Security', url: '/security' },
        { name: 'Licensing', url: '/open-source' },
      ]

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
  ]

  return (
    <footer className="bg-black dark:bg-black border-t border-gray-900 dark:border-gray-800 text-gray-400 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-grep-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-grep-pink/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 inline-block">
              <Logo size={32} animated={false} />
              <span className="text-2xl font-light tracking-tight gradient-text">GrepLabs</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md font-light leading-relaxed">
              Building tomorrow's privacy-first software. We develop innovative, 
              AI-powered products that respect your privacy and deliver exceptional performance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/greplabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/greplabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@greplabs.com"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-light mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  {product.external && product.url !== '#' ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 font-light"
                    >
                      {product.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {product.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-light mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  {item.url.startsWith('mailto:') ? (
                    <a
                      href={item.url}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.url}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-light mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white font-light mb-4 text-sm uppercase tracking-wider">Learn</h3>
            <ul className="space-y-3">
              {learn.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              © {currentYear} GrepLabs LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-gray-500 hover:text-white transition-colors font-light"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-700 text-xs mt-6 text-center font-light">
            Built with privacy, performance, and AI at the core.
          </p>
        </div>
      </div>
    </footer>
  )
}


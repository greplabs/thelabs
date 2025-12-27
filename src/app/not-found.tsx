import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-dark-900">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 text-dark-900 dark:text-white border-2 border-gray-200 dark:border-dark-600 rounded-lg font-semibold transition-colors"
          >
            <Search className="w-4 h-4" />
            View Products
          </Link>
        </div>
      </div>
    </div>
  )
}


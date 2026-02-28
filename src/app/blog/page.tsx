'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Search, Filter } from 'lucide-react'
import { useState } from 'react'
import { getBlogPosts, getCategories } from '@/data/blog-posts'

export default function BlogPage() {
  const allPosts = getBlogPosts()
  const categories = getCategories()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === null || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-8">
            Technical deep-dives, development stories, and insights from building privacy-first software.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-grep-purple dark:focus:ring-grep-pink"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="pl-10 pr-8 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-grep-purple dark:focus:ring-grep-pink appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredPosts.length} of {allPosts.length} articles
          {selectedCategory && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && !searchQuery && !selectedCategory && (
          <div className="mb-8">
            <Link href={`/blog/${filteredPosts[0].id}`}>
              <article className="group bg-gradient-to-br from-grep-purple/5 to-grep-pink/5 dark:from-grep-purple/10 dark:to-grep-pink/10 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 hover:border-grep-purple/50 dark:hover:border-grep-pink/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full text-[10px] font-medium">
                        Featured
                      </span>
                      <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-[10px] font-medium">
                        {filteredPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4 line-clamp-2">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(searchQuery || selectedCategory ? filteredPosts : filteredPosts.slice(1)).map((post) => (
            <article
              key={post.id}
              className="group"
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
                <div className="h-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-[10px] font-medium">
                      {post.category}
                    </span>
                    {post.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="inline-block px-2 py-0.5 text-gray-400 dark:text-gray-500 text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-base font-medium text-gray-900 dark:text-white mb-2 group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(null)
              }}
              className="mt-4 text-grep-purple dark:text-grep-pink hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-grep-purple/10 to-grep-pink/10 border border-grep-purple/20 dark:border-grep-pink/20 rounded-2xl text-center">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
            Get notified about new articles, product updates, and privacy-first development insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-grep-purple dark:focus:ring-grep-pink"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

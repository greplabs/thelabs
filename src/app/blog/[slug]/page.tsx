import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/data/blog-posts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | GrepLabs Blog',
    }
  }

  return {
    title: `${post.title} | GrepLabs Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeContent = ''
    let codeLanguage = ''
    let listItems: string[] = []
    let inList = false

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-gray-400 font-light">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
        listItems = []
      }
      inList = false
    }

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono">
              <code>{codeContent.trim()}</code>
            </pre>
          )
          codeContent = ''
          inCodeBlock = false
        } else {
          flushList()
          codeLanguage = line.slice(3)
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeContent += line + '\n'
        return
      }

      // Headers
      if (line.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl font-extralight text-gray-900 dark:text-white mt-12 mb-6">
            {line.slice(3)}
          </h2>
        )
        return
      }

      if (line.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl font-light text-gray-900 dark:text-white mt-8 mb-4">
            {line.slice(4)}
          </h3>
        )
        return
      }

      if (line.startsWith('#### ')) {
        flushList()
        elements.push(
          <h4 key={`h4-${index}`} className="text-xl font-light text-gray-900 dark:text-white mt-6 mb-3">
            {line.slice(5)}
          </h4>
        )
        return
      }

      // Horizontal rule
      if (line === '---') {
        flushList()
        elements.push(
          <hr key={`hr-${index}`} className="border-gray-200 dark:border-gray-800 my-8" />
        )
        return
      }

      // List items
      if (line.startsWith('- ') || line.startsWith('* ')) {
        inList = true
        listItems.push(line.slice(2))
        return
      }

      if (line.match(/^\d+\. /)) {
        inList = true
        listItems.push(line.replace(/^\d+\. /, ''))
        return
      }

      // Tables
      if (line.startsWith('|')) {
        flushList()
        // Skip table rendering for simplicity, just show as text
        return
      }

      // Blockquote
      if (line.startsWith('> ')) {
        flushList()
        elements.push(
          <blockquote key={`quote-${index}`} className="border-l-4 border-grep-purple dark:border-grep-pink pl-4 italic text-gray-600 dark:text-gray-400 my-6">
            {line.slice(2)}
          </blockquote>
        )
        return
      }

      // Empty line
      if (line.trim() === '') {
        flushList()
        return
      }

      // Regular paragraph
      flushList()

      // Process inline formatting
      let processedLine = line
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">$1</code>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-grep-purple dark:text-grep-pink hover:underline">$1</a>')

      elements.push(
        <p
          key={`p-${index}`}
          className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      )
    })

    flushList()
    return elements
  }

  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
            <div className="flex gap-4">
              <Link
                href="/fund"
                className="px-6 py-2 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Support GrepLabs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

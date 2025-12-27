import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, Shield, Folder, MessageSquare, Gamepad2, ExternalLink } from 'lucide-react'

export default function DocsPage() {
  const products = [
    {
      name: 'Shields AI',
      icon: Shield,
      description: 'DNS security API for threat detection and filtering',
      href: '/products/shields',
      color: 'from-grep-green to-grep-cyan',
    },
    {
      name: 'Hippo',
      icon: Folder,
      description: 'File indexing and semantic search API',
      href: '/products/hippo',
      color: 'from-grep-orange to-grep-yellow',
    },
    {
      name: 'Chai.im',
      icon: MessageSquare,
      description: 'Encrypted messaging integration API',
      href: '/products/chai',
      color: 'from-grep-blue to-grep-cyan',
    },
    {
      name: 'GrepCoin',
      icon: Gamepad2,
      description: 'Gaming platform and rewards API',
      href: '/products/grepcoin',
      color: 'from-grep-purple to-grep-pink',
    },
  ]

  const quickLinks = [
    { name: 'Getting Started', href: '/docs/getting-started', icon: Book },
    { name: 'Open Source', href: '/open-source', icon: Code },
    { name: 'GitHub', href: 'https://github.com/greplabs', icon: Terminal, external: true },
  ]

  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Book className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Documentation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Developer
            <br />
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl">
            Everything you need to integrate GrepLabs products into your applications. API references, SDKs, and guides.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {quickLinks.map((link) => {
            const Icon = link.icon
            const isExternal = 'external' in link && link.external
            const LinkComponent = isExternal ? 'a' : Link
            const linkProps = isExternal
              ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: link.href }
            return (
              <LinkComponent
                key={link.name}
                {...linkProps}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-grep-purple dark:hover:border-grep-pink transition-colors group"
              >
                <Icon className="w-6 h-6 text-gray-500 group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors" />
                <span className="font-light text-gray-900 dark:text-white flex items-center gap-2">
                  {link.name}
                  {isExternal && <ExternalLink className="w-4 h-4" />}
                </span>
              </LinkComponent>
            )
          })}
        </div>

        {/* Product Documentation */}
        <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Product APIs</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Link
                key={product.name}
                href={product.href}
                className="group p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  {product.description}
                </p>
              </Link>
            )
          })}
        </div>

        {/* API Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">API Overview</h2>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Base URLs</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-4">
                <code className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm font-mono">Production</code>
                <code className="text-gray-600 dark:text-gray-400 font-mono text-sm">https://api.greplabs.com/v1</code>
              </div>
              <div className="flex items-center gap-4">
                <code className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm font-mono">Sandbox</code>
                <code className="text-gray-600 dark:text-gray-400 font-mono text-sm">https://sandbox.api.greplabs.com/v1</code>
              </div>
            </div>

            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Authentication</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
              All API requests require authentication using an API key in the header:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-8">
{`curl -X GET "https://api.greplabs.com/v1/status" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
            </pre>

            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Rate Limits</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Plan</th>
                    <th className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Requests/min</th>
                    <th className="py-3 pr-4 font-medium text-gray-900 dark:text-white">Requests/day</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400 font-light">
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="py-3 pr-4">Free</td>
                    <td className="py-3 pr-4">60</td>
                    <td className="py-3 pr-4">10,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="py-3 pr-4">Pro</td>
                    <td className="py-3 pr-4">300</td>
                    <td className="py-3 pr-4">100,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Enterprise</td>
                    <td className="py-3 pr-4">Custom</td>
                    <td className="py-3 pr-4">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'JavaScript/TypeScript', install: 'npm install @greplabs/sdk', color: 'bg-yellow-500' },
              { name: 'Python', install: 'pip install greplabs', color: 'bg-blue-500' },
              { name: 'Rust', install: 'cargo add greplabs', color: 'bg-orange-500' },
              { name: 'Go', install: 'go get github.com/greplabs/sdk-go', color: 'bg-cyan-500' },
              { name: 'Ruby', install: 'gem install greplabs', color: 'bg-red-500' },
              { name: 'PHP', install: 'composer require greplabs/sdk', color: 'bg-purple-500' },
            ].map((sdk) => (
              <div
                key={sdk.name}
                className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${sdk.color}`} />
                  <span className="font-light text-gray-900 dark:text-white">{sdk.name}</span>
                </div>
                <code className="text-xs text-gray-500 dark:text-gray-400 font-mono">{sdk.install}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Open Source</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              All our SDKs and many core components are open source. Contribute, report issues, or fork for your needs.
            </p>
            <a
              href="https://github.com/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-grep-purple dark:text-grep-pink hover:underline"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Need Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              Join our developer community for support, share your projects, or ask questions.
            </p>
            <a
              href="https://discord.gg/greplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-grep-purple dark:text-grep-pink hover:underline"
            >
              Join Discord
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

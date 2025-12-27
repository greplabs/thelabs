import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Terminal, Key, Zap, Shield, Folder, MessageSquare, Gamepad2 } from 'lucide-react'

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Docs
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Getting Started
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400">
            Get up and running with GrepLabs products in under 5 minutes.
          </p>
        </div>

        {/* Step 1: Create Account */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-grep-purple to-grep-pink flex items-center justify-center text-white font-medium">
              1
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 dark:text-white">Create an Account</h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
              Sign up for a free GrepLabs account to get your API keys and access the dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.greplabs.com/signup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://app.greplabs.com/login"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>No credit card required. Free tier includes generous limits for all products.</span>
          </div>
        </section>

        {/* Step 2: Get API Key */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-grep-purple to-grep-pink flex items-center justify-center text-white font-medium">
              2
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 dark:text-white">Get Your API Key</h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Key className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="font-medium text-gray-900 dark:text-white">API Keys</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
              Navigate to Settings → API Keys in your dashboard. Create a new key for each environment (development, production).
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
{`# Your API key will look like this:
GREPLABS_API_KEY=gl_live_xxxxxxxxxxxxxxxxxxxx

# For development, use sandbox keys:
GREPLABS_API_KEY=gl_test_xxxxxxxxxxxxxxxxxxxx`}
            </pre>
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Keep your API keys secure. Never commit them to version control.</span>
          </div>
        </section>

        {/* Step 3: Install SDK */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-grep-purple to-grep-pink flex items-center justify-center text-white font-medium">
              3
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 dark:text-white">Install the SDK</h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="font-medium text-gray-900 dark:text-white">Choose your language</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">JavaScript / TypeScript</div>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded-lg text-sm font-mono">
                  npm install @greplabs/sdk
                </pre>
              </div>

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Python</div>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded-lg text-sm font-mono">
                  pip install greplabs
                </pre>
              </div>

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Go</div>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded-lg text-sm font-mono">
                  go get github.com/greplabs/sdk-go
                </pre>
              </div>

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Rust</div>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded-lg text-sm font-mono">
                  cargo add greplabs
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Make First Request */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-grep-purple to-grep-pink flex items-center justify-center text-white font-medium">
              4
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 dark:text-white">Make Your First Request</h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="font-medium text-gray-900 dark:text-white">Quick Example</span>
            </div>

            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">
{`import { GrepLabs } from '@greplabs/sdk';

const client = new GrepLabs({
  apiKey: process.env.GREPLABS_API_KEY,
});

// Check account status
const status = await client.account.status();
console.log('Account:', status.email);
console.log('Plan:', status.plan);
console.log('Usage:', status.usage);`}
            </pre>

            <p className="text-gray-600 dark:text-gray-400 font-light">
              That&apos;s it! You&apos;re now ready to use any GrepLabs product.
            </p>
          </div>
        </section>

        {/* Product Quick Starts */}
        <section className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Product Quick Starts</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Shields AI',
                icon: Shield,
                description: 'DNS filtering and threat detection',
                href: '/docs/shields',
                color: 'from-grep-green to-grep-cyan',
                example: `const result = await client.shields.query({
  domain: 'example.com',
  type: 'A'
});`,
              },
              {
                name: 'Hippo',
                icon: Folder,
                description: 'Semantic file search',
                href: '/docs/hippo',
                color: 'from-grep-orange to-grep-yellow',
                example: `const results = await client.hippo.search({
  query: 'meeting notes from last week',
  limit: 10
});`,
              },
              {
                name: 'Chai.im',
                icon: MessageSquare,
                description: 'Encrypted messaging',
                href: '/docs/chai',
                color: 'from-grep-blue to-grep-cyan',
                example: `const message = await client.chai.send({
  to: 'user@example.com',
  content: 'Hello, world!'
});`,
              },
              {
                name: 'GrepCoin',
                icon: Gamepad2,
                description: 'Gaming and rewards',
                href: '/docs/grepcoin',
                color: 'from-grep-purple to-grep-pink',
                example: `const balance = await client.grepcoin.balance({
  wallet: '0x...'
});`,
              },
            ].map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-light text-gray-900 dark:text-white group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
                    </div>
                  </div>
                  <pre className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 p-3 rounded-lg text-xs font-mono overflow-hidden">
                    {product.example}
                  </pre>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-grep-purple/10 to-grep-pink/10 border border-grep-purple/20 dark:border-grep-pink/20 rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/api"
              className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl hover:shadow-lg transition-shadow"
            >
              <ArrowRight className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="text-gray-900 dark:text-white font-light">Explore the full API Reference</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl hover:shadow-lg transition-shadow"
            >
              <ArrowRight className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="text-gray-900 dark:text-white font-light">Read technical blog posts</span>
            </Link>
            <Link
              href="/open-source"
              className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl hover:shadow-lg transition-shadow"
            >
              <ArrowRight className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="text-gray-900 dark:text-white font-light">Contribute to open source</span>
            </Link>
            <a
              href="https://discord.gg/greplabs"
              className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl hover:shadow-lg transition-shadow"
            >
              <ArrowRight className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
              <span className="text-gray-900 dark:text-white font-light">Join the developer community</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

import Link from 'next/link'
import { ArrowLeft, Github, Code, Shield, Users, Zap, Lock } from 'lucide-react'

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            Open-Core Licensing
          </h1>
          <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl">
            Transparent core technology, polished commercial applications
          </p>
        </div>

        {/* Core Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
              <Code className="w-8 h-8 text-gray-900 dark:text-white mb-4" />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Every line of code is auditable. Users can verify our privacy claims, security implementations, and functionality.
              </p>
            </div>

            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
              <Shield className="w-8 h-8 text-gray-900 dark:text-white mb-4" />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">Security</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                More eyes on the code means faster bug discovery and fixes. Community-driven security is stronger than closed-source.
              </p>
            </div>

            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
              <Users className="w-8 h-8 text-gray-900 dark:text-white mb-4" />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Contributors improve our code, report bugs, suggest features, and become advocates for our products.
              </p>
            </div>

            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
              <Zap className="w-8 h-8 text-gray-900 dark:text-white mb-4" />
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Open source enables forks, integrations, and extensions that we couldn't build alone. The ecosystem grows organically.
              </p>
            </div>
          </div>
        </section>

        {/* What's Open Source */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Open Source Components</h2>

          <div className="space-y-6">
            <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Core Engines & Libraries</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                DNS filtering engine, encryption libraries, indexing algorithms, and protocol implementations.
                The fundamental technology that powers our products is open and auditable.
              </p>
            </div>

            <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">CLI Tools & SDKs</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Command-line interfaces and software development kits for developers who want to integrate
                or build on our technology.
              </p>
            </div>

            <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Security & Cryptography</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                All cryptographic implementations are open source. Verify our security claims yourself.
                Trust through transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Commercial Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Commercial License</h2>

          <div className="space-y-6">
            <div className="p-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/10">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Desktop & Mobile Applications</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Polished applications with premium UX, native performance, and seamless user experience.
                These are commercially licensed to sustain development.
              </p>
            </div>

            <div className="p-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/10">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Enterprise Features</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Team management, SSO integration, audit logs, advanced analytics, and dedicated support
                for organizations that need enterprise-grade tooling.
              </p>
            </div>

            <div className="p-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/10">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Advanced AI Features</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Premium AI capabilities like advanced threat detection, smart categorization, and
                AI-powered insights are part of our commercial offering.
              </p>
            </div>
          </div>
        </section>

        {/* Licenses */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Licenses</h2>
          <div className="space-y-4">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">MIT License</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                Most of our open source code is licensed under the MIT License—one of the most permissive licenses available.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Apache 2.0 License</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                Some components use Apache 2.0, which includes patent protections and clearer contributor agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Benefits of Our Model</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">For Users</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 ml-4">
                <li>Verify privacy and security claims yourself</li>
                <li>No vendor lock-in—fork if needed</li>
                <li>Community support and contributions</li>
                <li>Customize to your needs</li>
                <li>Self-host if desired</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">For GrepLabs</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 ml-4">
                <li>Community-driven bug fixes and improvements</li>
                <li>Natural marketing through code visibility</li>
                <li>Talent acquisition from contributors</li>
                <li>Third-party integrations and extensions</li>
                <li>Reduced support burden through community help</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">For the Ecosystem</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 ml-4">
                <li>Standards and best practices emerge</li>
                <li>Interoperability between products</li>
                <li>Educational value for developers</li>
                <li>Foundation for other projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contributing */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">How to Contribute</h2>
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-900">
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
              We welcome contributions! Whether it's bug fixes, features, documentation, or design improvements.
            </p>
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6 text-gray-900 dark:text-white" />
              <a
                href="https://github.com/greplabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white font-medium hover:opacity-70 transition-opacity"
              >
                View our repositories on GitHub
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}


'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const faqs = [
  {
    category: 'Products',
    questions: [
      {
        q: 'Are GrepLabs products free to use?',
        a: 'Yes! All our products have free tiers with full core functionality. Premium features are available through subscription, which helps fund continued open-source development. We believe powerful software should be accessible to everyone.',
      },
      {
        q: 'What makes Chai.im different from Signal or WhatsApp?',
        a: 'Chai.im combines Signal Protocol encryption with hardware key authentication (FIDO2/WebAuthn), local AI processing for summaries and suggestions, and a terminal client for power users. It\'s designed for those who want enterprise-grade security with modern features.',
      },
      {
        q: 'How does Shields AI achieve <1ms DNS latency?',
        a: 'Shields AI uses Rust for performance, eBPF for kernel-level filtering, and optimized ML models. DNS queries are processed locally with minimal overhead, and threat detection happens in parallel without blocking the query path.',
      },
      {
        q: 'Can Hippo search through encrypted files?',
        a: 'Hippo can index encrypted files if you provide decryption keys. However, by default, it respects encryption and only searches metadata and filenames for encrypted content. For unencrypted files, full semantic search is available.',
      },
      {
        q: 'Is GrepCoin a legitimate cryptocurrency?',
        a: 'Yes! GrepCoin (GREP) is a real ERC-20 token on Base L2. Smart contracts are open source and auditable. Tokens are earned through gameplay and can be traded on supported exchanges.',
      },
    ],
  },
  {
    category: 'Open Source',
    questions: [
      {
        q: 'Which parts of your products are open source?',
        a: 'Core functionality is open source under MIT or Apache 2.0 licenses. This includes messaging protocols, file indexing engines, DNS filtering logic, and smart contracts. Premium features and enterprise tools may have separate licensing.',
      },
      {
        q: 'How can I contribute to GrepLabs projects?',
        a: 'We welcome contributions! Check our GitHub repositories, read contributing guidelines, and look for "good first issue" labels. We also sponsor contributors and have a bounty program for significant improvements.',
      },
      {
        q: 'Can I fork your products and sell them?',
        a: 'Yes! Our open-source licenses allow forking and commercial use. However, our trademarks and branding remain proprietary. You can build on our code, but you can\'t use our name or logos without permission.',
      },
      {
        q: 'Why keep some features closed source?',
        a: 'Premium features fund development and keep core functionality free. Enterprise features require commercial licensing to ensure sustainability. However, we continuously evaluate moving features to open source as the business grows.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Do you collect user data?',
        a: 'We minimize data collection. For messaging (Chai.im), messages are end-to-end encrypted and we can\'t read them. For file indexing (Hippo), processing happens locally. We only collect anonymized usage metrics for improving services, and you can opt out.',
      },
      {
        q: 'How do you handle GDPR and data protection?',
        a: 'We\'re GDPR compliant. Users can export their data, delete accounts, and request data removal. We process data locally when possible and use encrypted storage. Our privacy policy details all practices.',
      },
      {
        q: 'Are your products audited for security?',
        a: 'Core products undergo security audits. Open-source code is auditable by the community. We also participate in bug bounty programs and regularly review security practices. Audit reports are published for transparency.',
      },
      {
        q: 'Can governments or law enforcement access my data?',
        a: 'With end-to-end encryption (Chai.im), we cannot access your messages even if compelled. For other products with local-first architecture (Hippo), data stays on your device. We comply with legal requests when required by law, but we design systems to minimize what we can access.',
      },
    ],
  },
  {
    category: 'Business & Monetization',
    questions: [
      {
        q: 'How does GrepLabs make money?',
        a: 'We use a freemium model: free core features, paid premium subscriptions, enterprise licenses, and app store revenue. This allows us to keep core functionality open source while sustaining development.',
      },
      {
        q: 'What are premium features?',
        a: 'Premium features include advanced AI capabilities, priority support, cloud sync, team collaboration, API access, and enterprise integrations. Specific features vary by product—check individual product pages for details.',
      },
      {
        q: 'Do you accept investments or funding?',
        a: 'We\'re open to strategic partnerships and investments that align with our values: privacy-first, open-source core, and user empowerment. We prioritize sustainable growth over rapid scaling.',
      },
      {
        q: 'Can I get enterprise pricing?',
        a: 'Yes! Contact us for enterprise pricing, custom deployments, dedicated support, and SLA guarantees. Enterprise customers get additional features, priority support, and custom integrations.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What programming languages do you use?',
        a: 'We use TypeScript/JavaScript for web apps (Next.js, React), Rust for performance-critical systems (Shields AI, Hippo core), Solidity for smart contracts (GrepCoin), and Python for ML models. Each tool is chosen for its strengths.',
      },
      {
        q: 'How do you ensure performance?',
        a: 'We optimize every layer: code splitting, lazy loading, WebAssembly for compute-intensive tasks, edge caching, and Rust for systems programming. Every feature is benchmarked before release.',
      },
      {
        q: 'Do you have APIs for developers?',
        a: 'Yes! We provide REST APIs and SDKs for integration. API documentation is available for developers. Premium and enterprise tiers get higher rate limits and additional endpoints.',
      },
      {
        q: 'Can I self-host GrepLabs products?',
        a: 'Some products support self-hosting. Chai.im server, Shields AI, and Hippo can be self-hosted. Self-hosted versions may have different feature sets. Check individual product documentation for setup guides.',
      },
    ],
  },
]

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-grep-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-grep-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our products, privacy, open source, and more.
          </p>
        </motion.div>

        {/* FAQ by Category */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                className="w-full px-8 py-6 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-between"
              >
                <h3 className="text-xl font-light text-gray-900 dark:text-white">{category.category}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openCategory === category.category ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openCategory === category.category && (
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {category.questions.map((faq, qIndex) => (
                    <div key={qIndex} className="px-8 py-6">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === `${category.category}-${qIndex}` ? null : `${category.category}-${qIndex}`)}
                        className="w-full text-left flex items-start justify-between gap-4 group"
                      >
                        <h4 className="text-lg font-light text-gray-900 dark:text-white group-hover:text-grep-purple dark:group-hover:text-grep-pink transition-colors flex-1">
                          {faq.q}
                        </h4>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform flex-shrink-0 mt-1 ${
                            openQuestion === `${category.category}-${qIndex}` ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openQuestion === `${category.category}-${qIndex}` && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:hello@greplabs.com"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-grep-purple dark:hover:text-grep-pink transition-colors font-medium"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}


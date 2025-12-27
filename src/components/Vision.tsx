'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Code, Rocket, Sparkles, Shield, Lock } from 'lucide-react'

export default function Vision() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/20 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-grep-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-grep-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Our Vision</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Open Core,
            <br />
            <span className="gradient-text">Enterprise Ready</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We build privacy-first software with an open-core model. Our core engines are open source
            and auditable, while our polished applications and enterprise features are commercially licensed.
          </p>
        </motion.div>

        {/* Vision pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Code,
              title: 'Open Core',
              description: 'Core engines and libraries are open source (MIT/Apache). Community can audit, contribute, and self-host the fundamentals.',
              color: 'from-grep-purple/20 to-grep-pink/20',
            },
            {
              icon: Shield,
              title: 'Commercial Apps',
              description: 'Polished desktop and mobile applications with premium UX are commercially licensed. Beautiful software that just works.',
              color: 'from-grep-blue/20 to-grep-cyan/20',
            },
            {
              icon: Lock,
              title: 'Privacy First',
              description: 'All data stays on your devices. No telemetry, no tracking, no cloud dependency. Your privacy is non-negotiable.',
              color: 'from-grep-green/20 to-grep-cyan/20',
            },
            {
              icon: Rocket,
              title: 'Enterprise Ready',
              description: 'Enterprise features, priority support, and custom integrations for organizations that need more than the basics.',
              color: 'from-grep-orange/20 to-grep-yellow/20',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Licensing model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-extralight text-gray-900 dark:text-white mb-6">
              Our Licensing Model
            </h3>
            <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We believe in transparency and community. Our core technology is open source so you can
              verify our privacy claims. Our applications are commercially licensed to sustain development
              and provide the polished experience you deserve.
            </p>

            {/* Licensing breakdown */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="text-left">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-grep-green" />
                  Open Source (MIT/Apache)
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                  <li>• Core DNS filtering engine</li>
                  <li>• Encryption libraries</li>
                  <li>• Indexing and search algorithms</li>
                  <li>• Protocol implementations</li>
                  <li>• CLI tools and SDKs</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-grep-purple" />
                  Commercial License
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                  <li>• Desktop & mobile applications</li>
                  <li>• Premium UI/UX components</li>
                  <li>• Enterprise management console</li>
                  <li>• Advanced AI features</li>
                  <li>• Priority support & SLAs</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


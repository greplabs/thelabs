'use client'

import { motion } from 'framer-motion'
import { Code, Shield, Lock, Rocket } from 'lucide-react'

const pillars = [
  { icon: Code, title: 'Open Core', description: 'Core engines are MIT/Apache licensed. Audit, contribute, self-host.' },
  { icon: Shield, title: 'Commercial Apps', description: 'Polished apps with premium UX are commercially licensed.' },
  { icon: Lock, title: 'Privacy First', description: 'All data stays on your devices. No telemetry, no tracking.' },
  { icon: Rocket, title: 'Enterprise Ready', description: 'Enterprise features, priority support, custom integrations.' },
]

const phases = [
  { phase: '1', title: 'Build & Validate', description: 'Develop core products and validate market fit.' },
  { phase: '2', title: 'Open Source Core', description: 'Release core engines as open source (MIT/Apache).' },
  { phase: '3', title: 'Scale & Enterprise', description: 'Launch enterprise offerings and managed services.' },
]

export default function Vision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
            Open Core, <span className="gradient-text">Privacy First</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Core engines are open source for transparency. Apps are commercially licensed to sustain development.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-light">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Licensing breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-green-600 dark:text-green-400" />
                Open Source (MIT/Apache)
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400 font-light">
                <li>• Core DNS filtering engine</li>
                <li>• Encryption libraries</li>
                <li>• Indexing and search algorithms</li>
                <li>• Protocol implementations</li>
                <li>• CLI tools and SDKs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Commercial License
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400 font-light">
                <li>• Desktop & mobile applications</li>
                <li>• Premium UI/UX components</li>
                <li>• Enterprise management console</li>
                <li>• Advanced AI features</li>
                <li>• Priority support & SLAs</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Plan phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6 text-center">Our Plan</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5"
              >
                <div className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                  Phase {item.phase}
                </div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

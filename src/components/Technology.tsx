'use client'

import { motion } from 'framer-motion'
import { Code, Database, Shield, Zap, Sparkles } from 'lucide-react'

const technologies = [
  {
    icon: Code,
    title: 'Modern Frameworks',
    description: 'Built with Next.js 15, React 18, and TypeScript for type-safe, performant web applications.',
    stack: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-grep-purple/20 to-grep-pink/20',
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    description: 'PostgreSQL for structured data, Prisma for type-safe queries, and Redis for high-speed caching.',
    stack: ['PostgreSQL', 'Prisma', 'Redis', 'Vector DBs'],
    gradient: 'from-grep-blue/20 to-grep-cyan/20',
  },
  {
    icon: Shield,
    title: 'Security & Cryptography',
    description: 'Signal Protocol for messaging, FIDO2/WebAuthn for authentication, and end-to-end encryption throughout.',
    stack: ['Signal Protocol', 'FIDO2/WebAuthn', 'AES-256-GCM', 'TLS 1.3'],
    gradient: 'from-grep-green/20 to-grep-cyan/20',
  },
  {
    icon: Zap,
    title: 'AI & Performance',
    description: 'Local AI processing with WebAssembly, TensorFlow.js, and custom models optimized for edge devices.',
    stack: ['WebAssembly', 'TensorFlow.js', 'ONNX', 'Custom Models'],
    gradient: 'from-grep-orange/20 to-grep-yellow/20',
  },
]

export default function Technology() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-grep-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-grep-blue/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Technology</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Built With
            <br />
            <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build products that are fast, secure, and scalable.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${tech.gradient} border border-gray-200 dark:border-gray-800 rounded-2xl p-10 hover:shadow-xl transition-all`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-gray-900 dark:text-white" />
                </div>

                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6">
                  {tech.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tech.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/70 dark:bg-black/70 backdrop-blur-sm text-gray-900 dark:text-white rounded-lg text-sm font-mono font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl p-12">
            <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-6">Development Philosophy</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <p>
                <strong className="text-gray-900 dark:text-white">Type Safety First:</strong> We use TypeScript 
                throughout our stack to catch errors early and maintain code quality. This includes type-safe database 
                queries with Prisma and type-safe API routes.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Performance by Default:</strong> Every feature 
                is optimized for speed. We use code splitting, lazy loading, edge caching, and WebAssembly for 
                compute-intensive operations.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Security Built-In:</strong> Security isn't 
                bolted on—it's designed into every layer. From encrypted databases to secure authentication flows, 
                we assume breach and design defensively.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Continuous Testing:</strong> Our CI/CD pipeline 
                runs comprehensive tests on every commit. We test APIs, UI components, integrations, and security 
                before deployment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


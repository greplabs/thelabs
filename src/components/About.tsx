'use client'

import { motion } from 'framer-motion'
import { Code2, Lightbulb, Heart, Zap, Users, Sparkles } from 'lucide-react'

export default function About() {
  const principles = [
    {
      icon: Code2,
      title: 'Built in the Open',
      description: 'Our core products are open source. We believe transparency builds trust and enables innovation. Every line of code can be audited, improved, and learned from.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Through Collaboration',
      description: 'We work with AI agents, developers, and communities to build software that solves real problems. Our products emerge from collaborative exploration, not boardroom mandates.',
    },
    {
      icon: Heart,
      title: 'Privacy as a Right',
      description: 'Privacy isn\'t a premium feature—it\'s fundamental. Every product we build defaults to privacy-first, with local processing and end-to-end encryption where possible.',
    },
    {
      icon: Zap,
      title: 'Performance Matters',
      description: 'We obsess over performance. Whether it\'s <1ms DNS queries or instant file search across 100K files, speed and efficiency are core to our engineering philosophy.',
    },
  ]

  const team = [
    {
      role: 'Founder & CEO',
      name: 'Punit Mishra',
      bio: 'Building privacy-first software with AI. Passionate about open source, cryptography, and creating tools that empower users.',
      expertise: ['AI Development', 'Blockchain', 'Privacy Engineering'],
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-grep-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-grep-pink/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">About GrepLabs</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Building Tomorrow's
            <br />
            <span className="gradient-text">Privacy-First Software</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            GrepLabs was founded on a simple principle: software should serve users, not surveil them. 
            We combine cutting-edge AI, cryptography, and open-source philosophy to build products that 
            respect your privacy while delivering exceptional performance.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl p-12">
            <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <p>
                GrepLabs started in June 2025 as an experiment: what if we built software the way it should be built? 
                Privacy-first, open-source at the core, and powered by AI—but AI that processes locally, 
                respecting user autonomy.
              </p>
              <p>
                Our first product, GrepCoin, emerged from 6 months of intensive development. We built 9 browser games, 
                created smart contracts for tokenomics and governance, and established a complete platform—all through 
                human-AI collaboration. We discovered that this partnership could produce exceptional results when guided 
                by clear principles: privacy, transparency, and user empowerment.
              </p>
              <p>
                During our incubation period (June-December 2025), we validated concepts, built core infrastructure, 
                and established early communities. GrepCoin's platform grew to 91 API endpoints and 112 React components. 
                We designed Chai.im's privacy-first messaging architecture, Shields AI's sub-millisecond DNS security, 
                and Hippo's local-first file indexing system.
              </p>
              <p>
                Today, we're preparing to launch four products that span messaging, file organization, network security, 
                and gaming. Each product shares the same DNA: open-source core, freemium model, privacy-first 
                architecture, and AI-powered intelligence—all built with local processing to preserve user privacy.
              </p>
              <p>
                We measure success not just in revenue, but in trust earned, privacy protected, and communities 
                built around our open-source projects. As we prepare for launch in January 2026, we're excited to 
                share what we've built with the world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Principles */}
        <div className="mb-20">
          <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-12 text-center">Core Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-grep-purple/20 to-grep-pink/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <h4 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8 text-center">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', category: 'Framework' },
              { name: 'React', category: 'UI' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Rust', category: 'Systems' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Solidity', category: 'Blockchain' },
              { name: 'WebAssembly', category: 'Performance' },
              { name: 'TensorFlow', category: 'AI/ML' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="font-mono font-medium text-gray-900 dark:text-white mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-extralight text-gray-900 dark:text-white mb-12 text-center">Team</h3>
          <div className="space-y-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-grep-purple to-grep-pink flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-light text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-light"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


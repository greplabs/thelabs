import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Key, Eye, Server, FileCheck, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'

export default function SecurityPage() {
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
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Security</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Security &
            <br />
            <span className="gradient-text">Compliance</span>
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl">
            Security isn&apos;t a feature we add—it&apos;s foundational to everything we build. Here&apos;s how we protect your data.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { name: 'SOC 2 Type II', status: 'In Progress' },
            { name: 'HIPAA', status: 'Compliant' },
            { name: 'GDPR', status: 'Compliant' },
            { name: 'ISO 27001', status: 'Planned' },
          ].map((badge) => (
            <div
              key={badge.name}
              className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-center"
            >
              <div className="font-medium text-gray-900 dark:text-white mb-1">{badge.name}</div>
              <div className={`text-sm ${
                badge.status === 'Compliant'
                  ? 'text-green-600 dark:text-green-400'
                  : badge.status === 'In Progress'
                  ? 'text-yellow-600 dark:text-yellow-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {badge.status}
              </div>
            </div>
          ))}
        </div>

        {/* Security Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Security Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Lock,
                title: 'End-to-End Encryption',
                description: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). For messaging, we use the Signal Protocol—the same encryption trusted by journalists and activists worldwide.',
              },
              {
                icon: Eye,
                title: 'Zero-Knowledge Architecture',
                description: 'We can\'t read your data even if we wanted to. Encryption keys are derived from your credentials and never leave your device. We only store encrypted blobs.',
              },
              {
                icon: Key,
                title: 'Hardware Security',
                description: 'Support for FIDO2/WebAuthn hardware keys. Sensitive cryptographic operations use secure enclaves where available. API keys are hashed, never stored in plaintext.',
              },
              {
                icon: Server,
                title: 'Infrastructure Security',
                description: 'Hosted on SOC 2 compliant infrastructure. Network isolation, DDoS protection, and continuous monitoring. Regular penetration testing by third parties.',
              },
            ].map((principle) => {
              const Icon = principle.icon
              return (
                <div
                  key={principle.title}
                  className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-grep-purple dark:text-grep-pink mb-4" />
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">{principle.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Encryption Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Encryption Specifications</h2>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Layer</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Algorithm</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Key Size</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400 font-light">
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-4">Transport Layer</td>
                  <td className="p-4 font-mono text-sm">TLS 1.3</td>
                  <td className="p-4">256-bit</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-4">Data at Rest</td>
                  <td className="p-4 font-mono text-sm">AES-256-GCM</td>
                  <td className="p-4">256-bit</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-4">Message Encryption (Chai.im)</td>
                  <td className="p-4 font-mono text-sm">Signal Protocol (X3DH + Double Ratchet)</td>
                  <td className="p-4">Curve25519</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-4">Key Derivation</td>
                  <td className="p-4 font-mono text-sm">HKDF-SHA256</td>
                  <td className="p-4">256-bit</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-4">Password Hashing</td>
                  <td className="p-4 font-mono text-sm">Argon2id</td>
                  <td className="p-4">Memory: 64MB, Iterations: 3</td>
                </tr>
                <tr>
                  <td className="p-4">Digital Signatures</td>
                  <td className="p-4 font-mono text-sm">Ed25519</td>
                  <td className="p-4">256-bit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Compliance</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl">
              <div className="flex items-start gap-4">
                <FileCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">HIPAA Compliance</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
                    Chai.im is designed for HIPAA compliance. We offer Business Associate Agreements (BAA) for healthcare organizations, encrypted audit logging, and configurable retention policies.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      End-to-end encryption for PHI
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Access controls and audit logging
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      BAA available for enterprise customers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Configurable data retention
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl">
              <div className="flex items-start gap-4">
                <FileCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">GDPR Compliance</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
                    We respect data subject rights and provide tools for data portability and deletion.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Data minimization by design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Right to access and export data
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Right to deletion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      EU data residency options
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl">
              <div className="flex items-start gap-4">
                <FileCheck className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">SOC 2 Type II</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
                    We&apos;re currently undergoing SOC 2 Type II certification. Expected completion: Q2 2026.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                      Security controls in place
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                      Audit in progress
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-4">Development</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Code review required for all changes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Automated security scanning (SAST/DAST)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Dependency vulnerability monitoring
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Signed commits and verified builds
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-4">Operations</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  24/7 infrastructure monitoring
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Automated incident response
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Regular backup testing
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Disaster recovery procedures
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-4">Testing</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Annual third-party penetration testing
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Continuous vulnerability scanning
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Bug bounty program (coming soon)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Red team exercises
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-light text-gray-900 dark:text-white mb-4">Access Control</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Principle of least privilege
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Multi-factor authentication required
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Regular access reviews
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  Just-in-time access for production
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vulnerability Disclosure */}
        <section className="mb-16">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-8">Vulnerability Disclosure</h2>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">Report a Vulnerability</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  We take security seriously and appreciate responsible disclosure. If you discover a security vulnerability, please report it to us.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400 font-light">Email:</span>
                <a href="mailto:security@greplabs.com" className="text-grep-purple dark:text-grep-pink hover:underline">
                  security@greplabs.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400 font-light">PGP Key:</span>
                <code className="text-sm bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded font-mono">
                  Fingerprint available on request
                </code>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400 font-light">Response Time:</span>
                <span className="text-gray-600 dark:text-gray-400">Within 24 hours</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">What to include:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-light text-sm">
                <li>• Description of the vulnerability</li>
                <li>• Steps to reproduce</li>
                <li>• Affected product(s) and version(s)</li>
                <li>• Potential impact</li>
                <li>• Any proof-of-concept code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-4">
            Questions About Security?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-8">
            Our security team is happy to answer questions and provide additional documentation for enterprise customers.
          </p>
          <a
            href="mailto:security@greplabs.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact Security Team
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>
      </div>
    </main>
  )
}

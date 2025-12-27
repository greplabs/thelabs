import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-16 terminal-text">
            Last Updated: December 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">Our Commitment to Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              At GrepLabs, privacy isn't just a feature—it's a fundamental principle. We build products that 
              minimize data collection, process data locally when possible, and give you control over your information.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              This Privacy Policy explains how we collect, use, protect, and share information when you use 
              our products and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4 mt-8">Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>Account Information:</strong> Username, email address, payment information (processed securely by third-party payment processors)</li>
              <li><strong>Profile Information:</strong> Optional profile details, preferences, and settings</li>
              <li><strong>Communication:</strong> Messages you send through our services (end-to-end encrypted where applicable)</li>
              <li><strong>Support Requests:</strong> Information you provide when contacting support</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4 mt-8">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>Usage Data:</strong> Features used, interaction patterns, performance metrics</li>
              <li><strong>Device Information:</strong> Device type, operating system, browser type</li>
              <li><strong>Log Data:</strong> IP addresses, access times, error logs (minimal logging for security)</li>
              <li><strong>Technical Data:</strong> Crash reports, diagnostic information</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4 mt-8">Information We Don't Collect</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We explicitly do <strong>not</strong> collect:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2">
              <li>Decrypted message content (messages are end-to-end encrypted)</li>
              <li>File contents from local-first products (processed locally)</li>
              <li>Browsing history or website visits</li>
              <li>Location data without explicit consent</li>
              <li>Contacts or address book information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and manage subscriptions</li>
              <li>Send service-related communications</li>
              <li>Respond to support requests</li>
              <li>Detect and prevent fraud, abuse, and security issues</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage patterns to improve user experience (aggregated, anonymized data)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We do <strong>not</strong> sell your personal information to third parties. We do <strong>not</strong> 
              use your information for advertising or marketing unrelated to our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">3. Data Processing and Storage</h2>
            
            <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4 mt-8">Local-First Processing</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Many of our products are designed with local-first architecture:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>Chai.im:</strong> Messages encrypted on your device before transmission</li>
              <li><strong>Hippo:</strong> File indexing and AI processing occur locally</li>
              <li><strong>Shields AI:</strong> DNS filtering happens on your network</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4 mt-8">Cloud Services</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              When cloud services are used (e.g., for sync, backup, or collaboration):
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Data is encrypted in transit (TLS/SSL) and at rest</li>
              <li>End-to-end encryption is used where applicable</li>
              <li>We use reputable cloud providers with strong security practices</li>
              <li>Data is stored in jurisdictions compliant with applicable privacy laws</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">4. Information Sharing</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Trusted third parties who assist in operations (payment processing, hosting, analytics) under strict confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request (we will notify you when legally permitted)</li>
              <li><strong>Safety and Security:</strong> To protect rights, property, or safety of users or the public</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (users will be notified)</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">5. Your Rights and Choices</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Objection:</strong> Object to processing of your information (where applicable)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              To exercise these rights, contact us at privacy@greplabs.com. We will respond within 30 days.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">6. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>End-to-end encryption for sensitive communications</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure development practices and code reviews</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              However, no system is 100% secure. We cannot guarantee absolute security, and you use our services 
              at your own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">7. Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Our services are not intended for children under 13 (or 16 in the EU). We do not knowingly collect 
              information from children. If you believe we have collected information from a child, please contact 
              us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">8. International Data Transfers</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws different from your country.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) for 
              transfers from the EU/EEA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">9. Retention of Information</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We retain information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              When you delete your account, we delete or anonymize your information within 30 days, except where 
              retention is required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">10. Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We may update this Privacy Policy from time to time. Material changes will be communicated via email 
              or prominent notice in our services. The "Last Updated" date indicates when changes were made.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">11. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              For privacy-related questions or concerns, please contact us:
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <strong>GrepLabs LLC</strong><br />
              Email: privacy@greplabs.com<br />
              Website: greplabs.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mt-4">
              <strong>Data Protection Officer:</strong><br />
              Email: dpo@greplabs.com
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light terminal-text"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}


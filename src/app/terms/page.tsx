import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 terminal-text">
            Last Updated: December 26, 2024
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-16 font-light">
            Effective Date: January 1, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              By accessing and using GrepLabs products and services, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              These terms apply to all users, including visitors, registered users, and subscribers. Your use of our services 
              constitutes acceptance of these terms and our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">2. Description of Services</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              GrepLabs LLC provides the following software products and services:
            </p>
            
            <div className="space-y-6 mb-6">
              <div className="border-l-4 border-grep-purple pl-4">
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">2.1 GrepCoin (grepcoin.io)</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                  A decentralized gaming platform on Base L2 blockchain. Users play arcade games, earn GREP tokens, stake tokens 
                  for yield, trade NFTs, and participate in governance. The platform features 9 browser-based games, smart contracts 
                  for tokenomics, and a marketplace for NFTs.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>How It Works:</strong> Users connect Web3 wallets, play games to earn tokens, stake tokens for passive income, 
                  trade NFTs in the marketplace (2.5% platform fee), and participate in tournaments (10% platform fee). Premium Battle Pass 
                  ($9.99/month) provides exclusive rewards and multipliers.
                </p>
              </div>

              <div className="border-l-4 border-grep-blue pl-4">
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">2.2 Chai.im (chai.im)</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                  An encrypted messaging platform using Signal Protocol for end-to-end encryption, FIDO2/WebAuthn for hardware key 
                  authentication, and local AI processing for privacy-preserving features.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>How It Works:</strong> Messages are encrypted on your device before transmission using Signal Protocol (X3DH + 
                  Double Ratchet). AI features (summaries, smart replies) run locally using WebAssembly—no message content leaves your device 
                  unencrypted. Free tier includes unlimited 1-on-1 messaging and basic groups (up to 10 members). Pro ($9.99/month) adds 
                  unlimited groups, cloud backup, and advanced features. Enterprise ($49/user/month) includes SSO, compliance features, and SLA guarantees.
                </p>
              </div>

              <div className="border-l-4 border-grep-green pl-4">
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">2.3 Shields AI</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                  A DNS protection service that blocks malware, phishing, and trackers using eBPF kernel-level filtering and ML-powered 
                  threat detection. Provides sub-millisecond latency and 100K+ queries per second capacity.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>How It Works:</strong> Users install Shields AI on devices or networks, configure DNS settings, and the service 
                  filters all DNS queries in real-time using eBPF kernel filtering (<1ms latency). ML models detect threats, blocklists filter 
                  known bad domains, and custom rules allow user control. Free tier includes basic filtering (up to 5 devices, 100K queries/month). 
                  Home ($4.99/month) adds unlimited devices and AI detection. Family ($9.99/month) adds profiles and parental controls. Enterprise 
                  ($499/month) includes unlimited users and custom deployment.
                </p>
              </div>

              <div className="border-l-4 border-grep-orange pl-4">
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">2.4 Hippo</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                  A local-first file organizer with AI-powered semantic search. Indexes 100K+ files locally, provides natural language search 
                  using vector embeddings, and processes all AI features on-device.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>How It Works:</strong> Users select folders to index. Hippo scans files, extracts metadata, creates vector embeddings 
                  for semantic search, and stores everything locally in SQLite. All AI processing (tagging, summaries, Q&A) runs locally using Ollama. 
                  Optional encrypted cloud sync enables cross-device access. Free tier indexes up to 10K files. Pro ($19.99/month) includes unlimited 
                  files and advanced AI. Team ($99/month for 5 users) adds shared workspaces. Enterprise includes on-premise deployment and custom AI models.
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Services may be provided under free or paid tiers as described in our pricing documentation and Open Revenue Strategy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">3. Open Source Licensing</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Core functionality of our products is available under open source licenses (typically MIT or Apache 2.0). You are free to use, 
              modify, and distribute the open source code in accordance with the applicable license terms. Source code is available on our GitHub 
              repositories.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Premium features, enterprise tools, and certain proprietary components remain under commercial licenses and are subject to subscription 
              terms. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Advanced AI features (cloud processing, enhanced models)</li>
              <li>Enterprise features (SSO, admin dashboards, compliance tools)</li>
              <li>Priority support and SLA guarantees</li>
              <li>Custom deployments and white-label solutions</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              You may not remove, bypass, or circumvent limitations on premium features. Attempting to access premium features without payment 
              constitutes a violation of these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">4. User Accounts and Responsibilities</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              When creating an account or using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your account credentials, wallet keys, and authentication devices</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized access or security breaches</li>
              <li>Use services in compliance with all applicable laws and regulations</li>
              <li>Not share your account credentials or access with others</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              For GrepCoin: You are responsible for securing your Web3 wallet and private keys. We cannot recover lost wallets or restore access 
              to tokens if you lose your private keys. Transactions on blockchain are irreversible.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              For Chai.im: You are responsible for securing your authentication devices (hardware keys, biometric data). We cannot recover accounts 
              if you lose all authentication methods.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">5. Privacy and Data Protection</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Your privacy is fundamental to our services. Our Privacy Policy explains in detail how we collect, use, protect, and share your data. 
              By using our services, you consent to our privacy practices as described in our Privacy Policy.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Privacy-First Design:</strong> Our products are designed with privacy-first principles:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>Chai.im:</strong> Messages are end-to-end encrypted. We cannot read your messages. AI processing happens locally on your device.</li>
              <li><strong>Hippo:</strong> All file indexing and AI processing happens locally. We never see your files. Optional cloud sync is encrypted end-to-end.</li>
              <li><strong>Shields AI:</strong> DNS queries are processed locally. We minimize logging and don't track your browsing history.</li>
              <li><strong>GrepCoin:</strong> Blockchain transactions are public by design. We collect minimal account information necessary for platform operation.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We collect only the minimum data necessary to provide services. Where possible, data processing occurs locally on your device. 
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">6. Product-Specific Terms</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">6.1 GrepCoin Terms</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Cryptocurrency and Tokens:</strong> GREP tokens are utility tokens for use within the GrepCoin ecosystem. They are not 
                  securities, investments, or financial instruments. Tokens have no guaranteed value and may lose value or become worthless.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Smart Contracts:</strong> All token transactions, staking, and NFT trades occur via smart contracts on Base L2. These 
                  contracts are immutable once deployed. We cannot reverse transactions or recover lost tokens. You are responsible for understanding 
                  smart contract risks.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Fees:</strong> Platform fees are deducted automatically: 2.5% on NFT marketplace transactions, 10% on tournament entry fees, 
                  15% of staking rewards. These fees fund platform operations and development.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Gaming:</strong> Games are provided for entertainment. We do not guarantee fairness, availability, or continuous operation. 
                  Leaderboards, scores, and rewards are subject to verification and may be adjusted for fairness.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>Regulatory Compliance:</strong> You are responsible for compliance with local laws regarding cryptocurrencies, gaming, and 
                  tokens. We may restrict access in jurisdictions where our services are prohibited.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">6.2 Chai.im Terms</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Encryption:</strong> Messages are end-to-end encrypted using Signal Protocol. We cannot decrypt your messages. If you lose 
                  your encryption keys, we cannot recover your message history.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Local Processing:</strong> AI features run locally on your device. We do not access or store message content for AI processing. 
                  Some metadata (sender, recipient, timestamp) is necessary for message delivery and is encrypted.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Content Responsibility:</strong> You are solely responsible for content you send. We do not monitor or censor messages. 
                  You must comply with applicable laws and not transmit illegal content.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>Backup and Sync:</strong> Encrypted cloud backup is optional. If enabled, your data is encrypted before leaving your device. 
                  We cannot access your encrypted backups. You are responsible for backing up your encryption keys.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">6.3 Shields AI Terms</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Network Security:</strong> Shields AI filters DNS queries but does not guarantee protection against all threats. You should 
                  use additional security measures. We are not liable for security breaches or malware infections.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Blocklists:</strong> Blocklists are maintained by community and third-party sources. We do not guarantee accuracy or completeness. 
                  Legitimate sites may be blocked, and malicious sites may not be blocked. You can whitelist or create custom rules.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Privacy:</strong> We minimize DNS query logging for privacy. Some logging is necessary for threat detection and service operation. 
                  Enterprise customers may have enhanced logging for compliance.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>Network Impact:</strong> While designed for minimal impact, Shields AI may affect network performance. You are responsible for 
                  testing compatibility with your network setup.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">6.4 Hippo Terms</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Local Processing:</strong> All file indexing and AI processing happens on your device. We never access your files. You are 
                  responsible for backing up your data.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>File Privacy:</strong> Hippo indexes file metadata and content for search. All data stays on your device. Optional cloud sync 
                  is encrypted end-to-end—we cannot decrypt your synced data.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                  <strong>Performance:</strong> Indexing large numbers of files may impact system performance. You can pause indexing or exclude specific 
                  folders. We are not responsible for performance issues on your device.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  <strong>Data Loss:</strong> We are not responsible for data loss. You should maintain backups. Hippo is an indexing tool, not a backup 
                  solution. Deleting files from your device removes them from the index.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">7. Acceptable Use</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Infringe on intellectual property rights (copyrights, trademarks, patents)</li>
              <li>Transmit malicious code, viruses, malware, or harmful content</li>
              <li>Interfere with or disrupt service operations, servers, or networks</li>
              <li>Attempt unauthorized access to systems, accounts, or data</li>
              <li>Use services for illegal or fraudulent purposes</li>
              <li>Spam, harass, threaten, or abuse other users</li>
              <li>Impersonate others or provide false information</li>
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Reverse engineer, decompile, or attempt to extract source code (except open source components)</li>
              <li>Circumvent security measures or access restrictions</li>
              <li>Use services to compete with GrepLabs or build competing products using our proprietary technology</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms. We may cooperate with law enforcement in investigating 
              illegal activities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">8. Subscription and Payment Terms</h2>
            
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">8.1 Subscription Plans</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Premium subscriptions are billed monthly or annually as selected. Subscriptions automatically renew unless cancelled at least 24 hours 
              before the renewal date. You authorize us to charge your payment method (credit card, PayPal, or cryptocurrency where accepted) for all 
              subscription fees.
            </p>

            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4 mt-6">8.2 Pricing Changes</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We reserve the right to change pricing with 30 days notice to existing subscribers. Price changes take effect at the next billing cycle. 
              You may cancel before the price change takes effect.
            </p>

            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4 mt-6">8.3 Refund Policy</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Free Trial:</strong> 14-day free trial available for Pro subscriptions. Cancel within 14 days for full refund.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Refunds:</strong> Refunds are provided within 14 days of purchase for first-time subscriptions, subject to usage limits. 
              Refunds are not available for:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li>Subscriptions cancelled after 14 days</li>
              <li>Renewed subscriptions (except as required by law)</li>
              <li>Annual plans after 30 days</li>
              <li>Enterprise plans (subject to contract terms)</li>
              <li>Cryptocurrency payments (blockchain transactions are irreversible)</li>
            </ul>

            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4 mt-6">8.4 Payment Methods</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We accept credit cards, PayPal, and cryptocurrency (for GrepCoin products). Payment processing is handled by third-party processors. 
              We do not store full credit card numbers.
            </p>

            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4 mt-6">8.5 Failed Payments</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              If payment fails, we may suspend your subscription after 7 days. We will attempt to contact you. You remain responsible for payment. 
              Services resume upon successful payment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">9. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Our Property:</strong> GrepLabs retains all rights, title, and interest in our services, trademarks, logos, brand names, 
              proprietary technology, and content, except for open source components licensed separately. Our trademarks include "GrepLabs", "GrepCoin", 
              "Chai.im", "Shields AI", and "Hippo" and associated logos.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain ownership of content you create, upload, or transmit using our services (messages, files, 
              game scores, etc.). However, you grant us a license to use, store, process, and display your content solely to provide our services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>User-Generated Content:</strong> By submitting content (reviews, feedback, contributions), you grant us a perpetual, worldwide, 
              royalty-free license to use, modify, and display such content.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <strong>Open Source:</strong> Open source components are licensed under their respective licenses (MIT, Apache 2.0, etc.). You must 
              comply with those license terms when using or modifying open source code.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">10. Service Availability and Modifications</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Availability:</strong> We strive to maintain service availability but do not guarantee uninterrupted access. Services may be 
              temporarily unavailable for maintenance, updates, upgrades, or due to circumstances beyond our control (force majeure, third-party 
              outages, etc.).
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>SLA (Enterprise Only):</strong> Enterprise customers receive SLA guarantees (99.9% uptime). Free and Pro tiers do not include 
              SLA guarantees, though we strive for high availability.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Modifications:</strong> We reserve the right to modify, suspend, or discontinue services with reasonable notice (30 days for 
              material changes). We will make reasonable efforts to provide migration paths for affected users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <strong>Feature Changes:</strong> We may add, remove, or modify features at any time. Premium features may become free, and free features 
              may become premium with 30 days notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">11. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, GREPLABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
              DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM YOUR USE OF OUR SERVICES.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Total Liability:</strong> Our total liability for any claims arising from our services shall not exceed the amount you paid us 
              in the 12 months preceding the claim, or $100, whichever is greater.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Product-Specific Limitations:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-light space-y-2 mb-4">
              <li><strong>GrepCoin:</strong> We are not liable for token value loss, smart contract bugs, or blockchain network issues. Cryptocurrency 
              investments carry risk.</li>
              <li><strong>Chai.im:</strong> We are not liable for message delivery failures, encryption key loss, or data loss. You are responsible for 
              backing up encryption keys.</li>
              <li><strong>Shields AI:</strong> We are not liable for security breaches, malware infections, or network issues. Additional security 
              measures are recommended.</li>
              <li><strong>Hippo:</strong> We are not liable for data loss, file corruption, or indexing errors. You should maintain backups.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Some jurisdictions do not allow exclusion of certain warranties or limitation of liability. In such jurisdictions, our liability is limited 
              to the maximum extent permitted by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">12. Indemnification</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              You agree to indemnify, defend, and hold harmless GrepLabs, its officers, directors, employees, and agents from any claims, damages, 
              losses, liabilities, costs, or expenses (including reasonable legal fees) arising from: (a) your use of our services, (b) your violation 
              of these terms, (c) your violation of any third-party rights, (d) content you submit or transmit, or (e) your violation of any applicable laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">13. Termination</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>By You:</strong> You may cancel your subscription at any time through your account settings or by contacting support. Cancellation 
              takes effect at the end of your billing period. You retain access until the period ends. No refunds for partial billing periods unless 
              required by law.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>By Us:</strong> We may suspend or terminate your access at any time for: (a) violation of these terms, (b) illegal activity, 
              (c) fraud or abuse, (d) non-payment, (e) extended inactivity, or (f) any other reason with reasonable notice.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Effect of Termination:</strong> Upon termination, your right to use services ceases immediately. We may delete your account and 
              data (subject to retention policies). You remain responsible for charges incurred before termination.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <strong>Data Export:</strong> You may export your data before termination. We provide data export tools for most services. After termination, 
              we may delete data per our data retention policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">14. Dispute Resolution</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Governing Law:</strong> These terms are governed by the laws of Delaware, United States, without regard to conflict of law principles.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Informal Resolution:</strong> Before filing a claim, you agree to contact us at legal@greplabs.com to attempt informal resolution. 
              We will attempt to resolve disputes within 30 days.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Arbitration:</strong> Any disputes that cannot be resolved informally shall be resolved through binding arbitration administered by 
              the American Arbitration Association (AAA) under its Commercial Arbitration Rules. Arbitration will be conducted in Delaware, United States. 
              Class actions and jury trials are waived.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <strong>Exceptions:</strong> You may opt out of arbitration within 30 days of accepting these terms by sending written notice to legal@greplabs.com. 
              Certain disputes (intellectual property, injunctive relief) may be brought in court.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">15. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              We may update these terms from time to time to reflect changes in services, laws, or business practices. Material changes will be communicated 
              via email to registered users or prominent notice in our services at least 30 days before the changes take effect.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Continued use of our services after changes constitutes acceptance. If you do not agree to changes, you must stop using our services and cancel 
              your subscription.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              The "Last Updated" date at the top indicates when terms were last modified. We encourage you to review these terms periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">16. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              For questions about these terms, legal matters, or to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                <strong className="text-gray-900 dark:text-white">GrepLabs LLC</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                Email: legal@greplabs.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-2">
                General Inquiries: hello@greplabs.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Website: greplabs.com
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">17. Additional Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Entire Agreement:</strong> These terms, together with our Privacy Policy and any additional agreements, constitute the entire agreement 
              between you and GrepLabs regarding our services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect. We will replace unenforceable 
              provisions with enforceable ones that achieve similar economic effect.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              <strong>Waiver:</strong> Our failure to enforce any provision does not constitute a waiver. Waivers must be in writing and signed by an authorized 
              representative.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <strong>Assignment:</strong> You may not assign or transfer these terms without our consent. We may assign these terms in connection with a merger, 
              acquisition, or sale of assets.
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-light"
              >
                Read Privacy Policy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

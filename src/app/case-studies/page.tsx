import Link from 'next/link'
import { ArrowLeft, ArrowRight, Quote, Building2, Users, TrendingUp, Shield, Folder, MessageSquare, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 'healthcare-hipaa',
    company: 'MedSecure Health Systems',
    industry: 'Healthcare',
    logo: '🏥',
    product: 'Chai.im',
    productIcon: MessageSquare,
    title: 'HIPAA-Compliant Messaging for 500+ Healthcare Workers',
    challenge: 'MedSecure needed to replace their aging pager system with a modern messaging solution that maintained HIPAA compliance. Their staff was using personal phones for patient discussions, creating compliance risks.',
    solution: 'Deployed Chai.im across all departments with enterprise SSO integration. Custom retention policies ensure messages are archived per regulatory requirements while maintaining end-to-end encryption.',
    results: [
      { metric: '99.9%', label: 'Uptime SLA achieved' },
      { metric: '3 min', label: 'Average response time (down from 15 min)' },
      { metric: '$0', label: 'HIPAA violations since deployment' },
      { metric: '500+', label: 'Healthcare workers onboarded' },
    ],
    quote: 'Chai.im gave us the security and compliance features we needed without sacrificing usability. Our staff actually wants to use it.',
    quotee: 'Dr. Sarah Chen, Chief Medical Information Officer',
    color: 'from-grep-blue to-grep-cyan',
  },
  {
    id: 'smb-dns-security',
    company: 'Nexus Digital Agency',
    industry: 'Marketing & Advertising',
    logo: '🎨',
    product: 'Shields AI',
    productIcon: Shield,
    title: 'Blocking 50,000+ Threats Monthly for a Growing Agency',
    challenge: 'As a digital agency, Nexus employees constantly research competitors, download assets, and visit unfamiliar websites. They experienced two malware incidents in 6 months, costing significant downtime.',
    solution: 'Implemented Shields AI across all company devices. The AI-powered threat detection catches zero-day threats while the category filtering prevents access to known malicious sites.',
    results: [
      { metric: '50K+', label: 'Threats blocked monthly' },
      { metric: '0', label: 'Malware incidents since deployment' },
      { metric: '<1ms', label: 'Added latency to browsing' },
      { metric: '$4.99', label: 'Monthly cost per employee' },
    ],
    quote: 'We went from constant security scares to zero incidents. The ROI was immediate—one prevented attack pays for years of service.',
    quotee: 'Marcus Webb, IT Director',
    color: 'from-grep-green to-grep-cyan',
  },
  {
    id: 'law-firm-search',
    company: 'Patterson & Associates LLP',
    industry: 'Legal',
    logo: '⚖️',
    product: 'Hippo',
    productIcon: Folder,
    title: 'Semantic Search Across 2M+ Legal Documents',
    challenge: 'The firm\'s document management was a mess. Paralegals spent hours searching for relevant case files, contracts, and precedents. The existing search was keyword-only and missed relevant documents.',
    solution: 'Deployed Hippo to index their entire document repository locally. The semantic search understands legal concepts, finding relevant documents even when exact terms differ.',
    results: [
      { metric: '2M+', label: 'Documents indexed' },
      { metric: '85%', label: 'Reduction in search time' },
      { metric: '<100ms', label: 'Average search latency' },
      { metric: '40 hrs', label: 'Saved weekly across the firm' },
    ],
    quote: 'Finding the right precedent used to take hours. Now I describe what I need in plain English and Hippo finds it in seconds.',
    quotee: 'Jennifer Liu, Senior Paralegal',
    color: 'from-grep-orange to-grep-yellow',
  },
  {
    id: 'startup-security',
    company: 'TechFlow Startups',
    industry: 'Technology',
    logo: '🚀',
    product: 'Multiple Products',
    productIcon: Shield,
    title: 'Full-Stack Privacy Infrastructure for a YC Startup',
    challenge: 'As a B2B startup handling sensitive customer data, TechFlow needed enterprise-grade security without enterprise-grade budgets. They were patching together multiple tools with inconsistent security postures.',
    solution: 'Adopted the full GrepLabs stack: Shields AI for network security, Chai.im for internal communications, and Hippo for document search. Single vendor, consistent security model.',
    results: [
      { metric: '60%', label: 'Reduction in security tool costs' },
      { metric: 'SOC 2', label: 'Compliance achieved' },
      { metric: '1 week', label: 'Full deployment time' },
      { metric: '3', label: 'Enterprise deals closed citing security' },
    ],
    quote: 'Having a unified security stack from one vendor simplified our compliance story. Enterprise customers take us seriously now.',
    quotee: 'David Park, CTO & Co-founder',
    color: 'from-grep-purple to-grep-pink',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-grep-purple dark:text-grep-pink" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Case Studies</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
            Real Results from
            <br />
            <span className="gradient-text">Real Companies</span>
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl">
            See how organizations use GrepLabs products to improve security, productivity, and compliance.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '500+', label: 'Organizations' },
            { value: '99.9%', label: 'Uptime' },
            { value: '10M+', label: 'Documents Indexed' },
            { value: '1B+', label: 'Threats Blocked' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="text-3xl font-extralight text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const ProductIcon = study.productIcon
            return (
              <article
                key={study.id}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${study.color} p-8 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-4xl mb-4">{study.logo}</div>
                      <h2 className="text-2xl md:text-3xl font-light mb-2">{study.company}</h2>
                      <p className="text-white/80">{study.industry}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                      <ProductIcon className="w-4 h-4" />
                      <span className="text-sm">{study.product}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">
                    {study.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                      Results
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
                        >
                          <div className="text-2xl font-extralight text-gray-900 dark:text-white mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <Quote className="w-8 h-8 text-grep-purple dark:text-grep-pink mb-4 opacity-50" />
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 font-light italic mb-4">
                      &quot;{study.quote}&quot;
                    </blockquote>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      — {study.quotee}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations using GrepLabs products to build secure, privacy-first solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fund"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-grep-purple to-grep-pink text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@greplabs.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

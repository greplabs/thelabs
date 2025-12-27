import ProductShowcase from '@/components/ProductShowcase'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import CaseStudies from '@/components/CaseStudies'
import Community from '@/components/Community'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductShowcase />

      {/* Vision & Plan Section */}
      <Vision />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Community Section */}
      <Community />

      {/* CTA Section */}
      <CTA />
    </main>
  )
}

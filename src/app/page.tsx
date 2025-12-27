import ProductShowcase from '@/components/ProductShowcase'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import About from '@/components/About'
import Philosophy from '@/components/Philosophy'
import Technology from '@/components/Technology'
import CaseStudies from '@/components/CaseStudies'
import Roadmap from '@/components/Roadmap'
import Community from '@/components/Community'
import DeveloperResources from '@/components/DeveloperResources'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import AppStore from '@/components/AppStore'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Ultra Minimalist */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Vision & Purpose Section */}
      <Vision />
      
      {/* Products Section - Clean Grid */}
      <ProductShowcase />

      {/* About Section */}
      <About />

      {/* Technology Section */}
      <Technology />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Community Section */}
      <Community />

      {/* Developer Resources Section */}
      <DeveloperResources />

      {/* FAQ Section */}
      <FAQ />

      {/* Blog Section */}
      <Blog />

      {/* App Store/Marketplace Section */}
      <AppStore />

      {/* CTA Section */}
      <CTA />
    </main>
  )
}

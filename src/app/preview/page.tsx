import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Philosophy from '@/components/Philosophy'
import Technology from '@/components/Technology'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GrepLabs - Preview',
  description: 'Preview of the GrepLabs website - Privacy-first software built for tomorrow.',
  robots: 'noindex, nofollow',
}

export default function PreviewPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <ProductShowcase />
        <Philosophy />
        <Technology />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

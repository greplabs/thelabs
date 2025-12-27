import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GrepLabs - Building Tomorrow\'s Privacy-First Software',
  description: 'GrepLabs LLC develops innovative, privacy-first, AI-powered products including GrepCoin, Chai.im, Shields AI, and Hippo.',
  keywords: ['GrepLabs', 'privacy', 'AI', 'encryption', 'blockchain', 'cybersecurity', 'coding hippo'],
  authors: [{ name: 'GrepLabs LLC' }],
  icons: {
    icon: '/hippo-logo.svg',
    apple: '/hippo-logo.svg',
  },
  openGraph: {
    title: 'GrepLabs - Building Tomorrow\'s Privacy-First Software',
    description: 'Innovative, privacy-first, AI-powered products',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}


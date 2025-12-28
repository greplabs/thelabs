import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

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
  title: 'GrepLabs - Launching January 1, 2026',
  description: 'Privacy-first software. Built for tomorrow. Four products. One mission. Zero compromise.',
  keywords: ['GrepLabs', 'privacy', 'AI', 'encryption', 'blockchain', 'cybersecurity'],
  authors: [{ name: 'GrepLabs LLC' }],
  icons: {
    icon: '/hippo-logo.svg',
    apple: '/hippo-logo.svg',
  },
  openGraph: {
    title: 'GrepLabs - Launching January 1, 2026',
    description: 'Privacy-first software. Built for tomorrow.',
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


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
  title: 'GrepLabs - AI Agent Infrastructure Platform',
  description: 'AI Agent Infrastructure Platform. Deploy, manage, and scale AI agents with MCP tool registry, LangGraph workflows, and real-time monitoring.',
  keywords: ['GrepLabs', 'AI agents', 'MCP', 'LangGraph', 'infrastructure', 'privacy', 'AI'],
  authors: [{ name: 'GrepLabs LLC' }],
  icons: {
    icon: '/hippo-logo.svg',
    apple: '/hippo-logo.svg',
  },
  openGraph: {
    title: 'GrepLabs - AI Agent Infrastructure Platform',
    description: 'Deploy, manage, and scale AI agents at enterprise scale.',
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


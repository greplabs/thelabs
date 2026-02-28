import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AgentDashboard from '@/components/dashboards/AgentDashboard'

export const metadata: Metadata = {
  title: 'Dashboard Demo - GrepLabs Platform',
  description: 'Live demo of the GrepLabs AI Agent Dashboard with real-time monitoring, workflow tracking, and agent fleet management.',
}

export default function PlatformDemoPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0E]">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/platform"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Platform
        </Link>
      </div>
      <AgentDashboard />
    </div>
  )
}

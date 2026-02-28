import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProjectOverview from '@/components/dashboards/ProjectOverview'

export const metadata: Metadata = {
  title: 'Build Overview - GrepLabs Platform',
  description: 'Track the build progress of GrepLabs AI Agent Infrastructure Platform across all workstreams.',
}

export default function PlatformOverviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/platform"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Platform
        </Link>
      </div>
      <ProjectOverview />
    </div>
  )
}

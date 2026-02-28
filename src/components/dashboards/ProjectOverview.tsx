'use client'

import { useState } from 'react'
import {
  Layers, Code, Layout, Database, Cloud,
  CheckCircle, Clock, ChevronDown,
  ChevronRight, Rocket, DollarSign,
  GitBranch, Palette, Server, Zap, Eye,
  Workflow, Terminal, FileText
} from 'lucide-react'

const StatusBadge = ({ status }: { status: string }) => {
  const configs: Record<string, { bg: string; text: string; icon: typeof CheckCircle; label: string }> = {
    ready: { bg: 'bg-green-500/20', text: 'text-green-400', icon: CheckCircle, label: 'Demo Ready' },
    scaffold: { bg: 'bg-blue-500/20', text: 'text-blue-400', icon: Code, label: 'Scaffold' },
    planned: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', icon: Clock, label: 'Planned' },
    building: { bg: 'bg-purple-500/20', text: 'text-purple-400', icon: Zap, label: 'Building' },
  }

  const config = configs[status] || configs.planned
  const Icon = config.icon

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  )
}

interface Artifact {
  name: string
  type: string
  size: string
  status: string
  description: string
}

const ArtifactCard = ({ artifact }: { artifact: Artifact }) => (
  <div className="p-4 rounded-lg border cursor-pointer transition-all bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-gray-600">
    <div className="flex items-start justify-between mb-2">
      <h4 className="font-medium text-white text-sm truncate flex-1 mr-2">{artifact.name}</h4>
      <StatusBadge status={artifact.status} />
    </div>
    <p className="text-xs text-gray-400 mb-2 line-clamp-2">{artifact.description}</p>
    <div className="flex items-center justify-between text-xs">
      <span className="text-gray-500">{artifact.type}</span>
      <span className="text-gray-500">{artifact.size}</span>
    </div>
  </div>
)

interface Stream {
  name: string
  description: string
  color: string
}

const StreamSection = ({ stream, artifacts, expanded, onToggle }: {
  stream: Stream
  artifacts: Artifact[]
  expanded: boolean
  onToggle: () => void
}) => {
  const streamIcons: Record<string, typeof Layers> = {
    'Business': DollarSign,
    'Rust Core': Server,
    'Frontend': Layout,
    'Design': Palette,
    'Database': Database,
    'Python': Code,
    'Infrastructure': Cloud,
  }

  const Icon = streamIcons[stream.name] || Layers
  const readyCount = artifacts.filter(a => a.status === 'ready').length
  const totalCount = artifacts.length

  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-900 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${stream.color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-white">{stream.name}</h3>
            <p className="text-xs text-gray-400">{stream.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-green-400 font-medium">{readyCount}</span>
            <span className="text-gray-500">/{totalCount} ready</span>
          </div>
          {expanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 pl-4">
          {artifacts.map((artifact, idx) => (
            <ArtifactCard key={idx} artifact={artifact} />
          ))}
        </div>
      )}
    </div>
  )
}

const ProgressRing = ({ value, size = 120, strokeWidth = 8 }: { value: number; size?: number; strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="text-gray-700"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-indigo-500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{value}%</span>
      </div>
    </div>
  )
}

export default function ProjectOverview() {
  const [expandedStreams, setExpandedStreams] = useState<string[]>(['Business', 'Frontend'])

  const streams: Stream[] = [
    { name: 'Business', description: 'Strategy, financials, and planning', color: 'bg-emerald-600' },
    { name: 'Frontend', description: 'React dashboards and visualizations', color: 'bg-blue-600' },
    { name: 'Rust Core', description: 'Backend API, auth, agents, MCP', color: 'bg-orange-600' },
    { name: 'Design', description: 'Design system and styling', color: 'bg-pink-600' },
    { name: 'Database', description: 'Schema and data layer', color: 'bg-purple-600' },
  ]

  const artifacts: Record<string, Artifact[]> = {
    'Business': [
      { name: 'Business Plan', type: 'Markdown', size: '18K', status: 'ready', description: 'Complete AI agent infrastructure business plan with market analysis' },
      { name: 'Financial Model', type: 'Markdown', size: '5K', status: 'ready', description: '5-year projections, unit economics, revenue model' },
      { name: 'Technical Architecture', type: 'Markdown', size: '55K', status: 'ready', description: 'Deep dive into system architecture and implementation' },
      { name: 'Freemium Strategy', type: 'Markdown', size: '14K', status: 'ready', description: 'Partnership and go-to-market strategy' },
    ],
    'Frontend': [
      { name: 'Unified Dashboard', type: 'React TSX', size: '37K', status: 'ready', description: 'Complete platform dashboard with all views' },
      { name: 'Refined Dashboard', type: 'React JSX', size: '18K', status: 'ready', description: 'Polished investor-ready dashboard' },
      { name: 'LangGraph Visualization', type: 'React TSX', size: '24K', status: 'ready', description: 'Interactive workflow graph visualization' },
      { name: 'Context Window Dashboard', type: 'React TSX', size: '15K', status: 'ready', description: 'Memory utilization analytics' },
      { name: 'Prompt Analysis Dashboard', type: 'React TSX', size: '25K', status: 'ready', description: 'Prompt performance and cost analytics' },
      { name: 'Next.js Components', type: 'React TSX', size: '13K', status: 'ready', description: 'Next.js integration components' },
    ],
    'Rust Core': [
      { name: 'Core Implementation', type: 'Rust', size: '25K', status: 'scaffold', description: 'Main application scaffold with services' },
      { name: 'Core API Server', type: 'Rust', size: '19K', status: 'scaffold', description: 'API routes and handlers' },
      { name: 'MCP Registry Service', type: 'Rust', size: '18K', status: 'scaffold', description: 'Tool registry and federation' },
      { name: 'CLI Tool', type: 'Rust', size: '15K', status: 'scaffold', description: 'Command-line interface' },
      { name: 'CLI Auth Commands', type: 'Rust', size: '24K', status: 'scaffold', description: 'Authentication commands' },
      { name: 'CLI MCP Commands', type: 'Rust', size: '30K', status: 'scaffold', description: 'MCP management commands' },
      { name: 'Cargo.toml Files', type: 'TOML', size: '14K', status: 'ready', description: 'Complete dependency configuration' },
    ],
    'Design': [
      { name: 'Design System Docs', type: 'Markdown', size: '21K', status: 'ready', description: 'Complete design token documentation' },
      { name: 'CSS Design System', type: 'CSS', size: '15K', status: 'ready', description: 'Production-ready CSS variables' },
    ],
    'Database': [
      { name: 'Database Schema', type: 'Mermaid', size: '10K', status: 'ready', description: 'Complete ERD with all tables' },
      { name: 'API Integration', type: 'TypeScript', size: '8K', status: 'scaffold', description: 'Next.js API layer' },
    ],
  }

  const toggleStream = (streamName: string) => {
    setExpandedStreams(prev =>
      prev.includes(streamName)
        ? prev.filter(s => s !== streamName)
        : [...prev, streamName]
    )
  }

  const allArtifacts = Object.values(artifacts).flat()
  const readyCount = allArtifacts.filter(a => a.status === 'ready').length
  const scaffoldCount = allArtifacts.filter(a => a.status === 'scaffold').length
  const totalCount = allArtifacts.length
  const readyPercent = Math.round((readyCount / totalCount) * 100)

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              GrepLabs Build Overview
            </h1>
            <p className="text-gray-400 mt-1">AI Agent Infrastructure Platform - Build Status</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <ProgressRing value={readyPercent} size={80} strokeWidth={6} />
              <div>
                <div className="text-sm text-gray-400">Overall Progress</div>
                <div className="text-2xl font-bold text-white">{readyCount}/{totalCount}</div>
                <div className="text-xs text-gray-500">artifacts ready</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-gray-400">Demo Ready</span>
            </div>
            <div className="text-3xl font-bold text-green-400">{readyCount}</div>
            <div className="text-sm text-gray-500 mt-1">Can be shown live now</div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-gray-400">Scaffold</span>
            </div>
            <div className="text-3xl font-bold text-blue-400">{scaffoldCount}</div>
            <div className="text-sm text-gray-500 mt-1">Code structure ready</div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <GitBranch className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-400">Build Streams</span>
            </div>
            <div className="text-3xl font-bold text-purple-400">6</div>
            <div className="text-sm text-gray-500 mt-1">Parallel workstreams</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Demo Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg text-left">
              <Eye className="w-6 h-6 text-indigo-400 mb-2" />
              <div className="font-medium text-white">View Dashboard</div>
              <div className="text-xs text-gray-400">Open unified dashboard</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg text-left">
              <Workflow className="w-6 h-6 text-green-400 mb-2" />
              <div className="font-medium text-white">LangGraph Demo</div>
              <div className="text-xs text-gray-400">Interactive workflow viz</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg text-left">
              <Terminal className="w-6 h-6 text-orange-400 mb-2" />
              <div className="font-medium text-white">CLI Demo</div>
              <div className="text-xs text-gray-400">Command line interface</div>
            </div>

            <div className="p-4 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-lg text-left">
              <FileText className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="font-medium text-white">Business Plan</div>
              <div className="text-xs text-gray-400">Investor presentation</div>
            </div>
          </div>
        </div>

        {/* Artifact Streams */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Project Artifacts by Stream</h2>
          {streams.map(stream => (
            <StreamSection
              key={stream.name}
              stream={stream}
              artifacts={artifacts[stream.name] || []}
              expanded={expandedStreams.includes(stream.name)}
              onToggle={() => toggleStream(stream.name)}
            />
          ))}
        </div>

        {/* Build Timeline */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">6-Week MVP Timeline</h2>
          <div className="space-y-4">
            {[
              { week: '1-2', title: 'Foundation', tasks: ['Scaffold + DB + Auth', 'Next.js + Components', 'K8s + Docker'], status: 'ready' },
              { week: '3-4', title: 'Core Features', tasks: ['Agent service + API', 'Dashboard + Agent views', 'CI/CD pipeline'], status: 'building' },
              { week: '5-6', title: 'Integration', tasks: ['MCP registry', 'Registry UI + Analytics', 'Monitoring stack'], status: 'planned' },
            ].map((phase, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-24 py-2 px-3 rounded-lg text-center text-sm font-medium ${
                  phase.status === 'ready' ? 'bg-green-600/20 text-green-400' :
                  phase.status === 'building' ? 'bg-purple-600/20 text-purple-400' :
                  'bg-gray-800 text-gray-400'
                }`}>
                  Week {phase.week}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-2">{phase.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.tasks.map((task, tidx) => (
                      <span key={tidx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Total: {totalCount} artifacts | Target: $1.75M ARR Year 1 &rarr; $42.5M ARR Year 5</p>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Layers, Server, Layout, Code, Cloud, Database, Cpu, Globe, Shield, Zap, GitBranch, BarChart3 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Platform - GrepLabs AI Agent Infrastructure',
  description: 'GrepLabs AI Agent Infrastructure Platform. Deploy, manage, and scale AI agents with MCP tool registry, LangGraph workflows, and real-time monitoring.',
}

const streams = [
  {
    name: 'Rust Core Backend',
    icon: Server,
    gradient: 'from-orange-500 to-red-500',
    description: 'High-performance API server built in Rust with Axum. Handles authentication, agent lifecycle, MCP registry, and workflow orchestration.',
    status: 'In Development',
    tasks: ['API Gateway', 'JWT Auth + RBAC', 'Agent Service', 'MCP Registry', 'Workflow Engine'],
  },
  {
    name: 'Frontend Dashboard',
    icon: Layout,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Next.js 14 dashboard with real-time agent monitoring, workflow visualization, and analytics. Built with the GrepLabs design system.',
    status: 'Live',
    tasks: ['Unified Dashboard', 'Agent Management', 'Workflow Canvas', 'Analytics Views', 'MCP Registry UI'],
  },
  {
    name: 'Infrastructure',
    icon: Cloud,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Kubernetes-native deployment with Helm charts, Terraform IaC, and comprehensive monitoring via Prometheus + Grafana.',
    status: 'In Development',
    tasks: ['K8s Manifests', 'Helm Charts', 'Terraform Modules', 'CI/CD Pipeline', 'Monitoring Stack'],
  },
  {
    name: 'Python ML Services',
    icon: Cpu,
    gradient: 'from-green-500 to-emerald-500',
    description: 'Agent runtime environment with LangGraph integration, MCP client SDK, and vector store for RAG-based retrieval.',
    status: 'Planned',
    tasks: ['Agent Runtime', 'LangGraph Integration', 'MCP Client SDK', 'Vector Store'],
  },
]

const metrics = [
  { value: '$25.6B', label: 'Market Opportunity', icon: BarChart3 },
  { value: '6', label: 'Build Streams', icon: GitBranch },
  { value: '<100ms', label: 'API Latency Target', icon: Zap },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
]

const capabilities = [
  {
    title: 'Agent Lifecycle Management',
    description: 'Deploy, monitor, and scale AI agents across any framework - LangGraph, AutoGen, CrewAI, or custom.',
    icon: Layers,
  },
  {
    title: 'MCP Tool Registry',
    description: 'Register, discover, and federate MCP tools across organizations with built-in health checking and rate limiting.',
    icon: Globe,
  },
  {
    title: 'LangGraph Workflows',
    description: 'Visual workflow builder with state machine execution, agent coordination, and real-time progress tracking.',
    icon: GitBranch,
  },
  {
    title: 'Real-Time Analytics',
    description: 'Token budget visualization, prompt performance scoring, cost optimization, and context window utilization.',
    icon: BarChart3,
  },
  {
    title: 'Enterprise Security',
    description: 'JWT auth with RBAC, API key management, OAuth2 integration, and SOC2 compliance preparation.',
    icon: Shield,
  },
  {
    title: 'Multi-Cloud Deploy',
    description: 'Kubernetes-native architecture with Terraform IaC for AWS, GCP, and Azure deployment.',
    icon: Cloud,
  },
]

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen bg-white dark:bg-black">
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <Cpu className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">AI Agent Infrastructure</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-6">
              Deploy AI Agents <br />
              <span className="gradient-text font-light">at Scale</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              The complete infrastructure platform for building, deploying, and managing AI agents.
              MCP tool registry. LangGraph workflows. Real-time monitoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/platform/overview"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
              >
                <Layers className="w-4 h-4" />
                View Build Status
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/platform/demo"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <Code className="w-4 h-4" />
                Live Dashboard Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <div key={metric.label} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{metric.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
                Platform <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
                Everything you need to build and operate AI agent systems at enterprise scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap) => {
                const Icon = cap.icon
                return (
                  <div key={cap.title} className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{cap.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">{cap.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Build Streams */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
                Build <span className="gradient-text">Streams</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto">
                Six parallel workstreams driving the platform from scaffold to production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {streams.map((stream) => {
                const Icon = stream.icon
                return (
                  <div key={stream.name} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stream.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">{stream.name}</h3>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            stream.status === 'Live'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                              : stream.status === 'In Development'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}>
                            {stream.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">{stream.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stream.tasks.map((task) => (
                        <span key={task} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-gray-900 dark:text-white mb-4">
              Ready to build with <span className="gradient-text">GrepLabs</span>?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl mx-auto mb-8">
              Explore the live dashboards, review the build plan, or sign up for early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform/overview"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all hover:scale-105"
              >
                <Layers className="w-4 h-4" />
                Build Overview
              </Link>
              <Link
                href="/platform/demo"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <Code className="w-4 h-4" />
                Live Demo
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
              >
                Early Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

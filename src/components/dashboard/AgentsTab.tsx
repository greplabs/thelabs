'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Code, GitBranch, Container, Cpu, Zap, Play, Pause, Settings, Activity, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

const agents = [
  {
    id: 'code',
    name: 'Code Agent',
    icon: Code,
    description: 'Writes and refactors code across your codebase',
    color: 'from-violet-500 to-purple-500',
    status: 'active',
    tasksCompleted: 142,
    currentTask: 'Refactoring authentication module',
  },
  {
    id: 'test',
    name: 'Test Agent',
    icon: GitBranch,
    description: 'Generates tests and validates functionality',
    color: 'from-emerald-500 to-green-500',
    status: 'active',
    tasksCompleted: 89,
    currentTask: 'Running integration tests',
  },
  {
    id: 'deploy',
    name: 'Deploy Agent',
    icon: Container,
    description: 'Manages deployments and infrastructure',
    color: 'from-blue-500 to-cyan-500',
    status: 'idle',
    tasksCompleted: 34,
    currentTask: null,
  },
  {
    id: 'monitor',
    name: 'Monitor Agent',
    icon: Cpu,
    description: 'Tracks performance and detects issues',
    color: 'from-amber-500 to-orange-500',
    status: 'active',
    tasksCompleted: 567,
    currentTask: 'Analyzing API response times',
  },
  {
    id: 'optimize',
    name: 'Optimize Agent',
    icon: Zap,
    description: 'Suggests improvements and optimizations',
    color: 'from-pink-500 to-rose-500',
    status: 'idle',
    tasksCompleted: 23,
    currentTask: null,
  },
]

const activityFeed = [
  { id: 1, agent: 'Code Agent', action: 'Completed code review for PR #142', time: '2 min ago', status: 'success' },
  { id: 2, agent: 'Test Agent', action: 'Found 2 failing tests in auth module', time: '5 min ago', status: 'warning' },
  { id: 3, agent: 'Monitor Agent', action: 'Detected latency spike in API gateway', time: '8 min ago', status: 'warning' },
  { id: 4, agent: 'Code Agent', action: 'Generated documentation for new endpoints', time: '15 min ago', status: 'success' },
  { id: 5, agent: 'Deploy Agent', action: 'Deployed v0.9.1 to staging', time: '1 hour ago', status: 'success' },
  { id: 6, agent: 'Optimize Agent', action: 'Identified 3 performance bottlenecks', time: '2 hours ago', status: 'info' },
]

export default function AgentsTab() {
  const [agentList, setAgentList] = useState(agents)
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  const toggleAgent = (id: string) => {
    setAgentList(agentList.map(a =>
      a.id === id ? { ...a, status: a.status === 'active' ? 'idle' : 'active' } : a
    ))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI Agents</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your AI agents that power development workflows</p>
      </div>

      {/* Agent Overview */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Agents Grid */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white">Your Agents</h2>
          {agentList.map((agent) => {
            const Icon = agent.icon
            return (
              <div
                key={agent.id}
                className={`p-4 bg-white dark:bg-gray-900 border rounded-xl transition-colors ${
                  selectedAgent === agent.id
                    ? 'border-purple-500 dark:border-purple-400'
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{agent.name}</h3>
                        <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                          agent.status === 'active'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${agent.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                          {agent.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{agent.description}</p>
                      {agent.currentTask && (
                        <p className="text-xs text-purple-600 dark:text-purple-400 mt-1 flex items-center gap-1">
                          <Activity className="w-3 h-3" />
                          {agent.currentTask}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAgent(agent.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        agent.status === 'active'
                          ? 'text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/30'
                          : 'text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30'
                      }`}
                    >
                      {agent.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setSelectedAgent(agent.id)}
                      className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {agent.tasksCompleted} tasks completed
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Activity Feed */}
        <div>
          <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Activity Feed</h2>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-800 max-h-[500px] overflow-y-auto">
              {activityFeed.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 mt-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">{activity.agent}</span>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Agent Workflow Visualization */}
      <div className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Agent Workflow</h2>
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
          {agentList.map((agent, index) => {
            const Icon = agent.icon
            return (
              <div key={agent.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-2`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">{agent.name}</span>
                </div>
                {index < agentList.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-400 mx-4" />
                )}
              </div>
            )
          })}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          Agents work together in a continuous development cycle: Code → Test → Deploy → Monitor → Optimize → Repeat
        </p>
      </div>
    </motion.div>
  )
}

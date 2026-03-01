'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Check, ExternalLink, Settings, Trash2, Github, Slack, Link2, Webhook, Database, Cloud, RefreshCw, AlertCircle } from 'lucide-react'

const availableIntegrations = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'Connect repositories, sync issues, and trigger workflows',
    icon: Github,
    category: 'Version Control',
    popular: true,
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    description: 'Connect GitLab projects and CI/CD pipelines',
    icon: Github,
    category: 'Version Control',
    popular: true,
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Send notifications and receive commands',
    icon: Slack,
    category: 'Communication',
    popular: true,
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Bot integration for team servers',
    icon: Slack,
    category: 'Communication',
    popular: false,
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Sync issues and track project progress',
    icon: Link2,
    category: 'Project Management',
    popular: true,
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'Modern issue tracking integration',
    icon: Link2,
    category: 'Project Management',
    popular: false,
  },
  {
    id: 'webhook',
    name: 'Custom Webhook',
    description: 'Send data to any HTTP endpoint',
    icon: Webhook,
    category: 'Custom',
    popular: false,
  },
  {
    id: 'mcp',
    name: 'MCP Registry',
    description: 'Connect to Model Context Protocol tools',
    icon: Database,
    category: 'AI/ML',
    popular: true,
  },
]

const connectedIntegrations = [
  {
    id: '1',
    integration: 'github',
    name: 'greplabs/thelabs',
    status: 'connected',
    lastSync: '5 min ago',
  },
  {
    id: '2',
    integration: 'slack',
    name: '#engineering',
    status: 'connected',
    lastSync: '2 min ago',
  },
]

export default function IntegrationsTab() {
  const [connected, setConnected] = useState(connectedIntegrations)
  const [showConnectModal, setShowConnectModal] = useState<string | null>(null)

  const handleConnect = (integrationId: string) => {
    const integration = availableIntegrations.find(i => i.id === integrationId)
    if (!integration) return

    const newConnection = {
      id: Date.now().toString(),
      integration: integrationId,
      name: `${integration.name} Connection`,
      status: 'connected',
      lastSync: 'Just now',
    }
    setConnected([...connected, newConnection])
    setShowConnectModal(null)
  }

  const handleDisconnect = (id: string) => {
    setConnected(connected.filter(c => c.id !== id))
  }

  const getIntegrationInfo = (integrationId: string) => {
    return availableIntegrations.find(i => i.id === integrationId)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Integrations</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect external services and tools</p>
      </div>

      {/* Connected Integrations */}
      {connected.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Connected</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {connected.map((connection) => {
              const info = getIntegrationInfo(connection.integration)
              if (!info) return null
              const Icon = info.icon
              return (
                <div
                  key={connection.id}
                  className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900 dark:text-white">{info.name}</h3>
                          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                            <Check className="w-3 h-3" />
                            Connected
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{connection.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDisconnect(connection.id)}
                        className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>Last sync: {connection.lastSync}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Available Integrations */}
      <div>
        <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Available Integrations</h2>

        {/* Popular */}
        <div className="mb-6">
          <h3 className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Popular</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableIntegrations.filter(i => i.popular).map((integration) => {
              const Icon = integration.icon
              const isConnected = connected.some(c => c.integration === integration.id)
              return (
                <div
                  key={integration.id}
                  className={`p-4 bg-white dark:bg-gray-900 border rounded-xl transition-colors ${
                    isConnected
                      ? 'border-green-300 dark:border-green-700'
                      : 'border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    {isConnected && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Connected
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{integration.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{integration.description}</p>
                  {!isConnected && (
                    <button
                      onClick={() => handleConnect(integration.id)}
                      className="w-full py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                    >
                      Connect
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* By Category */}
        {['Version Control', 'Communication', 'Project Management', 'Custom', 'AI/ML'].map((category) => {
          const categoryIntegrations = availableIntegrations.filter(i => i.category === category && !i.popular)
          if (categoryIntegrations.length === 0) return null
          return (
            <div key={category} className="mb-6">
              <h3 className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryIntegrations.map((integration) => {
                  const Icon = integration.icon
                  const isConnected = connected.some(c => c.integration === integration.id)
                  return (
                    <div
                      key={integration.id}
                      className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{integration.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{integration.description}</p>
                      <button
                        onClick={() => handleConnect(integration.id)}
                        className="w-full py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                      >
                        {isConnected ? 'Configure' : 'Connect'}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Custom Webhook Setup */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Webhook className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Custom Integrations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Build custom integrations using our webhook API. Send events to any HTTP endpoint.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                Create Webhook
              </button>
              <button className="px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                View Documentation <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

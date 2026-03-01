'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Play, Pause, Trash2, Terminal, Container, Code, GitBranch, Boxes, Cloud, Settings, ExternalLink, Clock, CheckCircle, XCircle } from 'lucide-react'

const sandboxOptions = [
  { id: 'devpods', name: 'DevPods', icon: Terminal, description: 'Kubernetes-based development environments', color: 'from-blue-500 to-cyan-500' },
  { id: 'docker', name: 'Docker', icon: Container, description: 'Containerized local development', color: 'from-blue-600 to-blue-400' },
  { id: 'vscode', name: 'VS Code Remote', icon: Code, description: 'Remote development via SSH', color: 'from-purple-500 to-blue-500' },
  { id: 'codespaces', name: 'GitHub Codespaces', icon: GitBranch, description: 'Cloud development environments', color: 'from-gray-700 to-gray-500' },
  { id: 'railway', name: 'Railway', icon: Boxes, description: 'Instant cloud deployments', color: 'from-purple-600 to-pink-500' },
  { id: 'flyio', name: 'Fly.io', icon: Cloud, description: 'Edge compute platform', color: 'from-violet-500 to-purple-500' },
]

const demoWorkspaces = [
  { id: '1', name: 'shield-ai-dev', sandbox: 'devpods', status: 'running', created: '2 hours ago', product: 'Shield AI' },
  { id: '2', name: 'grepcoin-local', sandbox: 'docker', status: 'stopped', created: '1 day ago', product: 'GrepCoin' },
  { id: '3', name: 'hippo-testing', sandbox: 'codespaces', status: 'running', created: '3 hours ago', product: 'Hippo' },
]

export default function WorkspacesTab() {
  const [workspaces, setWorkspaces] = useState(demoWorkspaces)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedSandbox, setSelectedSandbox] = useState<string | null>(null)
  const [newWorkspaceName, setNewWorkspaceName] = useState('')

  const handleCreateWorkspace = () => {
    if (!newWorkspaceName || !selectedSandbox) return
    const newWorkspace = {
      id: Date.now().toString(),
      name: newWorkspaceName,
      sandbox: selectedSandbox,
      status: 'running',
      created: 'Just now',
      product: 'Custom',
    }
    setWorkspaces([newWorkspace, ...workspaces])
    setShowCreateModal(false)
    setNewWorkspaceName('')
    setSelectedSandbox(null)
  }

  const toggleWorkspace = (id: string) => {
    setWorkspaces(workspaces.map(w =>
      w.id === id ? { ...w, status: w.status === 'running' ? 'stopped' : 'running' } : w
    ))
  }

  const deleteWorkspace = (id: string) => {
    setWorkspaces(workspaces.filter(w => w.id !== id))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Workspaces</h1>
          <p className="text-gray-600 dark:text-gray-400">Create and manage development environments</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Workspace
        </button>
      </div>

      {/* Sandbox Options Overview */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Available Sandboxes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sandboxOptions.map((sandbox) => {
            const Icon = sandbox.icon
            return (
              <div
                key={sandbox.id}
                className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-center"
              >
                <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-br ${sandbox.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs font-medium text-gray-900 dark:text-white">{sandbox.name}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Workspaces List */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="font-medium text-gray-900 dark:text-white">Your Workspaces</h2>
        </div>
        {workspaces.length === 0 ? (
          <div className="p-12 text-center">
            <Terminal className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No workspaces yet. Create your first one!</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {workspaces.map((workspace) => {
              const sandbox = sandboxOptions.find(s => s.id === workspace.sandbox)
              const Icon = sandbox?.icon || Terminal
              return (
                <div key={workspace.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sandbox?.color || 'from-gray-500 to-gray-400'} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{workspace.name}</h3>
                        <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                          workspace.status === 'running'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}>
                          {workspace.status === 'running' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          {workspace.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span>{sandbox?.name}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {workspace.created}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleWorkspace(workspace.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        workspace.status === 'running'
                          ? 'text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/30'
                          : 'text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30'
                      }`}
                    >
                      {workspace.status === 'running' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteWorkspace(workspace.id)}
                      className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-lg w-full p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create Workspace</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Workspace Name
              </label>
              <input
                type="text"
                value={newWorkspaceName}
                onChange={(e) => setNewWorkspaceName(e.target.value)}
                placeholder="my-project-dev"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Sandbox
              </label>
              <div className="grid grid-cols-2 gap-3">
                {sandboxOptions.map((sandbox) => {
                  const Icon = sandbox.icon
                  return (
                    <button
                      key={sandbox.id}
                      onClick={() => setSelectedSandbox(sandbox.id)}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        selectedSandbox === sandbox.id
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{sandbox.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{sandbox.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateWorkspace}
                disabled={!newWorkspaceName || !selectedSandbox}
                className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
              >
                Create
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

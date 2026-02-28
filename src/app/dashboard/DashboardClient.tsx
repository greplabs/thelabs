'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  LogOut,
  Key,
  CreditCard,
  Settings,
  Shield,
  Gamepad2,
  MessageSquare,
  Folder,
  ArrowRight,
  Loader2,
  ExternalLink,
  Plus,
  Copy,
  Check,
  Trash2,
  Eye,
  EyeOff,
  X,
  AlertCircle
} from 'lucide-react'
import Logo from '@/components/Logo'

interface DashboardUser {
  id: number
  email: string
  name: string | null
  plan: string
  email_verified: boolean
  avatar_url: string | null
}

interface ApiKey {
  id: string
  name: string
  prefix: string
  createdAt: string
  lastUsedAt: string | null
  expiresAt: string | null
  isActive: boolean
  scopes: string[]
  usageCount: number
}

export default function DashboardClient({ user }: { user: DashboardUser }) {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'api-keys'>('overview')

  // API Keys state
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [loadingKeys, setLoadingKeys] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newKeyName, setNewKeyName] = useState('')
  const [newKeyScopes, setNewKeyScopes] = useState<string[]>(['read'])
  const [newKeyExpiry, setNewKeyExpiry] = useState<number | null>(null)
  const [creatingKey, setCreatingKey] = useState(false)
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null)
  const [copiedKey, setCopiedKey] = useState(false)
  const [deletingKeyId, setDeletingKeyId] = useState<string | null>(null)
  const [keyError, setKeyError] = useState<string | null>(null)

  const maxKeys = user.plan === 'enterprise' ? 50 : user.plan === 'pro' ? 10 : 2

  // Fetch API keys
  useEffect(() => {
    fetchApiKeys()
  }, [])

  const fetchApiKeys = async () => {
    try {
      const response = await fetch('/api/keys')
      const data = await response.json()
      if (data.success) {
        setApiKeys(data.keys)
      }
    } catch (error) {
      console.error('Failed to fetch API keys:', error)
    } finally {
      setLoadingKeys(false)
    }
  }

  const createApiKey = async () => {
    if (!newKeyName.trim()) {
      setKeyError('Please enter a name for your API key')
      return
    }

    setCreatingKey(true)
    setKeyError(null)

    try {
      const response = await fetch('/api/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newKeyName,
          scopes: newKeyScopes,
          expiresInDays: newKeyExpiry
        })
      })

      const data = await response.json()

      if (data.success) {
        setNewlyCreatedKey(data.key)
        setApiKeys(prev => [...prev, {
          id: data.keyInfo.id,
          name: data.keyInfo.name,
          prefix: data.keyInfo.prefix,
          createdAt: data.keyInfo.createdAt,
          lastUsedAt: null,
          expiresAt: data.keyInfo.expiresAt,
          isActive: true,
          scopes: data.keyInfo.scopes,
          usageCount: 0
        }])
        setNewKeyName('')
        setNewKeyScopes(['read'])
        setNewKeyExpiry(null)
      } else {
        setKeyError(data.error)
      }
    } catch (error) {
      setKeyError('Failed to create API key')
    } finally {
      setCreatingKey(false)
    }
  }

  const deleteApiKey = async (keyId: string) => {
    setDeletingKeyId(keyId)
    try {
      const response = await fetch(`/api/keys/${keyId}`, { method: 'DELETE' })
      const data = await response.json()
      if (data.success) {
        setApiKeys(prev => prev.filter(k => k.id !== keyId))
      }
    } catch (error) {
      console.error('Failed to delete key:', error)
    } finally {
      setDeletingKeyId(null)
    }
  }

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedKey(true)
    setTimeout(() => setCopiedKey(false), 2000)
  }

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Logout failed:', error)
      setLoggingOut(false)
    }
  }

  const products = [
    {
      name: 'Shields AI',
      description: 'Privacy-first AI safety layer',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      status: 'Coming Soon'
    },
    {
      name: 'GrepCoin',
      description: 'Digital asset management',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
      href: 'https://grepcoin.io',
      status: 'Live'
    },
    {
      name: 'Chai.im',
      description: 'Private messaging platform',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      status: 'Coming Soon'
    },
    {
      name: 'Hippo',
      description: 'Local-first file sync',
      icon: Folder,
      color: 'from-orange-500 to-amber-500',
      status: 'Coming Soon'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo className="h-8" />
            </Link>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.name || user.email}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {user.plan} plan
                </p>
              </div>

              {user.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt={user.name || 'Avatar'}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                  {(user.name || user.email).charAt(0).toUpperCase()}
                </div>
              )}

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {loggingOut ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <LogOut className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 border-b-2 text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('api-keys')}
              className={`py-4 border-b-2 text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'api-keys'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Key className="w-4 h-4" />
              API Keys
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
                {apiKeys.length}/{maxKeys}
              </span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' ? (
          <>
            {/* Welcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome{user.name ? `, ${user.name.split(' ')[0]}` : ''}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your GrepLabs account and access our products.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Account Status</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {user.email_verified ? 'Verified' : 'Active'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                      {user.plan}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('api-keys')}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-purple-500 dark:hover:border-purple-500 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Key className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">API Keys</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {loadingKeys ? '...' : `${apiKeys.length} / ${maxKeys}`}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.status === 'Live'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {product.status}
                      </span>
                    </div>

                    {product.href ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full py-2 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        Open {product.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
                      >
                        Coming March 2026
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Account Settings
              </h2>
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
                <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900 dark:text-white">Profile Settings</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={() => setActiveTab('api-keys')}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900 dark:text-white">API Keys</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900 dark:text-white">Billing & Plans</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">Soon</span>
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900 dark:text-white">Preferences</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </motion.div>
          </>
        ) : (
          /* API Keys Tab */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  API Keys
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Create and manage API keys to access GrepLabs APIs programmatically.
                </p>
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                disabled={apiKeys.length >= maxKeys}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create Key
              </button>
            </div>

            {/* Plan limits info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <span className="font-medium capitalize">{user.plan} Plan:</span> You can create up to {maxKeys} API keys.
                    {user.plan === 'free' && ' Upgrade to Pro for more keys and higher rate limits.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Keys list */}
            {loadingKeys ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            ) : apiKeys.length === 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-12 text-center">
                <Key className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No API keys yet
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Create your first API key to start using GrepLabs APIs.
                </p>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create Your First Key
                </button>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scopes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Usage</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {apiKeys.map((key) => (
                      <tr key={key.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 dark:text-white">{key.name}</span>
                            {!key.isActive && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                                Revoked
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {key.prefix}
                          </code>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-1">
                            {key.scopes.map(scope => (
                              <span
                                key={scope}
                                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                              >
                                {scope}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {key.usageCount} requests
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {new Date(key.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => deleteApiKey(key.id)}
                            disabled={deletingKeyId === key.id}
                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                          >
                            {deletingKeyId === key.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* API Usage documentation */}
            <div className="mt-8 bg-gray-900 dark:bg-gray-950 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
              <p className="text-gray-400 mb-4">Use your API key in the Authorization header:</p>
              <pre className="bg-black rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">
{`curl -X GET "https://api.greplabs.com/v1/status" \\
  -H "Authorization: Bearer gl_your_api_key_here"`}
                </code>
              </pre>
            </div>
          </motion.div>
        )}
      </main>

      {/* Create Key Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => !newlyCreatedKey && setShowCreateModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full"
            >
              {newlyCreatedKey ? (
                /* Key created success view */
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    API Key Created!
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
                    Copy your API key now. You won&apos;t be able to see it again.
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm text-gray-900 dark:text-white break-all">
                        {newlyCreatedKey}
                      </code>
                      <button
                        onClick={() => copyToClipboard(newlyCreatedKey)}
                        className="flex-shrink-0 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {copiedKey ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCreateModal(false)
                      setNewlyCreatedKey(null)
                    }}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Create key form */
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Create API Key
                    </h2>
                    <button
                      onClick={() => setShowCreateModal(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {keyError && (
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-600 dark:text-red-400">{keyError}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Key Name
                      </label>
                      <input
                        type="text"
                        value={newKeyName}
                        onChange={e => setNewKeyName(e.target.value)}
                        placeholder="e.g., Production API Key"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Permissions
                      </label>
                      <div className="space-y-2">
                        {['read', 'write', 'delete'].map(scope => (
                          <label key={scope} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={newKeyScopes.includes(scope)}
                              onChange={e => {
                                if (e.target.checked) {
                                  setNewKeyScopes(prev => [...prev, scope])
                                } else {
                                  setNewKeyScopes(prev => prev.filter(s => s !== scope))
                                }
                              }}
                              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{scope}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiration (optional)
                      </label>
                      <select
                        value={newKeyExpiry || ''}
                        onChange={e => setNewKeyExpiry(e.target.value ? Number(e.target.value) : null)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Never expires</option>
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                        <option value="365">1 year</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setShowCreateModal(false)}
                      className="flex-1 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={createApiKey}
                      disabled={creatingKey}
                      className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {creatingKey ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        'Create Key'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Plus, Play, Settings, Code, GitBranch, Container, FileText, Search, Upload, Download, Trash2, Check, Copy } from 'lucide-react'

const skillTemplates = [
  {
    id: 'lint-fix',
    name: 'Lint & Fix',
    description: 'Run linter and auto-fix issues',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    category: 'Code Quality',
  },
  {
    id: 'test-coverage',
    name: 'Test Coverage',
    description: 'Generate tests to improve coverage',
    icon: GitBranch,
    color: 'from-green-500 to-emerald-500',
    category: 'Testing',
  },
  {
    id: 'docker-build',
    name: 'Docker Build',
    description: 'Build and push Docker images',
    icon: Container,
    color: 'from-blue-600 to-blue-400',
    category: 'Deployment',
  },
  {
    id: 'doc-gen',
    name: 'Doc Generator',
    description: 'Generate documentation from code',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    category: 'Documentation',
  },
  {
    id: 'security-scan',
    name: 'Security Scan',
    description: 'Scan for vulnerabilities',
    icon: Search,
    color: 'from-red-500 to-orange-500',
    category: 'Security',
  },
]

const mySkills = [
  {
    id: '1',
    name: 'PR Review Automation',
    description: 'Automatically review PRs for code quality',
    runs: 145,
    lastRun: '2 hours ago',
    status: 'active',
  },
  {
    id: '2',
    name: 'Database Migration',
    description: 'Safe database migrations with rollback',
    runs: 23,
    lastRun: '1 day ago',
    status: 'active',
  },
]

export default function SkillBuilderTab() {
  const [skills, setSkills] = useState(mySkills)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newSkill, setNewSkill] = useState({
    name: '',
    description: '',
    trigger: 'manual',
    steps: [''],
  })

  const handleCreateSkill = () => {
    const skill = {
      id: Date.now().toString(),
      name: newSkill.name,
      description: newSkill.description,
      runs: 0,
      lastRun: 'Never',
      status: 'active',
    }
    setSkills([skill, ...skills])
    setShowCreateModal(false)
    setNewSkill({ name: '', description: '', trigger: 'manual', steps: [''] })
  }

  const addStep = () => {
    setNewSkill({ ...newSkill, steps: [...newSkill.steps, ''] })
  }

  const updateStep = (index: number, value: string) => {
    const steps = [...newSkill.steps]
    steps[index] = value
    setNewSkill({ ...newSkill, steps })
  }

  const removeStep = (index: number) => {
    const steps = newSkill.steps.filter((_, i) => i !== index)
    setNewSkill({ ...newSkill, steps })
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Skill Builder</h1>
          <p className="text-gray-600 dark:text-gray-400">Create reusable automation skills</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Skill
        </button>
      </div>

      {/* Skill Templates */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Skill Templates</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skillTemplates.map((template) => {
            const Icon = template.icon
            return (
              <button
                key={template.id}
                onClick={() => {
                  setNewSkill({ ...newSkill, name: template.name, description: template.description })
                  setShowCreateModal(true)
                }}
                className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-colors text-left group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{template.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{template.description}</p>
                <span className="inline-block mt-2 text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                  {template.category}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* My Skills */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <h2 className="font-medium text-gray-900 dark:text-white">My Skills</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Upload className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        {skills.length === 0 ? (
          <div className="p-12 text-center">
            <Zap className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No skills yet. Create your first one!</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {skills.map((skill) => (
              <div key={skill.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.runs} runs</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Last: {skill.lastRun}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSkills(skills.filter(s => s.id !== skill.id))}
                      className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create Skill</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  placeholder="e.g., PR Review Automation"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={newSkill.description}
                  onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
                  placeholder="What does this skill do?"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Trigger
                </label>
                <select
                  value={newSkill.trigger}
                  onChange={(e) => setNewSkill({ ...newSkill, trigger: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="manual">Manual</option>
                  <option value="on_push">On Push</option>
                  <option value="on_pr">On Pull Request</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Steps
                  </label>
                  <button
                    onClick={addStep}
                    className="text-xs text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    + Add Step
                  </button>
                </div>
                <div className="space-y-2">
                  {newSkill.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 w-6">{index + 1}.</span>
                      <input
                        type="text"
                        value={step}
                        onChange={(e) => updateStep(index, e.target.value)}
                        placeholder={`Step ${index + 1}...`}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                      {newSkill.steps.length > 1 && (
                        <button
                          onClick={() => removeStep(index)}
                          className="p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateSkill}
                disabled={!newSkill.name}
                className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
              >
                Create Skill
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

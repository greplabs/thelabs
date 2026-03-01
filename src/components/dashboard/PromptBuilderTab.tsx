'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Play, Save, Copy, History, BookOpen, Plus, Variable, Check, Trash2, FileText } from 'lucide-react'

const templates = [
  {
    id: 'code-review',
    name: 'Code Review',
    description: 'Review code for best practices and potential issues',
    prompt: 'Review the following code for:\n- Security vulnerabilities\n- Performance issues\n- Code style consistency\n- Potential bugs\n\nCode:\n{{code}}\n\nProvide specific, actionable feedback.',
    variables: ['code'],
  },
  {
    id: 'test-generation',
    name: 'Test Generation',
    description: 'Generate unit tests for a function or module',
    prompt: 'Generate comprehensive unit tests for the following {{language}} code:\n\n{{code}}\n\nInclude:\n- Edge cases\n- Error handling tests\n- Happy path tests\n\nUse {{framework}} testing framework.',
    variables: ['language', 'code', 'framework'],
  },
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Generate documentation for code',
    prompt: 'Generate documentation for the following code:\n\n{{code}}\n\nInclude:\n- Function/method descriptions\n- Parameter explanations\n- Return value documentation\n- Usage examples',
    variables: ['code'],
  },
  {
    id: 'refactor',
    name: 'Refactoring',
    description: 'Suggest refactoring improvements',
    prompt: 'Analyze and suggest refactoring improvements for:\n\n{{code}}\n\nFocus on:\n- Readability\n- Maintainability\n- Performance\n- Design patterns',
    variables: ['code'],
  },
]

const history = [
  { id: 1, name: 'API endpoint review', time: '10 min ago', status: 'success' },
  { id: 2, name: 'Auth module tests', time: '1 hour ago', status: 'success' },
  { id: 3, name: 'Database optimization', time: '2 hours ago', status: 'success' },
]

export default function PromptBuilderTab() {
  const [prompt, setPrompt] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [variables, setVariables] = useState<Record<string, string>>({})
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSelectTemplate = (template: typeof templates[0]) => {
    setSelectedTemplate(template.id)
    setPrompt(template.prompt)
    const vars: Record<string, string> = {}
    template.variables.forEach(v => vars[v] = '')
    setVariables(vars)
  }

  const handleRunPrompt = async () => {
    setIsRunning(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setOutput(`# Analysis Results\n\n## Code Quality\nThe code follows good practices overall. Here are some suggestions:\n\n1. **Add input validation** - Line 15 could benefit from null checks\n2. **Consider async/await** - The promise chain on line 23 could be simplified\n3. **Extract constants** - Magic numbers on lines 8, 12, 45 should be named constants\n\n## Performance\n- No major performance issues detected\n- Consider memoization for the computed values on line 67\n\n## Security\n- Ensure proper sanitization of user input on line 31`)
    setIsRunning(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const insertVariable = (varName: string) => {
    setPrompt(prev => prev + `{{${varName}}}`)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Prompt Builder</h1>
        <p className="text-gray-600 dark:text-gray-400">Create and test prompts for AI agents</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Templates & Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Templates */}
          <div>
            <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Templates</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleSelectTemplate(template)}
                  className={`p-3 text-left border rounded-lg transition-colors ${
                    selectedTemplate === template.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  <FileText className="w-4 h-4 text-purple-500 mb-1" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{template.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{template.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Editor */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <h2 className="font-medium text-gray-900 dark:text-white">Prompt Editor</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => insertVariable('variable')}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded transition-colors"
                >
                  <Variable className="w-3 h-3" />
                  Add Variable
                </button>
              </div>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here. Use {{variable}} syntax for dynamic values..."
              className="w-full h-48 p-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none focus:outline-none font-mono text-sm"
            />
            {/* Variables */}
            {Object.keys(variables).length > 0 && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">Variables</p>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(variables).map((varName) => (
                    <div key={varName}>
                      <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">{`{{${varName}}}`}</label>
                      <input
                        type="text"
                        value={variables[varName]}
                        onChange={(e) => setVariables({ ...variables, [varName]: e.target.value })}
                        placeholder={`Enter ${varName}...`}
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <Save className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleRunPrompt}
                disabled={isRunning || !prompt}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
              >
                {isRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Run Prompt
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output */}
          {output && (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <h2 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  Output
                </h2>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="p-4 prose prose-sm dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">{output}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* History */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <History className="w-4 h-4 text-gray-400" />
                History
              </h2>
            </div>
            <div className="space-y-2">
              {history.map((item) => (
                <button
                  key={item.id}
                  className="w-full p-3 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
            <h3 className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Tips</h3>
            <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-2">
              <li>• Use <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded">{`{{variable}}`}</code> syntax for dynamic values</li>
              <li>• Be specific about the output format you want</li>
              <li>• Include examples when possible</li>
              <li>• Save frequently used prompts as templates</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

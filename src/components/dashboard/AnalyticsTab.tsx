'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Clock, Zap, DollarSign, BarChart3, ArrowRight, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

const metrics = [
  {
    label: 'Tasks Completed',
    value: '1,247',
    change: '+12%',
    trend: 'up',
    icon: CheckCircle,
  },
  {
    label: 'Time Saved',
    value: '156 hrs',
    change: '+23%',
    trend: 'up',
    icon: Clock,
  },
  {
    label: 'Cost Savings',
    value: '$4,230',
    change: '+8%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    label: 'Efficiency Score',
    value: '94%',
    change: '+5%',
    trend: 'up',
    icon: Zap,
  },
]

const stepInsights = [
  {
    step: 'Code Review',
    current: '45 min',
    optimized: '12 min',
    savings: '73%',
    recommendation: 'Use Code Agent with pre-commit hooks',
  },
  {
    step: 'Testing',
    current: '2 hrs',
    optimized: '35 min',
    savings: '71%',
    recommendation: 'Parallel test execution with Test Agent',
  },
  {
    step: 'Deployment',
    current: '30 min',
    optimized: '8 min',
    savings: '73%',
    recommendation: 'Enable auto-deploy on merge',
  },
  {
    step: 'Monitoring Setup',
    current: '1 hr',
    optimized: '5 min',
    savings: '92%',
    recommendation: 'Auto-configure with Monitor Agent',
  },
]

const weeklyData = [
  { day: 'Mon', tasks: 45, hours: 6 },
  { day: 'Tue', tasks: 52, hours: 7 },
  { day: 'Wed', tasks: 38, hours: 5 },
  { day: 'Thu', tasks: 61, hours: 8 },
  { day: 'Fri', tasks: 48, hours: 6 },
  { day: 'Sat', tasks: 12, hours: 2 },
  { day: 'Sun', tasks: 8, hours: 1 },
]

const recommendations = [
  {
    type: 'performance',
    title: 'Optimize API Response Time',
    description: 'Your /api/users endpoint averages 450ms. Consider caching frequently accessed data.',
    impact: 'High',
  },
  {
    type: 'cost',
    title: 'Reduce CI/CD Pipeline Time',
    description: 'Parallel testing could reduce build time by 40%, saving ~$200/month.',
    impact: 'Medium',
  },
  {
    type: 'quality',
    title: 'Increase Test Coverage',
    description: 'Auth module at 62% coverage. Test Agent can generate missing tests.',
    impact: 'High',
  },
]

export default function AnalyticsTab() {
  const maxTasks = Math.max(...weeklyData.map(d => d.tasks))

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Insights and optimization recommendations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.label} className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className={`flex items-center gap-1 text-xs font-medium ${
                  metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {metric.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
            </div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly Activity Chart */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium text-gray-900 dark:text-white">Weekly Activity</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyData.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-lg relative" style={{ height: '100%' }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg transition-all"
                    style={{ height: `${(day.tasks / maxTasks) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-purple-500" />
              Tasks completed
            </span>
          </div>
        </div>

        {/* Step Optimization */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium text-gray-900 dark:text-white">Step Optimization</h2>
            <Zap className="w-5 h-5 text-amber-500" />
          </div>
          <div className="space-y-4">
            {stepInsights.map((step) => (
              <div key={step.step} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{step.step}</span>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">-{step.savings}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{step.current}</span>
                  <ArrowRight className="w-3 h-3" />
                  <span className="text-green-600 dark:text-green-400">{step.optimized}</span>
                </div>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-1 flex items-center gap-1">
                  <Lightbulb className="w-3 h-3" />
                  {step.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-medium text-gray-900 dark:text-white">AI Recommendations</h2>
          <span className="text-xs text-gray-500 dark:text-gray-400">{recommendations.length} suggestions</span>
        </div>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                rec.type === 'performance' ? 'bg-blue-100 dark:bg-blue-900/30' :
                rec.type === 'cost' ? 'bg-green-100 dark:bg-green-900/30' :
                'bg-amber-100 dark:bg-amber-900/30'
              }`}>
                {rec.type === 'performance' && <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                {rec.type === 'cost' && <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />}
                {rec.type === 'quality' && <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{rec.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    rec.impact === 'High' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' :
                    'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                  }`}>
                    {rec.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{rec.description}</p>
              </div>
              <button className="px-3 py-1.5 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

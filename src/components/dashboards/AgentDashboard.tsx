'use client'

import { useState, useEffect } from 'react'

const tokens = {
  colors: {
    ground: '#0C0C0E',
    base: '#121214',
    raised: '#18181B',
    borderSubtle: '#27272A',
    borderDefault: '#3F3F46',
    textPrimary: '#FAFAFA',
    textSecondary: '#A1A1AA',
    textTertiary: '#71717A',
    accent: '#0EA5E9',
    success: '#2DD4BF',
    successSubtle: 'rgba(45, 212, 191, 0.12)',
    warning: '#FBBF24',
    warningSubtle: 'rgba(251, 191, 36, 0.12)',
    error: '#F87171',
    errorSubtle: 'rgba(248, 113, 113, 0.12)',
  },
}

const Badge = ({ variant = 'neutral', children }: { variant?: string; children: React.ReactNode }) => {
  const variants: Record<string, { bg: string; color: string; border: string }> = {
    success: { bg: tokens.colors.successSubtle, color: tokens.colors.success, border: 'rgba(45, 212, 191, 0.25)' },
    warning: { bg: tokens.colors.warningSubtle, color: tokens.colors.warning, border: 'rgba(251, 191, 36, 0.25)' },
    error: { bg: tokens.colors.errorSubtle, color: tokens.colors.error, border: 'rgba(248, 113, 113, 0.25)' },
    neutral: { bg: tokens.colors.raised, color: tokens.colors.textSecondary, border: tokens.colors.borderSubtle },
  }

  const style = variants[variant] || variants.neutral

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 8px',
      fontSize: '11px',
      fontWeight: 500,
      borderRadius: '4px',
      background: style.bg,
      color: style.color,
      border: `1px solid ${style.border}`,
    }}>
      {children}
    </span>
  )
}

const StatusDot = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    active: tokens.colors.success,
    idle: tokens.colors.textTertiary,
    error: tokens.colors.error,
    processing: tokens.colors.warning,
  }

  return (
    <span style={{
      display: 'inline-block',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: colors[status] || colors.idle,
      boxShadow: status === 'active' ? `0 0 0 3px ${tokens.colors.successSubtle}` : 'none',
    }} />
  )
}

const Card = ({ children, padding = '20px' }: { children: React.ReactNode; padding?: string }) => (
  <div style={{
    background: tokens.colors.base,
    border: `1px solid ${tokens.colors.borderSubtle}`,
    borderRadius: '8px',
    padding,
  }}>
    {children}
  </div>
)

const MetricValue = ({ value, label, trend }: { value: string; label: string; trend?: string }) => (
  <div style={{ textAlign: 'left' as const }}>
    <div style={{
      fontSize: '28px',
      fontWeight: 600,
      color: tokens.colors.textPrimary,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    }}>
      {value}
    </div>
    <div style={{
      fontSize: '13px',
      color: tokens.colors.textTertiary,
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }}>
      {label}
      {trend && (
        <span style={{ color: trend.startsWith('+') ? tokens.colors.success : tokens.colors.error }}>
          {trend}
        </span>
      )}
    </div>
  </div>
)

const ProgressBar = ({ value, max = 100 }: { value: number; max?: number }) => {
  const percent = (value / max) * 100

  return (
    <div style={{
      width: '100%',
      height: '4px',
      background: tokens.colors.borderSubtle,
      borderRadius: '2px',
      overflow: 'hidden',
    }}>
      <div style={{
        width: `${percent}%`,
        height: '100%',
        background: percent > 80 ? tokens.colors.error : percent > 60 ? tokens.colors.warning : tokens.colors.success,
        transition: 'width 300ms ease-out',
      }} />
    </div>
  )
}

export default function AgentDashboard() {
  const [activeNav, setActiveNav] = useState('overview')
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const agents = [
    { id: 'AGT-001', name: 'Research Agent', framework: 'LangGraph', status: 'active', load: 72, tasks: 1247 },
    { id: 'AGT-002', name: 'Code Review', framework: 'AutoGen', status: 'active', load: 45, tasks: 892 },
    { id: 'AGT-003', name: 'Data Pipeline', framework: 'CrewAI', status: 'processing', load: 89, tasks: 456 },
    { id: 'AGT-004', name: 'Support Bot', framework: 'Custom', status: 'active', load: 34, tasks: 3421 },
    { id: 'AGT-005', name: 'Analytics', framework: 'LangGraph', status: 'idle', load: 0, tasks: 178 },
  ]

  const workflows = [
    { id: 'WF-2847', name: 'Customer Analysis Pipeline', status: 'running', progress: 78, agents: 3 },
    { id: 'WF-2846', name: 'Code Review Workflow', status: 'running', progress: 34, agents: 2 },
    { id: 'WF-2845', name: 'Data Sync Job', status: 'completed', progress: 100, agents: 1 },
    { id: 'WF-2844', name: 'Report Generation', status: 'queued', progress: 0, agents: 4 },
  ]

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'agents', label: 'Agents' },
    { id: 'workflows', label: 'Workflows' },
    { id: 'registry', label: 'MCP Registry' },
    { id: 'federation', label: 'Federation' },
    { id: 'analytics', label: 'Analytics' },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      minHeight: '100vh',
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: tokens.colors.ground,
      color: tokens.colors.textPrimary,
    }}>
      {/* Sidebar */}
      <aside style={{
        background: tokens.colors.base,
        borderRight: `1px solid ${tokens.colors.borderSubtle}`,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column' as const,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 0',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: tokens.colors.accent,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '14px',
            color: '#000',
          }}>
            G
          </div>
          <span style={{ fontWeight: 600, fontSize: '15px' }}>GrepLabs</span>
        </div>

        <nav style={{ flex: 1 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px 12px',
                marginBottom: '4px',
                background: activeNav === item.id ? tokens.colors.raised : 'transparent',
                border: 'none',
                borderRadius: '6px',
                color: activeNav === item.id ? tokens.colors.textPrimary : tokens.colors.textSecondary,
                fontSize: '14px',
                fontWeight: activeNav === item.id ? 500 : 400,
                textAlign: 'left' as const,
                cursor: 'pointer',
                transition: 'all 100ms ease-out',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{
          padding: '12px',
          background: tokens.colors.raised,
          borderRadius: '6px',
          marginTop: 'auto',
        }}>
          <div style={{ fontSize: '13px', fontWeight: 500 }}>Admin</div>
          <div style={{ fontSize: '12px', color: tokens.colors.textTertiary }}>Pro Plan</div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ padding: '24px', overflow: 'auto' }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '32px',
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              Overview
            </h1>
            <p style={{
              fontSize: '14px',
              color: tokens.colors.textSecondary,
              marginTop: '4px',
            }}>
              System health and real-time metrics
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              fontSize: '13px',
              color: tokens.colors.textTertiary,
              fontFamily: "ui-monospace, monospace",
            }}>
              {currentTime.toLocaleTimeString()}
            </div>
            <button style={{
              padding: '8px 16px',
              background: tokens.colors.accent,
              border: 'none',
              borderRadius: '6px',
              color: '#000',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
            }}>
              Deploy Agent
            </button>
          </div>
        </header>

        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <Card>
            <MetricValue value="38" label="Active Agents" trend="+3" />
          </Card>
          <Card>
            <MetricValue value="12" label="Running Workflows" />
          </Card>
          <Card>
            <MetricValue value="99.2%" label="Success Rate" trend="+0.3%" />
          </Card>
          <Card>
            <MetricValue value="$127.50" label="Daily Cost" trend="-12%" />
          </Card>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '16px',
        }}>
          {/* Agent Table */}
          <Card padding="0">
            <div style={{
              padding: '20px',
              borderBottom: `1px solid ${tokens.colors.borderSubtle}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <h2 style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>
                Agent Fleet
              </h2>
              <span style={{ fontSize: '12px', color: tokens.colors.textTertiary }}>
                {agents.length} total
              </span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${tokens.colors.borderSubtle}` }}>
                  {['Agent', 'Framework', 'Status', 'Load', 'Tasks'].map(col => (
                    <th key={col} style={{
                      padding: '12px 16px',
                      textAlign: 'left' as const,
                      fontWeight: 500,
                      fontSize: '11px',
                      color: tokens.colors.textTertiary,
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.04em',
                    }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {agents.map(agent => (
                  <tr key={agent.id} style={{ borderBottom: `1px solid ${tokens.colors.borderSubtle}` }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <StatusDot status={agent.status} />
                        <div>
                          <div style={{ fontWeight: 500, color: tokens.colors.textPrimary }}>{agent.name}</div>
                          <div style={{
                            fontSize: '11px',
                            color: tokens.colors.textTertiary,
                            fontFamily: "ui-monospace, monospace",
                          }}>
                            {agent.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px', color: tokens.colors.textSecondary }}>
                      {agent.framework}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <Badge variant={
                        agent.status === 'active' ? 'success' :
                        agent.status === 'error' ? 'error' :
                        agent.status === 'processing' ? 'warning' : 'neutral'
                      }>
                        {agent.status}
                      </Badge>
                    </td>
                    <td style={{ padding: '12px 16px', width: '120px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1 }}>
                          <ProgressBar value={agent.load} />
                        </div>
                        <span style={{
                          fontSize: '12px',
                          color: tokens.colors.textSecondary,
                          width: '32px',
                          textAlign: 'right' as const,
                        }}>
                          {agent.load}%
                        </span>
                      </div>
                    </td>
                    <td style={{
                      padding: '12px 16px',
                      color: tokens.colors.textSecondary,
                      fontFamily: "ui-monospace, monospace",
                      fontSize: '12px',
                    }}>
                      {agent.tasks.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Workflows */}
          <Card>
            <h2 style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 16px 0' }}>
              Active Workflows
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              {workflows.map(wf => (
                <div key={wf.id} style={{
                  padding: '12px',
                  background: tokens.colors.raised,
                  borderRadius: '6px',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{wf.name}</span>
                    <Badge variant={
                      wf.status === 'running' ? 'success' :
                      wf.status === 'completed' ? 'neutral' :
                      wf.status === 'queued' ? 'warning' : 'neutral'
                    }>
                      {wf.status}
                    </Badge>
                  </div>
                  <ProgressBar value={wf.progress} />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '8px',
                    fontSize: '11px',
                    color: tokens.colors.textTertiary,
                  }}>
                    <span>{wf.agents} agents</span>
                    <span style={{ fontFamily: "ui-monospace, monospace" }}>{wf.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '32px',
          paddingTop: '16px',
          borderTop: `1px solid ${tokens.colors.borderSubtle}`,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: tokens.colors.textTertiary,
        }}>
          <span>GrepLabs v2.0.0</span>
          <span>99.97% uptime &middot; 12ms avg latency</span>
        </div>
      </main>
    </div>
  )
}

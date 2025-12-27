import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          orange: '#F97316',
          green: '#22C55E',
          blue: '#3B82F6',
        },
        grep: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          orange: '#F97316',
          yellow: '#F59E0B',
          green: '#10B981',
          cyan: '#06B6D4',
          blue: '#3B82F6',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d1117',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        terminal: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'terminal-xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
        'terminal-sm': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'terminal-base': ['1rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'terminal-lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config


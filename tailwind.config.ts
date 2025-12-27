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
        // Primary grey scale
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Subtle accent colors (muted)
        accent: {
          muted: '#6b7280',
          subtle: '#9ca3af',
        },
        // Keep grep colors but more muted for subtle use
        grep: {
          purple: '#a78bfa',
          pink: '#f472b6',
          orange: '#fb923c',
          yellow: '#fbbf24',
          green: '#34d399',
          cyan: '#22d3ee',
          blue: '#60a5fa',
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


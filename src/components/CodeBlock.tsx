'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  filename?: string
  showCopy?: boolean
}

export default function CodeBlock({ code, filename, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="terminal-window group">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        {filename && (
          <span className="ml-4 text-xs text-gray-400 terminal-text">{filename}</span>
        )}
        {showCopy && (
          <button
            onClick={handleCopy}
            className="ml-auto text-xs text-gray-400 hover:text-gray-300 transition-colors terminal-text flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        )}
      </div>
      <div className="terminal-body">
        <pre className="overflow-x-auto">
          <code className="terminal-text">{code}</code>
        </pre>
      </div>
    </div>
  )
}

// Pre-styled code examples for each product
export const codeExamples = {
  grepcoin: `$ npx grepcoin start

 ██████╗ ██████╗ ███████╗██████╗  ██████╗ ██████╗ ██╗███╗   ██╗
██╔════╝ ██╔══██╗██╔════╝██╔══██╗██╔════╝██╔═══██╗██║████╗  ██║
██║  ███╗██████╔╝█████╗  ██████╔╝██║     ██║   ██║██║██╔██╗ ██║
██║   ██║██╔══██╗██╔══╝  ██╔═══╝ ██║     ██║   ██║██║██║╚██╗██║
╚██████╔╝██║  ██║███████╗██║     ╚██████╗╚██████╔╝██║██║ ╚████║
 ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝

[+] Connecting to Base L2 network...
[+] Smart contracts verified
[+] Loading 9 arcade games...
[+] GREP token economy active

Ready to play! Visit https://grepcoin.io`,

  chai: `import { ChaiClient } from '@greplabs/chai';

const chai = new ChaiClient({
  encryption: 'signal-protocol',
  auth: 'webauthn',
  processing: 'local'
});

// End-to-end encrypted messaging
await chai.connect();
await chai.send({
  to: 'alice@chai.im',
  message: 'Your privacy is protected.',
  e2e: true
});

// Messages never leave your device unencrypted`,

  shields: `$ shields-ai --start --mode=protect

╔═══════════════════════════════════════════╗
║         SHIELDS AI DNS PROTECTION         ║
╚═══════════════════════════════════════════╝

[*] ML Engine: threat-detection-v2.1
[*] Response time: <1ms average
[*] Throughput: 100,000+ QPS
[*] Blocklists: 8 sources active

Listening on 0.0.0.0:53 (UDP/TCP)
DoH endpoint: https://dns.shields.ai/query

Status: PROTECTED`,

  hippo: `$ hippo scan ~/Documents --ai

╭───────────────────────────────────────────╮
│          HIPPO FILE ORGANIZER             │
│       The Memory That Never Forgets       │
╰───────────────────────────────────────────╯

[*] Scanning: /Users/you/Documents
[*] Files indexed: 100,247
[*] AI embeddings: Generated
[*] Vector DB: Ready

> hippo search "quarterly reports 2024"
  Found 23 matches in 0.18ms
  Top result: Q4-2024-Report.pdf (98% match)`,
}


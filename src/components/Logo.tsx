'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: number
  animated?: boolean
}

export default function Logo({ className = '', size = 32, animated = true }: LogoProps) {
  const LogoSVG = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative"
    >
      <defs>
        {/* Main gradient - purple to pink to orange */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        {/* Glasses gradient - green to cyan */}
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Subtle shadow */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* ===== HIPPO HEAD - Wide barrel shape ===== */}

      {/* Main head - very wide, barrel-shaped like a real hippo */}
      <ellipse
        cx="70"
        cy="50"
        rx="55"
        ry="38"
        fill="url(#mainGradient)"
        filter="url(#shadow)"
      />

      {/* Inner highlight for depth */}
      <ellipse
        cx="70"
        cy="46"
        rx="50"
        ry="34"
        fill="#EC4899"
        opacity="0.5"
      />

      {/* ===== EARS - Small, on TOP of head like a hippo ===== */}
      <ellipse cx="28" cy="28" rx="8" ry="10" fill="#8B5CF6"/>
      <ellipse cx="28" cy="28" rx="5" ry="6" fill="#EC4899" opacity="0.6"/>
      <ellipse cx="112" cy="28" rx="8" ry="10" fill="#F97316"/>
      <ellipse cx="112" cy="28" rx="5" ry="6" fill="#EC4899" opacity="0.6"/>

      {/* ===== MASSIVE SNOUT - The distinctive hippo feature ===== */}
      {/* Hippos have a huge, wide, flat snout */}
      <ellipse cx="70" cy="72" rx="38" ry="22" fill="#8B5CF6" opacity="0.85"/>
      <ellipse cx="70" cy="70" rx="34" ry="18" fill="#EC4899" opacity="0.4"/>

      {/* ===== NOSTRILS - On TOP of snout (hippos breathe while submerged) ===== */}
      <ellipse cx="58" cy="65" rx="5" ry="6" fill="#1a1a2e"/>
      <ellipse cx="82" cy="65" rx="5" ry="6" fill="#1a1a2e"/>

      {/* ===== EYES - Wide-set, positioned high on head ===== */}
      {/* Hippo eyes sit on top of head so they can see above water */}
      <circle cx="42" cy="38" r="11" fill="white"/>
      <circle cx="98" cy="38" r="11" fill="white"/>

      {/* Pupils - looking slightly up and to the side */}
      <circle cx="44" cy="37" r="6" fill="#1a1a2e"/>
      <circle cx="100" cy="37" r="6" fill="#1a1a2e"/>

      {/* Eye shine */}
      <circle cx="46" cy="35" r="2.5" fill="white"/>
      <circle cx="102" cy="35" r="2.5" fill="white"/>

      {/* ===== GLASSES - Coder aesthetic ===== */}
      <rect
        x="29"
        y="26"
        width="26"
        height="22"
        rx="4"
        fill="none"
        stroke="url(#glassGradient)"
        strokeWidth="3"
      />
      <rect
        x="85"
        y="26"
        width="26"
        height="22"
        rx="4"
        fill="none"
        stroke="url(#glassGradient)"
        strokeWidth="3"
      />
      {/* Bridge - curved to fit hippo's wide head */}
      <path
        d="M55 37 Q70 32 85 37"
        stroke="url(#glassGradient)"
        strokeWidth="3"
        fill="none"
      />

      {/* ===== TERMINAL BAR with GREPLABS text ===== */}
      <rect x="10" y="100" width="120" height="28" rx="5" fill="#1a1a2e"/>

      {/* Terminal dots */}
      <circle cx="22" cy="108" r="3" fill="#EF4444"/>
      <circle cx="32" cy="108" r="3" fill="#FBBF24"/>
      <circle cx="42" cy="108" r="3" fill="#10B981"/>

      {/* GREPLABS text */}
      <text
        x="70"
        y="121"
        fill="url(#glassGradient)"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="700"
        textAnchor="middle"
      >
        GREPLABS
      </text>

      {/* Blinking cursor */}
      {animated && (
        <rect x="118" y="105" width="3" height="14" rx="1" fill="#10B981">
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>
      )}
    </svg>
  )

  if (animated) {
    return (
      <motion.div
        className={`inline-flex items-center ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {LogoSVG}
      </motion.div>
    )
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      {LogoSVG}
    </div>
  )
}

// Minimal icon version for favicon/small contexts
export function LogoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>

      {/* Simplified wide hippo head */}
      <ellipse cx="50" cy="45" rx="42" ry="32" fill="url(#iconGrad)"/>

      {/* Small ears on top */}
      <ellipse cx="18" cy="22" rx="6" ry="8" fill="#8B5CF6"/>
      <ellipse cx="82" cy="22" rx="6" ry="8" fill="#F97316"/>

      {/* Wide snout */}
      <ellipse cx="50" cy="58" rx="28" ry="16" fill="#8B5CF6" opacity="0.85"/>

      {/* Nostrils on top */}
      <ellipse cx="40" cy="54" rx="4" ry="5" fill="#1a1a2e"/>
      <ellipse cx="60" cy="54" rx="4" ry="5" fill="#1a1a2e"/>

      {/* Eyes high on head */}
      <circle cx="32" cy="35" r="8" fill="white"/>
      <circle cx="68" cy="35" r="8" fill="white"/>
      <circle cx="34" cy="34" r="4" fill="#1a1a2e"/>
      <circle cx="70" cy="34" r="4" fill="#1a1a2e"/>

      {/* Glasses */}
      <rect x="22" y="25" width="20" height="18" rx="3" fill="none" stroke="#10B981" strokeWidth="2.5"/>
      <rect x="58" y="25" width="20" height="18" rx="3" fill="none" stroke="#10B981" strokeWidth="2.5"/>
      <path d="M42 34 Q50 30 58 34" stroke="#10B981" strokeWidth="2.5" fill="none"/>
    </svg>
  )
}

// Text logo variant
export function LogoWithText({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Logo size={size} animated={false} />
      <span className="text-xl font-light tracking-tight gradient-text">GrepLabs</span>
    </div>
  )
}

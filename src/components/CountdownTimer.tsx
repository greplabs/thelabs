'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!mounted) {
    // Prevent hydration mismatch
    return (
      <div className={`flex gap-4 md:gap-6 ${className}`}>
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-extralight text-gray-400 dark:text-gray-600">00</span>
            </div>
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className={`flex gap-4 md:gap-6 ${className}`}>
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <motion.div
            key={`${unit.label}-${unit.value}`}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="relative w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center overflow-hidden group"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-grep-purple/10 via-grep-pink/10 to-grep-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-grep-purple/20 via-grep-pink/20 to-grep-orange/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            
            <span className="text-2xl md:text-3xl font-extralight text-gray-900 dark:text-white relative z-10">
              {String(unit.value).padStart(2, '0')}
            </span>
          </motion.div>
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wider font-light">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}


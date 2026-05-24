'use client'

import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  color?: 'purple' | 'blue' | 'cyan' | 'white'
}

const colorMap = {
  purple: 'from-purple-600/20 via-purple-500/10 to-purple-600/20',
  blue: 'from-blue-600/20 via-blue-500/10 to-blue-600/20',
  cyan: 'from-cyan-600/20 via-cyan-500/10 to-cyan-600/20',
  white: 'from-white/10 via-white/5 to-white/10',
}

const intensityMap = {
  low: 'opacity-50',
  medium: 'opacity-100',
  high: 'opacity-100 blur-2xl',
}

export function GlowEffect({ 
  children, 
  className, 
  intensity = 'medium',
  color = 'purple' 
}: GlowEffectProps) {
  return (
    <div className={cn("relative group", className)}>
      
      <motion.div
        className={cn(
          "absolute -inset-1 bg-gradient-to-r rounded-2xl",
          colorMap[color],
          intensityMap[intensity],
          "animate-gradient blur-xl"
        )}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
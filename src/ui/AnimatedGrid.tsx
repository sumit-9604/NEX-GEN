'use client'

import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface AnimatedGridProps {
  className?: string
  cellSize?: number
  lineColor?: string
  animated?: boolean
}

export function AnimatedGrid({ 
  className, 
  cellSize = 40, 
  lineColor = 'rgba(255, 255, 255, 0.03)',
  animated = true 
}: AnimatedGridProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Glow filter for dots */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        
        {animated && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              [...Array(12)].map((_, j) => (
                <motion.circle
                  key={`${i}-${j}`}
                  cx={i * cellSize}
                  cy={j * cellSize}
                  r="1.5"
                  fill="rgba(139, 92, 246, 0.6)"
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: (i + j) * 0.05,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2
                  }}
                />
              ))
            ))}
          </motion.g>
        )}
      </svg>
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
    </div>
  )
}
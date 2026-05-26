'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedGridProps {
  className?: string
}

export function AnimatedGrid({
  className = '',
}: AnimatedGridProps) {
  const [size, setSize] = useState({
    cols: 30,
    rows: 20,
  })

  const cellSize = 60

  useEffect(() => {
    const update = () => {
      setSize({
        cols: Math.ceil(window.innerWidth / cellSize),
        rows: Math.ceil(window.innerHeight / cellSize),
      })
    }

    update()

    window.addEventListener('resize', update)

    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
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
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {[...Array(size.cols)].map((_, i) =>
          [...Array(size.rows)].map((_, j) => (
            <motion.circle
              key={`${i}-${j}`}
              cx={i * cellSize}
              cy={j * cellSize}
              r="4"
              fill="rgba(48,10,87,0.8)"
              animate={{
                opacity: [0.1, 1, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i + j) * 0.05,
              }}
            />
          ))
        )}
      </svg>
    </div>
  )
}
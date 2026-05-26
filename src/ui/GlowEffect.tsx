'use client'

import { motion } from 'framer-motion'

interface GlowEffectProps {
  className?: string
}

export function GlowEffect({
  className = '',
}: GlowEffectProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >

      {/* PURPLE ORB */}
      <motion.div
        className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full bg-red-500 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* BLUE ORB */}
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-blue-500 blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

    </div>
  )
}
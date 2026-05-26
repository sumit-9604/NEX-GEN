'use client'

import { motion } from 'framer-motion'

export function TestMotion() {
  return (
    <motion.div
      className="fixed top-20 left-20 w-32 h-32 bg-red-500 z-[9999]"
      animate={{
        x: [0, 300, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    />
  )
}

'use client'

import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.25,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    filter: 'blur(8px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function StaggerWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}


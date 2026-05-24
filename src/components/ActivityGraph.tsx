'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeInUp, staggerContainer } from '@/utils/variants'

interface ActivityData {
  day: string
  value: number
}

const mockData: ActivityData[] = [
  { day: 'Mon', value: 45 },
  { day: 'Tue', value: 62 },
  { day: 'Wed', value: 38 },
  { day: 'Thu', value: 75 },
  { day: 'Fri', value: 83 },
  { day: 'Sat', value: 42 },
  { day: 'Sun', value: 58 },
]

export function ActivityGraph() {
  const maxValue = Math.max(...mockData.map(d => d.value))
  
  return (
    <motion.article
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="rounded-2xl glass p-6"
    >
      <h3 className="text-lg font-semibold mb-6">Weekly Activity</h3>
      
      <div className="flex items-end justify-between gap-2 h-48">
        {mockData.map((data, i) => (
          <motion.div
            key={data.day}
            className="flex-1 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.div
              className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-lg"
              initial={{ height: 0 }}
              animate={{ height: `${(data.value / maxValue) * 100}%` }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-xs text-gray-400">{data.day}</span>
          </motion.div>
        ))}
      </div>
    </motion.article>
  )
}
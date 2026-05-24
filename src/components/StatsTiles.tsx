'use client'

import { motion } from 'framer-motion'
import { Clock, Trophy, Target, Award } from 'lucide-react'
import { fadeInUp } from '@/utils/variants'

const stats = [
  { icon: Clock, label: 'Study Hours', value: '42', change: '+12%', color: 'purple' },
  { icon: Trophy, label: 'Completed', value: '8', change: '+2', color: 'blue' },
  { icon: Target, label: 'Success Rate', value: '94%', change: '+5%', color: 'green' },
  { icon: Award, label: 'Rank', value: '#147', change: '+23', color: 'orange' },
]

export function StatsTiles() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.article
            key={stat.label}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -2 }}
            className="rounded-2xl glass p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <Icon className={`w-5 h-5 text-${stat.color}-400`} />
              <span className="text-xs text-green-400">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
          </motion.article>
        )
      })}
    </section>
  )
}
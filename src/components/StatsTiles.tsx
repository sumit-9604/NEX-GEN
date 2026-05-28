'use client'

import { motion } from 'framer-motion'
import { Clock, Trophy, Target, Award } from 'lucide-react'

const stats = [
  { icon: Clock,  value: '42',   label: 'Study Hours',  change: '+12%' },
  { icon: Trophy, value: '8',    label: 'Completed',    change: '+2'   },
  { icon: Target, value: '94%',  label: 'Success Rate', change: '+5%'  },
  { icon: Award,  value: '#147', label: 'Rank',         change: '+23'  },
]

export function StatsTiles() {
  return (
    <div className="flex flex-col gap-3 w-full">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 280, damping: 24 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 w-full glass rounded-2xl"

            style={{ padding: '20px 24px', minHeight: '80px' }}
          >
            <Icon className="flex-shrink-0 w-5 h-5 text-white/50" />

            <span className="flex-shrink-0 w-16 text-xl font-bold text-white tracking-tight">
              {stat.value}
            </span>

            <span className="flex-1 text-sm text-white/40 font-medium">
              {stat.label}
            </span>

            <span className="flex-shrink-0 text-[11px] font-semibold
                             text-emerald-400 bg-emerald-400/10
                             px-2 py-0.5 rounded-full">
              {stat.change}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
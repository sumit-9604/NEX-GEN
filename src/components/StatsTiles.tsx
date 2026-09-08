'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Trophy,
  Target,
  Award,
} from 'lucide-react'

const stats = [
  { icon: Clock, value: '42h', label: 'Study Hours', change: '+12%', sub: 'This month' },
  { icon: Trophy, value: '8', label: 'Completed', change: '+2', sub: 'Certificates earned' },
  { icon: Target, value: '94%', label: 'Success Rate', change: '+5%', sub: 'Quiz accuracy' },
  { icon: Award, value: '#147', label: 'Global Rank', change: '+23', sub: 'Top 5% overall' },
]

const easing = [0.22, 1, 0.36, 1]

export function StatsTiles() {
  return (
    <div className="flex flex-col gap-3 w-full">
      {stats.map((stat, i) => {
        const Icon = stat.icon

        return (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35 + i * 0.1,
              duration: 0.7,
              ease: easing,
            }}
            whileHover={{
              y: -3,
              borderColor: 'rgba(59,130,246,0.4)',
              boxShadow: '0 8px 24px rgba(59,130,246,0.18)',
            }}
            className="
              flex items-center gap-4
              w-full glass rounded-2xl
              border border-white/10
              p-4 md:px-5 md:py-4.5
              transition-all
            "
          >
            <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-300 flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <span className="text-xl md:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="
                  text-[11px]
                  font-bold
                  text-emerald-400
                  bg-emerald-500/10
                  border border-emerald-500/20
                  px-2 py-0.5 rounded-full
                ">
                  {stat.change}
                </span>
              </div>
              <p className="text-xs font-semibold text-white/70 truncate mt-0.5">
                {stat.label}
              </p>
              <p className="text-[10px] text-white/40 truncate">
                {stat.sub}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

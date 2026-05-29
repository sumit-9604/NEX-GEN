
'use client'

import { motion } from 'framer-motion'

import {
  Clock,
  Trophy,
  Target,
  Award,
} from 'lucide-react'

const stats = [
  { icon: Clock, value: '42', label: 'Study Hours', change: '+12%' },
  { icon: Trophy, value: '8', label: 'Completed', change: '+2' },
  { icon: Target, value: '94%', label: 'Success Rate', change: '+5%' },
  { icon: Award, value: '#147', label: 'Rank', change: '+23' },
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
              y: 40,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              delay: 0.45 + i * 0.12,
              duration: 0.8,
              ease: easing,
            }}
            whileHover={{
              y: -4,
              borderColor: 'rgba(139,92,246,0.3)',
            }}
            className="
              flex items-center gap-3
              w-full glass rounded-2xl
              border border-white/5
              transition-colors
            "
            style={{
              padding: '20px 24px',
              minHeight: '84px',
            }}
          >

            <Icon className="w-5 h-5 text-violet-300/70 flex-shrink-0" />

            <span className="
              flex-shrink-0
              w-16
              text-xl
              font-black
              text-white
              tracking-tight
            ">
              {stat.value}
            </span>

            <span className="
              flex-1
              text-sm
              text-white/45
              font-medium
            ">
              {stat.label}
            </span>

            <span className="
              flex-shrink-0
              text-[11px]
              font-semibold
              text-emerald-400
              bg-emerald-400/10
              px-2 py-0.5 rounded-full
            ">
              {stat.change}
            </span>

          </motion.div>
        )
      })}
    </div>
  )
}


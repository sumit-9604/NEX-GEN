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
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25 + i * 0.08,
              duration: 0.5,
              ease: easing,
            }}
            whileHover={{
              y: -2,
              borderColor: '#1B3B2B',
            }}
            className="
              flex items-center gap-4
              w-full bg-white rounded-xl
              border border-[#E5E2D9]
              p-4 md:px-5 md:py-4
              transition-all duration-200
            "
          >
            <div className="p-2.5 rounded-lg bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B] flex-shrink-0">
              <Icon className="w-5 h-5 text-[#1B3B2B]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#1C1D1B] tracking-tight">
                  {stat.value}
                </span>
                <span className="
                  text-[11px]
                  font-mono
                  font-bold
                  text-[#1B3B2B]
                  bg-[#EBF0EC]
                  border border-[#D9E3DC]
                  px-2 py-0.5 rounded-md
                ">
                  {stat.change}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#1C1D1B] truncate mt-0.5">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#5C6058] truncate">
                {stat.sub}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

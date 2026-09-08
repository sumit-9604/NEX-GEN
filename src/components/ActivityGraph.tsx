'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ActivityData } from '@/types'

const defaultData: ActivityData[] = [
  { day: 'Mon', value: 45, sessionsCount: 3 },
  { day: 'Tue', value: 62, sessionsCount: 4 },
  { day: 'Wed', value: 38, sessionsCount: 2 },
  { day: 'Thu', value: 75, sessionsCount: 5 },
  { day: 'Fri', value: 83, sessionsCount: 6 },
  { day: 'Sat', value: 42, sessionsCount: 2 },
  { day: 'Sun', value: 58, sessionsCount: 4 },
]

const spring = { type: 'spring', stiffness: 180, damping: 22 } as const
const CHART_HEIGHT = 120

export function ActivityGraph({ data = defaultData }: { data?: ActivityData[] }) {
  const [hoveredDay, setHoveredDay] = useState<ActivityData | null>(null)
  const maxValue = Math.max(...data.map(d => d.value))
  const totalMinutes = data.reduce((acc, curr) => acc + curr.value, 0)
  const avgMinutes = Math.round(totalMinutes / data.length)
  const peakDayItem = data.reduce((prev, current) => (prev.value > current.value) ? prev : current, data[0])

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, ...spring }}
      className="rounded-2xl glass p-6 border border-white/10"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            Weekly Activity Analysis
          </h3>
          <p className="text-xs text-white/50 mt-0.5">Study minutes logged per day</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-sky-300">Live Sync</span>
        </div>
      </div>

      {/* Chart Canvas */}
      <div
        className="relative w-full flex items-end justify-between px-2 pt-6"
        style={{ height: `${CHART_HEIGHT + 30}px` }}
      >
        {/* Horizontal grid lines */}
        {[0.25, 0.5, 0.75, 1].map(frac => (
          <div
            key={frac}
            className="absolute left-0 right-0 border-t border-white/[0.05]"
            style={{ bottom: `${frac * CHART_HEIGHT + 28}px` }}
          />
        ))}

        {data.map((item, i) => {
          const barH = Math.round((item.value / maxValue) * CHART_HEIGHT)
          const isPeak = item.value === maxValue

          return (
            <div
              key={item.day}
              className="relative flex flex-col items-center group cursor-pointer"
              style={{ width: '11%' }}
              onMouseEnter={() => setHoveredDay(item)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              {/* Tooltip on Hover */}
              {hoveredDay?.day === item.day && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  className="absolute bottom-full mb-2 z-30 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-blue-500/30 text-center whitespace-nowrap shadow-xl"
                >
                  <p className="text-[11px] font-bold text-white">{item.value} min</p>
                  <p className="text-[9px] text-sky-300 font-medium">
                    {item.sessionsCount || Math.ceil(item.value / 20)} sessions
                  </p>
                </motion.div>
              )}

              {/* Animated Bar */}
              <motion.div
                style={{
                  width: '100%',
                  maxWidth: '36px',
                  height: barH,
                  originY: 1,
                  borderRadius: '6px 6px 3px 3px',
                  background: isPeak
                    ? 'linear-gradient(to top, rgba(59,130,246,1), rgba(6,182,212,0.9))'
                    : 'linear-gradient(to top, rgba(37,99,235,0.6), rgba(59,130,246,0.4))',
                  boxShadow: isPeak
                    ? '0 -4px 16px rgba(59,130,246,0.6)'
                    : '0 -2px 8px rgba(59,130,246,0.2)',
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ ...spring, delay: i * 0.07 }}
                whileHover={{
                  scaleY: 1.05,
                  background: 'linear-gradient(to top, rgba(59,130,246,1), rgba(56,189,248,0.95))',
                  boxShadow: '0 -6px 20px rgba(59,130,246,0.7)',
                }}
              />

              {/* Day label */}
              <span className={`text-[11px] font-semibold mt-2 transition-colors ${isPeak ? 'text-sky-300 font-bold' : 'text-white/40 group-hover:text-white'}`}>
                {item.day}
              </span>
            </div>
          )
        })}
      </div>

      {/* Bottom Summary Strip */}
      <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-white/[0.08] gap-3">
        <span className="text-xs text-white/50">
          Peak Activity: <span className="text-sky-300 font-bold">{peakDayItem.day} ({peakDayItem.value}m)</span>
        </span>
        <span className="text-xs text-white/50">
          Daily Avg:{' '}
          <span className="text-white/80 font-bold">
            {avgMinutes} min
          </span>
        </span>
        <span className="text-xs text-white/50">
          Total Duration:{' '}
          <span className="text-emerald-400 font-bold">
            {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
          </span>
        </span>
      </div>
    </motion.article>
  )
}
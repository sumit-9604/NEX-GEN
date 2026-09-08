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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, ...spring }}
      className="rounded-xl bg-white p-6 border border-[#E5E2D9]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#1C1D1B]">
            Weekly Activity Analysis
          </h3>
          <p className="text-xs text-[#5C6058] mt-0.5">Study minutes logged per day</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#EBF0EC] border border-[#D9E3DC]">
          <span className="w-2 h-2 rounded-full bg-[#1B3B2B] animate-pulse" />
          <span className="text-xs font-mono font-semibold text-[#1B3B2B]">Live Sync</span>
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
            className="absolute left-0 right-0 border-t border-[#E5E2D9]"
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
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: -6, scale: 1 }}
                  className="absolute bottom-full mb-2 z-30 px-3 py-1.5 rounded-md bg-[#1C1D1B] text-white text-center whitespace-nowrap shadow-md"
                >
                  <p className="text-[11px] font-bold text-white">{item.value} min</p>
                  <p className="text-[10px] text-[#D9E3DC] font-mono">
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
                  borderRadius: '4px 4px 2px 2px',
                  backgroundColor: isPeak ? '#C85A32' : '#1B3B2B',
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ ...spring, delay: i * 0.06 }}
                whileHover={{
                  scaleY: 1.05,
                  backgroundColor: isPeak ? '#DB6337' : '#2D5A42',
                }}
              />

              {/* Day label */}
              <span className={`text-[11px] font-mono font-semibold mt-2 transition-colors ${isPeak ? 'text-[#C85A32] font-bold' : 'text-[#5C6058] group-hover:text-[#1C1D1B]'}`}>
                {item.day}
              </span>
            </div>
          )
        })}
      </div>

      {/* Bottom Summary Strip */}
      <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-[#E5E2D9] gap-3">
        <span className="text-xs text-[#5C6058]">
          Peak Activity: <span className="text-[#C85A32] font-bold">{peakDayItem.day} ({peakDayItem.value}m)</span>
        </span>
        <span className="text-xs text-[#5C6058]">
          Daily Avg:{' '}
          <span className="text-[#1C1D1B] font-bold">
            {avgMinutes} min
          </span>
        </span>
        <span className="text-xs text-[#5C6058]">
          Total Duration:{' '}
          <span className="text-[#1B3B2B] font-bold">
            {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
          </span>
        </span>
      </div>
    </motion.article>
  )
}
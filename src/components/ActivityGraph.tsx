'use client'

import { motion } from 'framer-motion'

const mockData = [
  { day: 'Mon', value: 45 },
  { day: 'Tue', value: 62 },
  { day: 'Wed', value: 38 },
  { day: 'Thu', value: 75 },
  { day: 'Fri', value: 83 },
  { day: 'Sat', value: 42 },
  { day: 'Sun', value: 58 },
]

const spring = { type: 'spring', stiffness: 180, damping: 22 } as const
const maxValue = Math.max(...mockData.map(d => d.value))
const CHART_HEIGHT = 100  // px — the drawable area for bars

export function ActivityGraph() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, ...spring }}
      className="rounded-2xl glass p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-base font-semibold text-white">Weekly Activity</h3>
          <p className="text-xs text-white/40 mt-0.5">Study sessions this week</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                        bg-violet-500/10 border border-violet-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs font-medium text-violet-400">Active</span>
        </div>
      </div>

      {/* Chart — relative container, bars pinned to bottom via absolute */}
      <div
        className="relative w-full flex items-end justify-between px-2"
        style={{ height: `${CHART_HEIGHT + 24}px` }}  // +24 for day labels
      >
        {/* Horizontal guide lines */}
        {[0.25, 0.5, 0.75, 1].map(frac => (
          <div
            key={frac}
            className="absolute left-0 right-0 border-t border-white/[0.04]"
            style={{ bottom: `${frac * CHART_HEIGHT + 24}px` }}
          />
        ))}

        {mockData.map((data, i) => {
          const barH = Math.round((data.value / maxValue) * CHART_HEIGHT)
          const isPeak = data.value === maxValue

          return (
            <div
              key={data.day}
              className="flex flex-col items-center"
              style={{ width: '10%' }}   // 7 bars × ~10% = 70%, rest is gap
            >
              {/* ✅ Bar — absolute bottom:24px pins it to the baseline */}
              <motion.div
                style={{
                  width: '100%',
                  maxWidth: '32px',
                  height: barH,
                  originY: 1,           // scale grows upward from bottom
                  borderRadius: '5px 5px 3px 3px',
                  background: isPeak
                    ? 'linear-gradient(to top, rgba(124,58,237,0.95), rgba(167,139,250,0.85))'
                    : 'linear-gradient(to top, rgba(109,40,217,0.7),  rgba(139,92,246,0.55))',
                  boxShadow: isPeak
                    ? '0 -4px 14px rgba(139,92,246,0.4)'
                    : '0 -2px 6px rgba(139,92,246,0.15)',
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ ...spring, delay: i * 0.07 }}
                whileHover={{
                  background: 'linear-gradient(to top, rgba(124,58,237,1), rgba(196,181,253,0.9))',
                  boxShadow: '0 -6px 20px rgba(139,92,246,0.55)',
                  transition: { duration: 0.12 },
                }}
              />

              {/* Day label — always at the very bottom */}
              <span className="text-[10px] text-white/30 mt-2 flex-shrink-0">
                {data.day}
              </span>
            </div>
          )
        })}
      </div>

      {/* Bottom stat strip */}
      <div className="flex justify-between items-center mt-5 pt-4
                      border-t border-white/[0.06]">
        <span className="text-xs text-white/30">
          Peak: <span className="text-violet-400 font-medium">Friday</span>
        </span>
        <span className="text-xs text-white/30">
          Avg:{' '}
          <span className="text-white/60 font-medium">
            {Math.round(mockData.reduce((s, d) => s + d.value, 0) / mockData.length)} min
          </span>
        </span>
        <span className="text-xs text-white/30">
          Total:{' '}
          <span className="text-emerald-400 font-medium">
            {mockData.reduce((s, d) => s + d.value, 0)} min
          </span>
        </span>
      </div>
    </motion.article>
  )
}
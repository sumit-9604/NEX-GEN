'use client'

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { Flame, Sparkles, TrendingUp, BookOpen } from 'lucide-react'
import { useRef, useCallback } from 'react'
import CircularText from './CircularText'

const spring = { type: 'spring', stiffness: 300, damping: 20 } as const

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  const ref    = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(300)
  const mouseY = useMotionValue(120)
  const spotlight = useMotionTemplate`radial-gradient(
    380px circle at ${mouseX}px ${mouseY}px,
    rgba(139,92,246,0.12),
    transparent 65%
  )`

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(300)
    mouseY.set(120)
  }, [mouseX, mouseY])

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, ...spring }}
      className="relative overflow-hidden rounded-2xl glass p-8 min-h-[200px]"
    >

      

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      <div className="relative z-10 flex items-center justify-between gap-6">

        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, ...spring }}
            className="flex items-center gap-2 mb-2"
          >
            <BookOpen className="w-3 h-3 text-violet-400/70" />
            <span className="text-[10px] font-semibold text-violet-400/70 uppercase tracking-[0.18em]">
              Dashboard
            </span>
          </motion.div>


        <div>
          <CircularText
            text="NEXLEARN • EXPLORE • "
            radius={40}            
            spinDuration={22}
            onHover="speedUp"
            className="text-violet-300 font-semibold"
          />
        </div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, ...spring }}
            className="text-[2rem] font-bold tracking-tight leading-tight mb-1.5"
            style={{
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(167,139,250,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Welcome back, {name} 👋
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, ...spring }}
            className="text-white/40 text-sm mb-5"
          >
            Ready to continue your learning journey?
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, ...spring }}
            className="flex items-center gap-2 flex-wrap"
          >

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                            bg-amber-400/10 border border-amber-400/25">
              <TrendingUp className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <span className="text-[11px] font-medium text-amber-300/90">
                Top 15% this week
              </span>
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse flex-shrink-0" />
            </div>

            <span className="w-1 h-1 rounded-full bg-white/20" />


            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                            bg-violet-500/10 border border-violet-500/20">
              <span className="text-[11px] font-medium text-violet-300">
                ⚡ 24,850 XP
              </span>
            </div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.65, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.26, ...spring }}
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 flex flex-col items-center gap-1.5
                     px-6 py-5 rounded-2xl cursor-default
                     border border-orange-500/30"
          
        >
          <div style={{color: "#fb923c"}}>
          <motion.div
            animate={{ y: [0, -3, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Flame className="w-7 h-7 text-orange-400" />
          </motion.div>
          </div>
          <span className="text-[2rem] font-black text-orange-400 leading-none tabular-nums">
            {streak}
          </span>
          <span className="text-[9px] font-bold text-orange-400/55 uppercase tracking-[0.15em] leading-none">
            day streak
          </span>
        </motion.div>

      </div>
    </motion.article>
  )
}
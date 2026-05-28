'use client'

import { motion } from 'framer-motion'
import { Flame, Sparkles } from 'lucide-react'
import { fadeInUp } from 'src/utils/variants'
import CircularText from '@/src/components/CircularText'

interface HeroTileProps {
  name: string
  streak: number
}

export function HeroTile({ name, streak }: HeroTileProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="relative overflow-hidden rounded-2xl glass p-6 col-span-full md:col-span-2"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        {/* Two column layout: Left for Circle, Right for Content */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* LEFT COLUMN - Circular Text */}
          <div className="flex-shrink-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 md:w-40 md:h-40"
            >
              <CircularText 
                text="NEXLEARN • FUTURISTIC • LEARNING • "
                className="text-purple-400 text-xs md:text-sm font-bold"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Welcome Content + Streak */}
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              {/* Welcome Message */}
              <div className="flex-1">
                <motion.h1 
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Welcome back, {name}
                </motion.h1>
                
                <motion.p 
                  className="text-gray-400 mt-2 text-sm md:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Ready to continue your learning journey?
                </motion.p>
                
                <motion.div 
                  className="mt-3 flex items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                  <span className="text-xs md:text-sm text-gray-300">
                    Top 15% of learners this week!
                  </span>
                </motion.div>
              </div>

              {/* Streak Badge - Right side of the right column */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Flame className="w-6 h-6 text-orange-500" />
                  </motion.div>
                  <span className="text-orange-500 font-bold text-xl">{streak}</span>
                  <span className="text-orange-500/80 text-xs">day streak</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </motion.article>
  )
}
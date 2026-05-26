'use client'

import { motion } from 'framer-motion'
import { Flame, Sparkles } from 'lucide-react'
import { fadeInUp } from 'src/utils/variants'

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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-gradient" />
      
      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <motion.h1 
              className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Welcome back, {name}
            </motion.h1>
            <motion.p 
              className="text-gray-400 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to continue your learning journey?
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-semibold">{streak} day streak</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 flex items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          <span className="text-sm text-gray-300">
            You're in the top 15% of learners this week!
          </span>
        </motion.div>
      </div>
    </motion.article>
  )
}
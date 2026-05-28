'use client'

import { motion } from 'framer-motion'

export default function TestAnimationPage() {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-500 p-8 rounded-2xl text-white text-center"
      >
        <h1 className="text-2xl font-bold">If this animated in, animations work!</h1>
      </motion.div>
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 bg-blue-500 rounded-lg ml-8"
      />
    </div>
  )
}
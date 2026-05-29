'use client'

import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

export default function HelpPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 max-w-3xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-violet-500/10">
            <HelpCircle className="w-6 h-6 text-violet-400" />
          </div>

          <h1 className="text-3xl font-black text-white">
            Help Center
          </h1>
        </div>

        <p className="text-white/50 leading-relaxed">
          Need assistance? Reach out to mentors, check FAQs,
          or explore platform documentation.
        </p>
      </motion.div>

    </main>
  )
}
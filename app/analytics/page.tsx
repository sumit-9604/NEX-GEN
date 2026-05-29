'use client'

import { motion } from 'framer-motion'
import { ActivityGraph } from 'src/components/ActivityGraph'
import { StatsTiles } from 'src/components/StatsTiles'

const spring = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
}

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-white tracking-tight">
          Analytics
        </h1>

        <p className="text-white/40 mt-2">
          Track your performance and productivity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_0.8fr] gap-6">
        <ActivityGraph />
        <StatsTiles />
      </div>

    </main>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Sidebar } from '@/src/components/Sidebar'
import { MobileNav } from '@/src/components/MobileNav'
import { ActivityGraph } from '@/src/components/ActivityGraph'
import { StatsTiles } from '@/src/components/StatsTiles'

const spring = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
}

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F5F0]">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring}
              className="mb-6"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1D1B] tracking-tight">
                Academic Performance & Analytics
              </h1>

              <p className="text-[#5C6058] text-sm mt-1">
                Comprehensive study metrics, focus time distribution, and achievement milestones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_0.8fr] gap-6">
              <ActivityGraph />
              <StatsTiles />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
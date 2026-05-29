'use client'

import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-10 max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-violet-500/10">
            <Settings className="w-6 h-6 text-violet-400" />
          </div>

          <h1 className="text-3xl font-black text-white">
            Settings
          </h1>
        </div>

        <div className="space-y-6">

          <div>
            <label className="block text-white/60 mb-2">
              Username
            </label>

            <input
              className="
                w-full
                glass
                rounded-xl
                px-4 py-3
                bg-transparent
                outline-none
                border border-white/10
                text-white
              "
              placeholder="Alex Morgan"
            />
          </div>

          <div>
            <label className="block text-white/60 mb-2">
              Email
            </label>

            <input
              className="
                w-full
                glass
                rounded-xl
                px-4 py-3
                bg-transparent
                outline-none
                border border-white/10
                text-white
              "
              placeholder="alex@example.com"
            />
          </div>

        </div>
      </motion.div>

    </main>
  )
}
'use client'

import { motion } from 'framer-motion'
import { CalendarClock } from 'lucide-react'

const sessions = [
  {
    title: 'React Performance',
    time: '10:00 AM',
  },
  {
    title: 'DSA Practice',
    time: '1:00 PM',
  },
  {
    title: 'System Design',
    time: '7:00 PM',
  },
]

export default function SchedulePage() {
  return (
    <main className="min-h-screen p-6 md:p-10">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-white">
          Schedule
        </h1>

        <p className="text-white/40 mt-2">
          Your planned learning sessions.
        </p>
      </motion.div>

      <div className="space-y-4">

        {sessions.map((session, i) => (
          <motion.div
            key={session.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-violet-500/10">
                <CalendarClock className="text-violet-400 w-5 h-5" />
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {session.title}
                </h3>

                <p className="text-white/40 text-sm">
                  Scheduled Learning
                </p>
              </div>
            </div>

            <span className="text-violet-300 font-medium">
              {session.time}
            </span>
          </motion.div>
        ))}

      </div>

    </main>
  )
}
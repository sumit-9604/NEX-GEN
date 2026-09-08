'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarClock, Video, BookOpen, CheckCircle2, Clock, Plus, ExternalLink } from 'lucide-react'
import { MOCK_SCHEDULE } from '@/src/lib/mock-data'

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming')

  const typeIcons = {
    live: Video,
    workshop: CalendarClock,
    quiz: CheckCircle2,
    'self-study': BookOpen
  }

  const typeBadges = {
    live: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    workshop: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    quiz: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    'self-study': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
  }

  return (
    <main className="min-h-screen p-6 md:p-10 pb-24 md:pb-10 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Learning Schedule
          </h1>
          <p className="text-white/50 text-sm mt-1">
            Manage your live workshops, scheduled study blocks, and quizzes.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 transition-all">
          <Plus className="w-4 h-4" />
          <span>Add Session</span>
        </button>
      </motion.div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            activeTab === 'upcoming'
              ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-lg'
              : 'text-white/50 border-transparent hover:text-white'
          }`}
        >
          Upcoming (4)
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            activeTab === 'completed'
              ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-lg'
              : 'text-white/50 border-transparent hover:text-white'
          }`}
        >
          Completed (12)
        </button>
      </div>

      {/* Timeline Items */}
      <div className="space-y-4">
        {MOCK_SCHEDULE.map((session, i) => {
          const Icon = typeIcons[session.type as keyof typeof typeIcons] || CalendarClock
          return (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-300 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase ${typeBadges[session.type as keyof typeof typeBadges]}`}>
                      {session.type}
                    </span>
                    <span className="text-xs text-white/40">
                      {session.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {session.title}
                  </h3>

                  {session.instructor && (
                    <p className="text-xs text-white/50 flex items-center gap-1.5">
                      <span>Instructor:</span>
                      <span className="text-blue-300 font-semibold">{session.instructor}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
                <div className="text-left md:text-right">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{session.time}</span>
                  </div>
                  <span className="text-[11px] text-white/40 block mt-0.5">
                    Duration: {session.duration}
                  </span>
                </div>

                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-blue-500/20 text-white hover:text-blue-300 border border-white/10 hover:border-blue-500/30 text-xs font-semibold transition-all">
                  <span>Join</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}
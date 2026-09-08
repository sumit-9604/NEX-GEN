'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarClock, Video, BookOpen, CheckCircle2, Clock, Plus, ExternalLink } from 'lucide-react'
import { Sidebar } from '@/src/components/Sidebar'
import { MobileNav } from '@/src/components/MobileNav'
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
    live: 'bg-[#FDF6F3] text-[#C85A32] border-[#FBEBE5]',
    workshop: 'bg-[#EBF0EC] text-[#1B3B2B] border-[#D9E3DC]',
    quiz: 'bg-[#FDF6F3] text-[#C85A32] border-[#FBEBE5]',
    'self-study': 'bg-[#EBF0EC] text-[#1B3B2B] border-[#D9E3DC]'
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F5F0]">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
            >
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1D1B] tracking-tight">
                  Academic Schedule
                </h1>
                <p className="text-[#5C6058] text-sm mt-1">
                  Manage your live lectures, scheduled study blocks, and seminar sessions.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1B3B2B] hover:bg-[#153023] text-white font-semibold text-xs transition-all shadow-sm">
                <Plus className="w-4 h-4" />
                <span>Add Session</span>
              </button>
            </motion.div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-[#E5E2D9] pb-3">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all border ${
                  activeTab === 'upcoming'
                    ? 'bg-[#EBF0EC] text-[#1B3B2B] border-[#D9E3DC]'
                    : 'text-[#5C6058] border-transparent hover:text-[#1C1D1B]'
                }`}
              >
                Upcoming (4)
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all border ${
                  activeTab === 'completed'
                    ? 'bg-[#EBF0EC] text-[#1B3B2B] border-[#D9E3DC]'
                    : 'text-[#5C6058] border-transparent hover:text-[#1C1D1B]'
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
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-xl p-5 border border-[#E5E2D9] hover:border-[#1B3B2B] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B] flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border uppercase ${typeBadges[session.type as keyof typeof typeBadges]}`}>
                            {session.type}
                          </span>
                          <span className="text-xs font-mono text-[#5C6058]">
                            {session.category}
                          </span>
                        </div>

                        <h3 className="font-serif text-base font-bold text-[#1C1D1B] mb-1">
                          {session.title}
                        </h3>

                        {session.instructor && (
                          <p className="text-xs text-[#5C6058] flex items-center gap-1.5">
                            <span>Instructor:</span>
                            <span className="text-[#1B3B2B] font-semibold">{session.instructor}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#E5E2D9]">
                      <div className="text-left md:text-right">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1B3B2B]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{session.time}</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#5C6058] block mt-0.5">
                          Duration: {session.duration}
                        </span>
                      </div>

                      <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#EBF0EC] hover:bg-[#D9E3DC] text-[#1B3B2B] border border-[#D9E3DC] text-xs font-semibold transition-all">
                        <span>Join</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
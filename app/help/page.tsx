'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, Search, ChevronDown, MessageSquare, Mail, BookOpen, ExternalLink } from 'lucide-react'

const faqs = [
  {
    question: 'How do I track my learning progress and XP?',
    answer: 'Your learning progress updates automatically as you finish course lessons and complete quizzes. XP is awarded for lesson completions, streak milestones, and top quiz scores.'
  },
  {
    question: 'How does the Supabase database sync work?',
    answer: 'NEXLEARN connects with a PostgreSQL database on Supabase via @supabase/ssr. If internet connectivity or database credentials are unavailable, the platform automatically switches to local mock data mode.'
  },
  {
    question: 'Can I download course material for offline viewing?',
    answer: 'Yes, premium enrolled students can download slide decks, cheat sheets, and source code repositories directly from the lesson overview page.'
  },
  {
    question: 'How do I request feedback from a course mentor?',
    answer: 'Navigate to the Messages section or submit your project submission through the course assignment tab. Your mentor will reply within 24 hours.'
  }
]

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(
    f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen p-6 md:p-10 pb-24 md:pb-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-6 md:p-10 border border-white/10"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-300">
            <HelpCircle className="w-6 h-6" />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Help & Support Center
            </h1>
            <p className="text-xs text-white/50 mt-0.5">
              Find instant answers to common questions or connect with mentor support.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs, topics, or features..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        {/* FAQ Accordion Section */}
        <div className="mb-10">
          <h2 className="text-base font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="rounded-2xl glass border border-white/5 overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-xs md:text-sm text-white hover:text-blue-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-blue-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-4 text-xs text-white/60 leading-relaxed border-t border-white/5 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between">
            <div>
              <MessageSquare className="w-5 h-5 text-blue-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">Live Mentor Chat</h4>
              <p className="text-[11px] text-white/40 mb-3">Connect directly with active TAs and mentors.</p>
            </div>
            <button className="text-xs font-semibold text-blue-300 hover:underline flex items-center gap-1">
              Start Chat <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between">
            <div>
              <Mail className="w-5 h-5 text-cyan-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">Email Support</h4>
              <p className="text-[11px] text-white/40 mb-3">Response time usually within 4 hours.</p>
            </div>
            <button className="text-xs font-semibold text-cyan-300 hover:underline flex items-center gap-1">
              Send Email <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between">
            <div>
              <BookOpen className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">Documentation</h4>
              <p className="text-[11px] text-white/40 mb-3">Browse comprehensive guides & APIs.</p>
            </div>
            <button className="text-xs font-semibold text-emerald-300 hover:underline flex items-center gap-1">
              View Docs <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
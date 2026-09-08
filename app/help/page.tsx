'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, Search, ChevronDown, MessageSquare, Mail, BookOpen, ExternalLink } from 'lucide-react'
import { Sidebar } from '@/src/components/Sidebar'
import { MobileNav } from '@/src/components/MobileNav'

const faqs = [
  {
    question: 'How do I track my academic progress and XP?',
    answer: 'Your learning progress updates automatically as you finish course lessons and complete quizzes. XP is awarded for lesson completions, streak milestones, and top quiz scores.'
  },
  {
    question: 'How does the Supabase database sync work?',
    answer: 'NEXLEARN connects with a PostgreSQL database on Supabase via @supabase/ssr. If internet connectivity or database credentials are unavailable, the platform automatically switches to local mock data mode.'
  },
  {
    question: 'Can I download course material for offline study?',
    answer: 'Yes, enrolled scholars can download slide decks, cheat sheets, and source code repositories directly from the lesson overview page.'
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
    <div className="flex h-screen overflow-hidden bg-[#F7F5F0]">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 md:p-10 border border-[#E5E2D9] shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-lg bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B]">
                  <HelpCircle className="w-6 h-6" />
                </div>

                <div>
                  <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1C1D1B] tracking-tight">
                    Academic Support Center
                  </h1>
                  <p className="text-xs text-[#5C6058] mt-0.5">
                    Find instant answers to common questions or connect with academic advisors.
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C6058]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search FAQs, topics, or features..."
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] text-xs text-[#1C1D1B] placeholder:text-[#5C6058] focus:outline-none focus:border-[#1B3B2B]"
                />
              </div>

              {/* FAQ Accordion Section */}
              <div className="mb-10">
                <h2 className="font-serif text-base font-bold text-[#1C1D1B] mb-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = openIndex === index
                    return (
                      <div key={index} className="rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] overflow-hidden transition-all">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-xs md:text-sm text-[#1C1D1B] hover:text-[#1B3B2B] transition-colors"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-[#1B3B2B] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-4 pb-4 text-xs text-[#5C6058] leading-relaxed border-t border-[#E5E2D9] pt-3"
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E2D9]">
                <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] hover:border-[#1B3B2B] transition-all flex flex-col justify-between">
                  <div>
                    <MessageSquare className="w-5 h-5 text-[#1B3B2B] mb-2" />
                    <h4 className="text-xs font-bold text-[#1C1D1B] mb-1">Live Advisor Chat</h4>
                    <p className="text-[11px] text-[#5C6058] mb-3">Connect directly with active academic advisors.</p>
                  </div>
                  <button className="text-xs font-semibold text-[#1B3B2B] hover:underline flex items-center gap-1">
                    Start Chat <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] hover:border-[#1B3B2B] transition-all flex flex-col justify-between">
                  <div>
                    <Mail className="w-5 h-5 text-[#C85A32] mb-2" />
                    <h4 className="text-xs font-bold text-[#1C1D1B] mb-1">Email Support</h4>
                    <p className="text-[11px] text-[#5C6058] mb-3">Response time usually within 4 hours.</p>
                  </div>
                  <button className="text-xs font-semibold text-[#C85A32] hover:underline flex items-center gap-1">
                    Send Email <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] hover:border-[#1B3B2B] transition-all flex flex-col justify-between">
                  <div>
                    <BookOpen className="w-5 h-5 text-[#1B3B2B] mb-2" />
                    <h4 className="text-xs font-bold text-[#1C1D1B] mb-1">Documentation</h4>
                    <p className="text-[11px] text-[#5C6058] mb-3">Browse academic guides & course syllabi.</p>
                  </div>
                  <button className="text-xs font-semibold text-[#1B3B2B] hover:underline flex items-center gap-1">
                    View Docs <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Send } from 'lucide-react'
import { Sidebar } from '@/src/components/Sidebar'
import { MobileNav } from '@/src/components/MobileNav'
import { MOCK_MESSAGES } from '@/src/lib/mock-data'
import type { MessageItem } from '@/types'

export default function MessagesPage() {
  const [messagesList, setMessagesList] = useState<MessageItem[]>(MOCK_MESSAGES)
  const [selectedMessage, setSelectedMessage] = useState<MessageItem>(MOCK_MESSAGES[0])
  const [replyText, setReplyText] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyText.trim()) return

    alert(`Reply sent to ${selectedMessage.sender.name}!`)
    setReplyText('')
  }

  const markAsRead = (id: string) => {
    setMessagesList(prev =>
      prev.map(m => (m.id === id ? { ...m, unread: false } : m))
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F5F0]">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1D1B] tracking-tight">
                Academic Messages & Notifications
              </h1>
              <p className="text-[#5C6058] text-sm mt-1">
                Stay connected with faculty members, course mentors, and research peers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Messages List Column */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative mb-4">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C6058]" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#E5E2D9] text-xs text-[#1C1D1B] placeholder:text-[#5C6058] focus:outline-none focus:border-[#1B3B2B]"
                  />
                </div>

                {messagesList.map((msg, i) => {
                  const isSelected = selectedMessage.id === msg.id
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => {
                        setSelectedMessage(msg)
                        markAsRead(msg.id)
                      }}
                      className={`bg-white rounded-xl p-4 cursor-pointer transition-all border ${
                        isSelected
                          ? 'border-[#1B3B2B] bg-[#EBF0EC]/40 shadow-sm'
                          : 'border-[#E5E2D9] hover:border-[#1B3B2B]/40'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative flex-shrink-0">
                          <img
                            src={msg.sender.avatar}
                            alt={msg.sender.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#E5E2D9]"
                          />
                          {msg.sender.online && (
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#1B3B2B] border-2 border-white" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-xs font-bold text-[#1C1D1B] truncate">
                              {msg.sender.name}
                            </h4>
                            <span className="text-[10px] font-mono text-[#5C6058] flex-shrink-0">
                              {msg.timestamp}
                            </span>
                          </div>

                          <p className="text-xs font-semibold text-[#1B3B2B] truncate mb-1">
                            {msg.subject}
                          </p>

                          <p className="text-[11px] text-[#5C6058] truncate">
                            {msg.preview}
                          </p>
                        </div>

                        {msg.unread && (
                          <span className="w-2 h-2 rounded-full bg-[#C85A32] flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Selected Message Detail View */}
              <div className="lg:col-span-7">
                {selectedMessage && (
                  <motion.div
                    key={selectedMessage.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl p-6 border border-[#E5E2D9] h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-4 mb-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={selectedMessage.sender.avatar}
                            alt={selectedMessage.sender.name}
                            className="w-12 h-12 rounded-full object-cover border border-[#E5E2D9]"
                          />
                          <div>
                            <h3 className="text-base font-bold text-[#1C1D1B]">
                              {selectedMessage.sender.name}
                            </h3>
                            <p className="text-xs text-[#1B3B2B] font-medium">
                              {selectedMessage.sender.role}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-semibold text-[#5C6058] bg-[#EBF0EC] px-3 py-1 rounded border border-[#D9E3DC]">
                          {selectedMessage.timestamp}
                        </span>
                      </div>

                      {/* Subject & Body */}
                      <div className="mb-6">
                        <h2 className="font-serif text-lg font-bold text-[#1C1D1B] mb-3">
                          {selectedMessage.subject}
                        </h2>
                        <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] text-xs md:text-sm text-[#1C1D1B] leading-relaxed">
                          {selectedMessage.preview}
                        </div>
                      </div>
                    </div>

                    {/* Reply Form */}
                    <form onSubmit={handleSendMessage} className="mt-6 pt-4 border-t border-[#E5E2D9]">
                      <div className="relative">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={`Reply to ${selectedMessage.sender.name}...`}
                          className="w-full pl-4 pr-12 py-3 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] text-xs text-[#1C1D1B] placeholder:text-[#5C6058] focus:outline-none focus:border-[#1B3B2B]"
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-[#1B3B2B] hover:bg-[#153023] text-white transition-colors"
                          aria-label="Send reply"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Search, Send, CheckCheck, Sparkles, UserCheck } from 'lucide-react'
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
    <main className="min-h-screen p-6 md:p-10 pb-24 md:pb-10 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Messages & Notifications
        </h1>
        <p className="text-white/50 text-sm mt-1">
          Stay connected with course instructors, mentors, and learning peers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Messages List Column */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
            />
          </div>

          {messagesList.map((msg, i) => {
            const isSelected = selectedMessage.id === msg.id
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => {
                  setSelectedMessage(msg)
                  markAsRead(msg.id)
                }}
                className={`glass rounded-2xl p-4 cursor-pointer transition-all border ${
                  isSelected
                    ? 'border-blue-500/50 bg-blue-500/10 shadow-lg shadow-blue-500/10'
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={msg.sender.avatar}
                      alt={msg.sender.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    {msg.sender.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#070b14]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs font-bold text-white truncate">
                        {msg.sender.name}
                      </h4>
                      <span className="text-[10px] text-white/40 flex-shrink-0">
                        {msg.timestamp}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-blue-300 truncate mb-1">
                      {msg.subject}
                    </p>

                    <p className="text-[11px] text-white/50 truncate">
                      {msg.preview}
                    </p>
                  </div>

                  {msg.unread && (
                    <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1" />
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
              className="glass rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedMessage.sender.avatar}
                      alt={selectedMessage.sender.name}
                      className="w-12 h-12 rounded-full object-cover border border-blue-500/30"
                    />
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {selectedMessage.sender.name}
                      </h3>
                      <p className="text-xs text-blue-300">
                        {selectedMessage.sender.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {selectedMessage.timestamp}
                  </span>
                </div>

                {/* Subject & Body */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-white mb-3">
                    {selectedMessage.subject}
                  </h2>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-white/80 leading-relaxed">
                    {selectedMessage.preview}
                  </div>
                </div>
              </div>

              {/* Reply Form */}
              <form onSubmit={handleSendMessage} className="mt-6 pt-4 border-t border-white/10">
                <div className="relative">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={`Reply to ${selectedMessage.sender.name}...`}
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  )
}
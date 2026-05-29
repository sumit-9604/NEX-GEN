'use client'

import { motion } from 'framer-motion'

const messages = [
  {
    name: 'Sarah',
    text: 'Your assignment review is ready.',
  },
  {
    name: 'Mentor',
    text: 'Great progress this week 🚀',
  },
]

export default function MessagesPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-white">
          Messages
        </h1>

        <p className="text-white/40 mt-2">
          Stay connected with mentors and peers.
        </p>
      </motion.div>

      <div className="space-y-4">

        {messages.map((msg, i) => (
          <motion.div
            key={msg.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="text-white font-semibold">
              {msg.name}
            </h3>

            <p className="text-white/50 mt-2">
              {msg.text}
            </p>
          </motion.div>
        ))}

      </div>

    </main>
  )
}
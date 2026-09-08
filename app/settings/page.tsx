'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, User, Bell, ShieldCheck, Palette, Save, Check } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security' | 'appearance'>('profile')
  const [name, setName] = useState('Alex Morgan')
  const [email, setEmail] = useState('alex.morgan@nexlearn.edu')
  const [bio, setBio] = useState('Computer Science Major & Full-Stack Developer')
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [pushNotifs, setPushNotifs] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ]

  return (
    <main className="min-h-screen p-6 md:p-10 pb-24 md:pb-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-6 md:p-10 border border-white/10"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3.5 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-300">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Account Settings
            </h1>
            <p className="text-xs text-white/50 mt-0.5">
              Customize your profile, notification preferences, and privacy.
            </p>
          </div>
        </div>

        {/* Setting Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 pb-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-lg'
                    : 'text-white/50 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {activeTab === 'profile' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="Avatar"
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/40"
                />
                <div>
                  <button type="button" className="px-3.5 py-1.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold hover:bg-blue-500/30 transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-[10px] text-white/40 mt-1">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none focus:border-blue-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none focus:border-blue-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-2">
                  Bio / Learning Goal
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none focus:border-blue-500/50 resize-none"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
                <div>
                  <h4 className="text-xs font-bold text-white">Email Digest Updates</h4>
                  <p className="text-[11px] text-white/40">Receive weekly summaries of course progress & streak awards.</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotifs}
                  onChange={(e) => setEmailNotifs(e.target.checked)}
                  className="w-4 h-4 accent-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl glass border border-white/5">
                <div>
                  <h4 className="text-xs font-bold text-white">Browser Push Notifications</h4>
                  <p className="text-[11px] text-white/40">Get notified 15 minutes before scheduled live classes.</p>
                </div>
                <input
                  type="checkbox"
                  checked={pushNotifs}
                  onChange={(e) => setPushNotifs(e.target.checked)}
                  className="w-4 h-4 accent-blue-500 cursor-pointer"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="p-4 rounded-xl glass border border-white/5 space-y-3">
                <h4 className="text-xs font-bold text-white">Password & Authentication</h4>
                <button type="button" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10">
                  Change Password
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'appearance' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="p-4 rounded-xl glass border border-white/5">
                <h4 className="text-xs font-bold text-white mb-2">Theme Mode</h4>
                <div className="flex gap-3">
                  <div className="px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold">
                    Sapphire Glass
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all"
            >
              {saved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
              <span>{saved ? 'Saved Successfully!' : 'Save Settings'}</span>
            </button>
          </div>
        </form>
      </motion.div>
    </main>
  )
}
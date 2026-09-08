'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, User, Bell, ShieldCheck, Palette, Save, Check } from 'lucide-react'
import { Sidebar } from '@/src/components/Sidebar'
import { MobileNav } from '@/src/components/MobileNav'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security' | 'appearance'>('profile')
  const [name, setName] = useState('Alex Morgan')
  const [email, setEmail] = useState('alex.morgan@nexlearn.edu')
  const [bio, setBio] = useState('Computer Science Major & Academic Researcher')
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
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 rounded-lg bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B]">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1C1D1B]">
                    Academic Account Settings
                  </h1>
                  <p className="text-xs text-[#5C6058] mt-0.5">
                    Customize your scholar profile, notification preferences, and privacy.
                  </p>
                </div>
              </div>

              {/* Setting Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto border-b border-[#E5E2D9] pb-4 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all border ${
                        isActive
                          ? 'bg-[#EBF0EC] text-[#1B3B2B] border-[#D9E3DC]'
                          : 'text-[#5C6058] border-transparent hover:text-[#1C1D1B] hover:bg-[#F7F5F0]'
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
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E2D9]">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                        alt="Avatar"
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#1B3B2B]/20"
                      />
                      <div>
                        <button type="button" className="px-3.5 py-1.5 rounded-lg bg-[#EBF0EC] text-[#1B3B2B] border border-[#D9E3DC] text-xs font-bold hover:bg-[#D9E3DC] transition-colors">
                          Change Avatar
                        </button>
                        <p className="text-[10px] font-mono text-[#5C6058] mt-1">JPG, PNG or GIF. Max 2MB.</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1D1B] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] text-xs text-[#1C1D1B] outline-none focus:border-[#1B3B2B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1D1B] mb-2">
                        Academic Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] text-xs text-[#1C1D1B] outline-none focus:border-[#1B3B2B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1D1B] mb-2">
                        Bio / Learning Goal
                      </label>
                      <textarea
                        rows={3}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] text-xs text-[#1C1D1B] outline-none focus:border-[#1B3B2B] resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'notifications' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9]">
                      <div>
                        <h4 className="text-xs font-bold text-[#1C1D1B]">Email Digest Updates</h4>
                        <p className="text-[11px] text-[#5C6058]">Receive weekly summaries of course progress & streak awards.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={emailNotifs}
                        onChange={(e) => setEmailNotifs(e.target.checked)}
                        className="w-4 h-4 accent-[#1B3B2B] cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9]">
                      <div>
                        <h4 className="text-xs font-bold text-[#1C1D1B]">Browser Push Notifications</h4>
                        <p className="text-[11px] text-[#5C6058]">Get notified 15 minutes before scheduled live classes.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={pushNotifs}
                        onChange={(e) => setPushNotifs(e.target.checked)}
                        className="w-4 h-4 accent-[#1B3B2B] cursor-pointer"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'security' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9] space-y-3">
                      <h4 className="text-xs font-bold text-[#1C1D1B]">Password & Authentication</h4>
                      <button type="button" className="px-4 py-2 rounded-lg bg-white border border-[#E5E2D9] text-xs font-bold text-[#1C1D1B] hover:bg-[#EBF0EC]">
                        Change Password
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'appearance' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2D9]">
                      <h4 className="text-xs font-bold text-[#1C1D1B] mb-2">Visual Palette</h4>
                      <div className="flex gap-3">
                        <div className="px-4 py-2 rounded-lg bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B] text-xs font-bold">
                          Editorial Warm Ivory & Oxford Forest Green
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="pt-4 border-t border-[#E5E2D9] flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#1B3B2B] hover:bg-[#153023] text-white font-bold text-xs transition-all shadow-sm"
                  >
                    {saved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
                    <span>{saved ? 'Saved Successfully!' : 'Save Settings'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
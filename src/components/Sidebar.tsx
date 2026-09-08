'use client'

import '@/app/globals.css'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, BarChart3, Settings,
  ChevronLeft, GraduationCap, Calendar, MessageSquare, HelpCircle,
} from 'lucide-react'
import { cn } from '@/src/utils/cn'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', href: '/' },
  { icon: BookOpen, label: 'Courses', id: 'courses', href: '/courses' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics', href: '/analytics' },
  { icon: Calendar, label: 'Schedule', id: 'schedule', href: '/schedule' },
  { icon: MessageSquare, label: 'Messages', id: 'messages', href: '/messages' },
  { icon: HelpCircle, label: 'Help', id: 'help', href: '/help' },
  { icon: Settings, label: 'Settings', id: 'settings', href: '/settings' },
]

const spring = { type: 'spring', stiffness: 280, damping: 26 } as const

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 76 : 240 }}
      transition={spring}
      className={cn(
        'relative h-screen flex-shrink-0 overflow-hidden',
        'hidden md:flex flex-col',
        'bg-slate-950/70 backdrop-blur-xl',
        'border-r border-white/[0.08]',
        'z-40',
      )}
    >
      {/* Brand Header */}
      <div className="flex items-center gap-3 h-16 px-4 border-b border-white/[0.08] flex-shrink-0">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>

        <AnimatePresence initial={false}>
          {!isCollapsed && (
            <motion.span
              key="logo-text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="flex-1 font-bold text-base tracking-tight text-gradient-blue whitespace-nowrap"
            >
              NexLearn
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={spring}
          onClick={() => setIsCollapsed(v => !v)}
          className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors ml-auto"
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

          return (
            <motion.button
              key={item.id}
              onClick={() => router.push(item.href)}
              whileHover={{ x: isCollapsed ? 0 : 3 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'relative flex items-center w-full h-11 rounded-xl transition-all duration-150',
                isCollapsed ? 'justify-center px-0' : 'px-3.5 gap-3.5',
                isActive
                  ? 'bg-blue-500/15 text-white font-semibold border border-blue-500/30 shadow-lg shadow-blue-500/10'
                  : 'text-white/50 hover:bg-white/[0.05] hover:text-white/90 border border-transparent',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active-pill"
                  transition={spring}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-gradient-to-b from-sky-400 to-blue-600 shadow-md shadow-blue-500/50"
                />
              )}

              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                <Icon
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={cn(
                    'w-5 h-5 transition-colors',
                    isActive ? 'text-blue-400' : 'text-white/50 group-hover:text-white',
                  )}
                />
              </span>

              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.span
                    key={`label-${item.id}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.13 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>

      {/* User Footer */}
      <div className="flex-shrink-0 p-3 border-t border-white/[0.08]">
        <div className={cn(
          'flex items-center w-full rounded-xl p-2 bg-white/[0.02] border border-white/[0.05]',
          isCollapsed ? 'justify-center' : 'gap-3',
        )}>
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
              alt="Alex Morgan"
              className="w-8 h-8 rounded-full object-cover border border-blue-500/40"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#070b14]" />
          </div>

          <AnimatePresence initial={false}>
            {!isCollapsed && (
              <motion.div
                key="user-meta"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.13 }}
                className="flex-1 min-w-0 text-left"
              >
                <p className="text-xs font-bold text-white leading-tight truncate">
                  Alex Morgan
                </p>
                <p className="text-[10px] text-sky-300 font-medium leading-tight truncate mt-0.5">
                  Elite Scholar
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  )
}
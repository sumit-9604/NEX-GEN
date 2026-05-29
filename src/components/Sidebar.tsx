'use client'
import '@/app/globals.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, BarChart3, Settings,
  ChevronLeft, GraduationCap, Calendar, MessageSquare, HelpCircle,
} from 'lucide-react'
import { cn } from '@/src/utils/cn'

const navItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    id: 'dashboard',
    href: '/',
  },
  {
    icon: BookOpen,
    label: 'Courses',
    id: 'courses',
    href: '/courses',
  },
  {
    icon: BarChart3,
    label: 'Analytics',
    id: 'analytics',
    href: '/analytics',
  },
  {
    icon: Calendar,
    label: 'Schedule',
    id: 'schedule',
    href: '/schedule',
  },
  {
    icon: MessageSquare,
    label: 'Messages',
    id: 'messages',
    href: '/messages',
  },
  {
    icon: HelpCircle,
    label: 'Help',
    id: 'help',
    href: '/help',
  },
  {
    icon: Settings,
    label: 'Settings',
    id: 'settings',
    href: '/settings',
  },
]

const spring = { type: 'spring', stiffness: 280, damping: 26 } as const

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem,  setActiveItem]  = useState('dashboard')
  const router = useRouter()
  return (
    
    <motion.aside
      initial={false}
      animate={{display:"flex" , gap : "5px"}}
      transition={spring}
      className={cn(
        'relative h-screen flex-shrink-0 overflow-hidden',
        'hidden md:flex flex-col',
        'bg-white/[0.03] backdrop-blur-xl',
        'border-r border-white/[0.06]',
        'z-40',
      )}
    >
      <div className="flex items-center gap-3 h-16 px-4 border-b border-white/[0.06] flex-shrink-0" 
      >

        <div className="flex-shrink-0 w-8 h-8 rounded-lg
                        bg-gradient-to-br from-violet-500 to-indigo-600
                        flex items-center justify-center
                        shadow-lg shadow-violet-500/20" 
                        >
          <GraduationCap className="w-4 h-4 text-white" />
        </div>


        <AnimatePresence initial={false}>
          {!isCollapsed && (
            <motion.span
              key="logo-text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="flex-1 font-semibold text-[15px] tracking-tight
                         text-gradient-violet whitespace-nowrap"
            >
              NexLearn
            </motion.span>
          )}
        </AnimatePresence>


        <motion.button
          animate={{ marginLeft: isCollapsed ? 'auto' : 0, rotate: isCollapsed ? 180 : 0 }}
          transition={spring}
          onClick={() => setIsCollapsed(v => !v)}
          
          className="flex-shrink-0 flex items-center justify-center
                     w-7 h-7 rounded-md
                     text-white/30 hover:text-white/80 hover:bg-white/10
                     transition-"
        >
          <ChevronLeft className="w-[15px] h-[15px]" />
        </motion.button>
      </div>

      <div className='sideicons flex-1 mb-4' 
      >
      <nav>
        {navItems.map((item) => {
          const Icon     = item.icon
          const isActive = activeItem === item.id

          return (
            <motion.button
              key={item.id}
              onClick={() => {
  setActiveItem(item.id)
  router.push(item.href)
}}
              whileHover={{ scale: 1.115 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className={cn(
                'relative flex items-center w-full h-10 rounded-lg',

                isCollapsed ? 'justify-center px-0' : 'px-3 gap-3',

                isActive
                  ? 'bg-violet-500/10 text-white'
                  : 'text-white/40 hover:bg-white/[0.04] hover:text-white/60',
                'transition-colors duration-150',
              )}
            >

              {isActive && (
                <motion.span
                  layoutId="sidebar-pill"
                  transition={spring}
                  className="absolute left-0 top-1/2 -translate-y-1/2
                             w-[3px] h-[22px] rounded-r-full
                             bg-gradient-to-b from-violet-400 to-indigo-500"
                />
              )}


              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                <Icon
                  strokeWidth={isActive ? 2 : 1.75}
                  className={cn(
                    'w-[18px] h-[18px] transition-colors duration-150',
                    isActive ? 'text-violet-400' : 'inherit',
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
                    className="text-[13px] font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </nav>
      </div>


      <div className="flex-shrink-0 p-2 border-t border-white/[0.06]">
        <button className={cn(
          'flex items-center w-full rounded-lg p-2',
          'hover:bg-white/[0.04] transition-colors',
          isCollapsed ? 'justify-center' : 'gap-3',
        )}>


          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 rounded-full
                            bg-gradient-to-br from-violet-500 to-indigo-600
                            flex items-center justify-center
                            text-[11px] font-bold text-white select-none">
              A
            </div>
            <span className="absolute -bottom-px -right-px
                             w-[10px] h-[10px] rounded-full
                             bg-emerald-400 border-2 border-[#050816]" />
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
                <p className="text-[13px] font-medium text-white/90 leading-tight truncate">
                  Alex Morgan
                </p>
                <p className="text-[11px] text-white/35 leading-tight truncate mt-0.5">
                  Student
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  )
}
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  GraduationCap,
  Calendar,
  MessageSquare,
  HelpCircle
} from 'lucide-react'
import { cn } from 'src/utils/cn'
import { springTransition } from 'src/utils/variants'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Calendar, label: 'Schedule', id: 'schedule' },
  { icon: MessageSquare, label: 'Messages', id: 'messages' },
  { icon: HelpCircle, label: 'Help', id: 'help' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <motion.aside
      initial={{ width: isCollapsed ? 80 : 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={springTransition}
      className={cn(
        "relative h-screen glass border-r border-glass-border",
        "hidden md:block"
      )}
    >
      <div className="flex flex-col h-full">
        
        <div className={cn(
          "flex items-center h-16 px-4",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6 text-purple-500" />
              <span className="font-semibold text-lg bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                EduFlow
              </span>
            </motion.div>
          )}
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "p-2 rounded-lg hover:bg-white/10 transition-colors",
              isCollapsed && "rotate-180"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        
        <nav className="flex-1 py-6">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "relative flex items-center w-full px-4 py-3 mb-2",
                  "transition-colors hover:bg-white/5",
                  isCollapsed ? "justify-center" : "gap-3"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r"
                    transition={springTransition}
                  />
                )}
                <Icon className={cn(
                  "w-5 h-5",
                  isActive ? "text-purple-500" : "text-gray-400"
                )} />
                {!isCollapsed && (
                  <span className={cn(
                    "text-sm",
                    isActive ? "text-white" : "text-gray-400"
                  )}>
                    {item.label}
                  </span>
                )}
              </motion.button>
            )
          })}
        </nav>

        
        <div className={cn(
          "p-4 border-t border-glass-border",
          isCollapsed && "flex justify-center"
        )}>
          <div className={cn(
            "flex items-center gap-3",
            isCollapsed && "justify-center"
          )}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            {!isCollapsed && (
              <div className="flex-1 text-left">
                <p className="text-sm font-medium">Alex Morgan</p>
                <p className="text-xs text-gray-400">Student</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
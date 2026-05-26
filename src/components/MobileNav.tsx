'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart3, Settings } from 'lucide-react'
import { cn } from 'src/utils/cn'

const navItems = [
  { icon: LayoutDashboard, label: 'Home', id: 'home' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart3, label: 'Stats', id: 'stats' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export function MobileNav() {
  const [activeId, setActiveId] = useState('home')
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden glass border-t border-glass-border z-50">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeId === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex flex-col items-center gap-1 py-2 px-4"
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <Icon className={cn(
                "w-5 h-5",
                isActive ? "text-purple-500" : "text-gray-400"
              )} />
              <span className={cn(
                "text-xs",
                isActive ? "text-white" : "text-gray-400"
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
'use client'

import { useState } from 'react'
import { LayoutDashboard, BookOpen, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/src/utils/cn'

const mobileItems = [
  { icon: LayoutDashboard, label: 'Home',     id: 'dashboard' },
  { icon: BookOpen,        label: 'Courses',  id: 'courses'   },
  { icon: BarChart3,       label: 'Stats',    id: 'analytics' },
  { icon: Settings,        label: 'Settings', id: 'settings'  },
]

export function MobileNav() {
  const [active, setActive] = useState('dashboard')

  return (
    <nav className="md:hidden flex items-center border-b border-white/[0.06]
                    bg-[#050816]/80 backdrop-blur-xl px-2 h-14 flex-shrink-0">
      {mobileItems.map(({ icon: Icon, label, id }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={cn(
              'flex-1 flex flex-col items-center justify-center gap-1 h-full',
              'text-[10px] font-medium transition-colors',
              isActive ? 'text-violet-400' : 'text-white/35 hover:text-white/60',
            )}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.75} />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
'use client'

import { useRouter, usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, BarChart3, Calendar, Settings } from 'lucide-react'
import { cn } from '@/src/utils/cn'

const mobileItems = [
  { icon: LayoutDashboard, label: 'Home', id: 'dashboard', href: '/' },
  { icon: BookOpen, label: 'Courses', id: 'courses', href: '/courses' },
  { icon: BarChart3, label: 'Stats', id: 'analytics', href: '/analytics' },
  { icon: Calendar, label: 'Schedule', id: 'schedule', href: '/schedule' },
  { icon: Settings, label: 'Settings', id: 'settings', href: '/settings' },
]

export function MobileNav() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-white/10 bg-[#070b14]/90 backdrop-blur-xl px-2 h-16 shadow-2xl">
      {mobileItems.map(({ icon: Icon, label, id, href }) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
        return (
          <button
            key={id}
            onClick={() => router.push(href)}
            className={cn(
              'flex-1 flex flex-col items-center justify-center gap-1 h-full py-1',
              'text-[11px] font-medium transition-all duration-200',
              isActive ? 'text-blue-400 font-bold scale-105' : 'text-white/40 hover:text-white/70',
            )}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2.2 : 1.75} />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
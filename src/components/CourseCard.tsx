'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { scaleOnHover, springTransition } from '@/utils/variants'
import type { Course } from '@/types'

const iconMap: Record<string, any> = {
  'code': Icons.Code2,
  'design': Icons.Palette,
  'data': Icons.BarChart3,
  'default': Icons.BookOpen
}

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon_name] || iconMap.default
  
  return (
    <motion.article
      {...scaleOnHover}
      className="relative group rounded-2xl glass overflow-hidden cursor-pointer"
    >
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/10 group-hover:to-blue-500/20 transition-all duration-500" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <span className="text-sm text-gray-400">{course.progress}%</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
        
        
        <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1, delay: 0.5, ...springTransition }}
          />
        </div>
        
        
        <div className="absolute inset-0 mesh-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.article>
  )
}
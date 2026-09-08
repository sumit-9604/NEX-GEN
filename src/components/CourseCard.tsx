'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useState } from 'react'
import type { Course } from '@/types'

const iconMap: Record<string, any> = {
  'code': Icons.Code2,
  'design': Icons.Palette,
  'data': Icons.BarChart3,
  'cloud': Icons.Cloud,
  'mobile': Icons.Smartphone,
  'default': Icons.BookOpen
}

const categoryImages: Record<string, string> = {
  'Development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
  'Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
  'Data Science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
  'DevOps': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
  'Mobile': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
  'AI & ML': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600',
  'default': 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600',
}

export function CourseCard({
  course,
  index,
  onClick,
}: {
  course: Course
  index: number
  onClick?: () => void
}) {
  const Icon = iconMap[course.icon_name] || iconMap.default
  const [isHovered, setIsHovered] = useState(false)

  const thumbnail = categoryImages[course.category] || categoryImages.default

  const levelColor = {
    Beginner: 'text-[#1B3B2B] bg-[#EBF0EC] border-[#D9E3DC]',
    Intermediate: 'text-[#C85A32] bg-[#FDF6F3] border-[#FBEBE5]',
    Advanced: 'text-[#153023] bg-[#E1EBE4] border-[#C2D1C6]'
  }[course.level || 'Intermediate']

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 140, damping: 22 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl cursor-pointer bg-white border border-[#E5E2D9] transition-all duration-200 flex flex-col justify-between overflow-hidden group"
      style={{
        borderColor: isHovered ? '#1B3B2B' : '#E5E2D9',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered ? '0 8px 24px rgba(27, 59, 43, 0.05)' : 'none',
      }}
    >
      {/* Editorial Thumbnail Header */}
      <div className="relative h-28 w-full overflow-hidden bg-[#EFECE3] border-b border-[#E5E2D9]">
        <img
          src={thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[25%] contrast-[95%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="text-[10px] font-sans font-bold px-2.5 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[#1C1D1B] border border-white/40">
            {course.category || 'General'}
          </span>
          <span className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded border ${levelColor}`}>
            {course.level || 'Intermediate'}
          </span>
        </div>

        {/* Floating Icon */}
        <div className="absolute -bottom-3 left-4 p-2 rounded-lg bg-white border border-[#E5E2D9] text-[#1B3B2B] shadow-sm z-20">
          <Icon className="w-4 h-4 text-[#1B3B2B]" />
        </div>

        {/* Progress Badge */}
        <div className="absolute bottom-2 right-3 text-[11px] font-sans font-bold text-white px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/20">
          {course.progress}% Completed
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 pt-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Description */}
          <h3 className="font-serif text-lg font-bold mb-1.5 text-[#1C1D1B] group-hover:text-[#1B3B2B] transition-colors line-clamp-1">
            {course.title}
          </h3>

          {course.description && (
            <p className="font-sans text-xs text-[#5C6058] mb-4 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          )}
        </div>

        {/* Progress Track & Instructor Bar */}
        <div>
          <div className="flex items-center justify-between font-sans text-xs text-[#5C6058] mb-1.5 font-medium">
            <span>{course.completed_lessons || 0} / {course.total_lessons || 20} Lessons</span>
            <span>{course.duration || '8h'}</span>
          </div>

          <div className="relative h-1.5 rounded-full overflow-hidden mb-4 bg-[#EFECE3]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-[#1B3B2B]"
            />
          </div>

          {/* Instructor & Action */}
          {course.instructor && (
            <div className="flex items-center justify-between pt-3 border-t border-[#E5E2D9]">
              <div className="flex items-center gap-2">
                {course.instructor.avatar ? (
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-5 h-5 rounded-full object-cover border border-[#E5E2D9]"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-[#EBF0EC] text-[#1B3B2B] flex items-center justify-center text-[9px] font-bold">
                    {course.instructor.name[0]}
                  </div>
                )}
                <span className="font-sans text-xs text-[#1C1D1B] font-medium">
                  {course.instructor.name}
                </span>
              </div>
              <span className="font-sans text-xs font-semibold text-[#1B3B2B] hover:underline">
                View Details →
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
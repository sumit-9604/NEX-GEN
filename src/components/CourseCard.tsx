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

  const levelColor = {
    Beginner: 'text-[#1B3B2B] bg-[#EBF0EC] border-[#D9E3DC]',
    Intermediate: 'text-[#C85A32] bg-[#FDF6F3] border-[#FBEBE5]',
    Advanced: 'text-[#153023] bg-[#E1EBE4] border-[#C2D1C6]'
  }[course.level || 'Intermediate']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 140, damping: 22 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl p-5 cursor-pointer bg-white border border-[#E5E2D9] transition-all duration-200 flex flex-col justify-between"
      style={{
        borderColor: isHovered ? '#1B3B2B' : '#E5E2D9',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered ? '0 8px 24px rgba(27, 59, 43, 0.05)' : 'none',
      }}
    >
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B]">
                <Icon className="w-5 h-5 text-[#1B3B2B]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#5C6058] block">
                  {course.category || 'General'}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border inline-block mt-0.5 ${levelColor}`}>
                  {course.level || 'Intermediate'}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#EBF0EC] text-[#1B3B2B] border border-[#D9E3DC]">
              {course.progress}%
            </div>
          </div>
          
          {/* Title & Description */}
          <h3 className="font-serif text-lg font-bold mb-2 text-[#1C1D1B] group-hover:text-[#1B3B2B] transition-colors line-clamp-1">
            {course.title}
          </h3>

          {course.description && (
            <p className="text-xs text-[#5C6058] mb-5 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          )}
        </div>

        {/* Progress Section & Instructor Info */}
        <div>
          <div className="flex items-center justify-between text-xs text-[#5C6058] mb-2 font-medium">
            <span>{course.completed_lessons || 0} / {course.total_lessons || 20} Lessons</span>
            <span>{course.duration || '8h'}</span>
          </div>

          <div className="relative h-2 rounded-full overflow-hidden mb-5 bg-[#EFECE3]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-[#1B3B2B]"
            />
          </div>

          {/* Instructor & Action */}
          {course.instructor && (
            <div className="flex items-center justify-between pt-3 border-t border-[#E5E2D9]">
              <div className="flex items-center gap-2.5">
                {course.instructor.avatar ? (
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-6 h-6 rounded-full object-cover border border-[#E5E2D9]"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#EBF0EC] text-[#1B3B2B] flex items-center justify-center text-[10px] font-bold">
                    {course.instructor.name[0]}
                  </div>
                )}
                <span className="text-xs text-[#1C1D1B] font-medium">
                  {course.instructor.name}
                </span>
              </div>
              <span className="text-xs font-semibold text-[#1B3B2B] hover:underline">
                View Details →
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
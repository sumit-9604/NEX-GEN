'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
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

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const levelColor = {
    Beginner: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    Intermediate: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    Advanced: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
  }[course.level || 'Intermediate']

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 120, damping: 20 }}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
      }}
      onMouseEnter={() => setIsHovered(true)}
      className="relative rounded-2xl p-6 cursor-pointer glass transition-all duration-300 flex flex-col justify-between"
      style={{
        border: `1px solid ${isHovered ? 'rgba(139, 92, 246, 0.45)' : 'rgba(255, 255, 255, 0.08)'}`,
        boxShadow: isHovered ? '0 12px 32px rgba(139, 92, 246, 0.25)' : 'none',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/20 text-violet-400"
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              <div>
                <span className="text-xs font-semibold text-white/50 block">
                  {course.category || 'General'}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-block mt-0.5 ${levelColor}`}>
                  {course.level || 'Intermediate'}
                </span>
              </div>
            </div>

            <div className="text-sm font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300">
              {course.progress}%
            </div>
          </div>
          
          {/* Title & Description */}
          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-violet-300 transition-colors line-clamp-1">
            {course.title}
          </h3>

          {course.description && (
            <p className="text-xs text-white/50 mb-5 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          )}
        </div>

        {/* Progress Section & Instructor Info */}
        <div>
          <div className="flex items-center justify-between text-xs text-white/60 mb-2 font-medium">
            <span>{course.completed_lessons || 0} / {course.total_lessons || 20} Lessons</span>
            <span>{course.duration || '8h'}</span>
          </div>

          <div className="relative h-2 rounded-full overflow-hidden mb-5 bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #8B5CF6, #6366F1)',
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
              }}
            />
          </div>

          {/* Instructor & Action */}
          {course.instructor && (
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                {course.instructor.avatar ? (
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="w-6 h-6 rounded-full object-cover border border-white/20"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-[10px] font-bold">
                    {course.instructor.name[0]}
                  </div>
                )}
                <span className="text-xs text-white/70 font-medium">
                  {course.instructor.name}
                </span>
              </div>
              <span className="text-xs font-semibold text-violet-400 hover:underline">
                View Details →
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
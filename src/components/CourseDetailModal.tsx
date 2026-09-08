'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Circle, Clock, BookOpen, Star, User, Play, Award } from 'lucide-react'
import type { Course } from '@/types'

export function CourseDetailModal({
  course,
  onClose,
}: {
  course: Course | null
  onClose: () => void
}) {
  if (!course) return null

  const [lessons, setLessons] = useState(course.lessons || [])
  const completedCount = lessons.filter((l) => l.completed).length
  const calculatedProgress = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : course.progress

  const toggleLesson = (id: string) => {
    setLessons((prev) =>
      prev.map((l) => (l.id === id ? { ...l, completed: !l.completed } : l))
    )
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1D1B]/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl p-6 md:p-8 border border-[#E5E2D9] shadow-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#EBF0EC] hover:bg-[#D9E3DC] text-[#1B3B2B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[#EBF0EC] text-[#1B3B2B] border border-[#D9E3DC]">
              {course.category}
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[#FDF6F3] text-[#C85A32] border border-[#FBEBE5]">
              {course.level}
            </span>
            {course.rating && (
              <span className="text-xs font-mono font-bold text-[#C85A32] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C85A32]" />
                {course.rating}
              </span>
            )}
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1C1D1B] mb-2">
            {course.title}
          </h2>

          <p className="text-[#5C6058] text-sm leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E2D9] mb-6">
            <div>
              <span className="text-[10px] font-mono text-[#5C6058] uppercase font-semibold block">Total Duration</span>
              <span className="text-sm font-bold text-[#1C1D1B] flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-[#1B3B2B]" />
                {course.duration}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#5C6058] uppercase font-semibold block">Lessons</span>
              <span className="text-sm font-bold text-[#1C1D1B] flex items-center gap-1.5 mt-0.5">
                <BookOpen className="w-4 h-4 text-[#1B3B2B]" />
                {lessons.length > 0 ? `${completedCount}/${lessons.length}` : `${course.completed_lessons}/${course.total_lessons}`}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#5C6058] uppercase font-semibold block">Progress</span>
              <span className="text-sm font-bold text-[#1B3B2B] mt-0.5 block">
                {calculatedProgress}%
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#5C6058] uppercase font-semibold block">Certificate</span>
              <span className="text-xs font-bold text-[#1B3B2B] flex items-center gap-1 mt-0.5">
                <Award className="w-4 h-4" /> Included
              </span>
            </div>
          </div>

          {/* Instructor Profile */}
          {course.instructor && (
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#EBF0EC] border border-[#D9E3DC] mb-6">
              {course.instructor.avatar ? (
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#1B3B2B]/20"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#1B3B2B] text-white flex items-center justify-center font-bold">
                  <User className="w-6 h-6" />
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold text-[#1C1D1B]">
                  Instructor: {course.instructor.name}
                </h4>
                <p className="text-xs text-[#1B3B2B] font-medium">
                  {course.instructor.role}
                </p>
              </div>
            </div>
          )}

          {/* Interactive Syllabus Checklist */}
          {lessons.length > 0 && (
            <div className="mb-6">
              <h3 className="font-serif text-base font-bold text-[#1C1D1B] mb-3">
                Course Syllabus & Interactive Lessons
              </h3>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    onClick={() => toggleLesson(lesson.id)}
                    className={`flex items-center justify-between p-3.5 rounded-lg border cursor-pointer transition-all ${
                      lesson.completed
                        ? 'bg-[#EBF0EC] border-[#D9E3DC] text-[#1B3B2B]'
                        : 'bg-white border-[#E5E2D9] text-[#1C1D1B] hover:bg-[#F7F5F0]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#1B3B2B] flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#5C6058] flex-shrink-0" />
                      )}
                      <span className="text-xs font-semibold">{lesson.title}</span>
                    </div>

                    <span className="text-[11px] font-mono text-[#5C6058]">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5E2D9]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#F7F5F0] hover:bg-[#EFECE3] text-[#1C1D1B] text-xs font-semibold transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                alert(`Starting lesson for ${course.title}!`)
                onClose()
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#1B3B2B] hover:bg-[#153023] text-white text-xs font-bold transition-all shadow-sm"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Continue Learning</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

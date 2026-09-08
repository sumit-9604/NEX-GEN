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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {course.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {course.level}
            </span>
            {course.rating && (
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                {course.rating}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            {course.title}
          </h2>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
            <div>
              <span className="text-[10px] text-white/40 uppercase font-semibold block">Total Duration</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-blue-400" />
                {course.duration}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase font-semibold block">Lessons</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                {lessons.length > 0 ? `${completedCount}/${lessons.length}` : `${course.completed_lessons}/${course.total_lessons}`}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase font-semibold block">Progress</span>
              <span className="text-sm font-bold text-sky-300 mt-0.5 block">
                {calculatedProgress}%
              </span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase font-semibold block">Certificate</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                <Award className="w-4 h-4" /> Included
              </span>
            </div>
          </div>

          {/* Instructor Profile */}
          {course.instructor && (
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
              {course.instructor.avatar ? (
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                  <User className="w-6 h-6" />
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold text-white">
                  Instructor: {course.instructor.name}
                </h4>
                <p className="text-xs text-sky-300">
                  {course.instructor.role}
                </p>
              </div>
            </div>
          )}

          {/* Interactive Syllabus Checklist */}
          {lessons.length > 0 && (
            <div className="mb-6">
              <h3 className="text-base font-bold text-white mb-3">
                Course Syllabus & Interactive Lessons
              </h3>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    onClick={() => toggleLesson(lesson.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                      lesson.completed
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                        : 'bg-white/5 border-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-white/40 flex-shrink-0" />
                      )}
                      <span className="text-xs font-semibold">{lesson.title}</span>
                    </div>

                    <span className="text-[11px] text-white/40 font-medium">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                alert(`Starting lesson for ${course.title}!`)
                onClose()
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all"
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

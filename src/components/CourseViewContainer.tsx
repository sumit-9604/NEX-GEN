'use client'

import { useState, useMemo } from 'react'
import { CoursePageHeader } from './CoursePageHeader'
import { CourseCard } from './CourseCard'
import { CourseDetailModal } from './CourseDetailModal'
import type { Course } from '@/types'

export function CourseViewContainer({ initialCourses }: { initialCourses: Course[] }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      const matchesCategory =
        activeCategory === 'All' ||
        course.category.toLowerCase() === activeCategory.toLowerCase()
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [initialCourses, activeCategory, searchQuery])

  return (
    <>
      <CoursePageHeader
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 glass rounded-2xl border border-white/10">
          <p className="text-gray-400 font-medium text-base">
            No courses found matching "{searchQuery || activeCategory}".
          </p>
          <button
            onClick={() => {
              setActiveCategory('All')
              setSearchQuery('')
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-semibold hover:bg-violet-500/30 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      )}

      {/* Interactive Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </>
  )
}

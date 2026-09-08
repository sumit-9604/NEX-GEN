'use client'

import { useState } from 'react'
import { CourseCard } from './CourseCard'
import { CourseDetailModal } from './CourseDetailModal'
import type { Course } from '@/types'

export function CourseGridInteractive({ courses }: { courses: Course[] }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            index={index}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </>
  )
}

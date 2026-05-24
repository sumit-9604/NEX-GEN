import { Suspense } from 'react'
import { createClient } from '@/supabase/server'
import { CourseCard } from './CourseCard'
import type { Course } from '@/types'

async function getCourses(): Promise<Course[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    throw new Error('Failed to fetch courses')
  }
  
  return data
}

function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  )
}

function CourseSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-2xl glass p-6 animate-pulse">
          <div className="w-12 h-12 rounded-xl bg-white/10 mb-4" />
          <div className="h-6 bg-white/10 rounded mb-4" />
          <div className="h-1.5 bg-white/10 rounded" />
        </div>
      ))}
    </div>
  )
}

export async function CourseCards() {
  const courses = await getCourses()
  
  return (
    <Suspense fallback={<CourseSkeleton />}>
      <CourseGrid courses={courses} />
    </Suspense>
  )
}
export const dynamic = 'force-dynamic'

import { CourseCards } from '@/src/components/CourseCards'
import { CoursePageHeader } from 'src/components/CoursePageHeader'

export default function CoursesPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <CoursePageHeader />
      <CourseCards />
    </main>
  )
}
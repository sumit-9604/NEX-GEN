export const dynamic = 'force-dynamic'

import { Sidebar } from '@/src/components/Sidebar'
import { MobileNav } from '@/src/components/MobileNav'
import { CourseViewContainer } from '@/src/components/CourseViewContainer'
import { getCoursesData } from '@/src/lib/data'

export default async function CoursesPage() {
  const initialCourses = await getCoursesData()

  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F5F0]">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <CourseViewContainer initialCourses={initialCourses} />
          </div>
        </main>
      </div>
    </div>
  )
}
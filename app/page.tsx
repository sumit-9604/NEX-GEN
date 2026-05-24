import { Suspense } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { MobileNav } from '@/components/MobileNav'
import { HeroTile } from '@/components/HeroTile'
import { CourseCards } from '@/components/CourseCards'
import { ActivityGraph } from '@/components/ActivityGraph'
import { StatsTiles } from '@/components/StatsTiles'

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MobileNav />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HeroTile name="Alex" streak={7} />
            <StatsTiles />
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6">Continue Learning</h2>
            <CourseCards />
          </div>
          
          <div className="mt-8">
            <ActivityGraph />
          </div>
        </div>
      </main>
    </div>
  )
}
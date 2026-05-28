import { Sidebar } from 'src/components/Sidebar'
import { HeroTile } from 'src/components/HeroTile'
import { CourseCards } from 'src/components/CourseCards'
import { ActivityGraph } from 'src/components/ActivityGraph'
import { StatsTiles } from 'src/components/StatsTiles'
import Test from "@/app/test/test"
export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#03011e]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-0 md:ml-[72px] lg:ml-0">
        <div className="max-w-7xl mx-auto p-6">
          {/* Hero and Stats - First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <HeroTile name="Alex" streak={7} />
            </div>
            <div className="lg:col-span-1">
              <StatsTiles />
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Continue Learning</h2>
            <CourseCards />
          </div>
          
          <div>
            <ActivityGraph />
          </div>
        </div>
      </main>
    </div>
  )
}
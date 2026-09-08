export const dynamic = 'force-dynamic'
import { Sidebar }        from '@/src/components/Sidebar'
import { MobileNav }      from '@/src/components/MobileNav'
import { HeroTile }       from '@/src/components/HeroTile'
import { CourseCards }    from '@/src/components/CourseCards'
import { ActivityGraph }  from '@/src/components/ActivityGraph'
import { StatsTiles }     from '@/src/components/StatsTiles'
import { StaggerWrapper } from '@/src/components/StaggerWrapper'

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F5F0]">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-6 pb-20 md:pb-6 space-y-4">
            <StaggerWrapper>
              {/* Top Hero & Stats Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-4">
                <div className="col-span-1 lg:col-span-2">
                  <HeroTile name="Alex" streak={7} />
                </div>
                <div className="col-span-1">
                  <StatsTiles />
                </div>
              </div>

              {/* Continue Learning Section */}
              <section className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-xl font-bold text-[#1C1D1B]">
                    Continue Learning
                  </h2>
                  <span className="font-sans text-xs font-semibold text-[#1B3B2B]">
                    12 Active Courses
                  </span>
                </div>
                <CourseCards />
              </section>

              {/* Activity Analysis */}
              <ActivityGraph />
            </StaggerWrapper>
          </div>
        </main>
      </div>
    </div>
  )
}
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
    <div className="flex h-screen overflow-hidden">


      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNav />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto
                          p-4 md:p-6
                          pb-24 md:pb-6">   {/* pb-24 = space for mobile bottom nav */}

            <StaggerWrapper>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="col-span-1 lg:col-span-2">
                  <HeroTile name="Alex" streak={7} />
                </div>
                <div className="col-span-1">
                  <StatsTiles />
                </div>
              </div>

              <section>
                <h2 className="text-lg font-semibold text-white mb-4">
                  Continue Learning
                </h2>
                <CourseCards />
              </section>

              <ActivityGraph />

            </StaggerWrapper>
          </div>
        </main>
      </div>

    </div>
  )
}
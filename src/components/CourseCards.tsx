import { Suspense } from "react";
import { getCoursesData } from "@/src/lib/data";
import { CourseGridInteractive } from "./CourseGridInteractive";
import type { Course } from "@/types";

async function CourseGrid({ categoryFilter }: { categoryFilter?: string }) {
  const courses: Course[] = await getCoursesData(categoryFilter);

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-[#E5E2D9]">
        <p className="text-[#5C6058]">
          No courses found.
        </p>
      </div>
    );
  }

  return <CourseGridInteractive courses={courses} />;
}

function CourseSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-xl bg-white border border-[#E5E2D9] p-5 animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#EFECE3]" />
            <div className="w-12 h-6 rounded bg-[#EFECE3]" />
          </div>
          <div className="h-6 bg-[#EFECE3] rounded w-3/4 mb-3" />
          <div className="h-4 bg-[#EFECE3] rounded w-full mb-6" />
          <div className="h-2 bg-[#EFECE3] rounded w-full mb-4" />
          <div className="h-4 bg-[#EFECE3] rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}

export async function CourseCards({ categoryFilter }: { categoryFilter?: string }) {
  return (
    <Suspense fallback={<CourseSkeleton />}>
      <CourseGrid categoryFilter={categoryFilter} />
    </Suspense>
  );
}

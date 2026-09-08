import { Suspense } from "react";
import { getCoursesData } from "@/src/lib/data";
import { CourseGridInteractive } from "./CourseGridInteractive";
import type { Course } from "@/types";

async function CourseGrid({ categoryFilter }: { categoryFilter?: string }) {
  const courses: Course[] = await getCoursesData(categoryFilter);

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12 glass rounded-2xl border border-white/10">
        <p className="text-gray-400">
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
        <div key={i} className="rounded-2xl glass p-6 animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10" />
            <div className="w-12 h-6 rounded-full bg-white/10" />
          </div>
          <div className="h-6 bg-white/10 rounded w-3/4 mb-3" />
          <div className="h-4 bg-white/10 rounded w-full mb-6" />
          <div className="h-2 bg-white/10 rounded w-full mb-4" />
          <div className="h-4 bg-white/10 rounded w-1/2" />
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

import { Suspense } from "react";
import { createClient } from "src/supabase/server";
import { CourseCard } from "./CourseCard";
import type { Course } from "@/types";

async function getCourses(): Promise<Course[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Failed to fetch courses:", err);
    return [];
  }
}

async function CourseGrid() {
  const courses = await getCourses();

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12 glass rounded-2xl">
        <p className="text-gray-400">
          No courses yet. Add some courses to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </div>
  );
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
  );
}

export async function CourseCards() {
  return (
    <Suspense fallback={<CourseSkeleton />}>
      <CourseGrid />
    </Suspense>
  );
}

import { createClient } from "@/src/supabase/server"
import type { Course, ActivityData, Stats, ScheduleItem, MessageItem, User } from "@/types"
import {
  MOCK_COURSES,
  MOCK_STATS,
  MOCK_ACTIVITY,
  MOCK_SCHEDULE,
  MOCK_MESSAGES,
  MOCK_USER,
} from "./mock-data"

export {
  MOCK_COURSES,
  MOCK_STATS,
  MOCK_ACTIVITY,
  MOCK_SCHEDULE,
  MOCK_MESSAGES,
  MOCK_USER,
}

export async function getCoursesData(categoryFilter?: string): Promise<Course[]> {
  try {
    const supabase = await createClient()
    let query = supabase.from('courses').select('*').order('created_at', { ascending: false })
    
    if (categoryFilter && categoryFilter !== 'All') {
      query = query.eq('category', categoryFilter)
    }

    const { data, error } = await query

    if (error || !data || data.length === 0) {
      if (error) console.warn("Supabase fetch warning, using resilient fallback mock data:", error.message)
      if (categoryFilter && categoryFilter !== 'All') {
        return MOCK_COURSES.filter(c => c.category.toLowerCase() === categoryFilter.toLowerCase())
      }
      return MOCK_COURSES
    }

    return data.map((item, idx) => {
      const fallback = MOCK_COURSES[idx % MOCK_COURSES.length]
      return {
        id: item.id || `course-${idx}`,
        title: item.title || fallback.title,
        description: item.description || fallback.description,
        progress: typeof item.progress === 'number' ? item.progress : fallback.progress,
        icon_name: item.icon_name || fallback.icon_name,
        category: item.category || fallback.category,
        instructor: item.instructor || fallback.instructor,
        total_lessons: item.total_lessons || fallback.total_lessons,
        completed_lessons: item.completed_lessons || fallback.completed_lessons,
        duration: item.duration || fallback.duration,
        level: item.level || fallback.level,
        rating: item.rating || fallback.rating,
        created_at: item.created_at || fallback.created_at
      }
    })
  } catch (err) {
    console.warn("Data layer fallback engaged:", err)
    if (categoryFilter && categoryFilter !== 'All') {
      return MOCK_COURSES.filter(c => c.category.toLowerCase() === categoryFilter.toLowerCase())
    }
    return MOCK_COURSES
  }
}

export async function getStatsData(): Promise<Stats> {
  return MOCK_STATS
}

export async function getActivityData(): Promise<ActivityData[]> {
  return MOCK_ACTIVITY
}

export async function getScheduleData(): Promise<ScheduleItem[]> {
  return MOCK_SCHEDULE
}

export async function getMessagesData(): Promise<MessageItem[]> {
  return MOCK_MESSAGES
}

export async function getUserProfileData(): Promise<User> {
  return MOCK_USER
}


export interface Course {
  id: string
  title: string
  description?: string
  progress: number
  icon_name: string
  created_at: string
  updated_at?: string
  instructor?: string
  duration?: number
  lessons?: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  course_id: string
  completed: boolean
  duration: number
  order: number
}


export interface ActivityData {
  date: string
  count: number
  level?: 0 | 1 | 2 | 3 | 4
}


export interface Stats {
  totalHours: number
  completedCourses: number
  streak: number
  averageScore: number
  totalPoints?: number
  rank?: number
  certificates?: number
}


export interface User {
  id: string
  name: string
  email: string
  avatar_url?: string
  created_at?: string
  role?: 'student' | 'instructor' | 'admin'
}


export type { Course as default }
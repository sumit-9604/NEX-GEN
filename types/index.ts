export interface Course {
  id: string
  title: string
  description?: string
  progress: number
  icon_name: string
  category: string
  instructor?: {
    name: string
    avatar?: string
    role?: string
  }
  total_lessons?: number
  completed_lessons?: number
  duration?: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
  rating?: number
  created_at: string
  updated_at?: string
  lessons?: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  course_id: string
  completed: boolean
  duration: string | number
  order: number
}

export interface ActivityData {
  day: string
  date?: string
  value: number // in minutes
  count?: number
  sessionsCount?: number
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
  weeklyTrend?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar_url?: string
  role?: 'student' | 'instructor' | 'admin'
  xp?: number
  rankTitle?: string
  streak?: number
  created_at?: string
}

export interface ScheduleItem {
  id: string
  title: string
  time: string
  duration: string
  category: string
  type: 'live' | 'quiz' | 'workshop' | 'self-study'
  status: 'upcoming' | 'in-progress' | 'completed'
  instructor?: string
  linkUrl?: string
}

export interface MessageItem {
  id: string
  sender: {
    name: string
    avatar: string
    role: string
    online: boolean
  }
  subject: string
  preview: string
  timestamp: string
  unread: boolean
  tag?: 'Assignment' | 'Feedback' | 'System' | 'Direct'
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp?: string
}

// Course Types
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

// Activity Types
export interface ActivityData {
  date: string
  count: number
  level?: 0 | 1 | 2 | 3 | 4
}

export interface ActivityWeek {
  week: number
  data: ActivityData[]
}

// Statistics Types
export interface Stats {
  totalHours: number
  completedCourses: number
  streak: number
  averageScore: number
  totalPoints?: number
  rank?: number
  certificates?: number
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  avatar_url?: string
  created_at?: string
  role?: 'student' | 'instructor' | 'admin'
  settings?: UserSettings
}

export interface UserSettings {
  theme: 'dark' | 'light'
  notifications: boolean
  emailUpdates: boolean
  language: string
}

// Dashboard Types
export interface DashboardData {
  user: User
  courses: Course[]
  stats: Stats
  activity: ActivityData[]
  recommendations?: Course[]
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Chart Types
export interface ChartDataPoint {
  label: string
  value: number
  color?: string
}

// Navigation Types
export interface NavItem {
  icon: any
  label: string
  id: string
  href?: string
  badge?: number
  disabled?: boolean
}

// Animation Types
export interface AnimationProps {
  initial?: 'initial' | false
  animate?: 'animate' | false
  exit?: 'exit' | false
  transition?: any
  variants?: any
}

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface CardProps extends BaseComponentProps {
  onClick?: () => void
  loading?: boolean
}

export interface ButtonProps extends BaseComponentProps {
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

// Supabase Types
export interface SupabaseResponse<T = any> {
  data: T | null
  error: Error | null
  status: number
  statusText: string
}
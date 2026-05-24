declare module '@/types' {
  export interface Course {
    id: string
    title: string
    progress: number
    icon_name: string
    created_at: string
  }
  
  export interface ActivityData {
    date: string
    count: number
  }
  
  export interface Stats {
    totalHours: number
    completedCourses: number
    streak: number
    averageScore: number
  }
  
  export interface User {
    id: string
    name: string
    email: string
    avatar_url?: string
  }
}
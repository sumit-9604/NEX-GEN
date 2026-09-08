import type { Course, ActivityData, Stats, ScheduleItem, MessageItem, User } from "@/types"

export const MOCK_COURSES: Course[] = [
  {
    id: "course-1",
    title: "Advanced React & Next.js Masterclass",
    description: "Master React 19, Server Components, Suspense, and state management patterns.",
    progress: 78,
    icon_name: "code",
    category: "Development",
    instructor: {
      name: "Dr. Sarah Lin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
      role: "Principal Architect"
    },
    total_lessons: 32,
    completed_lessons: 25,
    duration: "14h 20m",
    level: "Advanced",
    rating: 4.9,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l1", title: "1. Next.js 15 App Router Architecture", course_id: "course-1", completed: true, duration: "25m", order: 1 },
      { id: "l2", title: "2. React Server Components & Streaming", course_id: "course-1", completed: true, duration: "35m", order: 2 },
      { id: "l3", title: "3. Server Actions & Mutations", course_id: "course-1", completed: true, duration: "40m", order: 3 },
      { id: "l4", title: "4. Custom Suspense & Skeleton Boundaries", course_id: "course-1", completed: false, duration: "30m", order: 4 },
      { id: "l5", title: "5. Production Optimization & Deployment", course_id: "course-1", completed: false, duration: "45m", order: 5 },
    ]
  },
  {
    id: "course-2",
    title: "UI/UX Design Systems & Glassmorphism",
    description: "Design stunning modern web components, color theory, and dark mode aesthetics.",
    progress: 45,
    icon_name: "design",
    category: "Design",
    instructor: {
      name: "Marcello Vance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      role: "Lead UI Designer"
    },
    total_lessons: 20,
    completed_lessons: 9,
    duration: "8h 45m",
    level: "Intermediate",
    rating: 4.8,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l2-1", title: "1. Modern Color Tokens & Dark Themes", course_id: "course-2", completed: true, duration: "20m", order: 1 },
      { id: "l2-2", title: "2. Glassmorphism CSS Backdrop Filters", course_id: "course-2", completed: true, duration: "30m", order: 2 },
      { id: "l2-3", title: "3. Micro-interactions with Framer Motion", course_id: "course-2", completed: false, duration: "35m", order: 3 },
      { id: "l2-4", title: "4. Responsive Layout Grids & Bento Boxes", course_id: "course-2", completed: false, duration: "25m", order: 4 },
    ]
  },
  {
    id: "course-3",
    title: "Data Engineering & Analytics Architecture",
    description: "Build robust data pipelines, PostgreSQL indexing, and real-time visualization dashboards.",
    progress: 92,
    icon_name: "data",
    category: "Data Science",
    instructor: {
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      role: "Senior Data Engineer"
    },
    total_lessons: 28,
    completed_lessons: 26,
    duration: "12h 10m",
    level: "Advanced",
    rating: 4.95,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l3-1", title: "1. Database Schemas & Normalization", course_id: "course-3", completed: true, duration: "30m", order: 1 },
      { id: "l3-2", title: "2. PostgreSQL B-Tree & GIN Indexing", course_id: "course-3", completed: true, duration: "45m", order: 2 },
      { id: "l3-3", title: "3. Real-Time Streaming Data Pipelines", course_id: "course-3", completed: true, duration: "50m", order: 3 },
      { id: "l3-4", title: "4. Analytics Dashboard Aggregations", course_id: "course-3", completed: false, duration: "40m", order: 4 },
    ]
  },
  {
    id: "course-4",
    title: "Cloud Native DevOps & Kubernetes",
    description: "Deploy scalable microservices with Docker, Kubernetes, CI/CD, and Supabase integration.",
    progress: 30,
    icon_name: "cloud",
    category: "DevOps",
    instructor: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
      role: "Cloud Architect"
    },
    total_lessons: 24,
    completed_lessons: 7,
    duration: "10h 30m",
    level: "Intermediate",
    rating: 4.7,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l4-1", title: "1. Docker Containerization Essentials", course_id: "course-4", completed: true, duration: "25m", order: 1 },
      { id: "l4-2", title: "2. Kubernetes Pods, Services & Ingress", course_id: "course-4", completed: false, duration: "40m", order: 2 },
      { id: "l4-3", title: "3. Automated CI/CD Pipelines with GitHub Actions", course_id: "course-4", completed: false, duration: "35m", order: 3 },
    ]
  },
  {
    id: "course-5",
    title: "React Native & Cross-Platform Mobile",
    description: "Create sleek native mobile apps with shared logic and animated interactions.",
    progress: 60,
    icon_name: "mobile",
    category: "Mobile",
    instructor: {
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120",
      role: "Mobile Specialist"
    },
    total_lessons: 18,
    completed_lessons: 11,
    duration: "7h 15m",
    level: "Beginner",
    rating: 4.85,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l5-1", title: "1. React Native CLI vs Expo Setup", course_id: "course-5", completed: true, duration: "20m", order: 1 },
      { id: "l5-2", title: "2. Reanimated 3 Physics Animations", course_id: "course-5", completed: true, duration: "35m", order: 2 },
      { id: "l5-3", title: "3. Offline Storage & Push Notifications", course_id: "course-5", completed: false, duration: "40m", order: 3 },
    ]
  },
  {
    id: "course-6",
    title: "Full-Stack AI Application Development",
    description: "Integrate LLM APIs, vector stores, and automated agents into production web applications.",
    progress: 15,
    icon_name: "code",
    category: "AI & ML",
    instructor: {
      name: "Prof. Alan Turing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
      role: "AI Scientist"
    },
    total_lessons: 40,
    completed_lessons: 6,
    duration: "18h 00m",
    level: "Advanced",
    rating: 5.0,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l6-1", title: "1. LLM API Integration & Prompt Engineering", course_id: "course-6", completed: true, duration: "30m", order: 1 },
      { id: "l6-2", title: "2. Vector Embeddings & RAG Search", course_id: "course-6", completed: false, duration: "45m", order: 2 },
      { id: "l6-3", title: "3. Building Autonomous AI Agents", course_id: "course-6", completed: false, duration: "50m", order: 3 },
    ]
  },
  {
    id: "course-7",
    title: "Ethical Hacking & Cybersecurity Defense",
    description: "Learn penetration testing, OWASP Top 10 vulnerabilities, and security auditing.",
    progress: 50,
    icon_name: "code",
    category: "Development",
    instructor: {
      name: "Alexey Volkov",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      role: "Cybersecurity Lead"
    },
    total_lessons: 26,
    completed_lessons: 13,
    duration: "11h 20m",
    level: "Intermediate",
    rating: 4.88,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l7-1", title: "1. Network Reconnaissance & Port Scanning", course_id: "course-7", completed: true, duration: "30m", order: 1 },
      { id: "l7-2", title: "2. Web Application Vulnerabilities & XSS", course_id: "course-7", completed: true, duration: "40m", order: 2 },
      { id: "l7-3", title: "3. SQL Injection & Authentication Bypasses", course_id: "course-7", completed: false, duration: "45m", order: 3 },
    ]
  },
  {
    id: "course-8",
    title: "Machine Learning with Python & PyTorch",
    description: "Build neural networks, image classifiers, and natural language models from scratch.",
    progress: 85,
    icon_name: "data",
    category: "AI & ML",
    instructor: {
      name: "Dr. Maya Patel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      role: "ML Researcher"
    },
    total_lessons: 35,
    completed_lessons: 30,
    duration: "16h 40m",
    level: "Advanced",
    rating: 4.96,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l8-1", title: "1. Tensors & Automatic Differentiation", course_id: "course-8", completed: true, duration: "35m", order: 1 },
      { id: "l8-2", title: "2. Convolutional Neural Networks (CNNs)", course_id: "course-8", completed: true, duration: "50m", order: 2 },
      { id: "l8-3", title: "3. Transformer Attention Mechanisms", course_id: "course-8", completed: true, duration: "55m", order: 3 },
    ]
  },
  {
    id: "course-9",
    title: "Distributed Systems & System Design",
    description: "Design high-availability architectures, load balancing, caching, and sharding strategies.",
    progress: 40,
    icon_name: "cloud",
    category: "DevOps",
    instructor: {
      name: "Marcus Thorne",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
      role: "VP of Engineering"
    },
    total_lessons: 22,
    completed_lessons: 9,
    duration: "9h 50m",
    level: "Advanced",
    rating: 4.92,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l9-1", title: "1. CAP Theorem & Consistency Models", course_id: "course-9", completed: true, duration: "30m", order: 1 },
      { id: "l9-2", title: "2. Redis Caching & Cache Invalidation", course_id: "course-9", completed: false, duration: "40m", order: 2 },
      { id: "l9-3", title: "3. Database Partitioning & Sharding", course_id: "course-9", completed: false, duration: "45m", order: 3 },
    ]
  },
  {
    id: "course-10",
    title: "Web3 & Smart Contract Engineering",
    description: "Develop decentralized applications, Solidity smart contracts, and Web3 frontend integrations.",
    progress: 25,
    icon_name: "code",
    category: "Development",
    instructor: {
      name: "Satoshi Miller",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
      role: "Blockchain Developer"
    },
    total_lessons: 25,
    completed_lessons: 6,
    duration: "10h 15m",
    level: "Intermediate",
    rating: 4.75,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l10-1", title: "1. EVM Architecture & Solidity Basics", course_id: "course-10", completed: true, duration: "25m", order: 1 },
      { id: "l10-2", title: "2. ERC-20 & ERC-721 Token Standards", course_id: "course-10", completed: false, duration: "35m", order: 2 },
    ]
  },
  {
    id: "course-11",
    title: "PostgreSQL Performance & Query Tuning",
    description: "Master EXPLAIN ANALYZE, query execution plans, connection pooling, and table partitioning.",
    progress: 70,
    icon_name: "data",
    category: "Data Science",
    instructor: {
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      role: "Senior Data Engineer"
    },
    total_lessons: 16,
    completed_lessons: 11,
    duration: "6h 40m",
    level: "Advanced",
    rating: 4.94,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l11-1", title: "1. Reading EXPLAIN ANALYZE Query Plans", course_id: "course-11", completed: true, duration: "30m", order: 1 },
      { id: "l11-2", title: "2. PgBouncer Connection Pooling", course_id: "course-11", completed: true, duration: "25m", order: 2 },
    ]
  },
  {
    id: "course-12",
    title: "Product Management for Tech Leaders",
    description: "Formulate product strategy, run user discovery sprints, and define technical roadmaps.",
    progress: 100,
    icon_name: "design",
    category: "Design",
    instructor: {
      name: "Marcello Vance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      role: "Lead UI Designer"
    },
    total_lessons: 15,
    completed_lessons: 15,
    duration: "5h 30m",
    level: "Beginner",
    rating: 4.9,
    created_at: new Date().toISOString(),
    lessons: [
      { id: "l12-1", title: "1. User Story Mapping & Prioritization", course_id: "course-12", completed: true, duration: "20m", order: 1 },
      { id: "l12-2", title: "2. Measuring Key Product Metrics (North Star)", course_id: "course-12", completed: true, duration: "30m", order: 2 },
    ]
  }
]

export const MOCK_STATS: Stats = {
  totalHours: 42,
  completedCourses: 8,
  streak: 7,
  averageScore: 94,
  totalPoints: 24850,
  rank: 147,
  certificates: 6,
  weeklyTrend: "+12%"
}

export const MOCK_ACTIVITY: ActivityData[] = [
  { day: 'Mon', value: 45, sessionsCount: 3, level: 2 },
  { day: 'Tue', value: 62, sessionsCount: 4, level: 3 },
  { day: 'Wed', value: 38, sessionsCount: 2, level: 2 },
  { day: 'Thu', value: 75, sessionsCount: 5, level: 4 },
  { day: 'Fri', value: 83, sessionsCount: 6, level: 4 },
  { day: 'Sat', value: 42, sessionsCount: 2, level: 2 },
  { day: 'Sun', value: 58, sessionsCount: 4, level: 3 },
]

export const MOCK_SCHEDULE: ScheduleItem[] = [
  {
    id: 'sched-1',
    title: 'React 19 Server Components Deep Dive',
    time: '10:00 AM - 11:30 AM',
    duration: '90 min',
    category: 'Development',
    type: 'live',
    status: 'upcoming',
    instructor: 'Dr. Sarah Lin',
    linkUrl: '#'
  },
  {
    id: 'sched-2',
    title: 'Data Structures & Algorithms Workshop',
    time: '01:00 PM - 02:30 PM',
    duration: '90 min',
    category: 'Computer Science',
    type: 'workshop',
    status: 'upcoming',
    instructor: 'Prof. Alan Turing',
    linkUrl: '#'
  },
  {
    id: 'sched-3',
    title: 'UI Design System Review & Feedback',
    time: '04:00 PM - 05:00 PM',
    duration: '60 min',
    category: 'Design',
    type: 'live',
    status: 'upcoming',
    instructor: 'Marcello Vance',
    linkUrl: '#'
  },
  {
    id: 'sched-4',
    title: 'PostgreSQL Indexing & Optimization Quiz',
    time: '07:00 PM - 07:45 PM',
    duration: '45 min',
    category: 'Database',
    type: 'quiz',
    status: 'upcoming',
    instructor: 'Elena Rostova',
    linkUrl: '#'
  }
]

export const MOCK_MESSAGES: MessageItem[] = [
  {
    id: 'msg-1',
    sender: {
      name: 'Sarah Lin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
      role: 'Instructor',
      online: true
    },
    subject: 'Assignment Feedback',
    preview: 'Your Next.js App Router submission scored 98%. Excellent implementation of Server Actions!',
    timestamp: '10 mins ago',
    unread: true,
    tag: 'Feedback'
  },
  {
    id: 'msg-2',
    sender: {
      name: 'Marcello Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      role: 'Mentor',
      online: true
    },
    subject: 'Weekly Design Review',
    preview: 'Great progress this week 🚀 The color token hierarchy and glass contrast are looking sharp.',
    timestamp: '2 hours ago',
    unread: true,
    tag: 'Assignment'
  },
  {
    id: 'msg-3',
    sender: {
      name: 'NexLearn System',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120',
      role: 'System Bot',
      online: false
    },
    subject: 'Achievement Unlocked: 7-Day Streak!',
    preview: 'You gained +500 Bonus XP for maintaining a continuous daily learning streak.',
    timestamp: '1 day ago',
    unread: false,
    tag: 'System'
  }
]

export const MOCK_USER: User = {
  id: 'user-alex-1',
  name: 'Alex Morgan',
  email: 'alex.morgan@nexlearn.edu',
  avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
  role: 'student',
  xp: 24850,
  rankTitle: 'Elite Scholar',
  streak: 7
}

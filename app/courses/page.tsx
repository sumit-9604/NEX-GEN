

import { motion } from 'framer-motion'
import { CourseCards } from 'src/components/CourseCards'

const spring = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-white tracking-tight">
          Courses
        </h1>

        <p className="text-white/40 mt-2">
          Continue mastering your learning journey.
        </p>
      </motion.div>

      <CourseCards />
    </main>
  )
}
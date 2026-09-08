'use client'

import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'

const categories = ['All', 'Development', 'Design', 'Data Science', 'DevOps', 'Mobile', 'AI & ML']

const spring = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
}

export function CoursePageHeader({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: {
  activeCategory?: string
  onCategoryChange?: (cat: string) => void
  searchQuery?: string
  onSearchChange?: (q: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Explore Courses
          </h1>
          <p className="text-white/50 text-sm mt-1">
            Pick up where you left off or discover new skills.
          </p>
        </div>

        {/* Search Input */}
        {onSearchChange && (
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
        )}
      </div>

      {/* Category Pills */}
      {onCategoryChange && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-blue-400 flex-shrink-0 mr-1" />
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}
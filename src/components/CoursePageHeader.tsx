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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1D1B] tracking-tight">
            Explore Courses
          </h1>
          <p className="text-[#5C6058] text-sm mt-1">
            Pick up where you left off or discover new academic disciplines.
          </p>
        </div>

        {/* Search Input */}
        {onSearchChange && (
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C6058]" />
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#E5E2D9] text-sm text-[#1C1D1B] placeholder:text-[#5C6058] focus:outline-none focus:border-[#1B3B2B] transition-colors"
            />
          </div>
        )}
      </div>

      {/* Category Pills */}
      {onCategoryChange && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-[#1B3B2B] flex-shrink-0 mr-1" />
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
                  isActive
                    ? 'bg-[#EBF0EC] text-[#1B3B2B] border-[#D9E3DC] font-bold shadow-sm'
                    : 'bg-white text-[#5C6058] border-[#E5E2D9] hover:bg-[#F7F5F0] hover:text-[#1C1D1B]'
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
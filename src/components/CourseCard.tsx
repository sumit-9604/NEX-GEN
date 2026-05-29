'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useState } from 'react'

const iconMap: Record<string, any> = {
  'code': Icons.Code2,
  'design': Icons.Palette,
  'data': Icons.BarChart3,
  'cloud': Icons.Cloud,
  'mobile': Icons.Smartphone,
  'default': Icons.BookOpen
}

export function CourseCard({ course, index }: { course: any; index: number }) {
  const Icon = iconMap[course.icon_name] || iconMap.default
  const [isHovered, setIsHovered] = useState(false)
  

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
      }}
      onMouseEnter={() => setIsHovered(true)}
      className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${isHovered ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255, 255, 255, 0.06)'}`,
        boxShadow: isHovered ? '0 0 30px rgba(139, 92, 246, 0.3)' : 'none',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
    >
      
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-xl"
          >
            <Icon className="w-6 h-6 text-purple-400" />
          </motion.div>
          
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            className="text-sm font-semibold px-2 py-1 rounded-full"
          >
            {course.progress}%
          </motion.div>
        </div>
        
        <h3 className="text-lg font-semibold mb-4 text-white">{course.title}</h3>
        
        {/* Animated Progress Bar */}
        <div className="relative h-2 rounded-full overflow-hidden"
             style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
            }}
          />
          
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
        

        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                className="absolute w-1 h-1 rounded-full"
                style={{ 
                  background: `rgba(139, 92, 246, ${0.5 + Math.random() * 0.5})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  )
}
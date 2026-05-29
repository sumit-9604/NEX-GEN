'use client'

import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

interface CircularTextProps {
  text: string
  radius?: number        
  spinDuration?: number
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers'
  className?: string
}

const CircularText = ({
  text,
  radius = 40,         
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
}: CircularTextProps) => {
  const letters  = Array.from(text)
  const controls = useAnimation()
  const rotation = useMotionValue(0)

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: spinDuration, ease: 'linear', repeat: Infinity },
    })
  }, [spinDuration, controls])

  const handleHoverStart = () => {
    const map = {
      slowDown:  spinDuration * 2.5,
      speedUp:   spinDuration / 4,
      pause:     9999,        
      goBonkers: spinDuration / 18,
    }
    controls.start({
      rotate: [0, 360],
      transition: {
        duration: map[onHover] ?? spinDuration,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }

  const handleHoverEnd = () => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: spinDuration, ease: 'linear', repeat: Infinity },
    })
  }

  return (
    <motion.div
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{ width: radius * 2 + 16, height: radius * 2 + 16, position: 'relative' }}
    >
      {letters.map((letter, i) => {
        const angle  = (360 / letters.length) * i - 90   
        const rad    = (angle * Math.PI) / 180
        const x      = radius + radius * Math.cos(rad)    
        const y      = radius + radius * Math.sin(rad)

        return (
          <span
            key={i}
            className={className}
            style={{
              position : 'absolute',
              left     : x,
              top      : y,

              transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
              transformOrigin: '50% 50%',
              display  : 'inline-block',
              lineHeight: 1,
            }}
          >
            {letter}
          </span>
        )
      })}
    </motion.div>
  )
}

export default CircularText
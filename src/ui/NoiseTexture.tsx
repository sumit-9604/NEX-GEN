'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

interface NoiseTextureProps {
  className?: string
  opacity?: number
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay'
  animated?: boolean
}

export function NoiseTexture({ 
  className, 
  opacity = 0.03,
  blendMode = 'overlay',
  animated = true 
}: NoiseTextureProps) {
  const [noiseId] = useState(() => `noise-${Math.random().toString(36).substr(2, 9)}`)
  
  useEffect(() => {
    if (!animated) return
    
    const canvas = document.getElementById(noiseId) as HTMLCanvasElement
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    
    const generateNoise = () => {
      const width = canvas.width
      const height = canvas.height
      const imageData = ctx.createImageData(width, height)
      
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 255
        imageData.data[i] = noise     
        imageData.data[i + 1] = noise 
        imageData.data[i + 2] = noise 
        imageData.data[i + 3] = 255   
      }
      
      ctx.putImageData(imageData, 0, 0)
      animationFrameId = requestAnimationFrame(generateNoise)
    }
    
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
        generateNoise()
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [animated, noiseId])
  
  const blendModeClass = {
    normal: 'mix-blend-normal',
    multiply: 'mix-blend-multiply',
    screen: 'mix-blend-screen',
    overlay: 'mix-blend-overlay',
  }[blendMode]
  
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <canvas
        id={noiseId}
        className={cn(
          "absolute inset-0 w-full h-full",
          blendModeClass,
          !animated && "opacity-0"
        )}
        style={{ opacity }}
      />
      
      
      {!animated && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${opacity}'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity,
            mixBlendMode: blendMode,
          }}
        />
      )}
    </div>
  )
}
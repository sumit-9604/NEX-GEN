'use client'

import { AnimatedGrid } from './AnimatedGrid'
import { NoiseTexture } from './NoiseTexture'
import { GlowEffect } from './GlowEffect'

interface BackgroundEffectsProps {
  children: React.ReactNode
  className?: string
}

export function BackgroundEffects({ children, className }: BackgroundEffectsProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <AnimatedGrid cellSize={50} lineColor="rgba(139, 92, 246, 0.05)" />
      
      
      <NoiseTexture opacity={0.02} blendMode="overlay" animated />
      
      
      <div className="relative z-10">
        <GlowEffect intensity="medium" color="purple" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" />
        </GlowEffect>
        
        <div className={className}>
          {children}
        </div>
      </div>
    </div>
  )
}
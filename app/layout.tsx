import type { Metadata } from 'next'
import './globals.css'
import { TestMotion } from './test/TestMotion'
import { MotionProvider } from 'src/ui/MotionProvider'
import { AnimatedGrid } from 'src/ui/AnimatedGrid'
import { GlowEffect } from 'src/ui/GlowEffect'
import { NoiseTexture } from 'src/ui/NoiseTexture'

import { cn } from 'src/utils/cn'

export const metadata: Metadata = {
  title: 'NEXLEARN Dashboard',
  description: 'Futuristic Learning Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'bg-background text-white antialiased overflow-x-hidden'
        )}
      >
        <>
          <div className="relative min-h-screen overflow-hidden bg-background">
          

            {/* Main Content */}
            <main className="relative z-10">
              {children}
            </main>
            {/* Mesh Gradient */}
            <div className="absolute inset-0 mesh-gradient opacity-70 z-0" />

            {/* Animated Grid */}
            <AnimatedGrid className="absolute inset-0 z-[1]" />

            {/* Glow Effects */}
            <GlowEffect className="z-[2]" />

            

          </div>
        </>
      </body>
    </html>
  )
}
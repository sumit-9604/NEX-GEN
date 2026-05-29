import type { Metadata } from 'next'
import './globals.css'
import { Geist } from 'next/font/google'
import { cn } from '@/lib/utils'
import { MotionProvider } from '@/src/ui/MotionProvider'
import { AnimatedGrid }   from '@/src/ui/AnimatedGrid'
import { NoiseTexture }   from '@/src/ui/NoiseTexture'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'NEXLEARN Dashboard',
  description: 'Futuristic Learning Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('dark', geist.variable)}
      suppressHydrationWarning
    >
      <body className="bg-[#050816] text-white antialiased overflow-x-hidden font-sans">

        <div
          className="fixed inset-0 z-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="mesh-gradient absolute inset-0" />
          <AnimatedGrid />
          <NoiseTexture />
        </div>
        <MotionProvider>
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </MotionProvider>

      </body>
    </html>
  )
}
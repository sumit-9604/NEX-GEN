import type { Metadata } from 'next'
import './global.css'
import { MotionProvider } from '@/ui/MotionProvider'
import { BackgroundEffects } from '@/ui/BackgroundEffects'
import { cn } from '@/lib/utils/cn'

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
      <body className={cn("bg-background antialiased")}>
        <MotionProvider>
          <BackgroundEffects>
            {children}
          </BackgroundEffects>
        </MotionProvider>
      </body>
    </html>
  )
}
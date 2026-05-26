'use client'

export function NoiseTexture() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none z-[3]"
      style={{
        backgroundImage:
          'url("https://grainy-gradients.vercel.app/noise.svg")',
      }}
    />
  )
}
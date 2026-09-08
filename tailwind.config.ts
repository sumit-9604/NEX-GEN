import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/index.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient':   'gradientShift 10s ease infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(59,130,246,0.35)' },
          '50%':      { boxShadow: '0 0 28px rgba(59,130,246,0.65)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      safelist: [
        'text-blue-400',   'text-cyan-400', 'text-emerald-400',
        'text-amber-400',  'text-amber-300', 'text-rose-400',
        'text-orange-400', 'text-sky-400',
        'text-white/40',   'text-white/50',  'text-white/60', 'text-white/90',
        'bg-blue-500/10',  'bg-blue-500/20',
        'bg-cyan-500/10',  'bg-emerald-400/10', 'bg-amber-400/10',
        'bg-rose-500/10',  'bg-sky-500/10',
        'bg-white/5',      'bg-white/10',
        'border-blue-500/20', 'border-cyan-500/20', 'border-emerald-500/20',
        'border-amber-400/25',  'border-rose-500/20', 'border-sky-500/20',
        'border-orange-500/30',
        'from-blue-500',   'from-blue-500/15', 'to-blue-400', 'to-blue-600',
        'from-cyan-500',   'from-cyan-500/15',  'to-sky-500',
        'from-emerald-500','from-emerald-500/15','to-teal-400',
        'from-amber-400',  'from-amber-500/15', 'to-orange-500',
        'from-rose-500',   'from-rose-500/15',  'to-pink-500',
      ],
    },
  },
  plugins: [],
}

export default config
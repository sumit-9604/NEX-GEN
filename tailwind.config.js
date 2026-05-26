/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0A',
          secondary: '#0B1120',
          tertiary: '#111827',
        },

        glass: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
        },
      },

      backdropBlur: {
        xs: '2px',
      },

      animation: {
        gradient: 'gradient 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },

      keyframes: {
        gradient: {
          '0%,100%': {
            backgroundPosition: '0% 50%',
          },

          '50%': {
            backgroundPosition: '100% 50%',
          },
        },

        float: {
          '0%,100%': {
            transform: 'translateY(0px)',
          },

          '50%': {
            transform: 'translateY(-12px)',
          },
        },

        pulseSlow: {
          '0%,100%': {
            opacity: '0.5',
          },

          '50%': {
            opacity: '1',
          },
        },
      },
    },
  },

  plugins: [],
}
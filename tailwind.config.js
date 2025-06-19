import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'muted-gray': '#A1A1AA',
        'dim-gray': '#27272A',
      },
      keyframes: {
        shimmer: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} 
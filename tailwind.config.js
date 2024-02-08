/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 1s steps(40, end) infinite',
        bubble: 'bubble 4s ease-in-out infinite'
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        bubble: {
          0:{
            transform: 'translateY(0)',
            opacity: 1
          },
          50: {
            transform: 'translateY(-50px)',
            opacity: 0.7
          },
          100:{
            transform: 'translateY(-100px)',
            opacity: 0, 
          }
        } 
    },

  },
  plugins: [],
}
}

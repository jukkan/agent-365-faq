/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ms-blue': {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0078d4',
          600: '#006cbe',
          700: '#0060a8',
          800: '#005492',
          900: '#00487c',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1874c4',
          800: '#0e4f82' // Override the default bg-blue-700 color
        },
      },
    },
  },
  plugins: [],
}


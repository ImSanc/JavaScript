/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sideBar' : '#1e2640',
        blue: {
          700: '#1874c4',
          800: '#0e4f82' // Override the default bg-blue-700 color
        },
      },
      borderWidth: {
        2: '1px', // Override the default border-2 width
      },
    },
  },
  plugins: [],
}


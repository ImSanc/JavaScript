/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        seaGreen : {
          DEFAULT: '#20b2aa'
        }
      }
    },
  },
  plugins: [],
}
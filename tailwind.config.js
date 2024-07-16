/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPink: '#FFADAD',
        customOrange: '#FFD6A5',
        customYellow: '#FDFFB6',
        customGreen: '#CAFFBF',
        customBlue: '#9BF6FF',
        customPurple: '#FFC6FF',
        customIndigo: '#BDB2FF',
        customWhite: '#FFFFFC'
       }
    },
  },
  plugins: [],
}
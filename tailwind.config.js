/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      'sm' : '640px',
      'md' : '912px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero': "url('./assets/image 21.png')",
      },
    },
  },
  plugins: [],
}

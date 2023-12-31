/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        primary: '#F9A51A',
        secondery: '#FBBC04'
      },
      fontFamily:{
        bebas: ['Bebas Neue', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9d4edd', // violet clair
          DEFAULT: '#7b2cbf', // violet principal
          dark: '#5a189a', // violet foncé
        },
        secondary: {
          light: '#ff8fab', // rose clair
          DEFAULT: '#ff4d8d', // rose principal
          dark: '#ff0066', // rose foncé
        },
        background: '#13111C', // fond sombre avec une teinte violette
        surface: '#1a1625', // surface un peu plus claire
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

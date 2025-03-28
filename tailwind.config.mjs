/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB', // Blue for buttons and highlights
        sidebar: '#F5F7FA', // Light gray for sidebar
        textGray: '#6B7280', // Gray for secondary text
        highlight: '#E5F0FF', // Light blue for selected dropdown item
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming Inter font for the design
      },
    },
  },
  plugins: [],
};
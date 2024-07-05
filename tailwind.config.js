/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'pantone-heavy': '#12251f',
        'pantone-medium': '#005621',
        'pantone-regular': '#00792e',
        'pantone-light': '#009b3c'
      }      
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        /**Udemy sans is defined in app.css */
        'UdemySans': ['UdemySans'],
        'SuisseWorks' : ['SuisseWorks'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
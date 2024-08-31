/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html",],
  theme: {
    fontFamily: {
      'body': ['Barlow', 'san-serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["garden"],
  },
}

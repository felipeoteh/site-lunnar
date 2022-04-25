const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#07B3C7",
        "secundary": "#3e6e78",
      },
      fonFamily: {
        'jost': ['"Jost", "sans-serif'],
      }
    },
  },
  plugins: [],
}
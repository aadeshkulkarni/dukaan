/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#1E2640",
        primaryFontColor: "#1A181E",
        tableHeader: "#F2F2F2",
        highlightColor: "#146EB4",
        creditsColor: "#353C53",
        overviewFontColor: "#4D4D4D"
      }
    },
  },
  plugins: [],
}


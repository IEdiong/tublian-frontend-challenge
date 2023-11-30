/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        logo: [
          '"ReceptsNFW01-Regular"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        white: "#FEFEFE",
        tertiary: "#B7B7B7",
        gold: {
          100: "#FEEFC3",
          200: "#FEE38B",
          300: "#FDD649",
        },
        black: "#121212",
      },
      backgroundImage: {
        "illustration-one": "url('/assets/illustration-get-started.png')",
      },
      backgroundPosition: {
        "top-4": "center top -0.25rem",
      },
    },
  },
  plugins: [],
};

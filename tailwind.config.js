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
        base: {
          900: "#121212",
        },
      },
    },
  },
  plugins: [],
};

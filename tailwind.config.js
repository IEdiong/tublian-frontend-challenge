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
        black: "#121212",
        placeholder: "#696969",
        secondary: "#888",
        "accent-blue": "#4BA3FF",
        "horizontal-rule": "#414141",
        card: {
          default: "#1e1e1e",
          hover: "#292929",
        },
        gold: {
          100: "#FEEFC3",
          200: "#FEE38B",
          300: "#FDD649",
        },
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

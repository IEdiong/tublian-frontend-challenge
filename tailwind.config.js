/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      mobile: "390px",
      // => @media (min-width: 390px) { ... }
      tablet: "1024px",
      // => @media (min-width: 1024px) { ... }
      laptop: "1200px",
      // => @media (min-width: 1200px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
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
        badge: "#76F368",
        "fore-badge": "#445742",
        overlay: "#121212",
        "soft-blue": "#91C3FD",
        "semantic-red": "#F26663",
        "semantic-green": "#76F368",
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

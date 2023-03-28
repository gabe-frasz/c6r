const { blue, violet, zinc } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html",
    "./node_modules/@c6r/react/**/index.{js,cjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: blue,
        secondary: violet,
        // base: {
        //   100: "#DDD",
        //   200: "#EEE",
        //   300: "#FFF",
        //   content: "#000",
        // },
        base: {
          100: zinc[700],
          200: zinc[800],
          300: zinc[900],
          content: "#FFF",
        },
      },
    },
  },
  plugins: [],
};

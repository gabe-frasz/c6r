const { blue, violet, zinc } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
    "./node_modules/@c6r/react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: blue,
        secondary: violet,
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
  presets: [require("@c6r/keyframes")],
};

// eslint-disable-next-line no-undef
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi-Variable", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

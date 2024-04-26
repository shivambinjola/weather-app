/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "640px" },
        gf: { min: "0px", max: "280px" },
        ...defaultTheme.screens,
      },
      fontFamily: {
        KronaOne: ["Inter", "Krona One", "sans-serif"],
        poppins: ["Inter", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        mainbg: "linear-gradient(to bottom right, #000000, #383838)",
      },
    },
  },
  plugins: [],
};

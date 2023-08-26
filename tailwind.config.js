/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2E250",
        primaryDark: "#A69926",
        secondary: "#68DBF2",
        accent: "#FF4594",
        accentDark: "#B31758",
      },
      fontFamily: {
        display: ["'Fugaz One'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

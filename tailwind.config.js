/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "sp-yellow": "#F2e250",
        "sp-yellow-alt": "#a69926",
        "sp-blue": "#68dbf2",
        "sp-pink": "#FF4594",
        "sp-pink-alt": "#b31758",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

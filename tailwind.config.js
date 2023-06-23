/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        golos: ["Golos", "sans-serif"],
      },
      colors: {
        black: "#151617",
        gray: "#577188",
        grayLine: "#C6D6E5",
        listItemHover: "#F1F8FE",
      },
    },
  },
  plugins: [],
};

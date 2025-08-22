/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#E07A5F",
        sand: "#F2CC8F",
        cream: "#F7F7F2",
        charcoal: "#3D405B",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

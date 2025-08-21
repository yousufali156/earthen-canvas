/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./app/**/*.{js,jsx}",
"./components/**/*.{js,jsx}",
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
playfair: ["var(--font-playfair)"],
raleway: ["var(--font-raleway)"],
},
},
},
plugins: [],
};
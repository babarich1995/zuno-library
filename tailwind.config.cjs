/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAE6D7",
        secondary: "#1C3F3A",
        darkGreen:"#1E1E1E"
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazoneclone:{
          background:"#EAEDED",
          light_blue:"#232F3A",
          DEFAULT:"#131921"
        }
      }
    },
  },
  plugins: [],
}
// tailwind.config.js  (make sure this exists & restart dev server)
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy:    "#001f3f",
        primary: "#ff851b",
        cardDark: "#1d2d44",    

      },
       boxShadow: {
      '5xl': '0 20px 25px -5px rgba(0,0,0,0.4), 0 10px 10px -5px rgba(255,133,27)',
    }
    },
  },
  plugins: [],
}

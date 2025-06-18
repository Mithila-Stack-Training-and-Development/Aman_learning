/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",               // ⬅️  tell Tailwind to look for a .dark class
  theme: {
    extend: {
      colors: {
        accent: "#2ecc71",
        "dark-bg": "#0a0a0a",
        "darker-bg": "#050505",
        "accent-glow": "rgba(46,204,113,0.4)",
      },
    },
  },
  plugins: [],
};

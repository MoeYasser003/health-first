/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#58CFA4",
          2: "#189F6E",
        },
        subtext: "#737373",
        foreground: "#F8F8F8",
        iconBg: '#EEF6FC',
        cardBg: '#E6E9EE',
        text: '#454D5D',
        gold: '#FF9000',
        

      },
      backgroundImage: {
        "hero-image": "url('../assets/home.jpg')",
      },
    },
  },
  plugins: [],
};

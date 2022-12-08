/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#3252DF", "dark-blue": "#152C5B" },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};

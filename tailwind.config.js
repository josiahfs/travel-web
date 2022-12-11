/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3252DF",
        "dark-blue": "#152C5B",
        magenta: "#FF498B",
        "light-gray": "#B0B0B0",
      },

      fontSize: {
        head: "2.625rem",
        desc: ["16px", "27px"],
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};

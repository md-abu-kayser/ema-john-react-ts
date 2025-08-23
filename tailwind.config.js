/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C2B35",
        "primary-dark": "#15202b",
        secondary: "#FFE0B3",
        accent: "#FF9900",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
      },
      colors: {
        primary: "#00ACC1",
        pale: "#D9D9D9",
        secondary: "#10b981",
        dark: "#1f242d",
      },
      fontFamily: {
        body : ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

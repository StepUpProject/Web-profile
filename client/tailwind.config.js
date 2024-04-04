/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
      },
      colors: {
        primary: "#FFB10A",
        pale: "#D9D9D9",
        // secondary: "#10b981",
        secondary: "#FFCF01",
        dark: "#1f242d",
        portfolioOne: "#6a10e0",
        portfolioTwo: "#6a10e0",
      },
      boxShadow: {
        cardShadow:
          "0px 1px 2px 0px rgba(0, 172, 193, 0.10), 0px 3px 3px 0px rgba(0, 172, 193, 0.09), 0px 7px 4px 0px rgba(0, 172, 193, 0.05), 0px 12px 5px 0px rgba(0, 172, 193, 0.01), 0px 19px 5px 0px rgba(0, 172, 193, 0.00)",
      },
      borderRadius: {
        customRounded: "52% 48% 48% 52% / 50% 54% 46% 50% ",
      },
    },
  },
  plugins: [],
};
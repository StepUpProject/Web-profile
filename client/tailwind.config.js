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
        cardShadow: "0 5px 16px 0 rgba(0, 0, 0, 0.15)",
        buttonShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        customRounded: "52% 48% 48% 52% / 50% 54% 46% 50% ",
      },
      width: {
        round: "calc(100% - 160px)",
      },
    },
  },
  plugins: [],
};

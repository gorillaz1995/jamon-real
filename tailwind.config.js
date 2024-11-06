/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "968px",
      // => @media (min-width: 768px) { ... }

      lg: "1124px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontFamily: {
      custom_1: ["custom_1", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import scroll from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#704ac2",
        border:"#d4c8ed",
        badge:"#d8d8d8",
        footer:"#f3f3f3",
        lightblue:"#f9f9f9",
        green:"#44c61f"
      },
      container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1195px",
        xl: "1195px",
        "2xl": "1195px",
      },
    },
    },
  },
  plugins: [scroll],
}
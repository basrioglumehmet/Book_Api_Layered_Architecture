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
        primaryhover:"#5e3aac",
        secondary:"#eaeaea",
        secondaryhover:"#d7d7d7",
        border:"#d4c8ed",
        badge:"#d8d8d8",
        footer:"#f3f3f3",
        lightblue:"#f9f9f9",
        green:"#44c61f",
        lightgreen:"#f0fbed",
        red:"#ff0000",
        lightred:"#ffebeb",
        label:"#747474"
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
/** @type {import('tailwindcss').Config} */
import {heroui} from "@heroui/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bg-sidebar-desktop.png')",
      },
      colors: {
        "main-blue": "#34495E",
        "main-orange": "#F39C12",
        "main-pink": "#EC7063",
        "main-white": "#ffffff",
        "main-black": "#000000",
      },
      fontFamily: {
        "main-font": ["Open Sans", "serif"],
        "title-font": ["Montserrat", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

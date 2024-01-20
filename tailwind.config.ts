import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-main": "#1A1A1A",
        "gray-main": "FFF4E9",
      },
      backgroundImage: {},
      animation: {
        heightUP: "heightUP 2.5s ease-out alternate",
        heightDOWN: "heightDOWN 2.5s ease-out alternate",
        wiggle: "wiggle 1s ease-in-out infinite",
        moveAndScale: "moveAndScale 2s ease-in-out forwards",
      },
      keyframes: {
        heightUP: {
          "0%,100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(40%)" },
        },
        heightDOWN: {
          "0%,100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(-40%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        moveAndScale: {
          "0%": { transform: " translateX(0) scale(1) rotate(-2deg)" },
          // "50%": { transform: "  rotate(2deg)" },
          // "75%": {
          "50%": {
            transform: " translate(-30vw , 5vh ) scale(2)  rotate(-45deg)",
          },
          // },
          "100%": {
            transform: " translate(-30vw , -5vh ) scale(3) rotate(-45deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

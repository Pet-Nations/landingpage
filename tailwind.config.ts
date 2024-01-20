import type { Config } from "tailwindcss";

const generateTransFunc = () => {
  let obj: any = {
    "0%": { transform: " translateX(0) scale(1) rotate(-2deg)" },
    "1%": {
      transform: "translate(-30vw , -10vh ) scale(3.55) rotate(-15deg)",
    },
  };

  for (let i = 2; i < 1000; i++) {
    let h = i % 2 === 0 ? "-5vh" : "-10vh";

    obj[`${i}%`] = {
      transform: `translate(-30vw , ${h} ) scale(3.55) rotate(-15deg)`,
    };
  }

  return obj;
};

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
        moveAndScale: "moveAndScale 200s ease-in-out forwards ",
        flashScreen: "flashScreen .5s ease-in-out forwards",
        cardLeft: "cardLeft .5s ease-in-out forwards",
        moveUp: "moveUp 2s linear forwards",
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
        moveAndScale: generateTransFunc(),
        flashScreen: {
          "0%, 100%": { background: "#ffffff" },
          "50%": { background: "black" },
        },
        cardLeft: {
          "0%, ": { right: "-100%" },
          "100%": { right: "29px" },
        },
        kartTransY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5%)" },
        },
        moveUp: {
          "0%, ": { bottom: "-300px" },
          "80%, ": { bottom: "-300px" },
          "100%": { bottom: "150px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

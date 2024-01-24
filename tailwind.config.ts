import type { Config } from "tailwindcss";

const generateTransFunc = () => {
  let obj: any = {
    "0%": { transform: " translateX(0) scale(1) rotate(-2deg)" },
    "1%": {
      transform: "translate(-30vw , -10vh ) scale(3.55) rotate(-15deg)",
    },
  };

  for (let i = 2; i < 10000; i++) {
    let h = i % 2 === 0 ? "-3vh" : "-10vh";

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
        white1: "#FFF4e9",
        white2: "rbga(255,255,255,0.6)",
        white3: "rbga(255,255,255,0.48)",
        orange1: "#FF9F46",
      },
      screens: {
        "3xl": "1650px",
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
        fadeIn: "fadeIn 2s linear forwards",
        pulselow: "pulselow 4s linear infinite",
        pulselow1: "pulselow 3s ease-in-out infinite",
        pulselow2: "pulselow 2s ease-in-out infinite",
        pulselow3: "pulselow 1s ease-in-out infinite",
        pulselow4: "pulselow 4s ease-in-out infinite",
        petCardTextDOwn: "petCardTextDOwn .3s linear forwards",
        moveRightThenDisappear: "moveRightThenDisappear 2.5s linear infinite",
        moveRightThenSlowDisappear:
          "moveRightThenSlowDisappear 3s ease-in-out infinite",
        moveLeftThenSlowDisappear:
          "moveLeftThenSlowDisappear 3s ease-in-out infinite",
        leafFallWindBlowHozirontal:
          "leafFallWindBlowHozirontal 20s ease-in-out infinite",
        leafFallWindBlowHozirontal2:
          "leafFallWindBlowHozirontal2 20s ease-in-out infinite",
        modelScale: "modelScale 2.4s ease-in-out infinite",

        diamondMonveRight:
          "diamondMonveRight 20s ease-in-out infinite alternate",
        diamondMoveDown: "diamondMoveDown 10s ease-in-out infinite alternate",
        diamondMoveDown1: "diamondMoveDown 10s ease-in-out infinite alternate",
        diamondMoveDown2: "diamondMoveDown 5s ease-in-out infinite alternate",
        diamondMoveLeft2: "diamondMoveLeft 3s ease-in-out infinite alternate",
        coinInHand: "coinInHand 10s ease-in-out infinite alternate",
        stereoMovedUp: "stereoMovedUp 2s ease-in-out infinite alternate",
        cloudMoveLeft: "cloudMoveLeft 20s linear infinite ",
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
        fadeIn: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        petCardTextDOwn: {
          "0%": { transform: "translate(-13px,0)" },
          "100%": { transform: "translate(0,5px)" },
        },
        moveRightThenDisappear: {
          "0%": { transform: "translate(0, 0)", opacity: "1", scale: "1.5" },
          "50%": { transform: "translate(50% , 0)", opacity: ".75" },
          "100%": { transform: "translate(100%,-100%)", opacity: ".5" },
        },
        moveRightThenSlowDisappear: {
          "0%": { transform: "translate(0, 0)", opacity: ".5", scale: ".5" },
          "100%": { transform: "translate(100%,-100%)", opacity: ".75" },
        },
        moveLeftThenSlowDisappear: {
          "0%": {
            transform: "translate(0, 0) scaleX(-1)",
            opacity: ".5",
          },
          "100%": {
            transform: "translate(-50%,-100%) scaleX(-1) ",
            opacity: ".75",
          },
        },
        pulselow: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
        leafFallWindBlowHozirontal: {
          "0%": {
            transform: "translate(0, 0) scaleX(-1)",
          },
          "4%": {
            transform: "translate(-6vw, 6vh) scaleX(-1)",
          },
          "8%": {
            transform: "translate(2vw, 12vh) scaleX(-1)",
          },
          "12%": {
            transform: "translate(-0vw, 18vh) scaleX(-1)",
          },
          "16%": {
            transform: "translate(6vw, 24vh) scaleX(-1)",
          },
          "20%": {
            transform: "translate(0, 30vh) scaleX(-1) rotate(0)",
          },

          "100%": {
            transform: "translate(100vh,0) scaleX(-1) rotate(360deg) ",
          },
        },

        leafFallWindBlowHozirontal2: {
          "0%": {
            transform: "translate(0vw, 0vh) scaleX(2)",
          },

          "100%": {
            transform: "translate(100vw,100vh) rotate(360deg) ",
          },
        },

        modelScale: {
          "0%": {
            transform: "scale(1 , 1)",
          },

          "50%": {
            transform: "scale(1.2 , 1.15)",
          },

          "100%": {
            transform: "scale(1,1)",
          },
        },
        diamondMonveRight: {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(25vw,-25vh)",
          },
        },
        diamondMoveDown: {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(0,50vh)",
          },
        },
        diamondMoveLeft: {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(-10vh,0)",
          },
        },
        coinInHand: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(270deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        stereoMovedUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-20%)",
          },
        },

        cloudMoveLeft: {
          "0%": {
            transform: "translateX(0)",
          },

          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

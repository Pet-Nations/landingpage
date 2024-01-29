import type { Config } from "tailwindcss";

const generateTransFunc = () => {
  let obj: any = {
    "0%": { transform: " translateX(0) scale(1) rotate(-2deg)" },
    "1%": {
      transform: "translate(-30vw , -20vh ) scale(4.5) rotate(-15deg)",
    },
  };

  for (let i = 2; i < 10000; i++) {
    let h = i % 2 === 0 ? "-13vh" : "-20vh";

    obj[`${i}%`] = {
      transform: `translate(-30vw , ${h} ) scale(4.5) rotate(-15deg)`,
    };
  }

  return obj;
};

const generateTransFunc480 = () => {
  let obj: any = {
    "0%": { transform: " translate(0,0) scale(.5) rotate(15deg)" },
    "1%": {
      transform: "translate(-30vw , -10vh ) scale(1.5) rotate(15deg)",
    },
  };

  for (let i = 2; i < 10000; i++) {
    let h = i % 2 === 0 ? "-3vh" : "-10vh";
    let w = i % 2 === 0 ? "-30vw" : "-25vw";
    obj[`${i}%`] = {
      transform: `translate(${w} , ${h} ) scale(1.5) rotate(15deg)`,
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
        vsm: "480px",
        smallPhone: "460px",
        "3xl": "1650px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        laptop: "1200px",
        tablet: "996px",
        laptop1: "1450px",
        laptopLarge: "1650px",
        bigscreen: "1920px",
        "2xl": "1536px",
      },
      backgroundImage: {},
      animation: {
        smokemobile1: "smokemobile1 4s ease-in-out infinite",
        smokemobile2: "smokemobile2 4s ease-in-out infinite",
        heightUP: "heightUP 1.5s ease-in-out forwards",
        heightUP1: "heightUP1 1.5s ease-in-out forwards",
        heightDOWN: "heightDOWN 1.5s ease-in-out forwards",
        heightDOWN1: "heightDOWN1 1.5s ease-in-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
        moveAndScale: "moveAndScale 200s ease-in-out forwards ",
        moveAndScale480: "moveAndScale480 100s ease-out forwards ",
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
        moveRightThenDisappear: "moveRightThenDisappear 900ms linear infinite",
        moveRightThenDisappear1:
          "moveRightThenDisappear1 900ms linear infinite",
        moveRightThenDisappear1Mobile:
          "moveRightThenDisappear1Mobile 900ms linear infinite",
        moveRightThenSlowDisappear:
          "moveRightThenSlowDisappear 900ms ease-in-out infinite",
        moveLeftThenSlowDisappearMobile:
          "moveLeftThenSlowDisappearMobile 900ms ease-in-out infinite",
        moveLeftThenSlowDisappear:
          "moveLeftThenSlowDisappear 900ms ease-in-out infinite",
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
        cloudKart2: "cloudKart 3200ms linear infinite ",
        cloudKart1: "cloudKart1 3200ms ease-in infinite ",
        coinMobile1: "coinMobile1 3s linear infinite ",
        coinMobile2: "coinMobile2 4s linear infinite ",
        coinMobile3: "coinMobile3 3s linear infinite ",
        moveLeft100: "moveLeft100 1s ease-out forwards ",
        mobileScaleHome: "mobileScaleHome 2s ease-out forwards ",
        transRight: "transRight 1s ease-out forwards ",
        transLeft: "transLeft 1s ease-out forwards ",
        transUp: "transUp 1s ease-out forwards ",
      },
      keyframes: {
        smokemobile1: {
          "0%": { transform: "translate(0%,0%) rotate(-55deg)" },
          "25%": {
            transform: "translate(5px,-15px) rotate(-55deg)",
            opacity: "1",
          },
          "26%": {
            transform: "translate(50%,-50%) rotate(-55deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(50%,-50%) rotate(-55deg)",
            opacity: "0",
          },
        },
        smokemobile2: {
          "0%": { transform: "translate(0%,0%) rotate(-55deg)" },
          "25%": {
            transform: "translate(5px,-30px) rotate(-55deg)",
            opacity: "1",
          },
          "26%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        heightUP: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(50%)" },
        },
        heightUP1: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        heightDOWN1: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(100%)" },
        },
        heightDOWN: {
          "0%%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        moveAndScale: generateTransFunc(),
        moveAndScale480: generateTransFunc480(),
        flashScreen: {
          "0%, 100%": { background: "#ffffff" },
          "50%": { background: "black" },
        },
        cardLeft: {
          "0%, ": { right: "-100%" },
          "100%": { right: "60px" },
        },
        cardLeft1600: {
          "0%, ": { right: "-100%" },
          "100%": { right: "0px" },
        },
        kartTransY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5%)" },
        },
        moveUp: {
          "0%, ": { bottom: "-300px" },
          "80%, ": { bottom: "-300px" },
          "100%": { bottom: "20px" },
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
          "50%": { transform: "translate(50% , 0) scale(1.6)", opacity: ".3" },
          "100%": {
            transform: "translate(100%,-100%) scale(1.5)",
            opacity: ".5",
          },
        },
        moveRightThenDisappear1: {
          "0%": {
            transform: "translate(0, 0) rotate(-17.969deg)",
            opacity: "1",
            scale: "1.5",
          },
          "50%": {
            transform: "translate(50% , 0) rotate(-17.969deg)",
            opacity: ".3",
          },
          "100%": {
            transform: "translate(100%,-100%) rotate(-17.969deg)",
            opacity: ".5",
          },
        },
        moveRightThenDisappear1Mobile: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: ".5",
            scale: ".3",
          },
          "50%": {
            transform: "translate(50% , 0) ",
            opacity: ".6",
          },
          "75%": {
            transform: "translate(75% , 0) ",
            opacity: ".4",
          },
          "100%": {
            transform: "translate(100%,-100%) ",
            opacity: ".3",
          },
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
        moveLeftThenSlowDisappearMobile: {
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
        cloudKart: {
          "0%": {
            transform: "translate(0,0) scale(1.8) rotate(-45deg) ",
          },

          "15%": {
            transform: "translate(15px , -15px)  scale(1.8) rotate(-45deg)  ",
            opacity: "1",
          },
          "20%": {
            transform: "translate(25px , -30px)  scale(1.8) rotate(-45deg)   ",
            opacity: "0",
          },
          "100%": {
            transform: "translate(25px , -30px)  scale(1.8) rotate(-45deg)   ",
            opacity: "0",
          },
        },

        coinMobile1: {
          "0%": {
            transform: "translate(0,0)  rotate(0deg) ",
          },

          "33%": {
            transform: "translate(0 , 100px) rotate(180deg)  ",
            opacity: "1",
          },
          "66%": {
            transform: "translate(-50px , 100px) rotate(360deg)  ",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-50px , 150px)  rotate(-45deg)   ",
            opacity: "0",
          },
        },
        coinMobile3: {
          "0%": {
            transform: "translate(0,0)  rotate(0deg) ",
          },

          "66%": {
            transform: "translate(0 , 200px) rotate(359deg)  ",
            opacity: "1",
          },
          "80%": {
            transform: "translate(60px , 200px) rotate(0deg)  ",
            opacity: "1",
          },
          "100%": {
            transform: "translate(60px , 250px)  rotate(-45deg)   ",
            opacity: "0",
          },
        },
        coinMobile2: {
          "0%": {
            transform: "translate(0,0)  rotate(0deg) ",
          },

          "66%": {
            transform: "translate(0 , 400px) rotate(359deg)  ",
            opacity: "1",
          },
          "80%": {
            transform: "translate(-120px , 400px) rotate(0deg)  ",
            opacity: "1",
          },
          "95%": {
            transform: "translate(-120px , 430px) rotate(360deg)  ",
            opacity: "1",
          },

          "100%": {
            transform: "translate(0px , 430px)  rotate(-45deg)   ",
            opacity: "0",
          },
        },
        cloudKart1: {
          "0%": {
            transform: "translate(0,0) scale(1.8) rotate(-45deg) ",
          },

          "15%": {
            transform: "translate(30px , -30px)  scale(1.8) rotate(-45deg)  ",
            opacity: "1",
          },
          "20%": {
            transform: "translate(50px , -50px)  scale(1.8) rotate(-45deg)   ",
            opacity: "0",
          },
          "100%": {
            transform: "translate(25px , -30px)  scale(1.8) rotate(-45deg)   ",
            opacity: "0",
          },
        },

        moveLeft100: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        mobileScaleHome: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.3)",
          },
        },
        transRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        transLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },

        transUp: {
          "0%": {
            transform: "translateY(100%)",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

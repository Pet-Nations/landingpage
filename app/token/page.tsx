"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Section2Img from "/public/images/tokensection2bg.png";
import Section2ImgM from "/public/images/tokensecction2bg.png";

import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const TokenNomic = () => {
  const [section1Width, setSection1Width] = useState(0);

  const [isAnimateCoinText1, setIsAnimateCoinText1] = useState(false);

  useEffect(() => {
    setSection1Width(window?.innerWidth);
  }, []);

  const handleCoin1Animation = (e: any) => {
    if (e.animationName === "coinInHand") {
      setIsAnimateCoinText1(true);
    }
  };

  const GetCoinAnimation = (coinIndex: any) => {
    switch (coinIndex) {
      case 0:
        if (section1Width < 1650 && section1Width > 1450) {
          return "animate-coinMoveRightLap";
        }
        return "animate-coinMoveRight";
      case 1:
        return "animate-coinMoveRight1";
      case 2:
        return "animate-coinMoveRight2";
      default:
        return "animate-coinMoveRight";
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Section1 />
      <section className="max-h-[919px] bg-[#FFF4E9] p-16 flex items-center justify-center z-30">
        <Image
          src={Section2Img}
          className="max-[600px]:hidden"
          alt="image"
        ></Image>
        <Image
          src={Section2ImgM}
          className="hidden max-[600px]:block"
          alt="image"
        ></Image>
      </section>

      <Section3 />
      <Section4 />
      <section className="w-[7680px] h-[211px] bg-bottom-foil1 overflow-hidden z-1"></section>
    </div>
  );
};

export default TokenNomic;

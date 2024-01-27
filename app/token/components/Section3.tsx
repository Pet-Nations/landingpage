"use client";

import Image from "next/image";
import Section3Img2 from "/public/images/AUGUST.png";
import Section3Img from "/public/images/tokens3.png";
import Section3Img1 from "/public/images/tokens3i1.png";
import { useEffect, useState } from "react";
import Coin1 from "@/app/components/images/effect-ui/coin/Coin1";
import FirstCoin from "./FirstCoin";
import StarIcon from "@/app/components/icons/StarIcon";
import CoverFoot from "./coverfoot";
import BreedInfo from "./breed-info";
import StereosList from "@/app/components/stereo";

const Section3 = () => {
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
    <section className="h-[1080px] max-[1300px]:h-[919px] flex bg-dark-main relative items-center justify-center max-[1200px]:item-start  max-[1200px]:justify-start ">
      <div className="relative flex  justify-end  p-[40.85px] max-[1500px]:pt-[38px]  max-[1450px]:pt-[0px]  max-w-[1920px] w-[1920px]">
        <Image
          src={Section3Img}
          alt="image"
          className="relative z-10 max-[1450px]:top-2.5 max-[1450px]:hidden"
        ></Image>

        <Image
          src={Section3Img}
          alt="image"
          width={1200}
          className=" hidden relative z-10 max-[1450px]:top-10 max-[1450px]:inline "
        ></Image>

        {/* dog head */}
        <Image
          src={Section3Img2}
          alt="image"
          className="absolute left-[213px] top-[15px] z-30  max-[1650px]:left-[64px]  max-[1450px]:hidden  "
        ></Image>
        {/* version <1450*/}
        <Image
          src={Section3Img2}
          alt="image"
          width={300}
          className=" hidden absolute left-[63px] top-[19px] z-30  max-[1450px]:block "
        ></Image>

        {/* dog avatar */}
        <Image
          src={Section3Img1}
          alt="image"
          className="absolute left-[213px] top-[88px] z-20 max-[1650px]:left-[64px] max-[1450px]:hidden  "
        ></Image>

        {/* version <1450*/}
        <Image
          src={Section3Img1}
          alt="image"
          height={800}
          className="hidden absolute left-[213px] top-[82px] z-20 max-[1650px]:left-[64px] max-[1450px]:block  "
        ></Image>

        {/* coin in dog hand */}
        <div
          onAnimationIteration={handleCoin1Animation}
          className="absolute  left-[478px] max-[1650px]:left-[325px] max-[1450px]:left-[295px]  top-[302px]  max-[1450px]:top-[265px] animate-coinInHand z-50   "
        >
          <Coin1 />
        </div>

        <div
          className="absolute
       w-[279px] h-[106px] 
       z-50 
       top-[93.82px]  max-[1450px]:top-[60px] 
      max-[1450px]:left-[755px]  laptop1:left-[50vw] bigscreen:left-[1107px] "
        >
          <p
            className={`text-white1 text-[32px] font-bold leading-normal ${
              isAnimateCoinText1 ? "animcustom1" : ""
            }`}
          >
            Pet Nations Rank
          </p>
          <p
            className={`
          text-white1 max-w-[83px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
          ${isAnimateCoinText1 ? "animcustom2" : ""}
          `}
          >
            Earn more New feeds Priority
          </p>
        </div>

        <div className="absolute w-[500px] h-[82px] z-50 top-[557px] max-laptop1:top-[340px]  right-[550.15px] max-[1200px]:right-0 max-laptop1:right-[200px]  max-[1650px]:right-[450px]">
          <p
            className={`text-white1 text-[32px] font-bold leading-normal ${
              isAnimateCoinText1 ? "animcustom3" : ""
            }`}
          >
            Pet Nations Native Token
          </p>
          <p
            className={`
          text-white1 max-w-[260px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
          ${isAnimateCoinText1 ? "animcustom2" : ""}
          `}
          >
            Voting rights Higher rank VIP club Spend to burn
          </p>
        </div>

        <div className="absolute w-[500px] h-[82px] z-50 top-[760px] max-laptop1:top-[565px]  right-[100px] max-[1650px]:right-[0px] ">
          <p
            className={`text-white1 text-[32px] font-bold leading-normal ${
              isAnimateCoinText1 ? "animcustom4" : ""
            }`}
          >
            Pet Nations Points
          </p>
          <p
            className={`
          text-white1 max-w-[260px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
          ${isAnimateCoinText1 ? "animcustom2" : ""}
          `}
          >
            Spend in ecosystem
          </p>
        </div>

        <FirstCoin />
        <div
          className="absolute 
      left-[550px] max-[1650px]:left-[325px] 
      top-[465px] z-[11] 
     animate-coinMoveRight1
      "
        >
          <Coin1 />
        </div>

        <div className="absolute  left-[550px] max-[1650px]:left-[325px] top-[695px] min-[1451px]:animate-coin3MoveRight1650   min-[1651px]:animate-coinMoveRight2 max-[1450px]:animate-coinMoveRightLap1 z-[11] max-[1450px]:opacity-0  ">
          <Coin1 />
        </div>

        <div className="absolute top-[130px] left-[445px] max-[1650px]:left-[290px] max-[1450px]:left-[240px] z-50 flex flex-col gap-0 items-end ">
          <p className=" uppercase leading-normal  text-white text-[16px] font-normal tracking-[0.96px] z-20">
            Name ID:
          </p>
          <p className=" z-20 text-white text-right text-[40px] font-bold tracking-[2.4px] uppercase ]">
            August
          </p>
          <p className="z-20 text-white text-[20px] italic font-[300] leading-normal uppercase tracking-[1.2px]  ">
            #PN1688
          </p>
        </div>

        <div className=" z-50 flex flex-col items-end absolute top-[540px] max-[1450px]:top-[500px] left-[470px] max-[1650px]:left-[300px] max-[1450px]:left-[270px] ">
          <p className="  uppercase leading-normal  text-white text-[16px] font-normal tracking-[0.96px]  ">
            GENUINE:
          </p>
          <div className="flex items-center gap-2">
            <StarIcon />
            <p className=" text-[24px] font-bold tracking-[1.44px]  text-white uppercase leading-normal   ">
              VERIFIED
            </p>
          </div>
        </div>

        {/* cover foot layer */}
        <CoverFoot />
        <BreedInfo />

        {/* Stereo Animation */}

        <div className="absolute top-[810px] max-[1450px]:top-[700px] left-[252px] max-[1650px]:left-[94px]   max-[1450px]:left-[100px] w-[360px] h-[168px]  z-50">
          <StereosList />
        </div>
      </div>
    </section>
  );
};

export default Section3;

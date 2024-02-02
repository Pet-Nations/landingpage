import { Archivo_Black } from "next/font/google";
import React from "react";
import VisionCard from "../components/vision-card";
import Image1 from "../components/images/vision-page/Image1";
import Image2 from "../components/images/vision-page/Image2";
import Image8 from "../components/images/vision-page/Image8";
import Image3 from "../components/images/vision-page/Image3";
import Image4 from "../components/images/vision-page/Image4";
import Image5 from "../components/images/vision-page/Image5";
import Image6 from "../components/images/vision-page/Image6";
import Image7 from "../components/images/vision-page/Image7";
import Image from "next/image";
import visionMobile from "/public/images/visionmobile.png";

const archivo = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

const VisionPage = () => {
  const CARD_CONFIG = [
    {
      image: <Image1 />,
      text1: "Limitless storyline",
      text2: "Petverses",
    },
    {
      image: <Image2 />,
      text1: "IP and global brand",
      text2: "Pet famous, with us",
    },
    {
      image: <Image3 />,
      text1: "Collaboration worldwide",
      text2: "Globally, pet domination",
    },
    {
      image: <Image4 />,
      text1: "Socialfi",
      text2: "Make it decentralize for pet society",
    },
    {
      image: <Image5 />,
      text1: "Limited NFT Collectibles",
      text2: "Limited and high price",
    },
    {
      image: <Image6 />,
      text1: "Master broker",
      text2: "Buy & sell good things for pet",
    },
    {
      image: <Image7 />,
      text1: "Harmonization (token)",
      text2: "Instant rewards for long lasting",
    },
    {
      image: <Image8 />,
      text1: "Global communities",
      text2: "Together pet growth",
    },
  ];

  return (
    <div className="flex-auto mt-10 flex flex-col bg-[#fa5252] overflow-x-hidden ">
      {/* <p
        className={`uppercase text-[64px] leading-normal absolute inline-block top-5 right-[60px] stroketext   ${archivo.className} `}
      >
        Vision map
      </p> */}
      <div className="hidden max-[1200px]:block mx-auto mt-[19.36px]">
        <Image src={visionMobile} width={323} height={96} alt="img"></Image>
      </div>

      <section className="flex-auto mt-[151px] max-[1200px]:mt-[24px] max-w-[1920px] w-full mx-auto ">
        <div className="flex items-center justify-center relative z-20">
          <div className="flex flex-col">
            <p className="text-white1 text-center text-[18px] font-[300] leading-[28px] inline-block max-width max-w-[890px] mx-auto">
              Pet Nations is an infinite pet ecosystem
            </p>
            <p className="text-white1 text-center text-[18px] font-[300] leading-[28px] inline-block max-width max-w-[890px] mx-auto">
              Experience, play, connect, and earn rewards worthy of your own
              collections.
            </p>
            <p className="text-white1 text-center text-[18px] font-[300] leading-[28px] inline-block max-width max-w-[890px] mx-auto">
              A place where users can experience pet-related products and
              services at a new level through WEB3
            </p>
          </div>
        </div>

        <div className="mt-[60px] flex gap-6 flex-wrap justify-center max-[450px]:px-4">
          {CARD_CONFIG.map((card, index) => (
            <VisionCard key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="">
        <div className="w-[7680px] h-[211px] mt-[78px] bg-bottom-foil overflow-hidden  z-1 opacity-20 max-[460px]:invisible"></div>
      </section>
    </div>
  );
};

export default VisionPage;

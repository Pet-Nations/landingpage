import React from "react";
import FirstCoin from "./FirstCoin";
import Image from "next/image";

import bgImage from "/public/images/tokens3.png";
import SecondCoin from "./SecondCoin";
import ThirdCoin from "./ThirdCoin";
import FirstText from "./FirstText";
import SecondText from "./SecondText";
import ThirdText from "./ThirdText";
import DogBanner from "./DogBanner";
import DogBannerMobile from "./DogBannerMobile";

const Section3Clone = () => {
  return (
    <section className="bg-dark-main">
      <div className="max-w-[1920px] h-[1080px] relative  section3bg m-auto flex items-center max-[996px]:hidden">
        <div
          className="w-[1390px] h-[938px] relative ml-auto mr-[40.85px] max-[1450px]:mr-0
         max-[1450px]:customBG
         max-[1450px]:overflowx-hidden
         "
        >
          <FirstCoin />
          <SecondCoin />
          <ThirdCoin />

          <DogBanner />

          <FirstText />
          <SecondText />
          <ThirdText />

          <Image
            src={bgImage}
            width={1390}
            height={938}
            className="max-[1450px]:hidden"
            alt="img"
          ></Image>
        </div>
      </div>
      <div className="hidden max-[996px]:flex flex-col pt-[68px] pb-[85px]">
        <DogBannerMobile />
      </div>
    </section>
  );
};

export default Section3Clone;

import Image from "next/image";
import React from "react";
import DogMobileImg from "/public/images/dogbannermobile.png";
import DogMobileImg1 from "/public/images/dogbannermobile1.png";
import StereosList from "@/app/components/stereo";
import FirstMobileText from "./FirstMobileText";
import SecondMobileText from "./SecondMobileText";
import ThirdMobileText from "./ThirdMobileText";
import CoinMobile from "./CoinMobile";
import BreedInfo from "./breed-info";

const DogBannerMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src={DogMobileImg}
          width={331}
          height={762}
          className="relative z-10"
          alt="img"
        ></Image>

        <BreedInfo />
        <div className="absolute left-[8px]  bottom-[60px] z-40  ">
          <StereosList />
        </div>
      </div>
      <div className="relative">
        <Image
          src={DogMobileImg1}
          className="relativev -mt-16"
          alt="img"
        ></Image>
        <div className="absolute -top-[40px] left-[100px] animate-coinMobile1">
          <CoinMobile />
        </div>
        <div className="absolute -top-[40px] left-[200px] animate-coinMobile2">
          <CoinMobile />
        </div>
        <div className="absolute -top-[40px] left-[280px] animate-coinMobile3">
          <CoinMobile />
        </div>
        <FirstMobileText />
        <SecondMobileText />
        <ThirdMobileText />
      </div>
    </div>
  );
};

export default DogBannerMobile;

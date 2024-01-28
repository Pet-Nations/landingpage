import Image from "next/image";
import React from "react";
import Section3Img1 from "/public/images/tokens3i1.png";
import Section3Img2 from "/public/images/AUGUST.png";
import DogTitle from "./DogTitle";
import DogVerify from "./DogVerify";
import CoverFoot from "./coverfoot";
import BreedInfo from "./breed-info";
import StereosList from "@/app/components/stereo";

const DogBanner = () => {
  return (
    <div
      className=" absolute 
    -left-[300px] max-[1750px]:-left-[150px] max-[1600px]:left-[0px] max-[1450px]:left-[100px] max-[1200px]:left-[24px]
     top-[50px] z-20"
    >
      <DogTitle />
      <DogVerify />

      <CoverFoot />
      <BreedInfo />

      {/* Stereo Animation */}
      <div className="absolute top-[710px] left-[41px]  w-[360px] h-[168px]  z-50">
        <StereosList />
      </div>
      <Image
        src={Section3Img2}
        alt="image"
        className="absolute left-[0] -top-[71px] z-30 "
      ></Image>
      <Image src={Section3Img1} alt="image" className="z-20"></Image>
    </div>
  );
};

export default DogBanner;

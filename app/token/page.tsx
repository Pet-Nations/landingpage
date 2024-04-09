"use client";

import Image from "next/image";
import Section2ImgM from "/public/images/tokensecction2bg.png";
import Section2Img from "/public/images/tokensecction2bg_new.png";
import Section2ImgPQ from "/public/images/pet_nations_POPQ_1x.png";

import Section1 from "./components/Section1";
import Section3Clone from "./components/Section3Clone";
import Section4 from "./components/Section4";


const TokenNomic = () => {
  return (
    <div className="overflow-x-hidden mt-12">
      <Section1 />
      <section className="max-h-[919px] bg-[#FFF4E9] p-16 max-[768px]:p-4 flex items-center justify-center z-40">
        <Image
          src={Section2Img}
          className="max-[600px]:hidden"
          alt="image"
        ></Image>
        <Image
          src={Section2Img}
          className="hidden max-[600px]:block"
          alt="image"
        ></Image>
      </section>
      <Section3Clone />
      {/* <Section4 /> */}

      <section className="max-h-[919px] bg-[#FFF4E9] p-16 max-[768px]:p-4 flex items-center justify-center z-40">
        <Image
          src={Section2ImgPQ}
          className="max-[600px]:hidden"
          alt="image"
        ></Image>
        <Image
          src={Section2ImgPQ}
          className="hidden max-[600px]:block"
          alt="image"
        ></Image>
      </section>

      <section className="w-[7680px] h-[211px] bg-bottom-foil1 opacity-30 overflow-hidden z-1"></section>
    </div>
  );
};

export default TokenNomic;

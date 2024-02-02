import React, { useState } from "react";
import Kart from "/public/images/petcardfoilv2.png";
import Image from "next/image";

const DEMO = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="relative group">
        <div className=" relative w-[448px] z-40 h-[160px] border-solid border-white1 border-[3px] overflow-hidden petcardclip ">
          <Image
            className="opacity-100 group-hover:fadeOut transition-all duration-800 absolute w-[451px] h-[163px] -right-[3px] -bottom-[3px] hover:animate-pulse"
            src={Kart}
            alt="1"
            style={{ maxWidth: "none" }}
          />
          <div className="absolute w-[68px] h-[3px] bg-white1 -left-[18px] top-0 -rotate-45   z-40"></div>
        </div>
        <div className="opacity-0   transition-all duration-800  group-hover:fadeIn absolute top-[10px] left-[10px] w-[448px] z-40 h-[160px] border-solid border-white1 border-[3px] overflow-hidden petcardclip ">
          <Image
            className="opacity-100 absolute w-[451px] h-[163px] -right-[3px] -bottom-[3px] "
            src={Kart}
            alt="1"
            style={{ maxWidth: "none" }}
          />
          <div className="absolute w-[68px] h-[3px] bg-white1 -left-[18px] top-0 -rotate-45   z-40"></div>
        </div>
      </div>
    </div>
  );
};

export default DEMO;

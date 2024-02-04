"use client"

import React from "react";
import Wind7 from "../../Wind7";
import SmokeMobile1 from "./Smoke1";
import SmokeMobile2 from "./SmokeMobile2";
import SmokeMobile3 from "./SmokeMobile3";
import SmokeMobile4 from "./SmokeMobile4";
import SmokeMobile5 from "./SmokeMobile5";
const SmokeList = ({ mode }: any) => {

  return (
    <>
      <div
        style={{ animationDelay: "1ms" }}
        className={`absolute animate-smokemobile1 -right-[5vw] top-[4vh] opacity-0  max-[996px]:w-[100px] h-auto z-10 `}
      >
        <SmokeMobile1 />
      </div>
      <div
        style={{ animationDelay: "600ms" }}
        className={`absolute animate-smokemobile1  opacity-0  top-[0vh] -right-[5vw] rotate-45  max-[996px]:w-[100px] h-auto z-10  `}
      >
        <SmokeMobile2 />
      </div>
      <div
        style={{ animationDelay: "1200ms" }}
        className={` absolute animate-smokemobile1   opacity-0 -top-[4vh] -right-[5vw]  rotate-45 max-[996px]:w-[100px] h-auto z-10 `}
      >
        <SmokeMobile3 />
      </div>
      <div
        style={{ animationDelay: "1800ms" }}
        className={`absolute animate-smokemobile1  opacity-0  -top-[8vh] -right-[5vw]  rotate-45  max-[996px]:w-[50px]  h-auto z-10  `}
      >
        <SmokeMobile4 />
      </div>
      <div
        style={{ animationDelay: "2400ms" }}
        className={`absolute animate-smokemobile1  opacity-0  -top-[12vh] -right-[5vw]  rotate-45  max-[996px]:w-[50px]  h-auto  z-10 `}
      >
        <SmokeMobile5 />
      </div>
    </>
  );
};

export default SmokeList;

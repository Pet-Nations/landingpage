import React from "react";
import Wind7 from "../../Wind7";
import SmokeMobile1 from "./Smoke1";
import SmokeMobile2 from "./SmokeMobile2";
import SmokeMobile3 from "./SmokeMobile3";
import SmokeMobile4 from "./SmokeMobile4";
import SmokeMobile5 from "./SmokeMobile5";

const SmokeList = () => {
  return (
    <>
      <div
        style={{ animationDelay: "1ms" }}
        className=" absolute animate-smokemobile1 -right-[10px] top-[0] opacity-0 w-[100px] h-[100px]"
      >
        <SmokeMobile1 />
      </div>
      <div
        style={{ animationDelay: "600ms" }}
        className=" absolute animate-smokemobile1 w-[100px] opacity-0  top-[35px] right-[15px] rotate-45  h-[100px]"
      >
        <SmokeMobile2 />
      </div>
      <div
        style={{ animationDelay: "1200ms" }}
        className=" absolute animate-smokemobile1 w-[100px]  opacity-0 top-[35px] right-[15px]  rotate-45  h-[100px]"
      >
        <SmokeMobile3 />
      </div>
      <div
        style={{ animationDelay: "1800ms" }}
        className="absolute animate-smokemobile1 w-[50px] opacity-0  top-[35px] right-[15px]  rotate-45  h-[50px]"
      >
        <SmokeMobile4 />
      </div>
      <div
        style={{ animationDelay: "2400ms" }}
        className="absolute animate-smokemobile1 w-[50px] opacity-0  top-[35px] right-[15px]  rotate-45  h-[50px]"
      >
        <SmokeMobile5 />
      </div>
    </>
  );
};

export default SmokeList;

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
        className={`
        opacity-0
        animate-smokemobile1
          absolute
           top-[10px]
           right-[15px]
           rotate-[-55deg]
          z-[1]  
           `}
      >
        <SmokeMobile1 />
      </div>
      <div
        style={{ animationDelay: "600ms" }}
        className={`
        opacity-0

        animate-smokemobile2
          absolute
           top-[30px]
           -right-[50px]
           rotate-[-55deg]
          z-[1]  
           `}
      >
        <SmokeMobile2 />
      </div>
      <div
        style={{ animationDelay: "1200ms" }}
        className={`
        opacity-0

        animate-smokemobile2
          absolute
           top-[30px]
           -right-[50px]
           rotate-[-55deg]
          z-[1]  
           `}
      >
        <SmokeMobile3 />
      </div>
      <div
        style={{ animationDelay: "1800ms" }}
        className={`
        opacity-0

        animate-smokemobile2
          absolute
           top-[20px]
           -right-[60px]
           rotate-[-55deg]
          z-[1]  
           `}
      >
        <SmokeMobile4 />
      </div>
      <div
        style={{ animationDelay: "2400ms" }}
        className={`
        opacity-0

        animate-smokemobile2
          absolute
           top-[20px]
        right-[0px]
           rotate-[-55deg]
          z-[1]  
           `}
      >
        <SmokeMobile5 />
      </div>
    </>
  );
};

export default SmokeList;

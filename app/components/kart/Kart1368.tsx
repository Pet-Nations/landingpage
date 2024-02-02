"use client";

import React from "react";
import kartIcon from "/public/images/kart.png";
import Image from "next/image";

const Kart1368 = ({ showMainPage, handleAnimation }: any) => {
  return (
    <div
      className={`
            hidden absolute max-[1368px]:block
            w-[100vw] max-w-[500px]
            h-auto
            bottom-[1vh] max-[600px]:bottom-[0vh]
            left-[14vw]  max-[600px]:left-[0vw]
            ${showMainPage ? "animate-moveAndScale1366" : ""} 
        z-50`}
      onAnimationStart={handleAnimation}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        src={kartIcon}
        alt="kartIcon"
        loading="eager"
      />
    </div>
  );
};

export default Kart1368;

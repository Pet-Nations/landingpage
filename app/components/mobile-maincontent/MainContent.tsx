"use client";

import React, { useEffect, useState } from "react";
import KartM from "../KartM";
import BG from "/public/images/bg2m.png";
import Image from "next/image";

const MainContentMobile = ({ showMainPage }: any) => {
  return (
    <div className=" hidden max-vsm:block h-[calc(100dvh-50.59px)]  relative overflow-hidden ">
      <Image
        className={`absolute z-10 ${
          showMainPage ? `animate-mobileScaleHome` : ""
        } origin-[0%_60%]`}
        src={BG}
        fill
        sizes="auto"
        quality={100}
        alt="bg"
      />
      <KartM showMainPage={showMainPage} />
      {/* <div className={`absolute top-[57%] left-[75%]   z-10`}>
      <div className={`absolute top-[75%] left-[55%] scale-50  `}>
        <Brick1 />
      </div>
      <div className={`absolute rotate-45 top-[74%] left-[56%] scale-50 `}>
        <Brick1 />
      </div>
      <div className={`absolute rotate-90 top-[74%] left-[56%] scale-50  `}>
        <Brick1 />
      </div>
      <div className={`absolute top-[73%] left-[57%] scale-50 `}>
        <Brick1 />
      </div>
    </div> */}

      {/* {showOtherVisuals && <VisualsList />} */}

      {/* <PetCardList showMenu={showOtherVisuals} /> */}
    </div>
  );
};

export default MainContentMobile;

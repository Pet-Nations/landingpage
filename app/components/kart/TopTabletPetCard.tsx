"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import IMGleft1 from "/public/images/imgleft1.png";
import IMGleft2 from "/public/images/imgleft2.png";
import IMGleft3 from "/public/images/imgleft3.png";
import IMGleft4 from "/public/images/imgleft4.png";

const TopTabletPetCard = ({ showOtherVisuals, showMainPage }: any) => {
  return (
    <div className="min-[1024.98px]:hidden max-[480px]:hidden absolute z-[10000] w-full h-auto flex justify-between">
      <div
        className={`absolute
        w-[45vw] h-auto
        max-w-[300px]
        z-20 left-[13px] top-[90px] opacity-0 flex flex-col gap-5  ${showOtherVisuals ? `animate-transLeft` : ""
          }`}
      >
        <Link href="/stories">
          <Image
            className={` ${showMainPage ? `` : ""}  `}
            src={IMGleft1}
            style={{ width: "100%", height: "100%" }}
            quality={100}
            alt="bg"
          />
        </Link>

        <Link href="/models" className="relative ">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={IMGleft3}
            quality={100}
            style={{ width: "100%", height: "100%" }}
            alt="bg"
          />
        </Link>
      </div>

      <div
        className={`absolute z-20 right-[13px] 
        w-[45vw] max-w-[300px] h-auto

         top-[83px] opacity-0 flex flex-col gap-5 
                  ${showOtherVisuals ? `animate-transRight` : ""}`}
      >
        <Link href="/vision">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={IMGleft2}
            quality={100}
            alt="bg"
          />
        </Link>
        <Link href="/token">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={IMGleft4}
            quality={100}
            alt="bg"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopTabletPetCard;

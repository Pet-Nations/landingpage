"use client";

import React, { useEffect, useRef, useState } from "react";
import KartM from "../KartM";
import BG from "/public/images/bg2m.png";

import IMGleft1 from "/public/images/imgleft1.png";
import IMGleft2 from "/public/images/imgleft2.png";
import IMGleft3 from "/public/images/imgleft3.png";
import IMGleft4 from "/public/images/imgleft4.png";
import usersmobile from "/public/images/users.png";
import brickmobiile from "/public/images/brickmobile.png";

import Image from "next/image";
import Link from "next/link";
import Car1 from "../kart/Car1";
import LeafList from "../kart/LeafList";
import StaticBrick from "../kart/StaticBrick";

const MainContentMobile = ({ showMainPage }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);
  const refmain = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={refmain}
      className="hidden max-vsm:block h-[100dvh] relative overflow-hidden"
    >
      {
        showOtherVisuals &&
        <LeafList />
      }


      {
        !showOtherVisuals && <StaticBrick showMainPage={showMainPage} />
      }

      <Image
        onAnimationEnd={(e: any) => {
          if (e.animationName === "mobileScaleHome") {
            setShowOtherVisuals(true);
          }
        }}
        className={`absolute z-10 ${showMainPage ? `animate-mobileScaleHome` : ""
          } origin-[0%_60%]`}
        src={BG}
        fill
        sizes="auto"
        quality={100}
        alt="bg"
      />
      {

      }

      <div className={`absolute
        w-[100px]
        h-auto
        bottom-[20svh]
        right-[16vw]
        rotate-[15deg]
        ${showOtherVisuals ? "hidden" : ""}
        ${showMainPage ? `animate-carMove` : ""}
        z-[100]
        `}>
        <Car1 styles={{ width: '100%', height: '100%' }} />
      </div>

      <KartM showMainPage={showMainPage} showOtherVisuals={showOtherVisuals} />


      <div
        className={`absolute
        max-[420px]:w-[45vw]
        max-[480px]:w-[45vw]
        max-[420px]:left-2
        max-[420px]:gap-2
        z-40 left-[13px] top-[90px] opacity-0 flex flex-col gap-5  ${showOtherVisuals ? `animate-transLeft` : ""
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
        className={`absolute z-40 right-[13px] 
        max-[420px]:right-2 max-[420px]:gap-2
        max-[420px]:w-[45vw]
        max-[480px]:w-[45vw]
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
      <div
        className={`absolute bottom-[61px] right-[15px] z-30 flex flex-col items-end opacity-0
          ${showOtherVisuals ? `animate-transUp` : ""}
       `}
      >
        <Image
          className={` ${showMainPage ? `` : ""} `}
          src={usersmobile}
          width={80}
          height={60}
          quality={100}
          alt="bg"
        />
        <p className="font-bold leading-6 text-[24px] text-right text-white1 mt-2">
          1.8 Million+
        </p>
        <p className="text-white1 leading-[10px] font-[400] text-right">
          Community members
        </p>
      </div>


      {showOtherVisuals && (
        <div className="absolute z-[11] bottom-[19vw] right-[0px] opacity-[.7]">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={brickmobiile}
            quality={100}
            alt="bg"
          />
        </div>
      )}
    </div>
  );
};

export default MainContentMobile;

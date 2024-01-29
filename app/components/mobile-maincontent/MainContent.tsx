"use client";

import React, { useEffect, useRef, useState } from "react";
import KartM from "../KartM";
import BG from "/public/images/bg2m.png";

import IMGleft1 from "/public/images/imgleft1.png";
import IMGleft2 from "/public/images/imgleft2.png";
import IMGleft3 from "/public/images/imgleft3.png";
import IMGleft4 from "/public/images/imgleft4.png";
import usersmobile from "/public/images/usersmobile.png";
import brickmobiile from "/public/images/brickmobile.png";

import Image from "next/image";
import Link from "next/link";

const MainContentMobile = ({ showMainPage }: any) => {
  const refmain = useRef<HTMLDivElement>(null);
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };

    const mainElement = refmain.current;
    if (mainElement) {
      mainElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <div
      ref={refmain}
      className="hidden max-vsm:block h-[100dvh] relative overflow-hidden"
    >
      <Image
        onAnimationEnd={(e: any) => {
          if (e.animationName === "mobileScaleHome") {
            setShowOtherVisuals(true);
          }
        }}
        className={`absolute z-10 ${
          showMainPage ? `animate-mobileScaleHome` : ""
        } origin-[0%_60%]`}
        src={BG}
        fill
        sizes="auto"
        quality={100}
        alt="bg"
      />

      <div
        className={`absolute
        max-[420px]:w-[45vw]
        max-[420px]:left-2
        max-[420px]:gap-2
        z-20 left-[13px] top-[90px] opacity-0 flex flex-col gap-5  ${
          showOtherVisuals ? `animate-transLeft` : ""
        }`}
      >
        <Link href="/stories">
          <Image
            className={` ${showMainPage ? `` : ""}  `}
            src={IMGleft1}
            quality={100}
            alt="bg"
          />
        </Link>

        <Link href="/models">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={IMGleft2}
            quality={100}
            alt="bg"
          />
        </Link>
      </div>

      <div
        className={`absolute z-20 right-[13px] 
        max-[420px]:right-2 max-[420px]:gap-2
        max-[420px]:w-[45vw]

         top-[83px] opacity-0 flex flex-col gap-5 
                  ${showOtherVisuals ? `animate-transRight` : ""}`}
      >
        <Link href="/vision">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={IMGleft3}
            sizes="40vw"
            quality={100}
            alt="bg"
          />
        </Link>
        <Link href="/token">
          <Image
            className={` ${showMainPage ? `` : ""} `}
            src={IMGleft4}
            quality={100}
            sizes="40vw"
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
      <KartM showMainPage={showMainPage} />
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

"use client";

import { useEffect, useState } from "react";
import Loading from "./components/UI/loading";
import MainPage from "./components/UI/main-page";
import Car1 from "./components/kart/Car1";
import Image from "next/image";
import Section1Img from "/public/images/tokenbg.png";
import Section1ImgM from "/public/images/tokenbgm.png";
import Sky from "/public/images/sky.png";


export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showMainPage, setShowMainPage] = useState(false);

  const [showBlackCover, setShowBlackCover] = useState(false);
  const [showBlackCover2, setShowBlackCover2] = useState(false);



  // const isLoaded = !!sessionStorage?.getItem("loaded");
  const isLoaded = false;

  // useEffect(() => {
  //   if (!isLoaded) {
  //     setShowBlackCover(true);
  //   } else {
  //     setShowLoading(false);
  //   }
  // }, [isLoaded]);


  useEffect(() => {
    setShowBlackCover(true);
  }, []);

  useEffect(() => {
    if (!showLoading) {
      // sessionStorage.setItem("loaded", "1");
      setShowBlackCover2(true);
    }
  }, [showLoading]);

  const hideLoadingScreen = () => {
    setShowLoading(false);
  };

  const startMainPage = (e: any) => {
    if (e.animationName === "heightUP1") {
      setShowMainPage(true);
    }
  };

  return (
    <main
      className={`flex z-20 flex-col relative items-center justify-center h-screen  overflow-hidden`}
    >
      {/* loading screen */}
      <div
        className={`absolute inset-0 bg-custom-bg flex items-center justify-center z-20 ${showLoading ? "visible" : "invisible"
          }  `}
      >
        <div
          onAnimationEnd={hideLoadingScreen}
          className={`absolute top-0 -translate-y-full bg-dark-main h-screen w-full z-50 ${showBlackCover ? "animate-heightDOWN" : ""
            }  `}
        />
        <div className="opacity-0 absolute">
        <Image
        src={Sky}
        className="absolute h-60vh top-[0] z-10 "
        alt="image"
      ></Image>

        <Car1/>
        <Image
        src={Section1Img}
        alt="image "
        loading={"eager"}
        priority={true}
        className="relative z-30 max-[600px]:hidden"
      ></Image>
      <Image
        src={Section1ImgM}
        loading={"eager"}
        priority={true}
        alt="image "
        className=" hidden relative z-30 max-[600px]:block"
      ></Image>
        </div>
        <Loading showLoading={showLoading} />
        <div
          className={`absolute top-0 z-20 -translate-y-full bg-dark-main h-screen w-full ${showBlackCover ? "animate-heightUP" : ""
            }  `}
        />
      </div>

      {/* kart page */}
      <div
        className={`h-full w-full absolute z-[51] inset-0  ${showLoading ? "opacity-0" : "opacity-100"
          } `}
      >
        <div
          onAnimationEnd={startMainPage}
          className={`absolute inset-0 ${isLoaded ? "opacity-0" : ""
            }  bg-dark-main h-screen w-screen  z-[555555551] ${showBlackCover2 ? "animate-heightUP1" : ""
            }  `}
        />
        <MainPage showMainPage={showMainPage} />
        <div
          className={`absolute ${isLoaded ? "opacity-0" : ""
            } inset-0  z-[555555551] -translate-y-full bg-dark-main h-screen w-full ${showBlackCover2 ? "animate-heightDOWN1" : ""
            }  `}
        />
      </div>
    </main>
  );
}

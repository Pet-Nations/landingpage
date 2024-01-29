"use client";

import { useEffect, useState } from "react";
import Loading from "./components/UI/loading";
import MainPage from "./components/UI/main-page";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showMainPage, setShowMainPage] = useState(false);

  const [showBlackCover, setShowBlackCover] = useState(false);
  const [showBlackCover2, setShowBlackCover2] = useState(false);

  useEffect(() => {
    setShowBlackCover(true);
  }, []);

  useEffect(() => {
    if (!showLoading) {
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

  console.log(showMainPage, "showMainPage");

  return (
    <main
      className={`flex z-20 flex-col relative items-center justify-center h-screen  overflow-hidden`}
    >
      {/* loading screen */}
      <div
        className={`absolute inset-0 bg-custom-bg flex items-center justify-center z-20 ${
          showLoading ? "visible" : "invisible"
        }  `}
      >
        <div
          onAnimationEnd={hideLoadingScreen}
          className={`absolute top-0 -translate-y-full bg-dark-main h-screen w-full z-50 ${
            showBlackCover ? "animate-heightDOWN" : ""
          }  `}
        />
        <Loading showLoading={showLoading} />
        <div
          className={`absolute top-0 z-20 -translate-y-full bg-dark-main h-screen w-full ${
            showBlackCover ? "animate-heightUP" : ""
          }  `}
        />
      </div>

      {/* kart page */}
      <div
        className={`h-full w-full absolute z-[51] inset-0  ${
          showLoading ? "opacity-0" : "opacity-100"
        } `}
      >
        <div
          onAnimationEnd={startMainPage}
          className={`absolute inset-0  bg-dark-main h-screen w-screen  z-[51] ${
            showBlackCover2 ? "animate-heightUP1" : ""
          }  `}
        />
        <MainPage showMainPage={showMainPage} />
        <div
          className={`absolute inset-0 z-[51] -translate-y-full bg-dark-main h-screen w-full ${
            showBlackCover2 ? "animate-heightDOWN1" : ""
          }  `}
        />
      </div>
    </main>
  );
}

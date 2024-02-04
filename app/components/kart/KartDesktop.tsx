"use client";

import CarAnimation1 from "./CarAnimation1";
import CarStatic from "./CarStatic";

const KartDesktop = ({ showMainPage, showOtherVisuals, handleAnimationEnd, staticCarPNG }: any) => {


  return (
    <>
      {
        !showOtherVisuals && <CarAnimation1 showMainPage={showMainPage} handleAnimationEnd={handleAnimationEnd} />
      }
      {
        showOtherVisuals && <CarStatic showMainPage={showMainPage} handleAnimationEnd={handleAnimationEnd} staticCarPNG={staticCarPNG} />
      }

    </>
  );
};

export default KartDesktop;

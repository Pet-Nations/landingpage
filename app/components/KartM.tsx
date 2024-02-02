"use client";
import Image from "next/image";
import { useState } from "react";
import Wind5 from "./images/Wind5";
import Wind6 from "./images/effect-ui/Wind6";
import Wind7 from "./images/effect-ui/Wind7";
import Brick from "./images/effect-ui/brick";
import Brick1 from "./images/effect-ui/brick/Brick1";
import SmokeList from "./images/effect-ui/smoke/SmokeMobile/SmokeList";
import kartIcon from "/public/images/kart.png";
import Frame1 from "./effect-visual/WindMobile/Frame1";
import Frame2 from "./effect-visual/WindMobile/Frame2";
import Frame2dup from "./effect-visual/WindMobile/Frame2dup";
import Frame3 from "./effect-visual/WindMobile/Frame3";
import Frame4 from "./effect-visual/WindMobile/Frame4";

const KartM = ({ showMainPage }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);
  // ${showMainPage ? "animate-moveAndScale480" : ""}
  return (
    <div
      onAnimationStart={() => {
        setTimeout(() => {
          setShowOtherVisuals(true);
        }, 2000);
      }}
      className={`
        w-[100vw]
        h-[50.3vh]
        absolute
        scale-[.4]
        -rotate-[15deg]
        -right-[21vw] 
        -bottom-[1dvh]
        z-[11]
        ${showMainPage ? "animate-moveAndScale480" : ""}
        `}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        src={kartIcon}
        alt="kartIcon"
        loading="eager"
      />

      {showOtherVisuals && (
        <>
          <div
            className="
          absolute 
          left-[32vw]
          bottom-[5vh] 
          w-[156px]
          h-[83px]
          z-[1]
          animate-moveRightThenDisappear1Mobile"
          >
            <Frame1 />
          </div>
          <div
            className={`
            absolute 
            left-[32vw]
          z-[2]
          bottom-[5vh] 
          opacity-0
          w-[156px]
          h-[83px]
           animate-moveRightThenDisappear1MobileFrame2  
           `}
          >
            <Frame2 />
          </div>
          <div
            className={`
            absolute 
            left-[32vw]
          z-[4]
          bottom-[5vh] 
          opacity-0
          w-[156px]
          h-[83px]
           animate-moveRightThenDisappear1MobileFrame2  
           `}
          >
            <Frame2dup />
          </div>
          <div
            className={`
            absolute 
            left-[32vw]
          z-[4]
          bottom-[5vh] 
          opacity-0
          w-[156px]
          h-[83px]
           animate-moveRightThenDisappear1MobileFrame3  
           `}
          >
            <Frame3 />
          </div>
          <div
            className={`
            absolute 
            left-[71vw]
          z-[4]
          bottom-[15vh] 
          opacity-0
          w-[93px]
          h-[48px]
           animate-moveRightThenDisappear1MobileFrame4  
           `}
          >
            <Frame4 />
          </div>

          <div
            className={`absolute top-[60%] z-[1]  scale-x-[-1] -left-[15px] animate-moveLeftThenSlowDisappearMobile  `}
          >
            <Wind7 />
          </div>

          <SmokeList />
        </>
      )}

      {!showOtherVisuals && (
        <>
          <div className="absolute right-[70px] z-50 opacity-0.7 scale-50 bottom-0">
            <Brick1 />
          </div>
          <div className="absolute right-[70px]  opacity-0.7 z-50 bottom-0">
            <Brick />
          </div>
          <div className="absolute rotate-[180deg] opacity-0.7 scale-50 right-[110px] z-50 bottom-[10px]">
            <Brick1 />
          </div>
        </>
      )}
    </div>
  );
};

export default KartM;

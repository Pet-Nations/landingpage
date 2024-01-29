"use client";
import Image from "next/image";
import kartIcon from "/public/images/kart.svg";
import Brick1 from "./images/effect-ui/brick/Brick1";
import Brick from "./images/effect-ui/brick";
import { useState } from "react";
import Wind3 from "./images/effect-ui/Wind3";
import Wind1 from "./images/effect-ui/Wind1";
import Wind2 from "./images/effect-ui/Wind2";
import Wind4 from "./images/effect-ui/Wind4";
import Wind5 from "./images/Wind5";
import Wind6 from "./images/effect-ui/Wind6";
import Wind7 from "./images/effect-ui/Wind7";
import SmokeList from "./images/effect-ui/smoke/SmokeMobile/SmokeList";

const KartM = ({ showMainPage }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);

  return (
    <div
      onAnimationStart={() => {
        setTimeout(() => {
          setShowOtherVisuals(true);
        }, 2000);
      }}
      className={`
        absolute 
        -right-[5vw]
        bottom-[13vh]
        scale-[0.5]
        z-[11]
        ${showMainPage ? "animate-moveAndScale480" : ""}

        `}
    >
      <Image src={kartIcon} alt="kartIcon"></Image>
      {showOtherVisuals && (
        <>
          <div className="absolute -right-[20px] bottom-0 opacity-50 scale-[.3] animate-moveRightThenDisappear1Mobile">
            <Wind5 />
          </div>
          <div
            className={`absolute top-[35%]   scale-x-[-1] left-[10vw] animate-moveLeftThenSlowDisappearMobile  `}
          >
            <Wind6 />
          </div>

          <div
            className={`absolute top-[70%] z-[1]  scale-x-[-1] -left-[20px] animate-moveLeftThenSlowDisappearMobile  `}
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

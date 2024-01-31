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
        w-[86.6px]
        h-[90.536px]
        absolute 
        rotate-[15deg]
        right-[15vw]
        bottom-[20vh]
        z-[11]
  ${showMainPage ? "animate-moveAndScale480" : ""}
        `}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        src={kartIcon}
        alt="kartIcon"
        loading="eager"
      ></Image>

      {showOtherVisuals && (
        <>
          {/* <div className="absolute -right-[20px] bottom-0 opacity-50 scale-[.3] animate-moveRightThenDisappear1Mobile">
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
          </div> */}

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

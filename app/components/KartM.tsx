"use client";
import Frame1 from "./effect-visual/WindMobile/Frame1";
import Frame2 from "./effect-visual/WindMobile/Frame2";
import Frame2dup from "./effect-visual/WindMobile/Frame2dup";
import Frame3 from "./effect-visual/WindMobile/Frame3";
import Frame4 from "./effect-visual/WindMobile/Frame4";
import Wind7 from "./images/effect-ui/Wind7";
import SmokeList from "./images/effect-ui/smoke/SmokeMobile/SmokeList";
import Car1 from "./kart/Car1";
import LeafList from "./kart/LeafList";
import WindList from "./kart/WindList";

const KartM = ({ showMainPage, showOtherVisuals }: any) => {
  if (!showOtherVisuals) return null
  return (
    <>
      <div
        className={`
        w-[75vw]
        h-auto
        absolute
        -rotate-[15deg]
        right-[15vw]
        bottom-[20vh]
        z-[11]
        ${showMainPage ? "animate-carStatic" : ""}
        `}
      >

        <Car1 styles={{
          width: "100%",
          height: "100%"
        }} />

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
            <WindList />
            <SmokeList />
          </>
        )}

      </div>
    </>

  );
};

export default KartM;


"use client"

import Frame1 from "../effect-visual/WindMobile/Frame1";
import Frame2 from "../effect-visual/WindMobile/Frame2";
import Frame2dup from "../effect-visual/WindMobile/Frame2dup";
import Frame3 from "../effect-visual/WindMobile/Frame3";
import Frame4 from "../effect-visual/WindMobile/Frame4";
import Wind7 from "../images/effect-ui/Wind7";
import SmokeList from "../images/effect-ui/smoke/SmokeMobile/SmokeList";
import Car1 from "./Car1";
import LeafList from "./LeafList";
import WindList from "./WindList";

const CarStatic = ({ showMainPage, staticCarPNG }: any) => {

    return (
        <>
            <div
                className={`
                absolute 
                bottom-[9.57vh]  max-[1600px]:bottom-[20vh] max-[1024px]:bottom-[20vh]
                left-[5.98vw] max-[1024px]:left-[20vw]
                w-[767px] max-[1600px]:w-[40vw] max-[1024px]:w-[50vw]
                h-auto
                z-50
                ${showMainPage ? "animate-carStatic " : ""}
                `}
            >
                <Car1 />

                <>
                    <div
                        className="
          absolute 
          right-[3vw]
            bottom-[5vh]  max-[1024px]:-right-[10vw]
          w-[256px]
          h-[160px]
          z-[1]
          animate-moveRightThenDisappear1Mobile"
                    >
                        <Frame1 />
                    </div>
                    <div
                        className={`
            absolute 
            right-[3vw]
          z-[2]
            bottom-[5vh]  max-[1024px]:-right-[10vw]
          opacity-0
          w-[256px]
          h-[160px]
           animate-moveRightThenDisappear1MobileFrame2  
           `}
                    >
                        <Frame2 />
                    </div>
                    <div
                        className={`
            absolute 
            right-[3vw]
          z-[4]
            bottom-[5vh]  max-[1024px]:-right-[10vw]
          opacity-0
          w-[256px]
          h-[160px]
           animate-moveRightThenDisappear1MobileFrame2  
           `}
                    >
                        <Frame2dup />
                    </div>
                    <div
                        className={`
            absolute 
            right-[3vw]

          z-[4]
            bottom-[5vh]  max-[1024px]:-right-[10vw]
          opacity-0
          w-[256px]
          h-[160px]
           animate-moveRightThenDisappear1MobileFrame3  
           `}
                    >
                        <Frame3 />
                    </div>
                    <div
                        className={`
                            absolute z-[4]
                            -right-[5vw] max-[1600px]:-right-[6vw] max-[1024px]:-right-[5vw]
                            bottom-[27vh] max-[1600px]:bottom-[22vh]  max-[768px]:bottom-[14vh]
                            opacity-0
                            w-[256px] max-[1600px]:w-[220px] max-[1024px]:w-[110px]
                            h-[160px] max-[1600px]:h-[130px] max-[1024px]:h-[65px]
                             animate-moveRightThenDisappear1MobileFrame4  
                        `}
                    >
                        <Frame4 />
                    </div>
                    <WindList />
                    <SmokeList mode={'pc'} />
                </>

            </div>
            <LeafList />
        </>

    );
};

export default CarStatic;

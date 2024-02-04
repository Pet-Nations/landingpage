"use client";

import Car1 from "./Car1";
import StaticBrick from "./StaticBrick";

const CarAnimation1 = ({ showMainPage, handleAnimationEnd }: any) => {

    return (
        <>
            <div
                className={`
                absolute 
                z-50
                w-[217px]
                h-[217px]
                rotate-[14.35deg]
                top-[60vh]  max-[1366px]:top-[53vh] max-[996px]:top-[60vh]
                left-[49vw] max-[1366px]:left-[46vw]
                ${showMainPage ? "animate-carMove" : ""} 
                `}
                onAnimationEnd={handleAnimationEnd}
            >
                <Car1 />
            </div>
            <StaticBrick
                onAnimationEnd={handleAnimationEnd}
                showMainPage={showMainPage}

            />
        </>

    );
};

export default CarAnimation1;

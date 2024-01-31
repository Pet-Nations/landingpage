"use client";

import { useState } from "react";
import VisualsList from "../effect-visual";
import KartIcon from "../icons/KartIcon";
import Brick1 from "../images/effect-ui/brick/Brick1";
import MainContentMobile from "../mobile-maincontent/MainContent";
import PetCardList from "../pet-card-list";

const MainContent = ({ showMainPage }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);

  const handleAnimation = async (e: any) => {
    if (e.animationName === "moveAndScale") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowOtherVisuals(true);
    }
  };

  return (
    <>
      <div className="flex-auto bg-section-2 relative max-vsm:hidden">
        <div
          className={`
            absolute 
            top-[60vh] max-[1366px]:top-[55vh] 
            left-[52vw] max-[1600px]:left-[50vw]   max-[1366px]:left-[48vw] 
            ${
              showMainPage
                ? "animate-moveAndScale max-[1366px]:animate-moveAndScale1366"
                : ""
            } 
        z-50`}
          onAnimationStart={handleAnimation}
        >
          <KartIcon />
        </div>
        <div className={`absolute top-[57%] left-[75%]   z-10`}>
          <div className={`absolute top-[75%] left-[55%] scale-50  `}>
            <Brick1 />
          </div>
          <div className={`absolute rotate-45 top-[74%] left-[56%] scale-50 `}>
            <Brick1 />
          </div>
          <div className={`absolute rotate-90 top-[74%] left-[56%] scale-50  `}>
            <Brick1 />
          </div>
          <div className={`absolute top-[73%] left-[57%] scale-50 `}>
            <Brick1 />
          </div>
        </div>

        {showOtherVisuals && <VisualsList />}

        <PetCardList showMenu={showOtherVisuals} />
      </div>
      <MainContentMobile showMainPage={showMainPage} />
    </>
  );
};

export default MainContent;

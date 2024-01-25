"use-client";

import React, { useEffect, useState } from "react";
import KartIcon from "../icons/KartIcon";
import PetCardList from "../pet-card-list";
import VisualsList from "../effect-visual";
import Brick1 from "../images/effect-ui/brick/Brick1";

const MainContent = ({ showMainPage }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);

  const handleAnimation = async (e: any) => {
    if (e.animationName === "moveAndScale") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowOtherVisuals(true);
    }
  };

  return (
    <div className="flex-auto bg-section-2 relative">
      <div
        className={`absolute top-[58%] left-[55%] ${
          showMainPage ? "animate-moveAndScale" : ""
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
  );
};

export default MainContent;

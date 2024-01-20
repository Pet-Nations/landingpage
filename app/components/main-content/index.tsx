"use-client";

import React, { useEffect, useState } from "react";
import KartIcon from "../icons/KartIcon";
import PetCardList from "../pet-card-list";

const MainContent = () => {
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
        className={`absolute top-[57%] left-[50%]  animate-moveAndScale`}
        onAnimationStart={handleAnimation}
      >
        {<KartIcon />}
      </div>

      <PetCardList showMenu={showOtherVisuals} />
    </div>
  );
};

export default MainContent;

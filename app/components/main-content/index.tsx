"use client";

import { useState } from "react";
import VisualsList from "../effect-visual";
import Brick1 from "../images/effect-ui/brick/Brick1";
import MainContentMobile from "../mobile-maincontent/MainContent";
import PetCardList from "../pet-card-list";
import Kart1368 from "../kart/Kart1368";
import KartDesktop from "../kart/KartDesktop";
import TopTabletPetCard from "../kart/TopTabletPetCard";

const MainContent = ({ showMainPage }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);

  const handleAnimation = async (e: any) => {
    if (["moveAndScale1366", "moveAndScale"].includes(e.animationName)) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowOtherVisuals(true);
    }
  };

  return (
    <>
      <div className="flex-auto bg-section-2 relative max-vsm:hidden">
        <KartDesktop
          handleAnimation={handleAnimation}
          showMainPage={showMainPage}
        />

        <Kart1368
          handleAnimation={handleAnimation}
          showMainPage={showMainPage}
        />

        <TopTabletPetCard
          showMainPage={showMainPage}
          showOtherVisuals={showOtherVisuals}
        />

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

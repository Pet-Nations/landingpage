"use client";

import { useState } from "react";
import VisualsList from "../effect-visual";
import Brick1 from "../images/effect-ui/brick/Brick1";
import MainContentMobile from "../mobile-maincontent/MainContent";
import PetCardList from "../pet-card-list";
import KartDesktop from "../kart/KartDesktop";
import TopTabletPetCard from "../kart/TopTabletPetCard";
import { HEADER_ICON } from "@/app/configs";
import Link from "next/link";

const MainContent = ({ showMainPage, staticCarPNG }: any) => {
  const [showOtherVisuals, setShowOtherVisuals] = useState(false);

  const handleAnimationEnd = (e: any) => {
    if (e.animationName === "carMove") {
      setShowOtherVisuals(true);
    }
  }

  return (
    <>
      <div className="flex-auto bg-section-2 relative max-vsm:hidden">
        <KartDesktop
          showMainPage={showMainPage}
          handleAnimationEnd={handleAnimationEnd}
          showOtherVisuals={showOtherVisuals}
          staticCarPNG={staticCarPNG}
        />

        {/* <Kart1368
          handleAnimation={handleAnimationEnd}
          showMainPage={showMainPage}
        /> */}

        <TopTabletPetCard
          showMainPage={showMainPage}
          showOtherVisuals={showOtherVisuals}
        />

        {showOtherVisuals && <VisualsList />}
        {/* <div className="absolute max-[480px]:block left-[10%] bottom-[15%] z-[999]">
          <div className="flex">{HEADER_ICON.map((el: any, index: any) => {
            return (
              <Link
                className="h-10 w-10 flex items-center justify-center"
                key={index}
                href={el.url}
                target="_blank"
              >
                {el.icon}
              </Link>
            )
          })}</div>
        </div> */}
        <PetCardList showMenu={showOtherVisuals} />
      </div>
      <MainContentMobile showMainPage={showMainPage} />
    </>
  );
};

export default MainContent;

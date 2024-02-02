"use client";

import React from "react";
import KartIcon from "../icons/KartIcon";

const KartDesktop = ({ showMainPage, handleAnimation }: any) => {
  return (
    <div
      className={`
      absolute 
      top-[60vh] max-[1366px]:top-[55vh] max-[1366px]:hidden
      left-[52vw] max-[1600px]:left-[50vw]   max-[1366px]:left-[48vw] 
      ${showMainPage ? "animate-moveAndScale " : ""} 
  z-50`}
      onAnimationStart={handleAnimation}
    >
      <KartIcon />
    </div>
  );
};

export default KartDesktop;

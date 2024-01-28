import React from "react";

const FirstText = () => {
  return (
    <div
      className="
      absolute
      w-[279px] h-[106px] 
      z-50 
      top-[0px]   max-[1450px]:-top-[32px]
      left-[600px] max-[1450px]:left-[666px] max-[1100px]:left-[600px]
      "
    >
      <p
        className={`text-white1 text-[32px] font-bold leading-normal ${"animcustom1"}`}
      >
        Pet Nations Rank
      </p>
      <p
        className={`
          text-white1 max-w-[83px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
        animcustom2 }
          `}
      >
        Earn more New feeds Priority
      </p>
    </div>
  );
};

export default FirstText;

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
      <p className="text-white inline-block text-[16px] font-[300] leading-6 opacity-[0.7] flex justify-start animcustom2">Hold for more {" "} 
      {/* <p className="mt-[12px] ml-[12px] h-[1px] mx-[8px] bg-[#FF9F46] w-[40px]" /> <p className="max-w-[80px] font-light text-xs leading-6">Voting rights Higher rank VIP club</p> */}
      </p>
      <p className="text-white inline-block text-[16px] font-[300] leading-6 opacity-[0.7] flex justify-start animcustom2">Spend to burn 
      {/* <p className="mt-[12px] h-[1px] mx-[8px] bg-[#FF9F46] w-[40px]" /> <p className="max-w-[80px] font-light text-xs leading-6">Trade in app Share in IP Gift in social Play in game NFT in store Buy ticket</p> */}
      </p>
      {/* <p
        className={`
          text-white1 max-w-[83px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
        animcustom2 }
          `}
      >
        Earn more New feeds Priority
      </p> */}
    </div>
  );
};

export default FirstText;

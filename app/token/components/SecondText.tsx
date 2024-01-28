import React from "react";

const SecondText = () => {
  return (
    <div
      className="absolute 
    w-[500px] h-[82px] 
    z-50 
    top-[490px]   max-[1600px]:top-[370px]
    left-[380px] max-[1600px]:left-[832px] max-[1300px]:left-[600px] max-[1200px]:left-[550px]
    "
    >
      <p
        className={`text-white1 text-[32px] font-bold leading-normal ${"animcustom3"}`}
      >
        Pet Nations Native Token
      </p>
      <p
        className={`
          text-white1 max-w-[260px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
            animcustom2
          `}
      >
        Voting rights Higher rank VIP club Spend to burn
      </p>
    </div>
  );
};

export default SecondText;

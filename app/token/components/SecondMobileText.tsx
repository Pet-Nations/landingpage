import React from "react";

const SecondMobileText = () => {
  return (
    <div
      className="absolute 
  w-[500px] h-[82px] 
  z-50 
  top-[385px]  
  left-[135px] 
  "
    >
      <p
        className={`text-white1 text-[18px] font-bold leading-normal ${"animcustom3"}`}
      >
        Pet Nations Native Token PET
      </p>
      {/* <p
        className={`
        text-white1 max-w-[260px] inline-block text-[14px] font-[300] leading-[18px] opacity-[0.7]
          animcustom2
        `}
      >
        Voting rights Higher rank VIP club Spend to burn
      </p> */}
      <p className="text-white inline-block text-[16px] font-[300] leading-6 opacity-[0.7] flex justify-start">Hold for more 
      </p>
      <p className="text-white inline-block text-[16px] font-[300] leading-6 opacity-[0.7] flex justify-start">Spend to burn 
      </p>
    </div>
  );
};

export default SecondMobileText;

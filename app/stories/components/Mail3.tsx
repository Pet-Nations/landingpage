import React from "react";
import BoldText from "./BoldText";
import Sign from "./Sign";

const Mail3 = ({ mode }: any) => {
  const mt = mode === 1 ? "mt-0" : "mt-[32px]";

  return (
    <div
      className={`w-[584px] max-[1900px]:w-2/5 max-[1200px]:w-full p-8
    ${mode === 1 ? `bg-orange1` : `bg-white1`} 
    
   relative`}
    >
      {mode !== 1 && (
        <>
          <p className="text-[32px] font-[400] leading-6 text-dark-main ">
            Journey Home
          </p>
          <div className="w-[249px] h-[2px] bg-dark-main mt-2 relative -left-[32px]"></div>
        </>
      )}
      <p className={`${mt} font-[300] leading-[26px] text-[16px]`}>
        <BoldText title="Dream Walker" />
        starting from <BoldText title="Rafael" />
        (August) will team up and find every pieces of evidences left behind
        from the mysterious <BoldText title="Dream Walker" /> who successfully
        returned to the outer world.
      </p>
      <p className="font-[300] leading-[26px] text-[16px]">
        As a result, they will took themself on a series of exciting quests and
        events hoping that it would eventually leads to their return to the{" "}
        <BoldText title="real world." />.
      </p>
      <div className="absolute bottom-8 max-[1200px]:relative mt-10">
        <Sign />
      </div>
    </div>
  );
};

export default Mail3;

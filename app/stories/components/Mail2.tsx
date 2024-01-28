import React from "react";
import CEOSIGN from "/public/images/signCEO.png";
import Image from "next/image";
import Sign from "./Sign";

const Mail2 = ({ mode }: any) => {
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
            The Nation
          </p>
          <div className="w-[249px] h-[2px] bg-dark-main mt-2 relative -left-[32px]"></div>
        </>
      )}

      <p className={`${mt} font-[300] leading-[26px] text-[16px]`}>
        <span className="text-[16px] font-[500] leading-[26px] text-dark-main">
          Petverse
        </span>
        &nbsp;
        {""}
        is a peaceful place where there are no police forces and every citizen
        live together with harmony and love.
      </p>
      <p className="font-[300] leading-[26px] text-[16px]">
        This leads to when the{" "}
        <span className="text-[16px] font-[500] leading-[26px] text-dark-main">
          Petverse
        </span>
        &nbsp; government found the first{" "}
        <span className="text-[16px] font-[500] leading-[26px] text-dark-main">
          Dreamwalker
        </span>
        , they didn’t fear that those who came from another world and possess
        superpower could be a danger to them. Instead they even support the
        &nbsp;
        <span className="text-[16px] font-[500] leading-[26px] text-dark-main">
          Dreamwalker
        </span>{" "}
        &nbsp;on their jouney home to get their citizens back in a peaceful way.
      </p>
      <div className="absolute bottom-8 max-[1200px]:relative mt-10">
        <Sign />
      </div>
    </div>
  );
};

export default Mail2;

import React from "react";
import CEOSIGN from "/public/images/signCEO.png";
import Image from "next/image";
import BoldText from "./BoldText";
import Sign from "./Sign";

const Mail1 = ({ mode }: any) => {
  const mt = mode === 1 ? "mt-0" : "mt-[32px]";

  return (
    <div
      className={`w-[584px] max-[1900px]:w-2/5 max-[1200px]:w-full p-8 ${
        mode === 1 ? `bg-orange1` : `bg-white1`
      }  relative`}
    >
      {mode !== 1 && (
        <>
          <p className="text-[32px] font-[400] leading-6 text-dark-main ">
            Dream Walker
          </p>
          <div className="w-[249px] h-[2px] bg-dark-main mt-2 relative -left-[32px]"></div>
        </>
      )}

      <p className={`${mt} font-[300] leading-[26px] text-[16px]`}>
        “ <BoldText title="Dream Walker" />” are those who entered Petverse from
        the outer world through their sleep after endured the pain of losing
        their beloved pet.
      </p>
      <p className="font-[300] leading-[26px] text-[16px]">
        Through many investigation, the <BoldText title="Petverse" /> government
        found out that everyone who came from the outer world shared the same
        backstory which got them into <BoldText title="Petverse" />. In addition
        all of those <BoldText title="Petverse" /> citizens that{" "}
        <BoldText title="Dream Walker" />
        wake up into bring the name of their real-life pet. So if they are pet
        lover they can’t be bad people right?
      </p>
      <p className="font-[300] leading-[26px] text-[16px]">
        Every <BoldText title="Dream Walker" /> possess their own random special
        traits and abilities that may make some of them{" "}
        <BoldText title="Superheros" />.
      </p>

      <div className="absolute bottom-8 max-[1200px]:relative mt-10">
        <Sign />
      </div>
    </div>
  );
};

export default Mail1;

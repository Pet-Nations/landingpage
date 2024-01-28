import Image from "next/image";
import React from "react";
import CEOSIGN from "/public/images/signCEO.png";
import BoldText from "./BoldText";

const Sign = () => {
  return (
    <div>
      <p className=" font-[400] leading-[26px] text-[16px]">Blessing </p>
      <Image className="mt-[13px]" alt="img" src={CEOSIGN}></Image>
      <p className="mt-[13px]  font-[400] leading-[26px] text-[16px]">
        <BoldText nospace title="Genji Le" />, Founder
      </p>
    </div>
  );
};

export default Sign;

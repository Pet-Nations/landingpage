"use client";

import React from "react";
import CEOSIGN from "/public/images/signCEO.png";
import Image from "next/image";
import Mail1 from "./Mail1";
import Mail2 from "./Mail2";
import Mail3 from "./Mail3";

const Content = ({ backgroundId }: any) => {
  return (
    <div className="flex max-[1200px]:flex-col-reverse gap-8 pl-[60px] mt-[78px] h-[670px] max-[1200px]:h-[1080px] pr-[60px] max-[1900px]:px-[30px]">
      {backgroundId === "1" ? <Mail1 /> : null}
      {backgroundId === "2" ? <Mail2 /> : null}
      {backgroundId === "3" ? <Mail3 /> : null}
      <div
        style={{
          backgroundImage: `url(/images/bgnation${backgroundId}.png)`,
          backgroundPositionX: "100%",
        }}
        className={`flex-auto h-full border-solid border-dark-main border-[4px] transition-all`}
      ></div>
    </div>
  );
};

export default Content;

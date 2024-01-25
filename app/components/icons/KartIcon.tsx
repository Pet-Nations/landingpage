"use client";

import Image from "next/image";
import React from "react";
import kartIcon from "/public/images/kart.svg";

const KartIcon = () => {
  return (
    <>
      <Image
        loading="eager"
        width={200}
        height={200}
        src={kartIcon}
        alt="kart"
      ></Image>
    </>
  );
};

export default KartIcon;

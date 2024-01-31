import React from "react";

import VisionImage from "/public/images/VisionImage8.png";
import Image from "next/image";

const Image8 = () => {
  return (
    <div className="w-[108px] h-[122px]">
      <Image src={VisionImage} alt="1"></Image>
    </div>
  );
};

export default Image8;

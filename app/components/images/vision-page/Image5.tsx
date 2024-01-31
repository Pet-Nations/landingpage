import React from "react";

import VisionImage from "/public/images/VisionImage5.png";
import Image from "next/image";

const Image5 = () => {
  return (
    <div className="w-[108px] h-[122px]">
      <Image src={VisionImage} alt="1"></Image>
    </div>
  );
};

export default Image5;

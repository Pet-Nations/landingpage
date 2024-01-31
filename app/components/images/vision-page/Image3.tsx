import React from "react";

import VisionImage from "/public/images/VisionImage3.png";
import Image from "next/image";

const Image3 = () => {
  return (
    <div className="w-[108px] h-[122px]">
      <Image src={VisionImage} alt="1"></Image>
    </div>
  );
};

export default Image3;

import Image from "next/image";
import React from "react";

import PetCard1 from "/public/images/petcard2.png";

const VisionMap = () => {
  return (
    <Image
      className="opacity-100 absolute w-[451px] h-[163px] -right-[3px] -bottom-[3px] "
      src={PetCard1}
      alt="1"
      style={{ maxWidth: "none" }}
    />
  );
};

export default VisionMap;

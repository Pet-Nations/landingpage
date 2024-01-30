import Image from "next/image";
import React from "react";

import PetCard1 from "/public/images/petcard4.png";

const Economy = () => {
  return (
    <Image
      loading="eager"
      style={{ width: "100%", height: "100%" }}
      src={PetCard1}
      alt="img"
    ></Image>
  );
};

export default Economy;

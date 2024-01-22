import React from "react";

import ImageSrc from "/public/images/Nation.png";
import Image from "next/image";

const NationCard = () => {
  return <Image src={ImageSrc} alt={"img"}></Image>;
};

export default NationCard;

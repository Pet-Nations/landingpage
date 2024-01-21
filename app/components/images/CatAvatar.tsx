import Image from "next/image";
import React from "react";

import CatAvatarSVG from "/public/images/blackcat1.svg";

const CatAvatar = () => {
  return <Image src={CatAvatarSVG} alt="img"></Image>;
};

export default CatAvatar;

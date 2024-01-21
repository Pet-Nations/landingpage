import Image from "next/image";
import React from "react";

import DogAvatarSVG from "/public/images/dog1.svg";

const DogAvatar = () => {
  return <Image src={DogAvatarSVG} alt="img"></Image>;
};

export default DogAvatar;

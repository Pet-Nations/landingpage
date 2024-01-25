import Image from "next/image";
import React from "react";

import CatAvatarSVG from "/public/images/petcardavatar4.png";

const CatAvatar = () => {
  return (
    <Image className="group-hover:hidden" src={CatAvatarSVG} alt="img"></Image>
  );
};

export default CatAvatar;

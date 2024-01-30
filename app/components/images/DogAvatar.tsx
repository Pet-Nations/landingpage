import Image from "next/image";
import React from "react";

import DogAvatarSVG from "/public/images/petcardavatar2.png";

const DogAvatar = () => {
  return (
    <Image
      loading="eager"
      className="group-hover:hidden"
      src={DogAvatarSVG}
      alt="img"
    ></Image>
  );
};

export default DogAvatar;

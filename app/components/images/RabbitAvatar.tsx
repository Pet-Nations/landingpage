import Image from "next/image";
import React from "react";

import RabbitAvatar1 from "/public/images/petcardavatar3.png";

const RabbitAvatar = () => {
  return (
    <Image
      loading="eager"
      className="group-hover:hidden"
      src={RabbitAvatar1}
      alt="img"
    ></Image>
  );
};

export default RabbitAvatar;

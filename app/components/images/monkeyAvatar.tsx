import React from "react";

import Monkey1 from "/public/images/petcardavatar1.png";
import Image from "next/image";

const MonkeyAvatar = () => {
  return <Image className="group-hover:hidden" src={Monkey1} alt="img"></Image>;
};

export default MonkeyAvatar;

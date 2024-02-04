import React from "react";
import BrickUI from "/public/images/brick.png";
import Image from "next/image";

const Brick = () => {
  return <Image quality={100} src={BrickUI} alt="brick"></Image>;
};

export default Brick;

import Image from "next/image";
import React from "react";

import dreamWalkerImg from "/public/images/dreamwalker.png";

const StoryCard = () => {
  return (
    <div className={``}>
      <Image src={dreamWalkerImg} alt="" />
    </div>
  );
};

export default StoryCard;

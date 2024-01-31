import React from "react";
import Kart from "/public/images/kart.png";
import Image from "next/image";

const Test11 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="size-20 bg-red-20 scale-[2] animate-moveAndScale480">
        <Image src={Kart} alt="kartImage" />
      </div>
    </div>
  );
};

export default Test11;

import StarIcon from "@/app/components/icons/StarIcon";
import React from "react";

const DogVerify = () => {
  return (
    <div
      className=" z-50 
    flex flex-col items-end absolute 
    top-[463px]  
    left-[250px]"
    >
      <p className="  uppercase leading-normal  text-white text-[16px] font-normal tracking-[0.96px]  ">
        GENUINE:
      </p>
      <div className="flex items-center gap-2">
        <StarIcon />
        <p className=" text-[24px] font-bold tracking-[1.44px]  text-white uppercase leading-normal   ">
          VERIFIED
        </p>
      </div>
    </div>
  );
};

export default DogVerify;

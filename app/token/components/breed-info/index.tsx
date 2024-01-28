import React from "react";

const BreedInfo = () => {
  return (
    <div
      className="absolute 
      flex w-[380px]  max-[996px]:w-[300px]
       h-[45px] 
      items-center justify-between 
      top-[624px] max-[996px]:top-[500px]
      left-[32px]  max-[996px]:left-[20px]
    z-50"
    >
      <div className="flex flex-col justify-center items-center w-[94px]">
        <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
          BREED
        </p>
        <p className="uppercase font-bold leading-normal text-[18px] max-[996px]:text-[15px] ">
          RETRIEVER
        </p>

        <div className=" absolute w-[1px] h-[15px] left-[125px] bg-dark-main"></div>
      </div>
      <div className="flex flex-col justify-center items-center w-[94px]">
        <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
          COLOR
        </p>

        <p className="uppercase font-bold leading-normal text-[18px] max-[996px]:text-[15px] ">
          GOLD
        </p>
        <div className=" absolute w-[1px] h-[15px] left-[255px] bg-dark-main"></div>
      </div>
      <div className="flex flex-col justify-center items-center w-[94px]">
        <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
          Sex
        </p>
        <p className="uppercase font-bold leading-normal text-[18px] max-[996px]:text-[15px] ">
          Male
        </p>
      </div>
    </div>
  );
};

export default BreedInfo;

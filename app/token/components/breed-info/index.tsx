import React from "react";

const BreedInfo = () => {
  return (
    <div className="absolute flex w-[380px]  max-[1450px]:w-[300px] h-[45px] items-center justify-between top-[700px] max-[1450px]:top-[620px] left-[239px] max-[1650px]:left-[90px] max-[1450px]:left-[111px]  z-50">
      <div className="flex flex-col justify-center items-center w-[94px]">
        <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
          BREED
        </p>
        <p className="uppercase font-bold leading-normal text-[18px] ">
          RETRIEVER
        </p>

        <div className=" absolute w-[1px] h-[15px] left-[125px] bg-dark-main"></div>
      </div>
      <div className="flex flex-col justify-center items-center w-[94px]">
        <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
          COLOR
        </p>

        <p className="uppercase font-bold leading-normal text-[18px] ">GOLD</p>
        <div className=" absolute w-[1px] h-[15px] left-[255px] bg-dark-main"></div>
      </div>
      <div className="flex flex-col justify-center items-center w-[94px]">
        <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
          Sex
        </p>
        <p className="uppercase font-bold leading-normal text-[18px] ">Male</p>
      </div>
    </div>
  );
};

export default BreedInfo;

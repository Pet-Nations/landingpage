import Image from "next/image";
import React from "react";
import Hamster from "/public/images/HAM.png";
import PetnationText from "/public/images/petnationtext.png";
import SolanaImg from "/public/images/sonana.png";

const HamsterC = () => {
  return (
    <div className="relative w-[365px] h-[523.277px] max-laptop:-mt-[100px] max-smallPhone:w-[315px] ">
      <div className=" absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] z-2  max-smallPhone:w-[315px]  max-smallPhone:-right-[32px]  "></div>
      <div className="absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] top-[10px] right-[10px] z-1   max-smallPhone:w-[315px] max-smallPhone:-right-[22px] "></div>
      <div className=" absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] top-[20px] right-[20px] z-2  max-smallPhone:w-[315px]  max-smallPhone:-right-[12px]  "></div>

      <div className="w-[333px] h-[300px] absolute right-[30px]  top-[30px] bg-[#FF9F46] custom-bg-1  max-smallPhone:w-[315px]  max-smallPhone:-right-[22px]  "></div>
      <div className="w-[335px] h-[300px] absolute right-[30px]  top-[250px] bg-[#fa5252] custom-bg-2  max-smallPhone:w-[315px]  max-smallPhone:-right-[12px] "></div>

      <div className="absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] top-[30px] right-[30px] z-12 bg-dark-main  max-smallPhone:w-[315px]  max-smallPhone:-right-[2px]  ">
        <div className="absolute left-[30px] -top-[30px] animate-modelScale z-50 ">
          <Image src={Hamster} alt="img"></Image>
        </div>

        <div className="bg-[#fa5252] w-[322px] h-[193px] absolute top-[19.36px] left-[21.6px] backdrop-blur-[94px]  max-smallPhone:w-[280px] max-smallPhone:left-[17px]  ">
          <Image
            className=" opacity-15 absolute top-[15%] left-[15px]"
            src={PetnationText}
            alt="img"
          ></Image>
        </div>

        <div className="model-hamster-price  absolute left-[22px] -bottom-[26.51px] z-50  max-smallPhone:-left-[42px] ">
          <p className="absolute text-white text-[16px] font-[300] leading-[28px] top-[23.56px] left-[19.64px]">
            BUNNY
          </p>
          <p className="absolute text-[24px] font-bold leading-[28px] left-[19.64px] bottom-[20.56px]">
            #088
          </p>
          <p className="absolute text-white text-[16px] font-[300] leading-[28px] top-[23.56px] left-[256.34px]">
            Price
          </p>
          <p className="absolute text-[24px] font-bold leading-[28px] right-[98.34px] bottom-[20.56px]">
            XX.XX SOL
          </p>
          <Image
            className="absolute top-[23.56px] right-[19.64px]"
            src={SolanaImg}
            alt="img"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HamsterC;

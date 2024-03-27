import Image from "next/image";
import React from "react";
import Hamster from "/public/images/HAM.png";
import PetnationText from "/public/images/petnationtext.png";
import SolanaImg from "/public/images/sonana.png";
import PetTokenImg from "/public/images/pet_token.png";

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

        <div
          className="model-hamster-price 
          max-[380px]:w-[90vw]
          max-[380px]:left-[50%]
          max-[380px]:translate-x-[-50%]
        max-[459px]:w-[80vw]
        max-[459px]:left-[50%]
        max-[459px]:translate-x-[-43%]
         absolute left-[22px] -bottom-[26.51px] z-50  max-smallPhone:-left-[42px] "
        >
          <div className="flex justify-between items-center h-full ml-4 mr-[90.16px]">
            <div>
              <p className=" text-white1 text-[16px] font-[300] leading-[28px] ">
                BUNNY
              </p>
              <p className=" text-[24px] font-bold leading-[28px]">#088</p>
            </div>

            <div>
              <p className=" text-white1 text-[16px] font-[300] leading-[28px]">
                Price
              </p>
              <p className=" text-[24px] font-bold leading-[28px]">XX.XX PET</p>
            </div>
          </div>

          <Image
            className="absolute top-[23.56px] right-[19.64px]"
            src={PetTokenImg}
            alt="img"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HamsterC;

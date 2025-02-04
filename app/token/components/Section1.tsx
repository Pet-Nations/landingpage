"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Cloud1 from "/public/images/cloud1.png";
import Cloud2 from "/public/images/cloud2.png";
import Sky from "/public/images/sky.png";
import Section1Img from "/public/images/tokenbg.png";
import Section1ImgM from "/public/images/tokenbgm.png";
import StaticCloud from "/public/images/staticcloud.png";

const Section1 = () => {
  const [section1Width, setSection1Width] = useState(0);

  useEffect(() => {
    if (window?.innerWidth) {
      setSection1Width(window?.innerWidth);
    }
  }, []);

  return (
    <section className="tokenomic-page relative">
      <Image
        src={Section1Img}
        width={section1Width}
        alt="image "
        loading={"eager"}
        priority={true}
        className="relative z-30 max-[600px]:hidden"
      ></Image>
      <Image
        src={Section1ImgM}
        width={section1Width}
        loading={"eager"}
        priority={true}
        alt="image "
        className=" hidden relative z-30 max-[600px]:block"
      ></Image>
      <Image
        src={StaticCloud}
        width={section1Width}
        alt="image "
        className=" hidden absolute top-0 z-20 max-[600px]:block"
      ></Image>
      <Image
        src={Cloud1}
        className="absolute top-[0%] left-[0%] z-[25] animate-cloudMoveLeft"
        alt="image"
      />
      <Image
        src={Cloud2}
        className="absolute top-[0%] left-[200px] z-[25] animate-cloudMoveLeft"
        alt="image"
      />

      <Image
        src={Sky}
        width={section1Width}
        className="absolute h-60vh top-[0] z-10 "
        alt="image"
      ></Image>

      <div
        className="
        w-[601px]  max-[1200px]:w-[288px] max-[786px]:w-[188px]
         max-[786px]:animate-moveLeft100
        h-[380px]   max-[1200px]:h-[334px] 
        absolute
        z-[555]
         top-[300px] max-[1200px]:top-[10vw] max-[658px]:top-[10px] max-[600px]:top-[123px]
          right-10  max-[786px]:right-0
          pr-[60px] max-[1200px]:px-[17px]  max-[786px]:p-4
         flex 
         flex-col 
         items-end 
         justify-center 
         border-solid 
         border-2 
         bg-white3 
         border-white2 
         backdrop-blur-[24px]  
     "
      >
        <p className="text-[#1A1A1A] text-[16px] max-[1200px]:text-[12px] text-end font-bold leading-[31px]">
          The Economy
        </p>
        <p className="text-[#1A1A1A] text-dark-main text-[34px] text-end  max-[1200px]:text-[20px] max-[786px]:inline-block max-[786px]:w-[155px] font-[500] leading-normal">
          Socialfi 2.0 with Pet Nations{" "}
        </p>
        <p className="text-end text-[16px]  max-[1200px]:text-[10px]  font-[400] leading-[31px] max-[786px]:leading-[16px] inline-block max-w-[500px] break-keep text-[#1A1A1A]">
          Enhancing the economy balance and communities’ benefits with Pet Nations Native Token (PET) and Point system (CAKE)
        </p>
        {/* <div
          className="w-[468px] 
         max-[1200px]:w-[100%] 
         
          max-[1200px]:m-auto  h-[80px] 
        max-[1200px]:h-[127px]  mt-6  max-[1200px]:mt-[8px] border-solid border-1 border-black bg-[#161622] flex max-[1200px]:flex-col max-[1200px]:gap-4 gap-[56px] justify-center"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[24px] max-[1200px]:text-[14px] font-bold leading-[31px]  max-[1200px]:leading-normal text-[#A7AABF]">
              PET
            </p>
            <p className="font-bold leading-[31px] text-[24px]  max-[1200px]:text-[18px] max-[1200px]:leading-normal text-orange1">
              1.800.000
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[24px]  max-[1200px]:text-[14px] font-bold leading-[31px] max-[1200px]:leading-normal text-[#A7AABF]">
              CAKE
            </p>
            <p className="font-bold leading-[31px] text-[24px]  max-[1200px]:text-[18px] max-[1200px]:leading-normal text-orange1">
              1.800.000
            </p>
          </div>
        </div> */}
        <div className="w-full flex justify-center pl-[60px] max-[1200px]:pl-[0px]">
          <div className="mt-[24px] max-[1200px]:py-[10px] max-[786px]:px-[10px] items-center px-[40px] py-[24px] bg-[#161622] text-[#ffffff] font-bold leading-8">Go to Inventory</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

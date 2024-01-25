"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Section2Img from "/public/images/tokensection2bg.png";
import Section1Img from "/public/images/tokenbg.png";
import Section3Img from "/public/images/tokens3.png";
import Section3Img1 from "/public/images/tokens3i1.png";
import Cloud1 from "/public/images/cloud1.png";
import Cloud2 from "/public/images/cloud2.png";
import Sky from "/public/images/sky.png";
import Section3Img2 from "/public/images/AUGUST.png";
import Coin1 from "../components/images/effect-ui/coin/Coin1";
import StarIcon from "../components/icons/StarIcon";
import StereosList from "../components/stereo";

import TigerImage from "/public/images/tigerdude.png";

const TokenNomic = () => {
  const [section1Width, setSection1Width] = useState(0);

  const [isAnimateCoinText1, setIsAnimateCoinText1] = useState(false);

  useEffect(() => {
    setSection1Width(window?.innerWidth);
  }, []);

  const handleCoin1Animation = (e: any) => {
    if (e.animationName === "coinInHand") {
      setIsAnimateCoinText1(true);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <section className="tokenomic-page relative">
        <Image
          src={Section1Img}
          width={section1Width}
          alt="image "
          className="relative z-30"
        ></Image>
        <Image
          src={Cloud1}
          className="absolute top-[0%] left-[0%] z-20 animate-cloudMoveLeft"
          alt="image"
        />
        <Image
          src={Cloud2}
          className="absolute top-[0%] left-[200px] z-20 animate-cloudMoveLeft"
          alt="image"
        />

        <Image
          src={Sky}
          width={section1Width}
          className="absolute top-[0] z-10 "
          alt="image"
        ></Image>

        <div className="w-[601px] h-[380px] absolute top-[300px] right-10 pr-[60px]  flex flex-col items-end justify-center border-solid border-2 bg-white3 border-white2 backdrop-blur-[24px]  z-30   ">
          <p className="text-[16px] text-end font-bold leading-[31px]">
            The Economy
          </p>
          <p className="text-dark-main text-[34px] font-[500] leading-normal">
            Socialfi 2.0 with Pet Nations{" "}
          </p>
          <p className="text-end text-[16px] font-[400] leading-[31px] inline-block max-w-[480px] break-keep">
            Enhancing the economy balance and communities benefits with Pet
            Nations Native Token (PEN) and Point system (PET)
          </p>
          <div className="w-[468px] h-[80px]  mt-6 border-solid border-1 border-black bg-[#161622] flex gap-[56px] justify-center">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[24px] font-bold leading-[31px] text-[#A7AABF]">
                PEN
              </p>
              <p className="font-bold leading-[31px] text-[24px] text-orange1">
                1.800.000
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[24px] font-bold leading-[31px] text-[#A7AABF]">
                PET
              </p>
              <p className="font-bold leading-[31px] text-[24px] text-orange1">
                1.800.000
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[919px] bg-[#FFF4E9] flex items-center justify-center z-30">
        <Image src={Section2Img} alt="image"></Image>
      </section>
      <section className="h-[1080px] flex bg-dark-main relative items-center justify-center ">
        <div className="relative flex  justify-end  p-[40.85px] max-w-[1920px] w-[1920px]">
          <Image
            src={Section3Img}
            alt="image"
            className="relative z-10"
          ></Image>

          {/* dog head */}
          <Image
            src={Section3Img2}
            alt="image"
            className="absolute left-[213px] top-[15px] z-30  max-[1650px]:left-[64px]   "
          ></Image>

          {/* dog avatar */}
          <Image
            src={Section3Img1}
            alt="image"
            className="absolute left-[213px] top-[88px] z-20 max-[1650px]:left-[64px]  "
          ></Image>

          {/* coin in dog hand */}
          <div
            onAnimationIteration={handleCoin1Animation}
            className="absolute  left-[478px] top-[302px] animate-coinInHand z-50  max-[1650px]:left-[325px]  "
          >
            <Coin1 />
          </div>

          <div className="absolute w-[279px] h-[106px] z-50 top-[93.82px] left-[1107px]">
            <p
              // onAnimationEnd={() => setIsAnimateCoinText1(false)}
              className={`text-white1 text-[32px] font-bold leading-normal ${
                isAnimateCoinText1 ? "animcustom1" : ""
              }`}
            >
              Pet Nations Rank
            </p>
            <p
              className={`
              text-white1 max-w-[83px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
              ${isAnimateCoinText1 ? "animcustom2" : ""}
              `}
            >
              Earn more New feeds Priority
            </p>
          </div>

          <div className="absolute w-[500px] h-[82px] z-50 top-[557px] right-[550.15px] max-[1650px]:right-[250px]">
            <p
              // onAnimationEnd={() => setIsAnimateCoinText1(false)}
              className={`text-white1 text-[32px] font-bold leading-normal ${
                isAnimateCoinText1 ? "animcustom3" : ""
              }`}
            >
              Pet Nations Native Token
            </p>
            <p
              className={`
              text-white1 max-w-[260px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
              ${isAnimateCoinText1 ? "animcustom2" : ""}
              `}
            >
              Voting rights Higher rank VIP club Spend to burn
            </p>
          </div>

          <div className="absolute w-[500px] h-[82px] z-50 top-[760px] right-[100px] max-[1650px]:right-[0px] ">
            <p
              // onAnimationEnd={() => setIsAnimateCoinText1(false)}
              className={`text-white1 text-[32px] font-bold leading-normal ${
                isAnimateCoinText1 ? "animcustom4" : ""
              }`}
            >
              Pet Nations Points
            </p>
            <p
              className={`
              text-white1 max-w-[260px] inline-block text-[16px] font-[300] leading-6 opacity-[0.7]
              ${isAnimateCoinText1 ? "animcustom2" : ""}
              `}
            >
              Spend in ecosystem
            </p>
          </div>

          <div className="absolute  left-[550px] top-[230px] animate-coinMoveRight z-[11] ">
            <Coin1 />
          </div>
          <div className="absolute  left-[550px] top-[465px] animate-coinMoveRight1 z-[11] ">
            <Coin1 />
          </div>

          <div className="absolute  left-[550px] top-[695px] animate-coinMoveRight2 z-[11] ">
            <Coin1 />
          </div>

          <div className="absolute top-[130px] left-[445px] z-50 flex flex-col gap-0 items-end max-[1650px]:left-[290px] ">
            <p className=" uppercase leading-normal  text-white text-[16px] font-normal tracking-[0.96px] z-20">
              Name ID:
            </p>
            <p className=" z-20 text-white text-right text-[40px] font-bold tracking-[2.4px] uppercase ]">
              August
            </p>
            <p className="z-20 text-white text-[20px] italic font-[300] leading-normal uppercase tracking-[1.2px]  ">
              #PN1688
            </p>
          </div>

          <p className=" absolute uppercase leading-normal top-[540px] left-[545px] text-white text-[16px] font-normal tracking-[0.96px]  max-[1650px]:left-[390px]  z-50">
            GENUINE:
          </p>

          <div className="flex items-center gap-2 absolute top-[560px] left-[475px]  z-50  max-[1650px]:left-[320px]">
            <StarIcon />
            <p className=" text-[24px] font-bold tracking-[1.44px]  text-white uppercase leading-normal   ">
              VERIFIED
            </p>
          </div>

          <div className="w-[430px] h-[438px] absolute top-[520px] left-[214px] z-[40] max-[1650px]:left-[64px]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="430"
              height="438"
              viewBox="0 0 430 438"
              fill="none"
            >
              <path
                d="M430 438.002H0V0.00195312H430V438.002Z"
                fill="url(#paint0_linear_776_69313)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_776_69313"
                  x1="206.973"
                  y1="287.822"
                  x2="206.683"
                  y2="0.00223013"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF9F46" />
                  <stop offset="1" stopColor="#FF9F46" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute flex w-[380px] h-[45px] items-center justify-between top-[700px] left-[239px] max-[1650px]:left-[90px] z-50">
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

              <p className="uppercase font-bold leading-normal text-[18px] ">
                GOLD
              </p>
              <div className=" absolute w-[1px] h-[15px] left-[255px] bg-dark-main"></div>
            </div>
            <div className="flex flex-col justify-center items-center w-[94px]">
              <p className="text-[12px] font-[300] leading-normal uppercase text-dark-main">
                Sex
              </p>
              <p className="uppercase font-bold leading-normal text-[18px] ">
                Male
              </p>
            </div>
          </div>

          {/* Stereo Animation */}

          <div className="absolute top-[810px] left-[252px] w-[360px] h-[168px] max-[1650px]:left-[94px]  z-50">
            <StereosList />
          </div>
        </div>
      </section>

      <section className="h-[515px] bg-[#44b05c]">
        <div className="max-w-[1920px] relative m-auto">
          <p className=" text-[32px] font-[300] leading-[60px] absolute top-[115px] left-[212px] ">
            Earn with{" "}
            <span className="text-[40px] font-bold leading-[60px] text-dark-main">
              Pet Nations
            </span>
          </p>
          <div className="absolute top-[280px] left-[212px] flex gap-6 max-[1650px]:left-[64px] z-[51] ">
            <div className="parenthoversvg group w-[264px] h-[300px] border-2 border-solid border-[#ff4e9] bg-dark-main flex flex-col items-center justify-center gap-4 hover:bg-orange1 hover:scale-y-[1.05] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="78"
                viewBox="0 0 80 78"
                fill="none"
              >
                <path
                  d="M73.4806 0.684733L67.8025 10.0712C62.9203 8.48931 55.6549 8.79828 51.083 10.0712L45.6151 0.815799C36.6336 17.5925 39.1761 28.1938 46.0296 33.4666C44.9822 34.1221 43.9006 34.8431 42.7847 35.6327C14.2192 12.843 -11.4961 38.511 5.3741 61.4435H5.50338C8.53065 65.8331 12.0163 68.5481 15.7818 69.969C21.115 71.9813 26.603 71.4016 32.0064 70.6368C37.4099 69.8721 42.6982 68.9114 47.7376 69.2702C52.7769 69.629 57.8177 70.9228 62.4306 75.9531C65.5759 79.3826 70.0427 75.6891 66.2977 72.0317C60.6117 66.4785 54.5234 64.3333 48.5408 63.9078C42.5582 63.4822 36.8195 64.6704 31.6232 65.4058C26.427 66.1413 21.8378 66.4693 17.8951 64.982C16.046 64.2844 14.2453 63.1863 12.5086 61.4435H71.074C73.8427 51.6715 74.1365 41.332 70.9888 34.8096C80.447 29.874 84.2507 18.2201 73.4806 0.68457V0.684733ZM55.9179 25.9266C49.8931 28.8339 47.157 26.4784 45.9864 21.6173C51.8998 17.9482 55.4212 20.8953 55.9179 25.9266ZM63.4399 25.9266C63.9367 20.8951 67.458 17.948 73.3714 21.6173C72.201 26.4784 69.4647 28.8339 63.4399 25.9266Z"
                  fill="#FFF4E9"
                />
              </svg>

              <p className="text-[28px] font-bold leading-[28px] text-white1 group-hover:text-dark-main">
                IP
              </p>
              <p className="text-center inline-block max-w-[150px] text-white1 group-hover:text-dark-main">
                Create NFT Collab with brands IP for rent
              </p>
            </div>

            <div className="parenthoversvg group w-[264px] h-[300px] border-2 border-solid border-[#ff4e9] bg-dark-main flex flex-col items-center justify-center gap-4 hover:bg-orange1 hover:scale-y-[1.05] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="80"
                viewBox="0 0 66 80"
                fill="none"
              >
                <path
                  d="M31.9244 0.0991317C26.8826 0.753861 22.946 6.23383 22.946 12.8476C22.946 16.5105 24.2022 19.7814 26.1366 22.1128C15.6512 24.0838 14.8581 41.7382 14.8581 54.1325H22.1295L24.0586 80H42.5344L44.2412 54.1325H51.142C51.142 41.7041 51.3917 23.7389 39.9379 21.9645C41.7893 19.6446 42.98 16.4205 42.98 12.8479C42.98 5.79315 38.4846 0.0993873 32.9631 0.0993873C32.618 0.0993873 32.2603 0.0546886 31.9241 0.0993873L31.9245 0.0991317H31.9244ZM47.4249 0.0199512C52.9465 0.0199512 57.4525 5.67412 57.4525 12.7284C57.4525 16.3014 56.2262 19.5429 54.3745 21.8625C65.8284 23.6372 65.5934 41.6023 65.5934 54.0308H58.743L56.9558 79.9442H46.2331L47.9208 54.0309H54.8708C54.8708 41.6024 55.1055 23.6373 43.6518 21.8626C45.5031 19.543 46.7296 16.3015 46.7296 12.7284C46.7296 8.20117 44.8491 4.26701 42.0631 2.00559C43.3491 0.946448 44.7346 0.227864 46.3326 0.0198661C46.6686 -0.0246623 47.0796 0.0198661 47.425 0.0198661L47.4249 0.0199512ZM23.9367 2.00568C21.1658 4.28914 19.2702 8.21096 19.2702 12.7284C19.2702 16.3918 20.5129 19.7302 22.4475 22.0615C11.9621 24.0325 11.2281 41.637 11.2285 54.0308H18.4762L20.3629 79.9442H9.63997L7.75343 54.0308H0.40625C0.40625 41.637 1.23926 24.0325 11.7248 22.0615C9.79025 19.7306 8.54762 16.3918 8.54762 12.7284C8.54762 6.11506 12.4414 0.674936 17.4833 0.0198661C17.8193 -0.0248326 18.2302 0.0198661 18.5756 0.0198661C20.5536 0.0198661 22.3817 0.743218 23.9369 2.00559L23.9367 2.00568Z"
                  fill="#FFF4E9"
                />
              </svg>
              <p className="text-[28px] font-bold leading-[28px] text-white1 group-hover:text-dark-main">
                DeSoc{" "}
              </p>
              <p className="text-center inline-block max-w-[150px] text-white1 group-hover:text-dark-main">
                Create NFT Create contents Conquer and complete tasks
              </p>
            </div>
            <div className="parenthoversvg group w-[264px] h-[300px] border-2 border-solid border-[#ff4e9] bg-dark-main flex flex-col items-center justify-center gap-4 hover:bg-orange1 hover:scale-y-[1.05] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="78"
                viewBox="0 0 80 78"
                fill="none"
              >
                <path
                  d="M80 63.5138L74.8467 44.2824C72.4066 41.2048 67.6915 43.4481 66.4184 46.8296C65.4012 49.5295 57.8159 50.9918 55.387 41.9303C52.9581 32.8687 60.8969 31.5764 63.7424 33.951C66.1674 35.9753 72.4597 35.9542 70.5862 28.7369L70.2642 27.6625C70.3909 28.0372 70.4975 28.3949 70.5862 28.7369L71.4844 31.7346L67.0775 15.2882L43.5302 21.5977C40.2884 20.1566 39.1352 16.2633 41.7663 14.0605C47.0234 9.6592 43.5199 -2.22706 32.9696 0.600689C22.4194 3.42844 26.3646 15.8535 30.5999 16.6779C31.4422 16.8416 33.1633 21.7279 31.5197 24.8157L13.654 29.6029L18.4176 47.3809C17.6263 50.5969 12.5417 51.0818 9.68569 48.742C7.47291 46.9269 -2.02147 50.3335 0.388843 59.3293C2.79916 68.3251 13.3924 64.9617 14.0953 61.3504C14.2678 60.4605 18.9364 57.154 21.8038 60.0171L26.5763 77.8287L46.0322 72.6155C51.0177 70.1652 46.9952 66.5344 43.5862 65.2474C40.888 64.2311 39.079 54.2297 48.1416 51.8014C57.2042 49.3732 59.6059 60.3104 56.8092 62.7425C56.108 63.352 54.535 70.0608 59.4841 69.0017L58.8625 69.1779L59.84 68.9158C59.7179 68.949 59.6003 68.9766 59.4852 69.0013L60.3961 68.7429C60.2095 68.8081 60.0306 68.8636 59.8584 68.911L80 63.5138Z"
                  fill="#FFF4E9"
                />
              </svg>
              <p className="text-[28px] font-bold leading-[28px] text-white1 group-hover:text-dark-main">
                Game{" "}
              </p>
              <p className="text-center inline-block max-w-[232px] text-white1 group-hover:text-dark-main">
                Create NFT Compete in tournament
              </p>
            </div>
          </div>
          <Image
            className="absolute right-[212px] bottom-[-515px] z-50"
            src={TigerImage}
            alt="tigerimage"
          ></Image>
        </div>
      </section>
      <section className="w-[7680px] h-[211px] bg-bottom-foil1 overflow-hidden z-1"></section>
    </div>
  );
};

export default TokenNomic;

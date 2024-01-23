import Image from "next/image";
import React from "react";

import Hamster from "/public/images/HAM.png";
import PetnationText from "/public/images/petnationtext.png";
import SolanaImg from "/public/images/sonana.png";
import Diamond1 from "../components/images/effect-ui/diamons/Diamond1";
import Diamond2 from "../components/images/effect-ui/diamons/Diamond2";
import Diamond3 from "../components/images/effect-ui/diamons/Diamond3";
import Diamond4 from "../components/images/effect-ui/diamons/Diamond4";
import Diamond5 from "../components/images/effect-ui/diamons/Diamond5";
import Diamond6 from "../components/images/effect-ui/diamons/Diamond6";
import Diamond7 from "../components/images/effect-ui/diamons/Diamond7";
import Icon1 from "../components/images/model-page/Icon1";
import Icon2 from "../components/images/model-page/Icon2";
import Icon3 from "../components/images/model-page/Icon3";
import Icon4 from "../components/images/model-page/Icon4";
import Icon6 from "../components/images/model-page/Icon6";
import Icon7 from "../components/images/model-page/Icon7";
import Icon8 from "../components/images/model-page/Icon8";
import DotContainer from "../components/images/model-page/DotContainer";

const items = [
  {
    title1: "social network",
    title2: "petbook",
    icon: <Icon1 />,
  },
  {
    title1: "Collectibles ",
    title2: "NFTs",
    icon: <Icon2 />,
  },
  {
    title1: "PET Nations",
    title2: "multiverse",
    icon: <Icon3 />,
  },
  {
    title1: "AVATAR ",
    title2: "PET-VATAR",
    icon: <Icon4 />,
  },
  {
    title1: "GAMEHUB ",
    title2: "PETGAME",
    icon: <Icon6 />,
  },
  {
    title1: "IP ",
    title2: "PET-IP",
    icon: <Icon6 />,
  },
  {
    title1: "Events ",
    title2: "PETOURS",
    icon: <Icon7 />,
  },
  {
    title1: "App",
    title2: "SHOPET",
    icon: <Icon8 />,
  },
];

const ModelsPage = () => {
  return (
    <div className="flex-auto relative bg-dark-main text-white overflow-hidden">
      {/* visual */}
      <div className="absolute z-1 -left-[60px] animate-diamondMonveRight">
        <Diamond1 />
      </div>

      <DotContainer />

      <div className="absolute z-1 left-0 top-[50vh] animate-diamondMoveDown">
        <Diamond2 />
      </div>

      <div className="absolute z-1 left-[25vw] top-[50vh] animate-diamondMoveDown1">
        <Diamond3 />
      </div>
      <div className="absolute z-1 left-[10vw] top-[50vh] animate-diamondMoveDown2">
        <Diamond3 />
      </div>
      <div className="absolute z-1 left-[25vw] top-0 animate-diamondMoveDown2">
        <Diamond4 />
      </div>
      <div className="absolute z-1 left-[50vw] top-0 animate-diamondMoveDown2">
        <Diamond5 />
      </div>
      <div className="absolute rotate-90 z-1 left-[70vw] top-0 animate-diamondMoveDown2">
        <Diamond5 />
      </div>
      <div className="absolute z-1 left-[55vw] top-0 animate-diamondMoveLeft2">
        <Diamond6 />
      </div>
      <div className="absolute z-1 -rotate-180 left-[90vw] top-0 animate-diamondMoveLeft2">
        <Diamond1 />
      </div>
      <div className="absolute z-1 left-[75vw] top-[0px] animate-diamondMoveDown1">
        <Diamond3 />
      </div>
      <div className="absolute z-1 -right-[150px] top-[50vh] animate-diamondMoveLeft2">
        <Diamond7 />
      </div>
      <div className="max-w-[1920px] relative mx-auto flex items-center justify-center top-[23vh] max-[1650px]:top-[150px] ">
        <div className="relative w-[365px] h-[523.277px] ">
          <div className="absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] top-[10px] right-[10px] z-1  "></div>
          <div className=" absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] z-2  "></div>
          <div className=" absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] top-[20px] right-[20px] z-2  "></div>

          <div className="w-[333px] h-[300px] absolute right-[30px]  top-[30px] bg-[#FF9F46] custom-bg-1 "></div>
          <div className="w-[335px] h-[300px] absolute right-[30px]  top-[250px] bg-[#fa5252] custom-bg-2 "></div>

          <div className="absolute border-2 border-solid border-[#fa5252] w-[365px] h-[523.277px] top-[30px] right-[30px] z-12 bg-dark-main ">
            <div className="absolute left-[30px] -top-[30px] animate-modelScale z-50 ">
              <Image src={Hamster} alt="img"></Image>
            </div>

            <div className="bg-[#fa5252] w-[322px] h-[193px] absolute top-[19.36px] left-[21.6px] backdrop-blur-[94px] ">
              <Image
                className=" opacity-15 absolute top-[15%] left-[15px]"
                src={PetnationText}
                alt="img"
              ></Image>
            </div>

            <div className="model-hamster-price  absolute left-[22px] -bottom-[26.51px] z-50">
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

        <div className="absolute flex gap-[48px] flex-col left-[10vw] items-start  max-[1650px]:left-[32px]  ">
          {items.slice(0, 4).map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center "
              >
                {item.icon}
                <div>
                  <p className="text-[24px] font-[300] leading-[24px] text-[#ff4e9] uppercase">
                    {item.title1}
                  </p>
                  <p className="text-[56px] font-bold text-[#ff4e9] uppercase max-[1650px]:text-[40px] ">
                    {item.title2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute flex gap-[48px] flex-col right-[10vw] items-start max-[1650px]:right-[32px]">
          {items.slice(4, 8).map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center "
              >
                {item.icon}
                <div>
                  <p className="text-[24px] font-[300] leading-[24px] text-[#ff4e9] uppercase">
                    {item.title1}
                  </p>
                  <p className="text-[56px] font-bold text-[#ff4e9] uppercase  max-[1650px]:text-[40px]  ">
                    {item.title2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;

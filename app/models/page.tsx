import { Archivo_Black } from "next/font/google";
import Icon1 from "../components/images/model-page/Icon1";
import Icon2 from "../components/images/model-page/Icon2";
import Icon3 from "../components/images/model-page/Icon3";
import Icon4 from "../components/images/model-page/Icon4";
import Icon5 from "../components/images/model-page/Icon5";
import Icon6 from "../components/images/model-page/Icon6";
import Icon7 from "../components/images/model-page/Icon7";
import Icon8 from "../components/images/model-page/Icon8";
import Diamonds from "./components/Diamonds";
import HamsterC from "./components/Hamster";
import Image from "next/image";
import ImageTitle from "/public/images/visiontitle.png";

const archivo = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

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
    title1: "PETVERSES",
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
    icon: <Icon5 />,
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
    <div className="flex-auto relative mt-10 bg-dark-main text-white1 overflow-hidden max-laptop:overflow-y-auto">
      <Diamonds />
      <div className="max-w-[1920px] relative mx-auto flex items-center justify-center top-[23vh] max-laptop:top-[19px]  max-laptopLarge:top-[150px]  max-laptop:flex flex-col max-laptop:gap-[120px]   ">
        {/* <div className="hidden max-laptop:block  ">
          <Image src={ImageTitle} alt="img" />
        </div> */}
        <div className="hidden relative max-laptop:flex items-center flex-col justify-center ">
          <p
            className={`uppercase  font-[400] text-transparent text-[3rem] text-center tsx leading-[52.22px] ${archivo.className}`}
          >
            Our Models
          </p>
          <p
            style={{ transform: "rotateX(-180deg)", marginTop: "-12px" }}
            className={`opacity-[0.2]  uppercase  font-[400] text-transparent text-[3rem] text-center tsx leading-[52.22px] ${archivo.className}`}
          >
            Our Models
          </p>
          {/* <div className="blurlayer"></div> */}
        </div>

        <HamsterC />
        {/* 1200 hidden */}
        <div className="absolute flex gap-[48px] flex-col left-[10vw] items-start  max-laptopLarge:left-[32px]  max-laptop:hidden  min-[1920px]:left-[4vw] ">
          {items.slice(0, 4).map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center "
              >
                <div className="relative  top-[-6px]  size-20">{item.icon}</div>
                <div>
                  <p className="text-[24px]  font-[300] leading-[24px] text-[#ff4e9] uppercase">
                    {item.title1}
                  </p>
                  <p className="text-[56px] font-bold text-[#ff4e9] uppercase max-laptopLarge:text-[40px] ">
                    {item.title2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* 1200 hidden */}
        <div className="absolute flex gap-[48px] flex-col right-[10vw] items-start max-laptopLarge:right-[32px] min-[1920px]:right-[4vw]  max-laptop:hidden ">
          {items.slice(4, 8).map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center "
              >
                <div className="relative top-[-6px] size-20">{item.icon}</div>

                <div>
                  <p className="text-[24px] font-[300] leading-[24px] text-[#ff4e9] uppercase">
                    {item.title1}
                  </p>
                  <p className="text-[56px] font-bold text-[#ff4e9] uppercase  max-laptopLarge:text-[40px]  ">
                    {item.title2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden max-laptop:flex relative -mt-[0px] pb-[150px]  gap-[32px] flex-col items-start overflow-y-hidden">
          {items.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center relative z-50 "
              >
                <div className=" relative size-[55px] -top-[5px] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[14px] font-[300] leading-normal text-[#ff4e9] uppercase">
                    {item.title1}
                  </p>
                  <p className="text-[32px] font-bold text-[#ff4e9] uppercase leading-normal ">
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

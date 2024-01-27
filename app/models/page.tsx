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
    <div className="flex-auto relative bg-dark-main text-white overflow-hidden max-laptop:overflow-y-auto">
      <Diamonds />
      <div className="max-w-[1920px] relative mx-auto flex items-center justify-center top-[23vh] max-laptop:top-[19px]  max-laptopLarge:top-[150px]  max-laptop:flex flex-col max-laptop:gap-[120px]   ">
        <div className="hidden max-laptop:block  ">
          <p
            className={`text-[60px] font-[400] uppercase ${archivo.className} text-transparent stroketext1 relative max-smallPhone:text-[48px] `}
          >
            Vision Map
          </p>
          <p
            className={`text-[60px] opacity-[0.51] flipdown font-[400] uppercase ${archivo.className} text-transparent max-smallPhone:text-[48px]  stroketext1 relative -mt-[31px]`}
          >
            Vision Map
          </p>
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
                {item.icon}
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
                {item.icon}
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

        <div className="hidden max-laptop:flex relative -mt-[75px]  -left-[40px]  gap-[48px] flex-col right-[10vw] items-start max-laptopLarge:right-[32px]  max-laptop:py-[100px] max-smallPhone:pl-[32px] max-[375px]:pl-[60px]">
          <Diamonds />

          {items.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center relative z-50 "
              >
                {item.icon}
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
      </div>
    </div>
  );
};

export default ModelsPage;

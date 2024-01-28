import NationCard from "@/app/components/images/story-page/NationCard";
import WayHomeCard from "@/app/components/images/story-page/NationCard1";
import StoryCard from "@/app/components/story-card";
import Link from "next/link";
import React from "react";

const CardList = ({ id, mode }: any) => {
  return (
    <div
      className="flex
     max-[1200px]:flex-col  
     max-[1200px]:gap-6   max-[996px]:gap-10  
     max-[1200px]:justify-center max-[1200px]:items-center
     max-[996px]:
     justify-between 
     mt-[100px] max-[768px]:mt-[20px]
     pl-[60px] pr-[60px] max-[1900px]:px-[30px]"
    >
      <Link href="/stories/1">
        <div className="relative group max-[1900px]:w-[30vw] max-[1200px]:w-[50vw]       max-[996px]:w-[50vw]         max-[768px]:w-[75vw]              ">
          <p
            className="absolute
             top-[75px] max-[1650px]:top-[60px] max-[1450px]:top-[50px]   max-[768px]:top-[50%]  max-[768px]:-translate-y-[50%]
             left-[26px] 
          text-[24px]  max-[786px]:text-[24px]
          
          
          font-[300] leading-[24px] text-[#FFF4E9]"
          >
            Dream Walker
          </p>
          <StoryCard />
          <div
            className={`hidden group-hover:flex  ${
              !mode && id === "1" ? "flexcustom" : ""
            } absolute h-full w-full top-[13px] left-[13px] items-center justify-center`}
          >
            <p className=" absolute text-[32px] font-bold leading-6 text-center text-[#ff9f46]  max-[996px]:text-[24px] left-[50%] -translate-x-[50%] animate-pulse">
              Dream Walker
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="565"
              height="127"
              viewBox="0 0 565 127"
              fill="none"
            >
              <path
                d="M563 2V125H2V22.91L22.903 2H563Z"
                fill="#1A1A1A"
                stroke="#FFF4E9"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </Link>

      <Link href="/stories/2">
        <div className="relative group max-[1900px]:w-[30vw]  max-[1200px]:w-[50vw] max-[768px]:w-[75vw]">
          <p className="absolute top-[75px]  max-[786px]:text-[24px]  max-[768px]:top-[50%]  max-[768px]:-translate-y-[50%]  max-[1650px]:top-[60px] max-[1450px]:top-[50px] left-[26px] text-[24px] font-[300] leading-[24px] text-[#FFF4E9]">
            The Nation
          </p>
          <NationCard />
          <div
            className={`hidden group-hover:flex  ${
              !mode && id === "2" ? "flexcustom" : ""
            } absolute h-full w-full top-[13px] left-[13px] items-center justify-center`}
          >
            <p className=" absolute text-[32px] max-[996px]:text-[24px] font-bold leading-6 text-center text-[#ff9f46] left-[50%] -translate-x-[50%] animate-pulse">
              The Nation
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="565"
              height="127"
              viewBox="0 0 565 127"
              fill="none"
            >
              <path
                d="M563 2V125H2V22.91L22.903 2H563Z"
                fill="#1A1A1A"
                stroke="#FFF4E9"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </Link>

      <Link href="/stories/3">
        <div className="relative group max-[1900px]:w-[30vw]  max-[1200px]:w-[50vw] max-[768px]:w-[75vw]">
          <p
            className={`absolute   max-[768px]:top-[50%]  max-[768px]:-translate-y-[50%] max-[786px]:text-[24px] top-[75px] max-[1650px]:top-[60px]  max-[1450px]:top-[50px] left-[26px] text-[24px] font-[300] leading-[24px] text-[#FFF4E9]`}
          >
            Way Home
          </p>
          <WayHomeCard />
          <div
            className={`hidden group-hover:flex  ${
              !mode && id === "3" ? "flexcustom" : ""
            } absolute h-full w-full top-[13px] left-[13px] items-center justify-center`}
          >
            <p className=" absolute text-[32px] font-bold leading-6 text-center text-[#ff9f46]  max-[996px]:text-[24px]  left-[50%] -translate-x-[50%] animate-pulse">
              Way Home
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="565"
              height="127"
              viewBox="0 0 565 127"
              fill="none"
            >
              <path
                d="M563 2V125H2V22.91L22.903 2H563Z"
                fill="#1A1A1A"
                stroke="#FFF4E9"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardList;

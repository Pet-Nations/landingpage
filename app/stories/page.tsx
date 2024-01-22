"use client";

import { Archivo_Black } from "next/font/google";
import React, { useState } from "react";
import StoryCard from "../components/story-card";
import NationCard from "../components/images/story-page/NationCard";
import WayHomeCard from "../components/images/story-page/NationCard1";

import CEOSIGN from "/public/images/signCEO.png";
import Image from "next/image";

const archivo = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

const StoriesPage = () => {
  const [backgroundId, setBackgroundId] = useState(1);

  return (
    <div className="flex-auto relative bg-story-page">
      <p
        className={`uppercase text-[64px] leading-normal absolute inline-block top-2.5 right-[60px] stroketext text-transparent  ${archivo.className} `}
      >
        Our Story
      </p>

      <div className="flex justify-between mt-[100px] pl-[60px] pr-[60px]">
        <div onMouseEnter={() => setBackgroundId(1)} className="relative group">
          <p className="absolute top-[75px] left-[26px] text-[24px] font-[300] leading-[24px] text-[#FFF4E9]">
            Dream Walker
          </p>
          <StoryCard />
          <div className="hidden group-hover:flex absolute h-full w-full top-[13px] left-[13px] items-center justify-center">
            <p className=" absolute text-[32px] font-bold leading-6 text-center text-[#ff9f46] left-[30%] animate-pulse">
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
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
        <div onMouseEnter={() => setBackgroundId(2)} className="relative group">
          <p className="absolute top-[75px] left-[26px] text-[24px] font-[300] leading-[24px] text-[#FFF4E9]">
            The Nation
          </p>
          <NationCard />
          <div className="hidden group-hover:flex absolute h-full w-full top-[13px] left-[13px] items-center justify-center">
            <p className=" absolute text-[32px] font-bold leading-6 text-center text-[#ff9f46] left-[30%] animate-pulse">
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
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
        <div onMouseEnter={() => setBackgroundId(3)} className="relative group">
          <p className="absolute top-[75px] left-[26px] text-[24px] font-[300] leading-[24px] text-[#FFF4E9]">
            Way Home
          </p>
          <WayHomeCard />
          <div className="hidden group-hover:flex absolute h-full w-full top-[13px] left-[13px] items-center justify-center">
            <p className=" absolute text-[32px] font-bold leading-6 text-center text-[#ff9f46] left-[30%] animate-pulse">
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
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Story Lower Content */}
      <div className="flex gap-8 pl-[60px] mt-[78px] h-[670px] pr-[60px]">
        <div className="w-[584px] p-8 bg-[#FFF4e9]">
          <p className="text-[32px] font-[400] leading-6 text-dark-main ">
            Dream Walker
          </p>
          <div className="w-[249px] h-[2px] bg-dark-main mt-2 relative -left-[32px]"></div>
          <p className="mt-[32px] font-[300] leading-[26px] text-[16px]">
            From demand of showing pet monetization and commercialization their
            brand which blow up the net worth of their own. From demand of
            showing pet monetization and commercialization their brand which
            commercialization their brand which blow up the net worth of their
            own{" "}
          </p>
          <p className="mt-[32px] font-[300] leading-[26px] text-[16px]">
            From demand of showing pet monetization and commercialization their
            brand which blow up the net worth of their own. From demand of worth
            of their own From demand of showing pet monetization and
            commercialization their brand which blow up the net worth of their
            own{" "}
          </p>
          <p className="mt-[88px] font-[400] leading-[26px] text-[16px]">
            Blessing{" "}
          </p>
          <Image className="mt-[13px]" alt="img" src={CEOSIGN}></Image>

          <p className="mt-[13px]  font-[400] leading-[26px] text-[16px]">
            <span>Genji Le</span>, Founder
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(/images/bgnation${backgroundId}.png)`,
          }}
          className={`flex-auto h-full border-solid border-dark-main border-[4px] transition-all`}
        ></div>
      </div>
    </div>
  );
};

export default StoriesPage;

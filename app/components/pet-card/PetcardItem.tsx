"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Image1 from "/public/images/petcardfoilv2.png";
import Link from "next/link";
import { PET_CARDS } from "@/app/configs";

const PetcardItem = ({ item, showMenu }: any) => {
  const { id } = item;

  const [show, setShow] = useState(false);
  const [deviceHeight, setDeviceHeight] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    setDeviceHeight(window?.innerHeight);
    setDeviceHeight(window?.innerWidth);
    const delay = (id - 1) * 200;
    let timer: any;
    if (showMenu && id) {
      timer = setTimeout(() => {
        setShow(true);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [id, showMenu]);

  return (
    <Link
      href={item?.imgUrl}
      className={`relative
       group
       -right-full 
       inline-block
       transition-all
  
       ${show
          ? "max-[1600px]:animate-cardLeft1600   min-[1601px]:animate-cardLeft   "
          : ""
        } `}
    >
      <p className="absolute group-hover:invisible  z-[41] text-[32px] max-[1440px]:text-[24px] text-white1 leading-normal font-normal uppercase bottom-[8px] left-[26px] ">
        {item?.name}
      </p>
      <div
        className="absolute bottom-[3px] z-[41] right-[43px]
       max-[1450px]:w-[9vw]
       max-[1450px]:h-auto
       max-[1450px]:right-[16px]
       "
      >
        {item.avatar}
      </div>

      <div
        className={` 
      relative 
      w-[448px] 

      ${deviceHeight <= 768 && deviceWidth >= 1500
            ? "   min-[1500px]:h-[115px]   min-[1500px]:w-[300px] "
            : ""
          }
      max-[1440px]:h-[16vh]  
      max-[1440px]:w-[25.75vw] 
      z-40 h-[160px] border-solid border-white1 border-[3px] overflow-hidden petcardclip  bg-[#bababa] group-hover:bg-transparent transition-opacity duration-600 "
      `}
      >
        <div className="absolute inset-0 bgdogfoil5"></div>
        <div
          className="absolute w-[15%] h-[3px] bg-white1 
        -left-[4%] top-0  -rotate-45  z-40"
        ></div>
      </div>
      <div
        className=" opacity-0  group-hover:animate-fadeIn1 absolute top-[10px] left-[10px]
        max-[1440px]:h-[16vh]  
        max-[1440px]:w-[25.75vw] 
       w-[448px] z-40 h-[160px] "
      >
        <Image src={item.src} fill={true} alt="1" />
        <p className="absolute text-[32px] max-[1440px]:text-[24px] leading-normal font-bold uppercase bottom-[8px] left-[26px] group-hover:animate-petCardTextDOwn">
          {item?.name}
        </p>
      </div>
    </Link>
  );
};

export default PetcardItem;

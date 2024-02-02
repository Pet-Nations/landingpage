"use client";

import { Card } from "@/app/constants/types";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import Story from "../images/story";
import MonekyImg from "../images/monkey";
import MonkeyAvatar from "../images/monkeyAvatar";
import DogAvatar from "../images/DogAvatar";
import VisionMap from "../images/VisionMap";
import Economy from "../images/Economy";
import OurModel from "../images/OurModel";
import CatAvatar from "../images/CatAvatar";
import RabbitAvatar from "../images/RabbitAvatar";

const PetCard = ({ name, id, imgUrl, showMenu }: Card) => {
  const [show, setShow] = useState(false);

  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    const delay = (id - 1) * 200;
    let timer: any;
    if (showMenu && id) {
      timer = setTimeout(() => {
        setShow(true);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [id, showMenu]);

  const handleMouseEnter = (e: any) => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const CARD_CONFIG = [
    {
      id: 1,
      background: <MonekyImg isHover={isHover} />,
      background2: <Story />,
      avatar: <MonkeyAvatar />,
      title: "OUR STORY",
    },
    {
      id: 2,
      background: <MonekyImg isHover={isHover} />,
      background2: <VisionMap />,
      avatar: <DogAvatar />,
      title: "VISION MAP",
    },
    {
      id: 3,
      background: <MonekyImg isHover={isHover} />,
      background2: <OurModel />,
      avatar: <RabbitAvatar />,
      title: "OUR MODELS",
    },
    {
      id: 4,

      background: <MonekyImg isHover={isHover} />,
      background2: <Economy />,
      avatar: <CatAvatar />,
      title: "ECONOMY",
    },
  ];

  const currentCard = CARD_CONFIG.find((c) => c.id === id);

  return (
    <>
      <Link
        id={`${currentCard?.id}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={` group 
      h-[160px]  max-[1440px]:h-[140px] 
      w-[448px] max-[1440px]:w-[380px] 
      -right-full 
      relative inline-block transition-all ${
        show
          ? "max-[1600px]:animate-cardLeft1600   min-[1601px]:animate-cardLeft   "
          : ""
      }  `}
        href={imgUrl}
      >
        <div className="absolute z-9 pet-card-1 h-full ">
          {currentCard?.background}
          <div
            className="absolute
        bottom-[3px]   
         z-10 
         left-[45%]"
          >
            {currentCard?.avatar}
          </div>
        </div>
        <p className="absolute  z-9 text-[32px] max-[1440px]:text-[24px] text-white leading-normal font-normal uppercase bottom-[17px] left-[28px] ">
          {currentCard?.title}
        </p>
        {isHover && (
          <div
            className={`
          absolute 
          
          h-[160px] max-[1440px]:h-[140px] 
          z-20 w-full top-[13px] -right-[13px] `}
          >
            {currentCard?.background2}

            <p className="absolute z-9 text-[32px] max-[1440px]:text-[24px] leading-normal font-bold uppercase bottom-[17px] left-[28px] animate-petCardTextDOwn">
              {currentCard?.title}
            </p>
          </div>
        )}
      </Link>
    </>
  );
};

export default PetCard;

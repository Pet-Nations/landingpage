"use client";

import React from "react";
import PetCard from "../pet-card";
import { Card } from "@/app/constants/types";
import UserAvatar from "../users-avatar";
import MonekyImg from "../images/monkey";
import Story from "../images/story";
import MonkeyAvatar from "../images/monkeyAvatar";
import VisionMap from "../images/VisionMap";
import DogAvatar from "../images/DogAvatar";
import OurModel from "../images/OurModel";
import RabbitAvatar from "../images/RabbitAvatar";
import Economy from "../images/Economy";
import CatAvatar from "../images/CatAvatar";
import PetcardItem from "../pet-card/PetcardItem";

const PetCardList = ({ showMenu }: any) => {
  const PET_CARDS: any[] = [
    {
      id: 1,
      background2: <Story />,
      avatar: <MonkeyAvatar />,
      name: "OUR STORY",
      imgUrl: "/stories",
      src: "/images/petcard1.png",
    },
    {
      id: 2,
      name: "VISION MAP",
      imgUrl: "/vision",
      background2: <VisionMap />,
      avatar: <DogAvatar />,
      src: "/images/petcard2.png",
    },
    {
      id: 3,
      name: "OUR MODELS",
      imgUrl: "/models",
      background2: <OurModel />,
      avatar: <RabbitAvatar />,
      src: "/images/petcard3.png",
    },
    {
      id: 4,
      name: "ECONOMY",
      imgUrl: "/token",
      background2: <Economy />,
      avatar: <CatAvatar />,
      src: "/images/petcard4.png",
    },
  ];

  return (
    <div
      className="flex flex-col
     gap-[35px] max-[1366px]:gap-6 max-[1024px]:hidden
     
     
     
     h-full absolute right-0 justify-center z-40"
    >
      {/* {PET_CARDS.map((card: Card) => (
        <PetCard key={card.id} {...card} showMenu={showMenu} />
      ))} */}
      {PET_CARDS.map((x: any) => {
        return <PetcardItem key={x.id} item={x} showMenu={showMenu} />;
      })}

      <UserAvatar showMenu={showMenu} />
    </div>
  );
};

export default PetCardList;

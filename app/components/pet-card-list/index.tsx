import React from "react";
import PetCard from "../pet-card";
import { Card } from "@/app/constants/types";
import UserAvatar from "../users-avatar";

const PetCardList = ({ showMenu }: any) => {
  const PET_CARDS: Card[] = [
    {
      id: 1,
      name: "OUR STORY",
      imgUrl: "/stories",
    },
    {
      id: 2,
      name: "VISION MAP",
      imgUrl: "/vision",
    },
    {
      id: 3,
      name: "OUR MODELS",
      imgUrl: "/models",
    },
    {
      id: 4,
      name: "ECONOMY",
      imgUrl: "/token",
    },
  ];

  return (
    <div
      className="flex flex-col
     gap-[35px] max-[1366px]:gap-4 max-[1024px]:hidden
     
     
     
     h-full absolute right-0 justify-center z-40"
    >
      {PET_CARDS.map((card: Card) => (
        <PetCard key={card.id} {...card} showMenu={showMenu} />
      ))}

      <UserAvatar showMenu={showMenu} />
    </div>
  );
};

export default PetCardList;

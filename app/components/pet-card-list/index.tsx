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
      imgUrl: "",
    },
    {
      id: 4,
      name: "ECONOMY",
      imgUrl: "",
    },
  ];

  return (
    <div className="flex flex-col gap-[26px] h-screen absolute right-0 justify-center">
      {PET_CARDS.map((card: Card) => (
        <PetCard key={card.id} {...card} showMenu={showMenu} />
      ))}

      <UserAvatar showMenu={showMenu} />
    </div>
  );
};

export default PetCardList;

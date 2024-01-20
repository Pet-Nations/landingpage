"use client";

import { Card } from "@/app/constants/types";
import { log } from "console";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

const PetCard = ({ name, id, imgUrl, showMenu }: Card) => {
  const [show, setShow] = useState(false);

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

  let bgName = "";
  switch (id) {
    case 1:
      bgName = "bg-foil-1";
      break;
    case 2:
      bgName = "bg-foil-2";
      break;
    case 3:
      bgName = "bg-foil-3";
      break;
    case 4:
      bgName = "bg-foil-4";
      break;
    default:
      bgName = "";
      break;
  }

  const handleMouseEnter = () => {
    console.log("enter", id);
  };
  const handleMouseLeave = () => {
    console.log("Leave", id);
  };

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`h-[200px] ${bgName} w-[560px] -right-full relative inline-block hover:scale-105 transition-all ${
        show ? "animate-cardLeft" : ""
      }  `}
      href={"/"}
    ></Link>
  );
};

export default PetCard;

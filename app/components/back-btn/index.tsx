"use client";

import React, { useState } from "react";
import BackIcon from "../icons/BackIcon";
import { usePathname, useRouter } from "next/navigation";

const BackBTN = ({ page }: any) => {
  const router = useRouter();

  const [isMouseOver, setIsMouseOver] = useState(false);

  const pathName = usePathname();
  const handleClick = () => {
    router.back();
  };

  if (pathName === "/") {
    return null;
  }
  let klassName = "";
  let pName = "";

  switch (pathName) {
    case "/models":
    case "/token":
      klassName =
        "bg-white flex w-[115px] h-10  absolute left-[7px] -top-[46px]  items-center justify-center gap-1 hover:back-hover-1 max-[480px]:hidden";
      pName = "font-sm text-dark-main font-medium uppercase";
      break;

    default:
      klassName =
        " bg-dark-main flex w-[115px] h-10  absolute left-[7px] -top-[46px]  items-center justify-center gap-1 hover:back-hover max-[480px]:hidden";
      pName = "font-sm text-[#FFF4E9] font-medium uppercase";
  }

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={handleClick}
      className={klassName}
    >
      <p className={pName}>Back</p>
      <BackIcon isActive={isMouseOver} />
    </div>
  );
};

export default BackBTN;

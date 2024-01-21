"use client";

import React, { useState } from "react";
import BackIcon from "../icons/BackIcon";
import { usePathname, useRouter } from "next/navigation";

const BackBTN = () => {
  const router = useRouter();

  const [isMouseOver, setIsMouseOver] = useState(false);

  const pathName = usePathname();
  const handleClick = () => {
    router.back();
  };

  if (pathName === "/") {
    return null;
  }

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={handleClick}
      className="
  bg-dark-main flex w-[115px] h-10  absolute left-[7px] -top-[46px]  items-center justify-center gap-1 hover:back-hover
  "
    >
      <p className="font-sm text-[#FFF4E9] font-medium uppercase">Back</p>
      <BackIcon isActive={isMouseOver} />
    </div>
  );
};

export default BackBTN;

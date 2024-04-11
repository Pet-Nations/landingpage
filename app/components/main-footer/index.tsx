"use client";

import React, { useEffect, useRef } from "react";
import BackIcon from "../icons/BackIcon";
import BackBTN from "../back-btn";
import Link from "next/link";
import { HEADER_ICON } from "@/app/configs";

interface Props {
  page?: "models" | "community";
}

const MainFooter = ({ page }: Props) => {
  const refmain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };

    const mainElement = refmain.current;
    if (mainElement) {
      mainElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);
  return (
    <div
      ref={refmain}
      className="h-10 bg-dark-main  z-[5000] fixed bottom-0 w-full"
    >
      <BackBTN page={page} />

      <div className="flex max-[480px]:justify-around max-[1366px]:justify-between justify-center h-full items-center px-[24px] max-[550px]:px-[12px]">
        <p className="h-full flex items-center justify-center text-sm leading-[26px] text-[#FFF4E9]">
          All Rights Reserved © &nbsp;
          <span className="text-[#FF9F46] leading-[26px] font-bold text-[14px]">
            PET NATIONS{" "}
          </span>
          &nbsp; 2024
        </p>
        <div className="flex hidden max-[480px]:hidden max-[1366px]:flex">{HEADER_ICON.map((el: any, index: any) => {
          return (
            <Link
              className="h-10 w-10 flex items-center justify-center"
              key={index}
              href={el.url}
              target="_blank"
            >
              {el.icon}
            </Link>
          )
        })}</div>
      </div>
    </div>
  );
};

export default MainFooter;

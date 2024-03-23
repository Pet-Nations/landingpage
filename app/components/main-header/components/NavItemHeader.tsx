"use client";
import Link from "next/link";
import React from "react";

const NavItemHeader = ({ name, url, icon }: any) => {
  return (
    <div
      className="
      flex items-center justify-start 
    border-solid border-[#2a343e] border-[1px]
    h-[60px] p-4 max-[450px]:pl-2 hover:bg-orange1 cursor-pointer
  "
    >
      <Link target={name === "FAQ" ? "_blank" : ""} className={` inline-flex items-center `} key={url} href={url}>
        <div className={`flex items-center justify-center  h-[62px]`}>
          <span className="mr-2">{icon}</span>
          <p
            className={` inline-block   uppercase tracking-[2px] text-center text-[20px] max-[450px]:text-[16px] leading-normal text-white1 font-bold
             hover:font-bold`}
          >
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NavItemHeader;

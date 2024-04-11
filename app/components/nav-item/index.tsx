"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SmallRegtangle from "../icons/SmallRegtangle";
import { usePathname } from 'next/navigation'


const NavItem = ({ name, url, icon }: any) => {
  const isLast = name === "COMMUNITY";
  const [isHover, setIsHover] = useState(false);

  const pathname = usePathname();

  const isActive = pathname === name.toLowerCase().replace("",'/')

  const getWidth = () => {
    if (name === "DOCS") {
      return `w-[168px]`;
    }
    if (name === "TEAM") {
      return `w-[195px]`;
    }
    if (name === "Partners") {
      return `w-[239px]`;
    }
    if (name === "COMMUNITY") {
      return `w-[239px]`;
    }
    return "";
  };

  useEffect (() => {
    if(name === "DOCS" || name === "Partners"){
      setIsHover(false)
    }
  })

  return (
    <Link
      target={name === "DOC" ? "_blank" : ""}
      className={` inline-flex items-center `}
      key={url}
      href={url}
    >
      <div
        className={`flex items-center justify-center  h-[62px] ${getWidth()}`}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <span className="mr-2">{React.cloneElement(icon, { isHover, isActive })}</span>
        {isHover || isActive ? (
          <p
            className={`inline-block   uppercase tracking-[2px] text-center text-[20px] leading-normal  hover:text-dark-main  text-[#1a1a1a] font-bold
             hover:font-bold`}
          >
            {name}
          </p>
        ) : (
          <p
            // className={` text-white1 inline-block   uppercase tracking-[2px] font-[400] text-center text-[20px] leading-normal  hover:text-dark-main hover:font-bold`}
            className={`${name === "DOCS" || name === "Partners" ? "opacity-60 text-white1 inline-block   uppercase tracking-[2px] font-[400] text-center text-[20px] leading-normal":"text-white1 inline-block   uppercase tracking-[2px] font-[400] text-center text-[20px] leading-normal"}`}
          >
            {name}
          </p>
        )}

        <div className={`flex absolute w-[55px] h-[3px] ${isActive || isHover ? "bg-[#FA5252]": ""} bottom-0`}></div>
      </div>

      {/* <div className="">{!isLast && <SmallRegtangle />}</div> */}
    </Link>
  );
};

export default NavItem;

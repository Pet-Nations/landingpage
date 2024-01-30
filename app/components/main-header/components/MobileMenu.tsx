"use client";

import { HEADER_ICON, NAV_CONFIGS } from "@/app/configs";
// MobileMenu.jsx
import React from "react";
import NavItem from "../../nav-item";
import NavItemHeader from "./NavItemHeader";
import Link from "next/link";

const MobileMenuComponent = ({ isOpen, onClose }: any) => {
  return (
    <div
      className={`fixed
        flex flex-col
      top-[50px] right-0  h-[calc(100dvh-90px)] w-1/2 max-[450px]:w-2/3 bg-dark-main  transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out  z-[100]`}
    >
      <div
        className="
      flex flex-col gap:2 
        z-[50] last:pr-0"
      >
        {NAV_CONFIGS.map((nav: any) => (
          <NavItemHeader key={nav.url} {...nav} />
        ))}
      </div>

      <div className="flex-auto"></div>

      <div className=" w-full h-[88px] pl-4 max-[450px]:pl-2 flex flex-wrap items-center justify-center gap-2 ">
        {HEADER_ICON.map((el: any) => (
          <Link
            className="h-10 w-10 flex items-center justify-center hover:bg-[#FF9F46]"
            key={el.url}
            href={el.url}
          >
            {el.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenuComponent;

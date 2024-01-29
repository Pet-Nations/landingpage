"use client";

import React, { useState } from "react";
import MobileMenuComponent from "./MobileMenu";

const MobileHambugerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen, "isMenuOpen");

  return (
    <div
      className={`  w-[40px] h-[40px] flex-col items-center justify-center gap-2.5 border-solid border-[1px] border-[#2A343e] flex hover:border-orange1 ${
        isMenuOpen ? "border-orange1" : ""
      }`}
      onClick={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
      >
        <rect y="0.321289" width="20" height="2" fill="#FFF4E9" />
        <rect
          x="5.83301"
          y="8.32129"
          width="14.1667"
          height="2"
          fill="#FFF4E9"
        />
        <rect x="2.5" y="16.3213" width="17.5" height="2" fill="#FFF4E9" />
      </svg>
      <MobileMenuComponent
        isOpen={isMenuOpen}
        onClose={(e: any) => {
          setIsMenuOpen(false);
        }}
      />
    </div>
  );
};

export default MobileHambugerButton;

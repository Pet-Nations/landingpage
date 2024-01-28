"use-client";

import Link from "next/link";
import React from "react";
import SmallRegtangle from "../icons/SmallRegtangle";

const NavItem = ({ name, url, icon }: any) => {
  const isLast = name === "COMMUNITY";

  return (
    <Link
      className={`h-[62px] flex items-center pl-11 ${isLast ? "" : ""}`}
      key={url}
      href={url}
    >
      <span className="mr-2">{icon}</span>
      <p className="text-white  uppercase tracking-[2px] font-[400] text-center text-[20px] leading-normal  hover:text-dark-main  hover:font-bold">
        {name}
      </p>
      <div className="ml-12">{!isLast && <SmallRegtangle />}</div>
    </Link>
  );
};

export default NavItem;

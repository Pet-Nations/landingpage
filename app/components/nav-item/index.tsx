import Link from "next/link";
import React from "react";
import SmallRegtangle from "../icons/SmallRegtangle";

const NavItem = ({ name, url, icon }: any) => {
  console.log(name, "name");
  const isLast = name === "COMMUNITY";

  return (
    <Link
      className={`h-[62px] flex items-center pl-11 ${
        isLast ? "pr-[84px]" : ""
      }`}
      key={url}
      href={url}
    >
      <span className="mr-2">{icon}</span>
      <p className="text-white  uppercase tracking-[2px] text-center text-[20px] leading-normal  hover:text-[#ff9f46] ">
        {name}
      </p>
      <div className="ml-12">{!isLast && <SmallRegtangle />}</div>
    </Link>
  );
};

export default NavItem;

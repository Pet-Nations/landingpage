import Image from "next/image";
import React from "react";
import Avatar from "/public/images/users.png";

const UserAvatar = ({ showMenu }: any) => {
  if (!showMenu) {
    return null;
  }

  return (
    <div
      className="
    absolute 
    -bottom-[300px] 
    -left-[365px]  max-[1600px]:-left-[300px]
    animate-moveUp 
    z-40 flex flex-col items-end
    "
    >
      <Image alt="user-avatar" src={Avatar} width={105} height={55} />
      <p className="text-[#FFF4E9] text-[32px] mt-4 font-bold leading-[32px]">
        1.8 Million+
      </p>
      <p className="text-[#FFF4E9] text-[12px] leading-[21px]">
        Community members
      </p>{" "}
    </div>
  );
};

export default UserAvatar;

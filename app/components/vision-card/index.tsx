import Image from "next/image";
import React from "react";

const VisionCard = (card: any) => {
  return (
    <div className=" group w-[432px] h-[156px] bg-white hover:bg-dark-main  p-6 max-[480px]:p-4 card-border-1 relative  transition-all cursor-pointer ">
      <div className="max-w-[231px] break-words group-hover:text-white relative">
        <p className="break-words text-[24px] font-[500] group-hover:text-white">
          {card.text1}
        </p>
        <p className="max-[480px]:mt-1 break-words font-[300] leading-[26px] group-hover:text-white">
          {card.text2}
        </p>
      </div>

      <div className="absolute right-9 top-[15px] max-[480px]:right-1 min-[768px]:group-hover:scale-[1.6] transition-all">
        {card.image}
      </div>
    </div>
  );
};

export default VisionCard;

import React from "react";

import DogFootPrint from "/public/images/petcardmainfoil.png";
import Image from "next/image";

const MonekyImg = ({ isHover }: any) => {
  if (isHover) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="448"
        height="160"
        viewBox="0 0 560 200"
        fill="none"
      >
        <g filter="url(#filter0_b_2239_148)">
          <path
            d="M558.5 1.5V198.5H1.5V25.7511L25.7415 1.5H558.5Z"
            stroke="white"
            strokeWidth="3"
          />
        </g>
      </svg>
    );
  }

  return (
    <Image
      style={{ width: "100%", height: "100%" }}
      className="h-full"
      src={DogFootPrint}
      alt={"img"}
    />
  );
};

export default MonekyImg;

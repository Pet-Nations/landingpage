"use client";
import React, { useState } from "react";

const TwitterIcon = () => {
  const [color, setColor] = useState("#FFF4e9");

  return (
    <svg
      onMouseEnter={() => setColor("#FF9F46")}
      onMouseLeave={() => setColor("#FFF4e9")}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.2721 1.58667H18.0833L11.9416 8.60625L19.1668 18.1583H13.5095L9.07852 12.365L4.00845 18.1583H1.19552L7.76469 10.6501L0.833496 1.58667H6.63442L10.6397 6.88195L15.2721 1.58667ZM14.2854 16.4757H15.8432L5.78799 3.18095H4.11638L14.2854 16.4757Z"
        fill={color}
      />
    </svg>
  );
};

export default TwitterIcon;

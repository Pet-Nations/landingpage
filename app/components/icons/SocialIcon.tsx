"use client";

import React, { useState } from "react";

const SocialIcon = () => {
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
        d="M19.9998 9.8564C19.9998 12.5058 19.5557 14.6549 19.0078 14.6549C18.4599 14.6549 18.0161 12.5064 18.0161 9.8564C18.0161 7.2064 18.4601 5.05786 19.0078 5.05786C19.5555 5.05786 19.9998 7.2062 19.9998 9.8564Z"
        fill={color}
      />
      <path
        d="M17.4688 9.85646C17.4688 12.8142 16.2061 15.2129 14.6485 15.2129C13.0908 15.2129 11.8281 12.8142 11.8281 9.85646C11.8281 6.8987 13.0906 4.5 14.6483 4.5C16.2059 4.5 17.4686 6.89793 17.4686 9.85646"
        fill={color}
      />
      <path
        d="M11.2812 9.8565C11.2812 12.9988 8.75578 15.5461 5.6407 15.5461C2.52561 15.5461 0 12.9982 0 9.8565C0 6.71481 2.52542 4.16675 5.6407 4.16675C8.75598 4.16675 11.2812 6.71423 11.2812 9.8565Z"
        fill={color}
      />
    </svg>
  );
};

export default SocialIcon;

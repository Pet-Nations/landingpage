"use client";
import React, { useState } from "react";

const FacebookIcon = () => {
  const [color, setColor] = useState("#FFF4e9");

  return (
    <svg
      onMouseEnter={() => setColor("#FF9F46")}
      onMouseLeave={() => setColor("#FFF4e9")}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
    >
      <path
        d="M11.0482 11.4048L11.7868 7.84213H7.48796V6.58214C7.48796 4.69963 8.32183 3.97545 10.4797 3.97545C11.1498 3.97545 11.6894 3.9899 12 4.01881V0.789582C11.4114 0.644558 9.97271 0.5 9.13885 0.5C4.74104 0.5 2.71375 2.33915 2.71375 6.30702V7.84213H0V11.4048H2.71375V19.1568C3.73187 19.3806 4.79684 19.5 5.89287 19.5C6.43246 19.5 6.96468 19.4706 7.48743 19.4147V11.4048H11.0482Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;

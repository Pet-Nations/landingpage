"use client";
import React, { useState } from "react";
const TiktokIcon = () => {
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
        d="M14.2269 0H10.8563V13.6232C10.8563 15.2464 9.56 16.5797 7.94672 16.5797C6.33345 16.5797 5.03708 15.2464 5.03708 13.6232C5.03708 12.029 6.30465 10.7246 7.86031 10.6667V7.24639C4.4321 7.30433 1.6665 10.1159 1.6665 13.6232C1.6665 17.1594 4.48972 20 7.97554 20C11.4613 20 14.2845 17.1304 14.2845 13.6232V6.63767C15.5521 7.56522 17.1077 8.11594 18.7498 8.14495V4.72464C16.2147 4.63768 14.2269 2.55072 14.2269 0Z"
        fill={color}
      />
    </svg>
  );
};

export default TiktokIcon;

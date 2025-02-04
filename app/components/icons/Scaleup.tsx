import React from "react";

const Scaleup = ({ isHover }: any) => {
  const color = isHover ? "#1a1a1a" : "#FFF4E9";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00002 14.1C3.49708 14.1 3.90002 14.5029 3.90002 15V20.1H9.00002C9.49708 20.1 9.90002 20.5029 9.90002 21C9.90002 21.4971 9.49708 21.9 9.00002 21.9H3.00002C2.50297 21.9 2.10002 21.4971 2.10002 21V15C2.10002 14.5029 2.50297 14.1 3.00002 14.1Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1 3C14.1 2.50294 14.5029 2.1 15 2.1H21C21.4971 2.1 21.9 2.50294 21.9 3V9C21.9 9.49706 21.4971 9.9 21 9.9C20.5029 9.9 20.1 9.49706 20.1 9V3.9H15C14.5029 3.9 14.1 3.49706 14.1 3Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6364 2.3636C21.9879 2.71508 21.9879 3.28492 21.6364 3.6364L14.6364 10.6364C14.2849 10.9879 13.7151 10.9879 13.3636 10.6364C13.0121 10.2849 13.0121 9.71508 13.3636 9.3636L20.3636 2.3636C20.7151 2.01213 21.2849 2.01213 21.6364 2.3636Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1364 12.8636C11.4879 13.2151 11.4879 13.7849 11.1364 14.1364L3.63642 21.6364C3.28495 21.9879 2.7151 21.9879 2.36363 21.6364C2.01216 21.2849 2.01216 20.7151 2.36363 20.3636L9.86363 12.8636C10.2151 12.5121 10.7849 12.5121 11.1364 12.8636Z"
        fill={color}
      />
      <path
        d="M4 3C4 3.55228 3.55228 4 3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3Z"
        fill={color}
      />
      <path
        d="M22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 20.4477 20.4477 20 21 20C21.5523 20 22 20.4477 22 21Z"
        fill={color}
      />
    </svg>
  );
};

export default Scaleup;

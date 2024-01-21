import React from "react";

import DogFootPrint from "/public/images/dogfootprint.png";
import Image from "next/image";

const MonekyImg = ({ isHover }: any) => {
  let fillRatio = isHover ? "0" : "0.35";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="560"
      height="201"
      viewBox="0 0 560 201"
      fill="none"
    >
      <g filter="url(#filter0_b_579_14565)">
        <path
          d="M560 0.0263672V200.026H0V25.1564L25.12 0.0263672H560Z"
          fill="white"
          // fill={`url(#dogFootprintPattern)`}
          fill-opacity="0.35"
        />
        <path
          d="M560 0.0263672V200.026H0V25.1564L25.12 0.0263672H560Z"
          fill="url(#pattern0)"
          fill-opacity="0.05"
        />
        <path
          d="M558.5 1.52637V198.526H1.5V25.7775L25.7415 1.52637H558.5Z"
          stroke="white"
          stroke-width="3"
        />
      </g>

      <defs>
        <filter
          id="filter0_b_579_14565"
          x="-21"
          y="-20.9736"
          width="602"
          height="242"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_579_14565"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_579_14565"
            result="shape"
          />
        </filter>
        <pattern
          id="dogFootprintPattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            href={DogFootPrint?.src} // Change the path accordingly
            width="100%"
            height="100%"
          />
        </pattern>
      </defs>

      <rect
        x="10"
        y="10"
        width="560"
        height="200"
        fill={`url(#dogFootprintPattern)`}
        fillOpacity={fillRatio}
      />
    </svg>
  );
};

export default MonekyImg;

import React from "react";

const CoverFoot = () => {
  return (
    <>
      <div className="w-[430px] max-[1450px]:hidden h-[438px] absolute top-[520px] left-[214px] z-[40] max-[1650px]:left-[64px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="430px"
          height="438px"
          viewBox="0 0 430 438"
          fill="none"
        >
          <path
            d="M430 438.002H0V0.00195312H430V438.002Z"
            fill="url(#paint0_linear_776_69313)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_776_69313"
              x1="206.973"
              y1="287.822"
              x2="206.683"
              y2="0.00223013"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9F46" />
              <stop offset="1" stopColor="#FF9F46" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className=" hidden w-[370px] max-[1450px]:block h-[438px] absolute top-[492px] left-[64px] z-[40]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="332"
          height="337"
          viewBox="0 0 332 337"
          fill="none"
        >
          <path
            d="M331.113 337.004H0.768311V0.513H331.113V337.004Z"
            fill="url(#paint0_linear_2519_13325)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2519_13325"
              x1="159.774"
              y1="221.629"
              x2="159.552"
              y2="0.513213"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9F46" />
              <stop offset="1" stopColor="#FF9F46" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CoverFoot;

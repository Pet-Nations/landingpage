"use client";

import Coin1 from "@/app/components/images/effect-ui/coin/Coin1";
import React, { useEffect, useState } from "react";

const FirstCoin = () => {
  const [animateName, setAnimateName] = useState("coinMoveRight");

  const updateAnimateNAme = (newName: string) => {
    setAnimateName(newName);
  };

  const checkName = (viewport: number) => {
    if (window.innerWidth >= 1650) {
    } else {
      updateAnimateNAme("B1650C1");
    }
  };

  useEffect(() => {
    window?.innerWidth && checkName(window?.innerWidth);

    const handleResize = () => {
      if (window?.innerWidth) {
        checkName(window?.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`absolute 
        max-[1449px]:top-[200px]
        max-[1449px]:left-[190px]
        laptop1:left-[325px]
        laptop1:top-[232px]
        bigscreen:left-[550px]
        bigscreen:top-[230px]

       ${animateName}
       z-[11] `}
      >
        <Coin1 />
      </div>
    </>
  );
};

export default FirstCoin;

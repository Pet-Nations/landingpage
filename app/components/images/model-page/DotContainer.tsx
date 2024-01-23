"use client";

import React from "react";
import Dot from "./Dot";

const DotContainer = () => {
  const dotArr: any = [];

  const calculateDots = () => {
    const dotWidth = 217;
    const dotHeight = 227;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let x = 150; x < windowWidth; x += dotWidth) {
      for (let y = 150; y < windowHeight; y += dotHeight) {
        const translateY =
          dotArr.length % 2 === 0 ? "translateY(10px)" : "translateY(-10px)";
        const className =
          dotArr.length % 2 === 0
            ? "animate-diamondMoveDown"
            : "animate-pulselow";
        dotArr.push(
          <div
            key={`${x}-${y}`}
            className={`${className}`}
            style={{
              position: "absolute",
              opacity: 0.3,
              left: `${x}px`,
              top: `${y}px`,
              transform: translateY,
            }}
          >
            <Dot />
          </div>
        );
      }
    }
  };

  calculateDots();

  return <div className="absolute top">{dotArr}</div>;
};

export default DotContainer;

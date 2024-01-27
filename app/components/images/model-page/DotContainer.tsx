"use client";

import React, { useEffect, useState } from "react";
import Dot from "./Dot";

const DotContainer = () => {
  const [dotArr, setDotArr] = useState<any>([]);

  const calculateDots = () => {
    let arr = [];
    const dotWidth = 217 > window.innerWidth / 10 ? window.innerWidth : 217;
    const dotHeight = 227 > window.innerWidth / 10 ? window.innerWidth : 227;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const startPointX = windowWidth <= 1200 ? 0 : 150;
    const startPointY = windowWidth <= 1200 ? 0 : 150;

    for (let x = startPointX; x < windowWidth; x += dotWidth) {
      for (let y = startPointY; y < windowHeight; y += dotHeight) {
        const translateY =
          arr.length % 2 === 0 ? "translateY(10px)" : "translateY(-10px)";
        const className =
          arr.length % 2 === 0 ? "animate-diamondMoveDown" : "animate-pulselow";
        arr.push(
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

    setDotArr(arr);
  };

  useEffect(() => {
    calculateDots();
  }, []);

  return <div className="absolute top">{dotArr}</div>;
};

export default DotContainer;

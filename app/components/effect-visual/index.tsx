import React from "react";
import Wind1 from "../images/effect-ui/Wind1";
import Wind2 from "../images/effect-ui/Wind2";
import Wind3 from "../images/effect-ui/Wind3";
import Smoke1 from "../images/effect-ui/smoke/Smoke1";
import Smoke2 from "../images/effect-ui/smoke/Smoke2";
import Smoke3 from "../images/effect-ui/smoke/Smoke3";
import Smoke4 from "../images/effect-ui/smoke/Smoke4";
import Smoke5 from "../images/effect-ui/smoke/Smoke5";
import Smoke6 from "../images/effect-ui/smoke/Smoke6";
import Leaf1 from "../images/effect-ui/leaf/Leaf1";
import Brick from "../images/effect-ui/brick";
import Brick1 from "../images/effect-ui/brick/Brick1";

const VisualsList = () => {
  const SMOKE_ANGLE = "-25deg";

  return (
    <>
      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[75%] left-[18%] animate-pulselow1 z-10 `}
      >
        <Brick />
      </div>

      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[25%] left-[35%] animate-pulselow1 z-10 `}
      >
        <Smoke1 />
      </div>
      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[25%] left-[35%] animate-pulselow2 z-10 `}
      >
        <Smoke2 />
      </div>
      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[25%] left-[35%] animate-pulselow3 z-10 `}
      >
        <Smoke3 />
      </div>
      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[25%] left-[35%] animate-pulselow4 z-10 `}
      >
        <Smoke4 />
      </div>
      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[25%] left-[35%] animate-pulselow1 z-10 `}
      >
        <Smoke5 />
      </div>
      <div
        className={`absolute rotate-[${SMOKE_ANGLE}] scale-125 top-[20%] left-[35%] animate-pulselow1 z-10 `}
      >
        <Smoke6 />
      </div>

      <div
        className={`absolute top-[0%] left-[50%] animate-leafFallWindBlowHozirontal `}
      >
        <Leaf1 />
      </div>

      <div
        className={`absolute top-[0%] left-[0%] animate-leafFallWindBlowHozirontal2 `}
      >
        <Leaf1 />
      </div>

      <div
        className={`absolute top-[70%] left-[35%] animate-moveRightThenDisappear `}
      >
        <Wind1 />
      </div>

      <div
        className={`absolute top-[50%] left-[40%] animate-moveRightThenSlowDisappear `}
      >
        <Wind2 />
      </div>
      <div
        className={`absolute top-[45%] scale-5 left-[40%] animate-moveRightThenSlowDisappear `}
      >
        <Wind2 />
      </div>

      <div
        className={`absolute top-[90%] scale-5 left-[10%] animate-moveRightThenSlowDisappear `}
      >
        <Wind2 />
      </div>

      <div
        className={`absolute top-[55%]  scale-x-[-1] left-[5%] animate-moveLeftThenSlowDisappear  `}
      >
        <Wind3 />
      </div>

      <div
        className={`absolute top-[85%]  scale-x-[-1] left-[5%] animate-moveLeftThenSlowDisappear  `}
      >
        <Wind2 />
      </div>

      <div
        className={`absolute top-[50%] left-[40%] rotate-[-35deg] translate-x-40 animate-pulselow opacity-5 `}
      >
        <Wind3 />
      </div>
    </>
  );
};

export default VisualsList;

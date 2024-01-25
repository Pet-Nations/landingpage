import Wind1 from "../images/effect-ui/Wind1";
import Wind2 from "../images/effect-ui/Wind2";
import Wind3 from "../images/effect-ui/Wind3";
import Brick from "../images/effect-ui/brick";
import Leaf1 from "../images/effect-ui/leaf/Leaf1";
import Smoke2 from "../images/effect-ui/smoke/Smoke2";
import Smoke3 from "../images/effect-ui/smoke/Smoke3";
import Smoke4 from "../images/effect-ui/smoke/Smoke4";
import Smoke5 from "../images/effect-ui/smoke/Smoke5";
import Smoke6 from "../images/effect-ui/smoke/Smoke6";

const VisualsList = () => {
  return (
    <>
      <div className={`absolute scale-75  top-[80%] left-[27%]  z-10 `}>
        <Brick />
      </div>

      <div
        className={`absolute scale-[2] top-[20%] left-[40%] animate-cloudKart1 -rotate-[45deg] opacity-0  z-10 `}
      >
        <Smoke2 />
      </div>

      <div
        style={{ animationDelay: "800ms" }}
        className={`absolute scale-[2] top-[20%] left-[40%] animate-cloudKart2 -rotate-[45deg]  opacity-0  z-10 `}
      >
        <Smoke2 />
      </div>
      <div
        style={{ animationDelay: "1600ms" }}
        className={`absolute scale-[2] top-[20%] left-[40%] animate-cloudKart1 -rotate-[45deg] opacity-0   z-10 `}
      >
        <Smoke3 />
      </div>

      <div
        style={{ animationDelay: "2400ms" }}
        className={`absolute scale-[2] top-[15%] left-[40%] animate-cloudKart1 -rotate-[45deg] opacity-0   z-10 `}
      >
        <Smoke4 />
      </div>
      <div
        style={{ animationDelay: "3200ms" }}
        className={`absolute scale-[2] top-[5%] left-[40%] animate-cloudKart2 -rotate-[45deg] opacity-0   z-10 `}
      >
        <Smoke5 />
      </div>
      <div
        style={{ animationDelay: "4000ms" }}
        className={`absolute scale-[2] top-[0%] left-[50%] animate-cloudKart2 -rotate-[45deg] opacity-0   z-10 `}
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
        className={`absolute top-[60%] left-[35%] animate-moveRightThenDisappear `}
      >
        <Wind1 />
      </div>
      <div
        className={`absolute top-[60%] left-[35%] animate-moveRightThenDisappear `}
      >
        <Wind3 />
      </div>

      <div
        className={`absolute top-[55%]  scale-x-[-1] left-[15%] animate-moveLeftThenSlowDisappear  `}
      >
        <Wind3 />
      </div>

      <div
        className={`absolute top-[85%]  scale-x-[-1] left-[15%] animate-moveLeftThenSlowDisappear  `}
      >
        <Wind2 />
      </div>

      <div
        className={`absolute top-[50%] left-[45%] rotate-[0deg] scale-125 translate-x-40 animate-pulselow opacity-5 `}
      >
        <Wind3 />
      </div>
    </>
  );
};

export default VisualsList;

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
      <div className={`
      absolute 
       top-[77%] max-[1450px]:top-[75%]
       left-[22%]    max-[1450px]:left-[10%] 
        z-10 `}>
        <Brick />
      </div>
    </>
  );
};

export default VisualsList;

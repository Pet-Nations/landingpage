import React from "react";
import KartIcon from "../icons/KartIcon";

const MainContent = () => {
  return (
    <div className="flex-auto bg-section-2 relative">
      <div className="absolute top-[57%] left-[50%]  animate-moveAndScale">
        {<KartIcon />}
      </div>
    </div>
  );
};

export default MainContent;

import Diamond1 from "@/app/components/images/effect-ui/diamons/Diamond1";
import Diamond2 from "@/app/components/images/effect-ui/diamons/Diamond2";
import Diamond3 from "@/app/components/images/effect-ui/diamons/Diamond3";
import Diamond4 from "@/app/components/images/effect-ui/diamons/Diamond4";
import Diamond5 from "@/app/components/images/effect-ui/diamons/Diamond5";
import Diamond6 from "@/app/components/images/effect-ui/diamons/Diamond6";
import Diamond7 from "@/app/components/images/effect-ui/diamons/Diamond7";
import DotContainer from "@/app/components/images/model-page/DotContainer";
import React from "react";

const Diamonds = () => {
  return (
    <>
      {/* visual */}
      <div className="absolute z-1 opacity-0.5 -left-[60px] animate-diamondMonveRight max-laptop:hidden">
        <Diamond1 />
      </div>

      <DotContainer />

      <div className="absolute z-1 opacity-0.5  left-0 top-[50vh] animate-diamondMoveDown  max-laptop:hidden">
        <Diamond2 />
      </div>

      <div className="absolute z-1 opacity-0.5  left-[25vw] top-[50vh] animate-diamondMoveDown1">
        <Diamond3 />
      </div>
      <div className="absolute z-1 opacity-0.5  left-[10vw] top-[50vh] animate-diamondMoveDown2  max-laptop:hidden">
        <Diamond3 />
      </div>
      <div className="absolute z-1 opacity-0.5  left-[25vw] top-0 animate-diamondMoveDown2">
        <Diamond4 />
      </div>
      <div className="absolute z-1 opacity-0.5  left-[50vw] top-0 animate-diamondMoveRight2  max-laptop:hidden">
        <Diamond5 />
      </div>
      <div className="absolute rotate-90 opacity-0.5  z-1 left-[70vw] top-0 animate-diamondMoveDown1 ">
        <Diamond1 />
      </div>
      <div className="absolute z-1 opacity-0.5  left-[55vw] top-0 animate-diamondMoveLeft2 max-laptop:left-0 ">
        <Diamond6 />
      </div>
      <div className="absolute z-1 opacity-0.5  -rotate-180 left-[90vw] top-0 animate-diamondMoveLeft2 max-laptop:hidden">
        <Diamond6 />
      </div>
      <div className="absolute z-1 opacity-0.5  left-[75vw] top-[0px] animate-diamondMoveDown1 max-laptop:hidden">
        <Diamond3 />
      </div>
      <div className="absolute z-1 opacity-0.5   -right-[150px] top-[50vh] animate-diamondMoveLeft2 max-laptop:hidden">
        <Diamond7 />
      </div>
    </>
  );
};

export default Diamonds;

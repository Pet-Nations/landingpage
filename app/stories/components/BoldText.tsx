import React from "react";

const BoldText = ({ title, nospace }: any) => {
  return (
    <>
      <span className="text-[16px] font-[500] leading-[26px] text-dark-main">
        {title}
      </span>
      {nospace ? null : <>&nbsp;</>}
    </>
  );
};

export default BoldText;

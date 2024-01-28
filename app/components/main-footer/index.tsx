import React from "react";
import BackIcon from "../icons/BackIcon";
import BackBTN from "../back-btn";

interface Props {
  page?: "models";
}

const MainFooter = ({ page }: Props) => {
  return (
    <div className="h-10 bg-dark-main  z-[5000] fixed bottom-0 w-full">
      <BackBTN page={page} />

      <p className="h-full flex items-center justify-center text-sm leading-[26px] text-[#FFF4E9]">
        All Rights Reserved © &nbsp;
        <span className="text-[#FF9F46] leading-[26px] font-bold text-[14px]">
          PET NATIONS{" "}
        </span>
        &nbsp; 2024
      </p>
    </div>
  );
};

export default MainFooter;

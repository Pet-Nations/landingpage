import React from "react";
import MainHeader from "../components/main-header";
import MainFooter from "../components/main-footer";

const layout = ({ children }: any) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <MainHeader page={"models"} />
        {children}
        <MainFooter page={"models"} />
      </div>
    </>
  );
};

export default layout;

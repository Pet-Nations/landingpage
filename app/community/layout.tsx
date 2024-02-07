import React from "react";
import MainHeader from "../components/main-header";
import MainFooter from "../components/main-footer";

const layout = ({ children }: any) => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-orange1">
        <MainHeader page={"community"} />
        {children}
        <MainFooter page={"community"} />
      </div>
    </>
  );
};

export default layout;

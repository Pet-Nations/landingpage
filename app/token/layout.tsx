import React from "react";
import MainHeader from "../components/main-header";
import MainFooter from "../components/main-footer";

const layout = ({ children }: any) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <MainHeader />
        {children}
        <MainFooter />
      </div>
    </>
  );
};

export default layout;

import React from "react";
import MainHeader from "../../main-header";
import MainFooter from "../../main-footer";
import MainContent from "../../main-content";

const MainPage = () => {
  return (
    <div className="h-screen bg-white w-full flex flex-col">
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  );
};

export default MainPage;

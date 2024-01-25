"use client";

import React from "react";
import MainHeader from "../../main-header";
import MainFooter from "../../main-footer";
import MainContent from "../../main-content";

const MainPage = ({ showMainPage }: any) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <MainHeader />
      <MainContent showMainPage={showMainPage} />
      <MainFooter />
    </div>
  );
};

export default MainPage;

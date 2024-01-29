"use client";

import React, { useEffect } from "react";
import MainHeader from "../../main-header";
import MainFooter from "../../main-footer";
import MainContent from "../../main-content";

const MainPage = ({ showMainPage }: any) => {
  useEffect(() => {
    document.body.addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div className=" h-[100dvh]  w-full flex flex-col overflow-hidden">
      <MainHeader />
      <MainContent showMainPage={showMainPage} />
      <MainFooter />
    </div>
  );
};

export default MainPage;

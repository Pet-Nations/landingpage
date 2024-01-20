"use client";

import { useEffect, useState } from "react";
import Loading from "./components/UI/loading";
import MainPage from "./components/UI/main-page";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: any;
    if (!showLoading) {
      timer = setTimeout(() => {
        setShowMainPage(true);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [showLoading]);

  return (
    <main
      className={`flex z-20 flex-col relative items-center justify-center h-screen bg-custom-bg overflow-hidden`}
    >
      <div
        className={`absolute top-0 -translate-y-full bg-dark-main h-screen w-full ${
          showLoading ? "" : "animate-heightDOWN"
        }  `}
      />
      <Loading showLoading={showLoading} />
      {showMainPage ? <MainPage /> : null}
      <div
        className={`absolute top-0 z-20 -translate-y-full bg-dark-main h-screen w-full ${
          showLoading ? "" : "animate-heightUP"
        }  `}
      />
    </main>
  );
}

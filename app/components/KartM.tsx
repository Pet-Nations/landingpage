"use client";
import Image from "next/image";
import kartIcon from "/public/images/kart.svg";

const KartM = ({ showMainPage }: any) => {
  console.log(showMainPage, "showMainPage");
  return (
    <div
      className={`
        absolute 
        -right-[13vw]
        bottom-[9vh]
        scale-[0.3]
        z-[11]
        ${showMainPage ? "animate-moveAndScale480" : ""}
        `}
    >
      <Image src={kartIcon} alt="kartIcon"></Image>
    </div>
  );
};

export default KartM;

import Image from "next/image";
import CardList from "./components/CardList";
import Content from "./components/Content";
import MobileWalker from "/public/images/bgnation1.png";
import outstorypng2 from "/public/images/bgnation2.png";
import outstorypng3 from "/public/images/bgnation3.png";
import outstorypng from "/public/images/outstorypng.png";
import outstorypngmobile from "/public/images/outstorypngmobile.png";

const Story = () => {
  let id = "1";
  const getHeroImage = () => {
    if (id === "1") {
      return MobileWalker;
    }
    if (id === "2") {
      return outstorypng2;
    }
    if (id === "3") {
      return outstorypng3;
    }
    return MobileWalker;
  };
  return (
    <>
      <div className="flex-auto  relative min-[996.99px]:bg-story-page max-[996px]:bg-orange1 overflow-auto ">
        <section className="max-w-[1920px] mx-auto pb-[100px] max-[996px]:flex flex-col items-center pt-[19px]">
          <Image
            className="absolute right-[49px] top-[18px] max-[996px]:hidden"
            src={outstorypng}
            alt="img"
          ></Image>
          <Image
            className="hidden max-[996px]:block "
            src={outstorypngmobile}
            alt="img"
          ></Image>
          <div className="">
            <CardList id={id} mode={1} />
          </div>
          <div className="max-[996px]:hidden">
            <Content backgroundId={id} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Story;

import Image from "next/image";
import CardList from "../components/CardList";
import Content from "../components/Content";
import Mail1 from "../components/Mail1";
import Mail2 from "../components/Mail2";
import Mail3 from "../components/Mail3";
import MobileWalker from "/public/images/bgnation1.png";
import outstorypng2 from "/public/images/bgnation2.png";
import outstorypng from "/public/images/outstorypng.png";
import outstorypng3 from "/public/images/bgnation3.png";

const Detail = ({ params: { id } }: any) => {
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
      <div className="flex-auto  relative bg-story-page overflow-auto max-[996px]:hidden ">
        <section className="max-w-[1920px] mx-auto pb-[100px]">
          <Image
            className="absolute right-[49px] top-[18px]"
            src={outstorypng}
            alt="img"
          ></Image>
          <CardList id={id} />
          <Content backgroundId={id} />
        </section>
      </div>

      <div className=" hidden max-[996px]:block mt-10 bg-orange1 flex-auto min-h-0 relative pb-[100px]">
        <div className="w-screen relative">
          <Image src={getHeroImage()} alt="img" />
          <div className="h-[51px] backdrop-blur-[15px] absolute z-40 bottom-0 w-full flex items-center justify-center ">
            <p className="text-[24px] font-bold leading-[24px] text-white1 text-center">
              {id === "1"
                ? "Dream Walker"
                : id === "2"
                ? "The Nation"
                : "The Way Home"}
            </p>
          </div>

          {/* letter */}
        </div>
        {id === "1" ? <Mail1 mode={1} /> : null}
        {id === "2" ? <Mail2 mode={1} /> : null}
        {id === "3" ? <Mail3 mode={1} /> : null}
      </div>
    </>
  );
};

export default Detail;

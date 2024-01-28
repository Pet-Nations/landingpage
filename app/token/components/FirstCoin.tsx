import Coin1 from "@/app/components/images/effect-ui/coin/Coin1";

const FirstCoin = () => {
  return (
    <>
      <div
        className={`absolute 
        top-[192px]
        left-[100px]
        coinMoveRight
        max-[1450px]:hidden
        z-[11] `}
      >
        <Coin1 key={"coin1"} />
      </div>
      <div
        className={`absolute 
        hidden
        max-[1450px]:block
        top-[192px]
        left-[23.0344827586vw]
        coinMoveRightb1450

        z-[11] `}
      >
        <Coin1 key={"coin1450"} />
      </div>
    </>
  );
};

export default FirstCoin;

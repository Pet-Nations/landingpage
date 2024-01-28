import Coin1 from "@/app/components/images/effect-ui/coin/Coin1";

const SecondCoin = () => {
  return (
    <>
      <div
        className={`absolute 
        top-[426px]
        left-[100px]
        coinMoveRight2
        z-[11]
        max-[1600px]:hidden
        `}
      >
        <Coin1 key={"coin2"} />
      </div>

      <div
        className={`absolute 
        hidden
        top-[426px]
        left-[100px]
        coinMoveRight2b1600
        z-[11]
        max-[1600px]:block
        `}
      >
        <Coin1 key={"coin21600"} />
      </div>
    </>
  );
};

export default SecondCoin;

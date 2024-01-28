import Coin1 from "@/app/components/images/effect-ui/coin/Coin1";

const ThirdCoin = () => {
  return (
    <>
      <div
        className={`absolute 
        top-[660px]
        left-[100px]
        coinMoveRight3
        z-[11] `}
      >
        <Coin1 key={"coin3"} />
      </div>
    </>
  );
};

export default ThirdCoin;

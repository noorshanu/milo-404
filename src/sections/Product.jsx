import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title className="text-white">What's on the horizon?</Title>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 my-5">
          <div className=" bg-secondary rounded-2xl p-2 text-center w-full  ">
            <h2 className="text-primary font-semibold text-xl py-2">
              Stake Coin
            </h2>
            <p className="text-black font-medium text-sm">
              Stake your $PEPIE to unveil thrilling rewards and PEPE NFTs.
              It's all about your tokens, your choice.
            </p>
          </div>
          <div className=" bg-secondary rounded-2xl p-2 text-center w-full  ">
            <h2 className="text-primary font-semibold text-xl py-2">
              Farming Fun
            </h2>
            <p className="text-black font-medium text-sm">
              Immerse yourself in DeFi farming and earn $BarbieLove tokens by
              providing liquidity.
            </p>
          </div>
          <div className=" bg-secondary rounded-2xl p-2 text-center w-full  ">
            <h2 className="text-primary font-semibold text-xl py-2">
              Governance
            </h2>
            <p className="text-black font-medium text-sm">
              Your voice matters! Holders can vote on important decisions and
              upgrades.
            </p>
          </div>
          <div className=" bg-secondary rounded-2xl p-2 text-center w-full  ">
            <h2 className="text-primary font-semibold text-xl py-2">
              Trading Bots
            </h2>
            <p className="text-black font-medium text-sm">
              Explore secure, user-friendly trading with our dynamic trading bot
              collection – covering everything from MEV to copy trading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

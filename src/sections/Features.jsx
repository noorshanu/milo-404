import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Features() {
  // const [showTypewriter, setShowTypewriter] = useState(false);

  // useEffect(() => {
  //   let lastScrollTop = 0;

  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollTop < lastScrollTop) {
  //       setShowTypewriter(true);
  //     } else {
  //       setShowTypewriter(false);
  //     }

  //     lastScrollTop = scrollTop;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <section className="container-wrapper  mx-auto mt-12 sm:mt-4 py-4">
      <div className=" flex justify-center gap-4 items-center mx-auto">
        <img src="images/star.png " alt="" className=" h-[50px]" />

        <Typewriter
          options={{
            strings: ["OUR FEATURES"],
            autoStart: true,
            loop: true,
            wrapperClassName: "font-daughter text-2xl sm:text-4x", // Apply Tailwind CSS classes here
          }}
        />

        {/* <h1 className=" font-daughter text-2xl sm:text-4xl">OUR FEATURES</h1> */}
        <img src="images/star.png " alt="" className=" h-[50px]" />
      </div>
      <div className=" flex justify-between items-center py-6 flex-col sm:flex-row gap-4">
        <div>
          <h2 className=" text-center font-daughter text-xl pb-2">Telegram Game On Steroids</h2>

          <div className=" h-[300px] w-[300px] bg-black border-2 border-white">
            <img src="images/feat1.png" alt="" className="  object-cover  h-[260px]" />
          </div>

          <p className=" max-w-80 mx-auto font-daughter text-base py-2">
            RPS (Rock, Paper, Scissors), but make it epic with Milo 404. Battle,
            win, and vibe with your crypto crew on Telegram, all while bagging
            some sick NFT loot. It’s not just a game; it’s your new favorite
            pastime.
          </p>
        </div>

        <div>
          <h2 className=" text-center font-daughter text-xl py-2">NFT Wonderland </h2>

          <div className=" h-[300px] w-[300px] bg-black border-2 border-white">
            <img src="images/fet3.jpg" alt=""  className="  object-cover  h-[300px]"/>
          </div>

          <p className=" max-w-80 mx-auto font-daughter text-base py-2">
          Enter the realm of Milo 404 NFTs, where your digital treasures unlock worlds of possibility. More than mere pixels, these gems get you VIP passes to the coolest crypto circuses in town. Art? Check. Rewards? Double check. Your ticket to the metaverse? Triple check.
          </p>
        </div>
        <div>
          <h2 className=" text-center font-daughter text-xl pb-2">The Culture Coin of Solana</h2>

          <div className=" h-[300px] w-[300px] bg-black border-2 border-white">
            <img src="images/fet2.jpg" alt="" className=" object-cover  h-[300px]" />
          </div>

          <p className=" max-w-80 mx-auto font-daughter text-base py-2">
          We're crafting more than a meme coin; we're cultivating a culture. With Milo 404, every hodler has a voice, and every opinion matters. It’s democracy, decentralization, and dank memes all rolled into one. Welcome to the family.
          </p>
        </div>
      </div>


    </section>
  );
}

export default Features;

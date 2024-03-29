import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <section className=" relative z-10 py-16">
      <img
        src="images/bnb.png"
        alt=" "
        className=" absolute left-0 top-10 sm:h-[200px] h-[100px] floating  rot "
      />

      <div className="container-wrapper  flex flex-col items-center justify-center lg:drop-shadow-[0_0_10rem_white]">
        <div className="flex justify-between items-center mt-8 mb-8 gap-6 flex-col sm:flex-row">
          <img
            src="/images/hero.png"
            className="w-full lg:w-[50%] lg:h-[50%] object-contain floating"
            alt=""
          />

          <div className=" relative z-40">
            <img src="images/milo.png" alt="" className=" h-[120px]" />
            <div className=" pt-3 mb-2">
              <h2 className=" text-2xl font-semibold font-daughter py-2">
                {" "}
                <Typewriter
                  options={{
                    strings: ["Hi, meet MILO404,"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-2xl font-semibold font-daughter", // Apply Tailwind CSS classes here
                  }}
                />
              </h2>
              <div className=" bg-[#00ffba] h-2 w-[70px] my-3"></div>

              <p className=" font-daughter text-base ">
                Missed the Solana moonshots? 🌙 Say hello to Milo 404! It's more
                than a coin; it's your VIP pass to the next crypto wave.
              </p>

              <p className=" font-daughter text-base pb-3 ">
                Telegram game that's straight 🔥, NFT goodies you can't resist,
                and a community vibe that's all about us, get ready to ride the
                Milo 404 era. Not just a token, but a revolution. 🚀
              </p>

              <div className=" flex gap-4 items-center">
              <a
            href="/"
            className=" font-daughter text-xl uppercase bg-[#00fff6] hover:bg-transparent hover:text-white text-black border-2 border-[#00a59f] py-2 px-6 rounded-sm"
          >
         Contribute Now
          </a>

          <a
            href="/"
            className=" font-daughter text-xl uppercase bg-[#00fff6] border-2 border-[#00a59f] py-2 px-6 hover:bg-transparent hover:text-white text-black rounded-sm"
          >
            Join us Now{" "}
          </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="images/cube1.png"
        alt=""
        className=" absolute right-[15%] bottom-0 h-[100px] -z-10 anime2 "
      />
    </section>
  );
}

export default Hero;

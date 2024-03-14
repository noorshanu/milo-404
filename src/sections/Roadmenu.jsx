import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function Roadmenu() {
  return (
    <>
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
      <div className=" border-2 border-white rounded-lg p-3">
       <h1 className=' font-daughter text-2xl font-semibold text-[#00aab5]'>Phase 1</h1>
          <p className=' text-base max-w-sm'>
          Brainy Beginnings: Deep-diving into the crypto abyss to ensure Milo 404 is the sharpest tool in the shed.<br /> 
          Genesis: Milo 404 pops out on Solana—fast, furious, and dripping with rewards. <br />
          Early Bird Special: Sneak a peek and grab a piece of the action on  <br />
          Solana Pad. Early adopters, assemble! <br />
          </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" border-2 border-white rounded-lg p-3">
      <h1 className=' font-daughter text-2xl font-semibold text-[#481e63]'>Phase 2</h1>
          <p className=' text-base max-w-sm'>
          Audits and KYC because we're the good guys. <br />
          Hitting Dextools, Dexview, and Birdseye. <br />
          We’re not just trending; we're trailblazing. <br />
          </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" border-2 border-white rounded-lg p-3">
          <h1 className=" font-daughter text-2xl font-semibold">Phase 3</h1>
          <p className=" text-base max-w-sm">
          Landing spots on CoinMarketCap and CoinGecko.<br /> 
          Open Sesame: Doors open wide on Tier 2 exchange, <br />
          More access, more action. <br />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" border-2 border-white rounded-lg p-3">
      <h1 className=' font-daughter text-2xl font-semibold text-[#00aab5]'>Phase 4</h1>
        <p className=' text-base max-w-sm'>
        Marketing Madness: Spreading the Milo 404 gospel far and wide. <br /> 
          Get ready; your feed is about to get flooded. <br />
          One of Us: Events, AMAs, and secret handshakes.  <br />
        </p>
      </div>
      </SwiperSlide>

 
    </Swiper>
  </>
  )
}

export default Roadmenu
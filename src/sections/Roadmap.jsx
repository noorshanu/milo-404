import React from 'react'
import Roadmenu from './Roadmenu'
import Typewriter from 'typewriter-effect';

function Roadmap() {
  return (
 <section className=' relative z-20'>
 
  <img src="images/line.png" alt="" className=' absolute left-0 top-0 h-[100px] sm:h-[500px] -z-10' />
    <div className=' container-wrapper px-6 py-4'>
    <div className=" flex justify-center gap-4 items-center mx-auto">
      <img src="images/star.png " alt="" className=" h-[50px]" />
      <Typewriter
          options={{
            strings: ['OUR ROADMAP'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'font-daughter text-2xl sm:text-4x', // Apply Tailwind CSS classes here
          }}
        />
      <img src="images/star.png " alt="" className=" h-[50px]" />
    </div>

    <div className=' my-6 block sm:hidden'>
      {/* <Roadmenu/> */}

    </div>
      {/* <div className=' relative hidden sm:block'>
      <div className=' absolute left-[-9%] top-[-55%] border-2 border-white rounded-lg p-3 max-w-[300px] '>
          <h1 className=' font-daughter text-2xl font-semibold'>Phase 1</h1>
          <p className=' text-base max-w-sm'>
          Brainy Beginnings: Deep-diving into the crypto abyss to ensure Milo 404 is the sharpest tool in the shed.<br /> 
          Genesis: Milo 404 pops out on Solana—fast and dripping with rewards. <br />
          Early Bird Special: Sneak a peek and grab a piece of the action on  <br />
          Solana Pad.
          </p>

        </div>
        <div className=' absolute left-[50%] top-[-42%] border-2 border-white rounded-lg p-3 max-w-[280px]'>
          <h1 className=' font-daughter text-2xl font-semibold text-[#8372e9]'>Phase 3</h1>
          <p className=' text-base max-w-sm'>
          Audits and KYC because we're the good guys. <br />
          Hitting Dextools, Dexview, and Birdseye. <br />
          We’re not just trending; we're trailblazing. <br />
          
          </p>

        </div>
        <div className=' my-[11rem]'>
        <img src="images/road.png" alt="" />
        </div>
  

        <div className=' absolute left-[17%] bottom-[-40%] border-2 border-white rounded-lg p-3 max-w-[280px]'>
          <h1 className=' font-daughter text-2xl font-semibold text-[#00aab5]'>Phase 2</h1>
          <p className=' text-base max-w-sm'>
          Landing spots on CoinMarketCap and CoinGecko.<br /> 
          Open Sesame: Doors open wide on Tier 2 exchange, <br />
          More access, more action. <br />
          
          </p>

        </div>
        <div className=' absolute left-[70%] bottom-[-48%]  border-2 border-white rounded-lg p-3'>
          <h1 className=' font-daughter text-2xl font-semibold text-[#481e63]'>Phase 4</h1>
          <p className=' text-base max-w-sm'>
          Marketing Madness: Spreading the Milo 404 gospel far and wide. <br /> 
          Get ready; your feed is about to get flooded. <br />
          One of Us: Events, AMAs, and secret handshakes.  <br />
      
          </p>

        </div>
      </div> */}
    </div>
 </section>
  )
}

export default Roadmap
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

function Features() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        setShowTypewriter(true);
      } else {
        setShowTypewriter(false);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="container-wrapper  mx-auto mt-12 sm:mt-4 py-4">
    <div className=" flex justify-center gap-4 items-center mx-auto">
      <img src="images/star.png " alt="" className=" h-[50px]" />
      {showTypewriter && (
        <Typewriter
          options={{
            strings: ['OUR FEATURES'],
            autoStart: true,
            loop: false,
            wrapperClassName: 'font-daughter text-2xl sm:text-4x', // Apply Tailwind CSS classes here
          }}
        />
      )}
      {!showTypewriter && <h1 className="font-daughter text-2xl sm:text-4x">OUR FEATURES</h1>}
      {/* <h1 className=" font-daughter text-2xl sm:text-4xl">OUR FEATURES</h1> */}
      <img src="images/star.png " alt="" className=" h-[50px]" />
    </div>
    <div className=" flex justify-between items-center py-6 flex-col sm:flex-row gap-4">
      <div className=" h-[300px] w-[300px] bg-black border-2 border-white"></div>

      <div className=" h-[300px] w-[300px] bg-black border-2 border-white rounded-sm"></div>

      <div className=" h-[300px] w-[300px]  bg-black border-2 border-white"></div>
    </div>

    <p className=" text-center font-daughter font-medium ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec </p>
  </section>
  )
}

export default Features
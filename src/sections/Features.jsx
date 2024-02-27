import React from 'react'

function Features() {
  return (
    <section className="container-wrapper  mx-auto">
    <div className=" flex justify-center gap-4 items-center mx-auto">
      <img src="images/star.png " alt="" className=" h-[50px]" />
      <h1 className=" font-daughter text-4xl">OUR FEATURES</h1>
      <img src="images/star.png " alt="" className=" h-[50px]" />
    </div>
    <div className=" flex justify-between items-center py-6">
      <div className=" h-[300px] w-[300px] bg-black border-2 border-white"></div>

      <div className=" h-[300px] w-[300px] bg-black border-2 border-white rounded-sm"></div>

      <div className=" h-[300px] w-[300px]  bg-black border-2 border-white"></div>
    </div>

    <p className=" text-center font-daughter font-medium ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec </p>
  </section>
  )
}

export default Features
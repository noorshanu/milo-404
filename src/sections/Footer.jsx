import React from 'react'

function footer() {
  return (
   <section>
    <div className=' container-wrapper px-4 py-5'>
    <div className=" flex justify-center gap-4 items-center mx-auto">
      <img src="images/star.png " alt="" className=" h-[50px]" />
      <h1 className=" font-daughter text-2xl sm:text-4xl">COMMUNITY</h1>
      <img src="images/star.png " alt="" className=" h-[50px]" />
    </div>

      <div className=' flex flex-col justify-between sm:flex-row items-center py-16'>

        <div className=' w-full'>
          <img src="images/home.png" alt="" className=' h-[200px] sm:h-[300px] mx-auto pb-4' />
        </div>

        <div>

          <h1 className=' text-2xl sm:text-8xl font-daughter text-center sm:text-start '>
          Join Our Community
          </h1>
          <p className=' font-daughter text-base text-center sm:text-start'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
          </p>

        </div>

      </div>

      <div className=' flex justify-center mt-2 sm:mt-8'>
        <a href="/" className=' font-daughter text-2xl uppercase bg-[#00fff6] border-2 border-[#00a59f] py-2 px-6' >Join us Now </a>
      </div>

    </div>
   </section>
  )
}

export default footer
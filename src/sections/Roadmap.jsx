import React from 'react'
import Roadmenu from './Roadmenu'

function Roadmap() {
  return (
 <section className=' relative z-20'>
  <img src="images/bnb2.png" alt="" className=' absolute right-0 top-0 h-[100px] sm:h-[300px]' />
  <img src="images/line.png" alt="" className=' absolute left-0 top-0 h-[100px] sm:h-[1100px]' />
    <div className=' container-wrapper px-6 py-4'>
    <div className=" flex justify-center gap-4 items-center mx-auto">
      <img src="images/star.png " alt="" className=" h-[50px]" />
      <h1 className=" font-daughter text-2xl sm:text-4xl">ROADMAP</h1>
      <img src="images/star.png " alt="" className=" h-[50px]" />
    </div>

    <div className=' my-6 block sm:hidden'>
      <Roadmenu/>

    </div>
      <div className=' relative hidden sm:block'>
      <div className=' absolute left-[-12%] top-[-22%]'>
          <h1 className=' font-daughter text-2xl font-semibold'>Phase 1</h1>
          <p className=' text-base max-w-sm'>
          Lorem ipsum dolor sit amet,<br /> 
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          </p>

        </div>
        <div className=' absolute left-[40%] top-[-22%]'>
          <h1 className=' font-daughter text-2xl font-semibold text-[#8372e9]'>Phase 3</h1>
          <p className=' text-base max-w-sm'>
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          </p>

        </div>
        <div className=' my-[11rem]'>
        <img src="images/road.png" alt="" />
        </div>
  

        <div className=' absolute left-[17%] bottom-[-20%]'>
          <h1 className=' font-daughter text-2xl font-semibold text-[#00aab5]'>Phase 2</h1>
          <p className=' text-base max-w-sm'>
          Lorem ipsum dolor sit amet,<br /> 
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          </p>

        </div>
        <div className=' absolute left-[70%] bottom-[-20%]'>
          <h1 className=' font-daughter text-2xl font-semibold text-[#481e63]'>Phase 4</h1>
          <p className=' text-base max-w-sm'>
          Lorem ipsum dolor sit amet,<br /> 
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          </p>

        </div>
      </div>
    </div>
 </section>
  )
}

export default Roadmap
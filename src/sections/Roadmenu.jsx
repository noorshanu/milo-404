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
          <h1 className=" font-daughter text-2xl font-semibold">Phase 1</h1>
          <p className=" text-base max-w-sm">
            Lorem ipsum dolor sit amet,
            <br />
            Lorem ipsum dolor sit amet, <br />
            Lorem ipsum dolor sit amet, <br />
            Lorem ipsum dolor sit amet, <br />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" border-2 border-white rounded-lg p-3">
      <h1 className=' font-daughter text-2xl font-semibold text-[#00aab5]'>Phase 2</h1>
        <p className=' text-base max-w-sm'>
        Lorem ipsum dolor sit amet,<br /> 
        Lorem ipsum dolor sit amet, <br />
        Lorem ipsum dolor sit amet, <br />
        Lorem ipsum dolor sit amet, <br />
        </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" border-2 border-white rounded-lg p-3">
       <h1 className=' font-daughter text-2xl font-semibold text-[#00aab5]'>Phase 3</h1>
          <p className=' text-base max-w-sm'>
          Lorem ipsum dolor sit amet,<br /> 
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" border-2 border-white rounded-lg p-3">
      <h1 className=' font-daughter text-2xl font-semibold text-[#481e63]'>Phase 4</h1>
          <p className=' text-base max-w-sm'>
          Lorem ipsum dolor sit amet,<br /> 
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          Lorem ipsum dolor sit amet, <br />
          </p>
       </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Roadmenu
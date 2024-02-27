function Hero() {
    return (
      <section className="">
       
  
        <div className="container-wrapper  flex flex-col items-center justify-center lg:drop-shadow-[0_0_10rem_white]">
         <div className="flex justify-between items-center">
         <img
            src="/images/hero.png"
            className="w-full lg:w-[70%] lg:h-[70%] object-contain"
            alt=""
          />
  
  
          <div>
            <img src="images/milo.png" alt="" className=" h-[120px]" />
            <div className=" pt-3 mb-2">
              <h2 className=" text-2xl font-semibold font-daughter py-2">Hi, meet MILO404,</h2>
              <div className=" bg-[#00ffba] h-2 w-[70px] my-3">
  
              </div>
  
              <p className=" font-daughter text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              </p>
  
  
            </div>
          </div>
  
          
         </div>
        
        </div>
    
  
      </section>
    );
  }
  
  export default Hero;
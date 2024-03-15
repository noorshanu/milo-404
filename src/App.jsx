
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Roadmap from "./sections/Roadmap"
import Tokenomic from "./sections/Tokenomic"
import Footer from './sections/Footer'
import Navmenu from "./Components/Navmenu"
import RoadmapCards from "./Components/RoadmapCards"



function App() {


  return (
    <>
    <div className=" relative z-10">
      <img src="images/cir1.png" alt="" className=" absolute right-0 top-0 h-[500px] hidden sm:block" />
      <img src="images/lin2.png" alt="" className=" absolute right-0 top-0 h-[500px]" />
    <div className=" py-0 sm:py-4">
    <Navmenu/>
     </div>

     <div>
      <Hero/>
     </div>

     <div className=" mt-4">
      <Features/>
     </div>
     <div className=" mt-4">
      <Tokenomic/>

     </div>
     <div className=" mt-4">
     <Roadmap/>

     <RoadmapCards/>

     </div>
     <div className=" mt-0">
     <Footer/>

     </div>

    </div>
    </>
  )
}

export default App

import Navbar from "./Components/Navbar"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Roadmap from "./sections/Roadmap"
import Tokenomic from "./sections/Tokenomic"


function App() {


  return (
    <>
     <div>
      <Navbar/>
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

     </div>
    </>
  )
}

export default App

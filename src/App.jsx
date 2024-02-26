import Navbar from "components/Navbar";
import About from "sections/About";

import Get from "sections/Get";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import Mission from "sections/Mission";
import Product from "sections/Product";
import Roadmap from "sections/Roadmap";
import Tokenomics from "sections/Tokenomics";

function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <div className="lg:absolute top-8 2xl:top-10 left-0 w-full z-20">
            <Navbar />
          </div>

          <div className="mb-10 lg:mb-20">
            <Hero />
          </div>
        </div>

        <div className="mb-20" id="about">
          <About />
        </div>

        <div className="mb-14 lg:mb-20" id="tokenomics">
          <Tokenomics />
        </div>
        <div className="mb-14 lg:mb-20" id="tokenomics">
         <Product/>
        </div>
        <div>
          <Mission/>
        </div>
        <img
          src="/images/white-strip.svg"
          className="w-full scale-x-[1.2] mb-6"
          alt=""
        />

        <div id="roadmap">
          <Roadmap />
        </div>

        <div className="mb-20">
          <Get />
        </div>

       

     

    
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;

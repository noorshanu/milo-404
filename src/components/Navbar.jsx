import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="z-[100] bg-secondary lg:bg-transparent">
        <div className="w-[1300px] mx-auto bg-secondary h-14 lg:h-16 2xl:h-20 rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center">
          <div className="items-center justify-evenly text-base font-medium text-primary hidden lg:flex">
            <Link
              to="contact"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Contact Us
            </Link>
            <Link
              to="roadmap"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Roadmap
            </Link>
          </div>

          <div>
            <img
              src="/images/logo.png"
              className="w-full max-w-[11rem] lg:max-w-none"
              alt=""
            />
          </div>

          <button
            className="text-2xl text-black flex lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <IoMenu />
          </button>

          <div className="items-center justify-evenly text-base font-medium text-primary hidden lg:flex">
            <Link
              to="about"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              About Us
            </Link>
            <Link
              to="tokenomics"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Tokenomics
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[1000] bg-secondary border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          !sidebarOpen ? "translate-x-[16rem]" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button
            className="text-black text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-black font-medium">
          <Link
            to="contact"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Contact Us
          </Link>
          <Link
            to="roadmap"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Roadmap
          </Link>
          <Link
            to="about"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            About Us
          </Link>
          <Link
            to="tokenomics"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Tokenomics
          </Link>
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
      ></div>
    </>
  );
}

export default Navbar;

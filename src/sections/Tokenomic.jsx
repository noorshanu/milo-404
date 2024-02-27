import { AiTwotoneCopy } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";

function Tokenomic() {
  const notify = () => {
    toast.success("Copied!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const textToCopy = "0x725d1918b30a6c073c5cb7108f400f8ebccc8f95";
  const textArea = useRef(null);
  const copyToClipboard = () => {
    textArea.current.select();
    document.execCommand("copy");
    notify();
  };

  return (
    <section className="container-wrapper  py-10 sm:py-14 px-4 ">
      <ToastContainer />
      <div className=" flex justify-center gap-4 items-center mx-auto ">
        <img src="images/star.png " alt="" className=" h-[50px]" />
        <h1 className=" font-daughter text-2xl sm:text-4xl uppercase">Tokenomics</h1>
        <img src="images/star.png " alt="" className=" h-[50px]" />
      </div>

      <div className=" gap-10 items-center mt-4 px-4 mb-2">
        <img src="images/token.png" alt="" className=" mx-auto" />
      </div>

      <div className="flex justify-center gap-5 mt-16">
        <input
          type="text"
          value={textToCopy}
          readOnly
          ref={textArea}
          className="text-white bg-transparent border border-gray-800 font-monot rounded-md py-1 w-[500px] px-4 text-xs mx-auto sm:mx-0  sm:text-lg"
        />
        <button
          onClick={copyToClipboard}
          className=" bg-transparent border border-gray-800 rounded-md py-1 px-3 btn-bg"
        >
          <AiTwotoneCopy />
        </button>
      </div>

      <div className="flex justify-center  gap-5 mt-7">
        <a
          href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Mikawa_Inu_0x83...1235_Audit.pdf"
          className="btn-hero text-center w-[50%] sm:w-auto mx-auto sm:mx-0"
        >
          {" "}
          <img
            src="images/auditeds.png"
            alt=""
            className="mx-auto h-[30px] sm:h-auto "
          />{" "}
        </a>
        <a
          href="https://github.com/solidproof/projects/blob/main/2023/Mikawa%20Inu%20/KYC_Certificate_Mikawa_Inu.png"
          className="btn-hero text-center w-[50%] sm:w-auto mx-auto sm:mx-0"
        >
          {" "}
          <img
            src="images/buyon.png"
            alt=""
            className="mx-auto h-[35px] sm:h-auto"
          />{" "}
        </a>
      </div>
    </section>
  );
}

export default Tokenomic;

import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";

const Button = ({ children, className, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`py-3 px-4 rounded-full bg-[rgba(255,255,255,.2)] text-sm transition-all duration-200 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </a>
  );
};

const SocialLink = ({ children }) => {
  return (
    <a
      href="/"
      className="w-[4em] h-[4em] rounded-full bg-white flex items-center justify-center text-[100%] text-black"
    >
      {children}
    </a>
  );
};

function JoinCommunity() {
  return (
    <section className="pb-14 relative z-10 overflow-hidden">
      <div
        className="absolute top-[4rem] left-0 w-full h-full -z-20 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-primary"></div>

      <div className="container-wrapper">
        <div className=" flex items-center justify-between">
          <img
            src="/images/glass.png"
            className="w-full max-w-[24rem] mx-auto lg:mx-0 hidden sm:block"
            alt=""
          />

          <img
            src="/images/comun.png"
            alt=""
            className="w-full max-w-[24rem] mx-auto lg:mx-0"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-2 lg:mb-20 text-center lg:text-left space-y-6 lg:space-y-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-dream lh-1_4">
            JOIN OUR <br />
            COMMUNITY
          </h1>

          <div className="max-w-[20rem] w-full space-y-8">
            <div className="flex items-center justify-center space-x-6">
              {/* <SocialLink>
                <FaFacebookF className="text-[1.8em]" />
              </SocialLink>
              <SocialLink>
                <FaDiscord className="text-[1.8em]" />
              </SocialLink>
              <SocialLink>
                <FaInstagram className="text-[1.8em]" />
              </SocialLink> */}
              {/* <img src="/images/comun.png" alt="" /> */}
            </div>

            <input
              type="text"
              className="flex-1 h-14 bg-white rounded-full px-6 text-black w-full text-base"
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="flex items-center -m-1 flex-wrap justify-center lg:justify-normal">
            <Button className="m-1">Tokenomics</Button>
            <Button link="https://twitter.com/barbielovepepe" className="m-1">
              Twitter
            </Button>
            <Button link="https://t.me/barbielovepepe" className="m-1">
              Telegram
            </Button>
            <Button className="m-1">Buy Now</Button>
          </div>

          <p className="text-center lg:text-left">
            All rights reserved by BarbieLovePepe 2023
          </p>
        </div>
        <div className="mt-6">
          <p className="">
            Disclaimer : BarbieLovePepe ($PEPIE) is a meme token, created for all that
            fun! No big expectations, just your regular shenanigans, alright? It
            could be fast or slow, rise or fall – stay cool. Investing in
            cryptocurrency carries real risk. So, do your own research before
            diving in, honey!
          </p>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;

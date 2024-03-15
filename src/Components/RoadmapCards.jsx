import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubHeading from "./SubHeading";
import { BsArrowRight } from "react-icons/bs";
import SliderNavigationButton from "./SliderNavigationButton";


const data = [
  {
    title: "Phase 1",
    subTitle: "Brainy Beginnings:",
    content:
      " Deep-diving into the crypto abyss to ensure Milo 404 is the sharpest tool in the shed. Genesis: Milo 404 pops out on Solana—fast and dripping with rewards. Early Bird Special: Sneak a peek and grab a piece of the action on Solana Pad.",
  },
  {
    title: "Phase 2",
    subTitle: "Gearing Up",
    content:
      "Trust Us, We're Legit: Audits and KYC because we're the good guys. Look Ma, We're Famous: Hitting Dextools, Dexview, and Birdseye. We’re not just trending; we're trailblazing.",
  },
  {
    title: "Phase 3",
    subTitle: "Going Big ",
    content:
      "The Cool Kids' Table: Landing spots on CoinMarketCap and CoinGecko. Milo 404 isn’t just a coin; it’s a movement. Open Sesame: Doors open wide on Tier 2 exchanges. More access, more action.",
  },
  {
    title: "Phase 4",
    subTitle: "The Hype Train ",
    content:
      "Marketing Madness: Spreading the Milo 404 gospel far and wide. Get ready; your feed is about to get flooded. One of Us: Events, AMAs, and secret handshakes. Welcome to the club where everyone’s VIP.",
  },
];

const Card = ({ title, subTitle, content }) => {
  return (
    <div className="cards h-full relative z-[999]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <SubHeading className="font-semibold mb-0.5 text-[#00fff6]">{title}</SubHeading>
          <p className="font-medium text-lg text-[#dadada]">{subTitle}</p>
        </div>

        <BsArrowRight className="text-4xl" />
      </div>

      <p className="text-base  text-white">{content}</p>
    </div>
  );
};

function RoadmapCards() {
 

  return (
    <section className="px-6">
      <Swiper
        slidesPerView={3.2}
        spaceBetween={30}
        className="py-5 [&_.swiper-slide]:!h-auto"
        modules={[Navigation]}
        navigation={{
          nextEl: "#nextEl",
          prevEl: "#prevEl",
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              title={(item.title)}
              subTitle={(item.subTitle)}
              content={(item.content)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center space-x-5 justify-center">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
    </section>
  );
}

export default RoadmapCards;

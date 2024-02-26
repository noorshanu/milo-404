import LogosWrapper from "layout/LogosWrapper";

const logos = [
  { img: "/images/featured-on/mar.png", className: "h-[1.8em]" },
  { img: "/images/featured-on/bus.png", className: "h-[2em]" },
  { img: "/images/featured-on/yah.png", className: "h-[2em]" },
  { img: "/images/featured-on/yah-2.png", className: "h-[2em]" },
  { img: "/images/featured-on/yah-3.png", className: "h-[2em]" },
  { img: "/images/featured-on/pub.png", className: "h-[2em]" },
  { img: "/images/featured-on/hac.png", className: "h-[2em]" },
  { img: "/images/featured-on/tec.png", className: "h-[2em]" },
  { img: "/images/featured-on/tec.png", className: "h-[2em]" },
  { img: "/images/featured-on/coi.png", className: "h-[2em]" },
  { img: "/images/featured-on/new.png", className: "h-[2em]" },
  { img: "/images/featured-on/fxs.png", className: "h-[1.6em]" },
  { img: "/images/featured-on/see.png", className: "h-[2em]" },
  { img: "/images/featured-on/inv.png", className: "h-[2em]" },
  { img: "/images/featured-on/ben.png", className: "h-[1.6em]" },
  { img: "/images/featured-on/for.png", className: "h-[1.8em]" },
];

function FeaturedOn() {
  return <LogosWrapper title="FEATURED ON" logos={logos} />;
}

export default FeaturedOn;

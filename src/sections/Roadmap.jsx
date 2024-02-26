import Title from "components/Title";

const Grid = ({ direction = "left" }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full -z-20 pointer-events-none select-none ${
        direction === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`absolute top-0 ${
          direction === "right" ? "right-[-2px]" : "left-[-2px]"
        } w-full h-full opacity-50 z-10`}
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>

      <div
        className={`absolute z-20 w-full h-full top-0 left-0 from-transparent to-primary ${
          direction === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
};

function Roadmap() {
  return (
    <section className="relative z-10 overflow-hidden">
      <Grid />
      <Grid direction="right" />

      <div className="container-wrapper mb-14">
        <Title className="text-center mb-10 pt-8">ROADMAP</Title>

        <img src="/images/roadmap.png" className="w-full" alt="" />
      </div>
    </section>
  );
}

export default Roadmap;

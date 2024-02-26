import Title from "components/Title";

function Mission() {
  return (
    <section className="container-wrapper grid lg:grid-cols-2 gap-10 mb-12">
      <div>
        <Title className="lh-1_5 mb-3">MISSION</Title>

        <p className="font-daughter text-xl font-medium ">
          Listen up, 'cause I've got the 411 on the spectacular sensation that
          is BarbieLovePepe! ($PEPIE) She's no ordinary frog, no way. This absolute
          queen? She's all about crafting memes and puns that'll tickle your
          funny bone 'til it's weak at the knees. And guess what? She's diving
          headfirst into NFT territory to whip up some digital gems that'll have
          your jaws dropping like never before!  Brace yourself for a dose
          of charm that'll knock your socks off, and a leap into a realm of
          collectible art that's, like, next-level iconic.  <br />
          Who's ready to be wowed? Get your front-row seats, 'cause
          $PEPIE is here to rock your NFT world! 
        </p>
      </div>

      <div>
        <img src="/images/mission.png" className="w-full" alt="" />
      </div>
    </section>
  );
}

export default Mission;

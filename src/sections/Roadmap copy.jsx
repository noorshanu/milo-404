import Heading from "components/Heading";
import { useTranslation } from "react-i18next";

function Roadmap() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container-wrapper">
        <Heading className="font-semibold text-center mb-2">
          {t("Roadmap")}
        </Heading>
        <p className="text-lg mx-auto max-w-[40rem] w-full text-center">
          {t(
            "The roadmap for Ethereum ETF Token is connected to real-world Ethereum events. As we hit each milestone in the Ethereum ETF journey, we burn ETHETF tokens and boost staking rewards."
          )}
        </p>
      </div>
    </section>
  );
}

export default Roadmap;

import Header from "./Components/utility/header";
import HeroSplit from "./Components/utility/heroSplit";
import DesignCapacity from "./Components/utility/designCapacity";
import DesignServiceTabs from "./Components/utility/designServiceTabs";
import DesignShowcase from "./Components/utility/designShowcase";
import DesignTeam from "./Components/utility/designTeam";
import WhiteLabelDilvery from "./Components/utility/whiteLabelDilvery";
import WhyOutSource from "./Components/utility/whyOutSource";
import Footer from "./Components/utility/footer";
import webdesign from "./data/pages/web-design.json";

function WebDesignServices() {
  return (
    <>
      <Header theme="light" />
      <main>
        <HeroSplit content={webdesign.hero} />
        <DesignCapacity content={webdesign.designCapacity} />
        <DesignServiceTabs content={webdesign.designServiceTabs} />
        <DesignShowcase content={webdesign.designShowcase} />
        <DesignTeam content={webdesign.designTeam} />
        <WhiteLabelDilvery content={webdesign.whiteLabelDelivery} />
        <WhyOutSource content={webdesign.whyOutSource} />
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}

export default WebDesignServices;

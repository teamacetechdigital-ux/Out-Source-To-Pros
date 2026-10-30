import Header from "./Components/utility/header";
import HeroSplit from "./Components/utility/heroSplit";
import DesignCapacity from "./Components/utility/designCapacity";
import DesignServiceTabs from "./Components/utility/designServiceTabs";
import DesignShowcase from "./Components/utility/designShowcase";
import DesignTeam from "./Components/utility/designTeam";
import WhiteLabelDilvery from "./Components/utility/whiteLabelDilvery";
import WhyOutSource from "./Components/utility/whyOutSource";
import ProcessTimeline from "./Components/utility/processTimeline";
import DesignForEvery from "./Components/utility/designForEvery";
import DesignForPlatform from "./Components/utility/designForPlatform";
import DesignThatGuides from "./Components/utility/designThatGuides";
import DesignWithSearch from "./Components/utility/designWithSearch";
import DesignBusinessModels from "./Components/utility/designBusinessModels";
import DesignComparison from "./Components/utility/designComparison";
import DesignWorkModels from "./Components/utility/designWorkModels";
import DesignCost from "./Components/utility/designCost";
import DesignWithControl from "./Components/utility/designWithControl";
import DesignFaqs from "./Components/utility/designFaqs";
import DesignGrowthCta from "./Components/utility/designGrowthCta";
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
        <ProcessTimeline content={webdesign.process} />
        <DesignForEvery content={webdesign.designForEvery} />
        <DesignForPlatform content={webdesign.designForPlatform} />
        <DesignThatGuides content={webdesign.designThatGuides} />
        <div className="bg-[#d5e9ff]">
          <DesignWithSearch content={webdesign.designWithSearch} />
          <DesignBusinessModels content={webdesign.designBusinessModels} />
        </div>
        <DesignComparison content={webdesign.designComparison} />
        <DesignWorkModels content={webdesign.designWorkModels} />
        <DesignCost content={webdesign.designCost} />
        <DesignWithControl content={webdesign.designWithControl} />
        <DesignFaqs content={webdesign.designFaqs} />
        <DesignGrowthCta content={webdesign.designGrowthCta} />
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}

export default WebDesignServices;

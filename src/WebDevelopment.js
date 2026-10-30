import Header from "./Components/utility/header";
import HeroSplit from "./Components/utility/heroSplit";
import DevelopmentSupport from "./Components/utility/developmentSupport";
import ServiceTabs from "./Components/utility/serviceTabs";
import InHouseDevelopment from "./Components/utility/inHouseDevelopment";
import AroundYourAgency from "./Components/utility/aroundYourAgency";
import HireDevelopers from "./Components/utility/hireDevelopers";
import ClientProjects from "./Components/utility/clientProjects";
import CustomDevelopment from "./Components/utility/customDevelopment";
import SystemIntegrations from "./Components/utility/systemIntegrations";
import DevelopmentQuality from "./Components/utility/developmentQuality";
import ProcessTimeline from "./Components/utility/processTimeline";
import Marquee from "./Components/utility/marquee";
import DevelopmentEngagement from "./Components/utility/developmentEngagement";
import DevelopmentControl from "./Components/utility/developmentControl";
import DesignFaqs from "./Components/utility/designFaqs";
import DesignGrowthCta from "./Components/utility/designGrowthCta";
import Footer from "./Components/utility/footer";
import FigmaBackdrop from "./Components/utility/figmaBackdrop";
import dev from "./data/pages/web-development.json";
import home from "./data/pages/home.json";

function SeoServices() {
  return (
    <>
      <Header theme="light" />
      <main>
        <HeroSplit content={dev.hero} />
        <FigmaBackdrop frame={dev.backdrops.services}>
          <DevelopmentSupport content={dev.developmentSupport} />
          <ServiceTabs content={dev.seoServices} />
        </FigmaBackdrop>
        <Marquee content={home.marquee} />
        <InHouseDevelopment content={dev.inHouseDevelopment} />
        <FigmaBackdrop frame={dev.backdrops.agency}>
          <AroundYourAgency content={dev.aroundYourAgency} />
        </FigmaBackdrop>
        <HireDevelopers content={dev.hireDevelopers} />
        <FigmaBackdrop frame={dev.backdrops.projects}>
          <ClientProjects content={dev.clientProjects} sharedBackground />
          <CustomDevelopment content={dev.customDevelopment} />
          <SystemIntegrations content={dev.systemIntegrations} />
        </FigmaBackdrop>
        <DevelopmentQuality content={dev.developmentQuality} />
        <ProcessTimeline content={dev.process} />
        <FigmaBackdrop frame={dev.backdrops.engagement}>
          <DevelopmentEngagement content={dev.engagement} />
          <DevelopmentControl content={dev.agencyControl} />
        </FigmaBackdrop>
        <DesignFaqs content={dev.faqs} />
        <DesignGrowthCta content={dev.cta} />
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}

export default SeoServices;

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
import Footer from "./Components/utility/footer";
import dev from "./data/pages/web-development.json";
import home from "./data/pages/home.json";

function SeoServices() {
  return (
    <>
      <Header theme="light" />
      <main>
        <HeroSplit content={dev.hero} />
        <DevelopmentSupport content={dev.developmentSupport} />
        <ServiceTabs content={dev.seoServices} />
        <Marquee content={home.marquee} />
        <InHouseDevelopment content={dev.inHouseDevelopment} />
        <AroundYourAgency content={dev.aroundYourAgency} />
        <HireDevelopers content={dev.hireDevelopers} />
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[28rem] top-[22rem] -z-10 bg-[#101112] bg-[linear-gradient(180deg,#fff_0%,transparent_28%),radial-gradient(ellipse_at_100%_85%,#1358c7_0%,transparent_55%),linear-gradient(135deg,#a8c4ed_0%,#0c254f_38%,#111_67%)] md:bottom-[44vw] md:top-[22vw]"
          />
          <ClientProjects content={dev.clientProjects} sharedBackground />
          <CustomDevelopment content={dev.customDevelopment} />
          <SystemIntegrations content={dev.systemIntegrations} />
        </div>
        <DevelopmentQuality content={dev.developmentQuality} />
        <ProcessTimeline content={dev.process} />
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}

export default SeoServices;

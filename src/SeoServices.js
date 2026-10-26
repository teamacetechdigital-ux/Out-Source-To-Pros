import Header from "./Components/utility/header";
import HeroSplit from "./Components/utility/heroSplit";
import AnalyticsMarquee from "./Components/utility/analyticsMarquee";
import SupportList from "./Components/utility/supportList";
import ServiceTabs from "./Components/utility/serviceTabs";
import WhiteLabelStack from "./Components/utility/whiteLabelStack";
import BenefitCards from "./Components/Homepage/businessOustsource";
import ComparisonTable from "./Components/utility/whyAgencies";
import TwoColumnDark from "./Components/utility/twoColumnDark";
import Faqs from "./Components/utility/faqs";
import ProcessTimeline from "./Components/utility/processTimeline";
import ControlMap from "./Components/utility/controlMap";
import GlassCards from "./Components/utility/glassCards";
import EngagementModels from "./Components/utility/engagementModels";
import CaseStudy from "./Components/utility/caseStudy";
import FaqAccordion from "./Components/utility/faqAccordion";
import BuildingCta from "./Components/utility/buildingCta";
import Footer from "./Components/utility/footer";
import seo from "./data/pages/seo-services.json";

function SeoServices() {
  return (
    <>
      <Header theme="light" />
      <main>
        <HeroSplit content={seo.hero} />
        <AnalyticsMarquee content={seo.analyticsMarquee} />
        <SupportList content={seo.scaleSeo} />
        <ServiceTabs content={seo.seoServices} />
        <WhiteLabelStack content={seo.whiteLabelSeo} />
        <BenefitCards content={seo.whyOutsource} />
        <ComparisonTable content={seo.inHouseVsOutsourced} />
        <TwoColumnDark content={seo.whichModel} />
        <Faqs content={seo.seoTasks} />
        <ProcessTimeline content={seo.process} />
        <BenefitCards content={seo.quality} />
        <ControlMap content={seo.secureControl} />
        <GlassCards content={seo.businessTypes} />
        <EngagementModels content={seo.engagementModels} />
        <CaseStudy content={seo.caseStudy} />
        <GlassCards content={seo.whyChoose} />
        <FaqAccordion content={seo.faq} />
        <BuildingCta content={seo.cta} />
      </main>
      <Footer />
    </>
  );
}

export default SeoServices;

import Header from "./Components/utility/header";
import HeroSplit from "./Components/utility/heroSplit";
import DevelopmentSupport from "./Components/utility/developmentSupport";
import BrandServiceTabs from "./Components/utility/brandServiceTabs";
import WhyAgencies from "./Components/utility/whyAgencies";
import BrandStrategy from "./Components/utility/brandStrategy";
import BrandIdentitySystem from "./Components/utility/brandIdentitySystem";
import BrandChannels from "./Components/utility/brandChannels";
import BrandMessaging from "./Components/utility/brandMessaging";
import BrandPositioning from "./Components/utility/brandPositioning";
import BrandRebrand from "./Components/utility/brandRebrand";
import BrandGuidelines from "./Components/utility/brandGuidelines";
import ProcessTimeline from "./Components/utility/processTimeline";
import BrandStages from "./Components/utility/brandStages";
import BrandWhiteLabel from "./Components/utility/brandWhiteLabel";
import BrandMemorable from "./Components/utility/brandMemorable";
import BrandExperience from "./Components/utility/brandExperience";
import BrandMeasure from "./Components/utility/brandMeasure";
import BrandEngagements from "./Components/utility/brandEngagements";
import DesignFaqs from "./Components/utility/designFaqs";
import DesignGrowthCta from "./Components/utility/designGrowthCta";
import Footer from "./Components/utility/footer";
import FigmaBackdrop from "./Components/utility/figmaBackdrop";
import branding from "./data/pages/branding-identity.json";

function BrandingServices() {
  return (
    <>
      <Header theme="light" />
      <main>
        <HeroSplit content={branding.hero} />
        <FigmaBackdrop frame={branding.backdrops.services}>
          <DevelopmentSupport content={branding.brandSupport} />
          <BrandServiceTabs content={branding.serviceTabs} />
        </FigmaBackdrop>
        <WhyAgencies content={branding.comparison} />
        <BrandStrategy content={branding.strategy} />
        <FigmaBackdrop frame={branding.backdrops.channels}>
          <BrandIdentitySystem content={branding.identitySystem} />
          <BrandChannels content={branding.channels} />
          <BrandMessaging content={branding.messaging} />
        </FigmaBackdrop>
        <BrandPositioning content={branding.positioning} />
        <FigmaBackdrop frame={branding.backdrops.guidelines}>
          <BrandRebrand content={branding.rebrand} />
          <BrandGuidelines content={branding.guidelines} />
        </FigmaBackdrop>
        <ProcessTimeline content={branding.process} />
        <BrandStages content={branding.stages} />
        <FigmaBackdrop frame={branding.backdrops.memorable}>
          <BrandWhiteLabel content={branding.whiteLabel} />
          <BrandMemorable content={branding.memorable} />
          <BrandExperience content={branding.experience} />
        </FigmaBackdrop>
        <div className="bg-[linear-gradient(180deg,#fff,rgba(161,209,255,0.4))]">
          <BrandMeasure content={branding.measure} />
        </div>
        <BrandEngagements content={branding.engagements} />
        <div className="[&>section>[aria-hidden]]:hidden">
          <DesignFaqs content={branding.faqs} />
        </div>
        <DesignGrowthCta content={branding.growthCta} />
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}

export default BrandingServices;

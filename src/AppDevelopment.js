import Header from "./Components/utility/header";
import HeroSplit from "./Components/utility/heroSplit";
import AppIdeaToLaunch from "./Components/utility/appIdeaToLaunch";
import AppServiceTabs from "./Components/utility/appServiceTabs";
import AppApplications from "./Components/utility/appApplications";
import AppFeatures from "./Components/utility/appFeatures";
import ProcessTimeline from "./Components/utility/processTimeline";
import AppNativeComparison from "./Components/utility/appNativeComparison";
import AppFrontendBackend from "./Components/utility/appFrontendBackend";
import AppSplitCard from "./Components/utility/appSplitCard";
import AppTechStack from "./Components/utility/appTechStack";
import AppSecurity from "./Components/utility/appSecurity";
import AppEngagementModels from "./Components/utility/appEngagementModels";
import WhyAgencies from "./Components/utility/whyAgencies";
import AppCost from "./Components/utility/appCost";
import Industries from "./Components/utility/industries";
import AppMaintenance from "./Components/utility/appMaintenance";
import DesignFaqs from "./Components/utility/designFaqs";
import DesignGrowthCta from "./Components/utility/designGrowthCta";
import Footer from "./Components/utility/footer";
import FigmaBackdrop from "./Components/utility/figmaBackdrop";
import app from "./data/pages/app-development.json";

function AppDevelopment() {
  return (
    <>
      <Header theme="light" />
      <main>
        <HeroSplit content={app.hero} />
        <FigmaBackdrop frame={app.backdrops.services}>
          <AppIdeaToLaunch content={app.ideaToLaunch} />
          <AppServiceTabs content={app.serviceTabs} />
          <AppApplications content={app.applications} />
        </FigmaBackdrop>
        <AppFeatures content={app.features} />
        <div className="[&_ol]:max-w-full">
          <ProcessTimeline content={app.process} />
        </div>
        <FigmaBackdrop frame={app.backdrops.native}>
          <AppNativeComparison content={app.nativeComparison} />
          <AppFrontendBackend content={app.frontendBackend} />
        </FigmaBackdrop>
        <AppSplitCard content={app.uiUxDesign} variant="blue" />
        <AppTechStack content={app.techStack} />
        <FigmaBackdrop frame={app.backdrops.security}>
          <AppSecurity content={app.security} />
          <AppSplitCard content={app.crossPlatform} variant="outline" />
        </FigmaBackdrop>
        <AppEngagementModels content={app.engagementModels} />
        <WhyAgencies content={app.modelComparison} />
        <FigmaBackdrop
          frame={app.backdrops.industries}
          className="[&_.industry-section]:bg-none!"
        >
          <AppCost content={app.cost} />
          <Industries content={app.industries} />
          <div className="pt-12 md:pt-[5vw]">
            <AppSplitCard
              content={app.modernization}
              variant="light"
              listColumns={2}
            />
          </div>
        </FigmaBackdrop>
        <FigmaBackdrop frame={app.backdrops.maintenance}>
          <AppMaintenance content={app.maintenance} />
        </FigmaBackdrop>
        <DesignFaqs content={app.faqs} />
        <DesignGrowthCta content={app.growthCta} />
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}

export default AppDevelopment;

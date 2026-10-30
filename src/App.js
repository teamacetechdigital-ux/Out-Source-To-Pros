import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/utility/header";
import Hero from "./Components/utility/hero";
import WhiteTextarea from "./Components/utility/whiteTextarea";
import Marquee from "./Components/utility/marquee";
import Tabs from "./Components/utility/tabs";
import Indestries from "./Components/utility/industries";
import WhiteLabel from "./Components/Homepage/whiteLabelService";
import BusinessOutSource from "./Components/Homepage/businessOustsource";
import WhyAgencies from "./Components/utility/whyAgencies";
import ScaleDelivery from "./Components/utility/scaleDelivery";
import WorkingProcess from "./Components/utility/workingProcess";
import Faqs from "./Components/utility/faqs";
import Testimonials from "./Components/utility/testimonials";
import ContactForm from "./Components/utility/contactForm";
import BuildingCta from "./Components/utility/buildingCta";
import Newsletter from "./Components/utility/newsletter";
import Footer from "./Components/utility/footer";
import SeoServices from "./SeoServices";
import WebDesignServices from "./WebDesignServices";
import WebDevelopmentServices from "./WebDevelopment";
import home from "./data/pages/home.json";

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <Hero content={home.hero} />
      <WhiteTextarea content={home.whiteTextarea} />
      <Marquee content={home.marquee} />
      <Tabs content={home.services} />
      <Indestries content={home.industries} />
      <WhiteLabel content={home.whiteLabel} />
      <BusinessOutSource content={home.businessOutsource} />
      <WhyAgencies content={home.whyAgencies} />
      <ScaleDelivery content={home.scaleDelivery} />
      <WorkingProcess content={home.workingProcess} />
      <Faqs content={home.faqs} />
      <Testimonials content={home.testimonials} />
      <ContactForm content={home.contactForm} />
      <BuildingCta content={home.buildingCta} />
      <Newsletter content={home.newsletter} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seo-services" element={<SeoServices />} />
        <Route path="/web-design-services" element={<WebDesignServices />} />
        <Route path="/web-development-services" element={<WebDevelopmentServices />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

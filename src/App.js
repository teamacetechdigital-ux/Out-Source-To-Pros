import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/utility/header";
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
function App() {
  const [countProgress, setCountProgress] = useState(0);
  const counts = [5, 3, 200, 10, 20];

  useEffect(() => {
    const duration = 1500;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCountProgress(1);
      return;
    }

    let animationFrame;
    let startTime;

    const animateCount = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCountProgress(1 - (1 - progress) ** 4);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(animateCount);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <Header />
      <section id="home" className="banner">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="col-1 w-full max-w-4xl">
            <h1 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[72px] xl:text-8xl capitalize text-white">
              One Team. Every Digital Solution.
            </h1>
            <p className="satoshi-reg text-base sm:text-lg lg:text-xl font-medium py-6 text-white">
              Build, market, and grow your business with one team for web
              design, development, SEO, paid advertising, custom software, AI
              automation, and ongoing digital support.
            </p>
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <button className="bg-[#1B50E8] text-base sm:text-lg lg:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                Book a Free Strategy Call
              </button>
              <button className="bg-white text-black text-base sm:text-lg lg:text-xl px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                EXPLORE OUR SERVICES
              </button>
            </div>
          </div>
          <div className="banner-count grid grid-cols-2 items-start gap-x-5 gap-y-8 border-t sm:grid-cols-3 xl:grid-cols-5">
            <div className="count-col-1">
              <h2 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[64px] xl:text-[72px] 2xl:text-8xl capitalize text-white">
                {`${Math.floor(countProgress * counts[0]).toLocaleString()}k+`}
              </h2>
              <p className="montserrat-md font-medium text-lg sm:text-xl lg:text-2xl text-white">
                Projects
                {" "}<br className="hidden sm:block" /> Completed
              </p>
            </div>
            <div className="count-col-1">
              <h2 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[64px] xl:text-[72px] 2xl:text-8xl capitalize text-white">
                {`${Math.floor(countProgress * counts[1]).toLocaleString()}k+`}
              </h2>
              <p className="montserrat-md font-medium text-lg sm:text-xl lg:text-2xl text-white">
                Businesses
                {" "}<br className="hidden sm:block" /> Supported
              </p>
            </div>
            <div className="count-col-1">
              <h2 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[64px] xl:text-[72px] 2xl:text-8xl capitalize text-white">
                {`${Math.floor(countProgress * counts[2]).toLocaleString()}+`}
              </h2>
              <p className="montserrat-md font-medium text-lg sm:text-xl lg:text-2xl text-white">
                Industrie
                {" "}<br className="hidden sm:block" /> Served
              </p>
            </div>
            <div className="count-col-1">
              <h2 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[64px] xl:text-[72px] 2xl:text-8xl capitalize text-white">
                {`${Math.floor(countProgress * counts[3]).toLocaleString()}+`}
              </h2>
              <p className="montserrat-md font-medium text-lg sm:text-xl lg:text-2xl text-white">
                Countries
                {" "}<br className="hidden sm:block" /> Reached
              </p>
            </div>
            <div className="count-col-1">
              <h2 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[64px] xl:text-[72px] 2xl:text-8xl capitalize text-white">
                {`${Math.floor(countProgress * counts[4]).toLocaleString()}+`}
              </h2>
              <p className="montserrat-md font-medium text-lg sm:text-xl lg:text-2xl text-white">
                Years of Combined
                {" "}<br className="hidden sm:block" /> Experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhiteTextarea />
      <Marquee />
      <Tabs />
      <Indestries />
      <WhiteLabel />
      <BusinessOutSource />
      <WhyAgencies />
      <ScaleDelivery />
      <WorkingProcess />
      <Faqs />
      <Testimonials />
      <ContactForm />
      <BuildingCta />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

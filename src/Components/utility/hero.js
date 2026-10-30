import { useEffect, useState } from "react";
import { withBreaks } from "../../utils/text";

function Hero({ content }) {
  const [countProgress, setCountProgress] = useState(0);

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
    <section id="home" className="banner">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="col-1 w-full max-w-4xl">
          <h1 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[72px] xl:text-[75px] leading-[1.1] capitalize text-white">
            {content.title}
          </h1>
          <p className="satoshi-reg max-w-[600px] text-[15px] 2xl:text-[19px] lg:text-sm font-medium capitalize py-6 text-white">
            {content.description}
          </p>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <button className="bg-[#1B50E8] text-base lg:text-lg 2xl:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
              {content.primaryButtonLabel}
            </button>
            <button className="bg-white text-black text-base lg:text-lg 2xl:text-xl px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
              {content.secondaryButtonLabel}
            </button>
          </div>
        </div>
        <div className="banner-count grid grid-cols-2 items-start gap-x-5 gap-y-8 border-t sm:grid-cols-3 xl:grid-cols-5">
          {content.counters.map((counter) => (
            <div className="count-col-1" key={counter.label}>
              <h2 className="montserrat-rg font-extrabold text-[42px] sm:text-[60px] lg:text-[64px] xl:text-[72px] capitalize text-white">
                {`${Math.floor(countProgress * counter.value).toLocaleString()}${counter.suffix}`}
              </h2>
              <p className="montserrat-md font-medium text-lg sm:text-xl lg:text-[22px] 2xl:text-[26px] text-white">
                {withBreaks(counter.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { withBreaks } from "../../utils/text";
import { figmaBackdropStyle } from "./figmaBackdrop";
import seoHeroDashboard from "../../assets/imgs/seo/seo-hero.png";
import webdesignHeroDashboard from "../../assets/imgs/webdesign/bannerimg.png";
import devHeroDashboard from "../../assets/imgs/webdevelopment/developmentImg.png";

const images = { seoHeroDashboard, webdesignHeroDashboard, devHeroDashboard};

// Hero "Work" frame from Figma (1884 x 1044, inset 18px; same on every service page).
const sectionStyle = figmaBackdropStyle({ width: 1884, height: 1044, offset: -1748, shiftX: -18, flipY: true, palette: "hero" });

const placeholderStyle = {
  background: "linear-gradient(135deg, #EEF4FF 0%, #D6E4FF 100%)",
};

const labelStyle = {
  boxShadow: "0px 6px 18px rgba(27, 80, 232, 0.18)",
};

// Where each floating label sits over the image (by position in the JSON list).
const labelPositions = [
  { left: "2%", top: "16%" },
  { right: "1%", top: "4%" },
  { left: "0%", top: "52%" },
  { right: "0%", top: "70%" },
  { left: "34%", top: "88%" },
];

// Float timing for each label so they do not move together.
const floatTimings = [
  { duration: 3400, delay: 0 },
  { duration: 3800, delay: 600 },
  { duration: 3000, delay: 1200 },
  { duration: 4000, delay: 300 },
  { duration: 3600, delay: 900 },
];

function HeroSplit({ content }) {
  const labelRefs = useRef([]);
  const image = images[content.image];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const animations = labelRefs.current.filter(Boolean).map((label, index) => {
      const timing = floatTimings[index % floatTimings.length];
      return label.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-8px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: timing.duration,
          delay: timing.delay,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });

    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  return (
    <div className="px-2">
      <section
        className="relative overflow-hidden rounded-b-[24px] pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-[170px]"
        style={sectionStyle}
      >
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 [&>*]:min-w-0">
            <div>
              <h1 className="montserrat-rg text-[40px] font-extrabold leading-[1.1] text-black sm:text-[56px] lg:text-[64px] xl:text-[75px]">
                {withBreaks(content.title)}
              </h1>
              <p className="satoshi-reg max-w-[560px] pt-5 text-lg capitalize text-black">
                {content.description}
              </p>
              <Link
                to={content.buttonLink}
                className="montserrat-bd mt-8 inline-block rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
              >
                {content.buttonLabel}
              </Link>
            </div>

            <div className={`relative mx-auto w-full py-6 sm:py-8 ${image ? "max-w-[760px]" : "max-w-[780px]"}`}>
              {image ? (
                <img
                  src={image}
                  alt={content.imageAlt}
                  className="block h-auto w-full"
                />
              ) : (
                <div
                  role="img"
                  aria-label={content.imageAlt}
                  className="aspect-[620/420] w-full rounded-2xl border border-[#A1D1FF]"
                  style={placeholderStyle}
                />
              )}

              {!image && content.floatingLabels.map((label, index) => (
                <span
                  key={label}
                  ref={(el) => (labelRefs.current[index] = el)}
                  className="montserrat-bd absolute whitespace-nowrap rounded-[9999px] bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase text-black sm:px-4 sm:py-2 sm:text-[11px] xl:text-[13px]"
                  style={{ ...labelStyle, ...labelPositions[index % labelPositions.length] }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSplit;

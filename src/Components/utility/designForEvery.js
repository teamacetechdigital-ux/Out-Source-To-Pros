import { useId } from "react";
import { Link } from "react-router-dom";
import desktopPreview from "../../assets/imgs/webdesign/resp1.webp";
import tabletPreview from "../../assets/imgs/webdesign/resp2.webp";
import mobilePreview from "../../assets/imgs/webdesign/resp3.webp";

const deviceImages = {
  desktop: desktopPreview,
  tablet: tabletPreview,
  mobile: mobilePreview,
};

const previewLayouts = {
  desktop: "aspect-[240/150] w-[92%] max-w-[416px] md:max-w-none",
  tablet: "aspect-square w-[64%] md:w-[80%]",
  mobile: "aspect-[420/756] w-[38%] sm:w-[45%] md:w-[60%]",
};

function ScreenCard({ screen }) {
  const image = deviceImages[screen.image];

  return (
    <article
      className={`relative h-[360px] min-w-0 overflow-clip rounded-[clamp(10px,1vw,16px)] border border-[#a1d1ff]/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.45))] text-white sm:h-[400px] md:h-[clamp(234px,30.2vw,435px)] ${screen.image === "desktop" ? "sm:col-span-2 md:col-span-1" : ""}`}
    >
      <div className="px-[clamp(16px,2.65vw,40px)] pt-[clamp(20px,2.65vw,40px)]">
        <h3 className="montserrat-rg text-xl font-bold uppercase leading-[1.2] md:text-[clamp(1rem,2.2vw,2rem)]">
          {screen.title}
        </h3>
        <p className="satoshi-md mt-1 text-sm leading-[1.35] md:text-[clamp(0.4375rem,0.97vw,0.875rem)]">
          {screen.description}
        </p>
      </div>
      <div
        className={`absolute bottom-0 right-0 overflow-hidden ${previewLayouts[screen.image]}`}
      >
        <img
          src={image}
          alt={screen.imageAlt}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover object-top"
        />
      </div>
    </article>
  );
}

function DesignForEvery({ content }) {
  const id = useId();

  return (
    <section
      id="design-for-every-screen"
      aria-labelledby={`${id}-heading`}
      className="bg-[#111111] bg-[radial-gradient(ellipse_at_100%_100%,#1255bd_0%,transparent_48%),linear-gradient(180deg,rgba(220,230,242,0.9)_0%,rgba(220,230,242,0)_28%),radial-gradient(ellipse_at_80%_25%,#1b5fc9_0%,rgba(27,95,201,0.65)_28%,transparent_70%)] pb-10 pt-12 md:pb-[5.1vw] md:pt-[8vw]"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="mx-auto w-full text-center md:w-[58%]">
          <h2
            id={`${id}-heading`}
            className="montserrat-rg text-[28px] font-bold leading-[1.2] text-white md:text-[clamp(1.5rem,3.23vw,2.875rem)]"
          >
            {content.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,rgba(161,193,255,0.65))] pr-2">
              {content.highlight}
            </span>
          </h2>
          <div className="satoshi-md mt-5 space-y-2 text-[15px] leading-[1.35] text-white md:mt-[3.5%] md:space-y-[1.5%] md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-[clamp(8px,1vw,16px)] sm:grid-cols-2 md:mt-[4.6vw] md:grid-cols-[1.82fr_1.36fr_1fr]">
          {content.screens.map((screen) => (
            <ScreenCard key={screen.image} screen={screen} />
          ))}
        </div>
        <div className="mt-8 text-center md:mt-[5.2vw]">
          <Link
            to={content.buttonLink}
            className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-6 py-3.5 text-center text-xs font-bold uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-[2%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]"
          >
            {content.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DesignForEvery;

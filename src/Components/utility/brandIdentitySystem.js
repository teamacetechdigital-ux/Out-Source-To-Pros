import { useId, useRef } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";
import usePhysicsChips from "./usePhysicsChips";

const chipClass = "satoshi-bd absolute flex h-[13cqw] w-[40cqw] items-center justify-center rounded-[1.6cqw] text-[4cqw] md:h-[7cqw] md:w-[19cqw] md:rounded-[0.8cqw] md:text-[1.8cqw]";

function LogoTile({ className, light = false }) {
  return (
    <span
      data-agency-chip="logo-tile"
      className={`absolute flex aspect-square w-[14cqw] items-center justify-center rounded-[1.6cqw] p-[2cqw] md:w-[7cqw] md:rounded-[0.8cqw] md:p-[1.6cqw] ${className}`}
    >
      <img
        src={brandMark}
        alt=""
        width="76"
        height="76"
        draggable="false"
        className={`block h-auto w-full ${light ? "" : "brightness-0 invert"}`}
      />
    </span>
  );
}

// Tilted identity chips that fall into a pile and can be dragged around.
function IdentityArtwork({ label, chips }) {
  const containerRef = useRef(null);
  usePhysicsChips(containerRef);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={label}
      tabIndex={0}
      className="@container relative isolate aspect-[4/3] w-full touch-pan-y overflow-clip rounded-[clamp(16px,1.5vw,24px)] border border-[#d6e8ff] bg-[linear-gradient(180deg,#a8cdf7_0%,#e4f0ff_70%,#f4f9ff_100%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:aspect-[1568/469] [&_[data-agency-chip]]:cursor-grab [&_[data-agency-chip]]:touch-none [&_[data-agency-chip]]:select-none [&_[data-agency-chip]]:active:cursor-grabbing"
    >
      <span data-agency-chip="applications" className={`${chipClass} left-[2%] top-[40%] -rotate-15 bg-[#1B50E8] text-white md:top-[58%]`}>{chips.applications}</span>
      <span data-agency-chip="graphic" className={`${chipClass} left-[45%] top-[30%] rotate-30 bg-white text-[#1B50E8] md:left-[18%] md:top-[56%]`}>{chips.graphic}</span>
      <LogoTile light className="left-[30%] top-[10%] rotate-[8deg] bg-[#9bceff] md:left-[27%] md:top-[56%]" />
      <span data-agency-chip="color" className={`${chipClass} left-[0%] top-[78%] -rotate-15 bg-[#9bceff] text-[#1B50E8] md:top-[86%]`}>{chips.color}</span>
      <span data-agency-chip="typography" className={`${chipClass} left-[30%] top-[62%] rotate-[5deg] bg-[#1B50E8] text-white md:left-[35%] md:top-[72%]`}>{chips.typography}</span>
      <LogoTile className="left-[70%] top-[8%] -rotate-[4deg] bg-[#1B50E8] md:left-[51%] md:top-[60%]" />
      <span data-agency-chip="imagery" className={`${chipClass} left-[55%] top-[50%] -rotate-3 bg-[#9bceff] text-[#1B50E8] md:left-[56%] md:top-[80%]`}>{chips.imagery}</span>
      <span data-agency-chip="logo" className={`${chipClass} left-[58%] top-[80%] rotate-[25deg] bg-white text-[#1B50E8] md:left-[87%] md:top-[70%]`}>{chips.logo}</span>
    </div>
  );
}

function BrandIdentitySystem({ content }) {
  const id = useId();

  return (
    <section id="brand-identity-system" aria-labelledby={`${id}-heading`} className="relative z-10 pt-4 md:pt-[2vw]">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1424px] rounded-[clamp(16px,1.7vw,24px)] bg-white px-3 pb-8 pt-10 shadow-[0_4px_24px_rgba(27,80,232,0.08)] md:w-[85.4%] md:px-[2.2%] md:pb-[3.5%] md:pt-[4.5%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[78ch] space-y-2 px-2 text-center text-[15px] leading-[1.35] text-black md:mt-[2.5%] md:w-[57%] md:space-y-[1%] md:px-0 md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-7 md:mt-[2.6%]">
          <IdentityArtwork label={content.artworkLabel} chips={content.chips} />
        </div>
        <div className="mt-7 text-center md:mt-[2.6%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[1.6%] md:py-[1.2%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default BrandIdentitySystem;

import { useId } from "react";
import { Link } from "react-router-dom";

const buttonClass = "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-[clamp(1.0625rem,1.25vw,1.5rem)]";
const headingClass = "montserrat-rg text-[28px] font-bold leading-[1.15] text-white md:text-[clamp(1.875rem,3.23vw,3.75rem)]";
const highlightClass = "bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.45))] pr-1";

// Where each circle sits in the 2x2 cluster; neighbours overlap slightly. Narrow containers
// (phones, tablet two-column) show the items as cards instead, so their text fits.
const circlePositions = ["@md:left-0 @md:top-0", "@md:right-0 @md:top-0", "@md:bottom-0 @md:left-0", "@md:bottom-0 @md:right-0"];

function BrandMemorable({ content }) {
  const id = useId();
  const { system } = content;

  return (
    <section id="brand-memorable" aria-labelledby={`${id}-heading`} className="relative isolate pb-14 pt-20 md:pb-[9vw] md:pt-[11vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] text-white md:w-[79.2%]">
        <h2 id={`${id}-heading`} className={`${headingClass} text-center`}>
          {content.title}<br /><span className={highlightClass}>{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[78ch] space-y-1 text-center text-[15px] leading-[1.35] md:mt-[2.6%] md:w-[61.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="mt-7 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:mt-[2.6%] md:grid-cols-5 md:gap-[1.3%]">
          {content.cards.map((card) => (
            <li key={card.title} className="min-w-0 rounded-[clamp(8px,0.8vw,12px)] border border-white/30 bg-white/8 p-5 md:min-h-[clamp(90px,10.6vw,203px)] md:px-[9%] md:py-[9%]">
              <h3 className="satoshi-bd text-base leading-[1.2] md:text-[clamp(1rem,1.04vw,1.25rem)]">{card.title}</h3>
              <p className="satoshi-md mt-2 text-[15px] leading-[1.35] md:mt-[8%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center md:mt-[3.8%]">
          <Link to={content.buttonLink} className={`${buttonClass} md:px-[1.6%] md:py-[1.4%]`}>{content.buttonLabel}</Link>
        </div>

        <div aria-labelledby={`${id}-system-heading`} className="mt-12 grid grid-cols-1 items-center gap-10 border-t border-white/20 pt-12 md:mt-[6.5%] md:grid-cols-[640fr_626fr] md:gap-[16%] md:pt-[6.5%]">
          <div className="min-w-0">
            <h2 id={`${id}-system-heading`} className={headingClass}>
              {system.title}<br /><span className={highlightClass}>{system.highlight}</span>
            </h2>
            <div className="satoshi-md mt-5 space-y-2 text-[15px] leading-[1.35] md:mt-[4%] md:w-[86%] md:space-y-[1.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
              {system.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link to={system.buttonLink} className={`${buttonClass} mt-6 md:mt-[4%] md:px-[4%] md:py-[2.6%]`}>{system.buttonLabel}</Link>
          </div>
          <div className="@container mx-auto w-full max-w-[520px] md:max-w-none">
          <ul className="grid grid-cols-1 gap-3 @xs:grid-cols-2 @md:relative @md:block @md:aspect-square">
            {system.circles.map((circle, index) => (
              <li key={circle.title} className={`flex flex-col items-center justify-center rounded-[20px] px-5 py-6 text-center @md:absolute @md:aspect-square @md:w-[52%] @md:rounded-[9999px] @md:px-[7%] @md:py-0 ${circlePositions[index]} ${index === 0 ? "z-10 bg-[linear-gradient(160deg,#0075ff,#1b50e8)] shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : "border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] backdrop-blur-sm"}`}>
                <h3 className="satoshi-bd text-[max(13px,3cqw)] leading-[1.2]">{circle.title}</h3>
                <p className="satoshi-md mt-[1.5cqw] text-[max(13px,2.1cqw)] leading-[1.35] text-white/90">{circle.text}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandMemorable;

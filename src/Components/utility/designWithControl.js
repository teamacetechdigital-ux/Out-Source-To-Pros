import { useId } from "react";
import { Link } from "react-router-dom";

const buttonClass = "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85baff] md:px-[2%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]";
const headingClass = "montserrat-rg text-center text-[28px] font-bold leading-[1.15] md:text-[clamp(1.5rem,3.23vw,2.875rem)]";

function DesignWithControl({ content }) {
  const id = useId();

  return (
    <section id="design-with-control" aria-labelledby={`${id}-control-heading`} className="relative isolate bg-white pb-10 md:pb-[4vw]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-[260px] -z-10 bg-[#111111] bg-[radial-gradient(ellipse_at_100%_100%,#749be0_0%,transparent_45%),linear-gradient(120deg,#111111_28%,#0c254f_60%,#1255bd_86%)] md:top-[29.6vw]" />
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="rounded-[clamp(16px,1.7vw,24px)] bg-[linear-gradient(180deg,#f0f8ff,#e2f1ff_24%,#fff_58%)] px-6 py-10 text-center text-black shadow-[0_4px_22px_rgba(27,80,232,0.08)] md:px-[15%] md:py-[6.5%]">
          <h2 id={`${id}-control-heading`} className={headingClass}>{content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#a1bfff)] pr-1">{content.highlight}</span></h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[78ch] space-y-2 text-sm leading-[1.3] md:mt-[3%] md:space-y-[1.5%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-5 space-y-2 md:mt-[3%] md:space-y-[1.5%]">
            {content.controlRows.map((row, index) => (
              <ul key={index} className="flex flex-wrap justify-center gap-2 md:gap-[1.5%]">
                {row.map((label) => <li key={label} className="satoshi-md rounded-[999px] bg-[#d0dcff] px-3 py-2 text-xs leading-[1.2] text-black md:px-[3%] md:py-[1.8%] md:text-[clamp(0.5625rem,0.94vw,0.875rem)]">{label}</li>)}
              </ul>
            ))}
          </div>
          <Link to={content.buttonLink} className={`${buttonClass} mt-6 md:mt-[3%] md:px-[4%] md:py-[2.4%]`}>{content.buttonLabel}</Link>
        </div>
        <div className="mt-12 md:mt-[7.3vw]" aria-labelledby={`${id}-advantages-heading`}>
          <h2 id={`${id}-advantages-heading`} className={`${headingClass} text-white`}>{content.advantages.title}<br />{content.advantages.subtitle}<span className="bg-[linear-gradient(to_right,transparent,rgba(156,187,255,0.65))] pr-1">{content.advantages.highlight}</span></h2>
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[3.5%] md:grid-cols-4 md:gap-[0.8vw]">
            {content.advantages.cards.map((advantage) => (
              <li key={advantage.title} className="min-w-0 rounded-[clamp(8px,0.8vw,12px)] border border-[#bbdaff]/75 bg-white/8 p-5 text-white md:min-h-[clamp(76px,9.3vw,134px)] md:px-[6%] md:py-[7%]">
                <h3 className="satoshi-bd text-base leading-[1.2] md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{advantage.title}</h3>
                <p className="satoshi-md mt-1.5 text-sm leading-[1.3] md:mt-[3%] md:text-[clamp(0.4375rem,0.94vw,0.875rem)]">{advantage.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-7 text-center md:mt-[2.5%]"><Link to={content.advantages.buttonLink} className={buttonClass}>{content.advantages.buttonLabel}</Link></div>
        </div>
      </div>
    </section>
  );
}

export default DesignWithControl;

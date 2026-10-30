import { useId } from "react";
import { Link } from "react-router-dom";

function BrandWhiteLabel({ content }) {
  const id = useId();

  return (
    <section id="brand-white-label" aria-labelledby={`${id}-heading`} className="relative z-10">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-8 rounded-[clamp(16px,1.7vw,24px)] bg-white px-6 py-8 shadow-[0_0_30px_rgba(27,80,232,0.08)] sm:px-9 sm:py-10 md:w-[79.2%] md:grid-cols-[790fr_510fr] md:gap-[4%] md:px-[6.8%] md:py-[5.3%]">
        <div className="min-w-0">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />{content.subtitle}{" "}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[4.5%] md:w-[82%] md:space-y-[2%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            <p>{content.intro}</p>
            <p>
              {content.servicePrefix}{" "}<strong className="satoshi-bd">{content.serviceHighlight}</strong>{" "}{content.serviceText}
            </p>
            <p>{content.usage}</p>
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[6%] md:px-[3%] md:py-[2.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
        <div className="min-w-0 rounded-[clamp(16px,1.7vw,26px)] border-[clamp(2px,0.3vw,6px)] border-l-0 border-transparent py-6 pl-2 pr-5 [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(200deg,#a8cdf7,rgba(168,205,247,0)_55%)_border-box] md:py-[8%] md:pl-[3%] md:pr-[8%]">
          <h3 className="montserrat-rg text-xl font-bold leading-[1.2] text-black md:text-[clamp(1.25rem,1.45vw,1.75rem)]">{content.listTitle}</h3>
          <ul className="satoshi-md mt-4 space-y-1.5 text-sm leading-[1.3] text-black md:mt-[6%] md:space-y-[0.55vw] md:text-[clamp(0.875rem,0.83vw,1rem)]">
            {content.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[0.45em] size-1.5 shrink-0 rounded-[9999px] bg-[#1B50E8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BrandWhiteLabel;

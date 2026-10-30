import { useId } from "react";
import { Link } from "react-router-dom";

function BrandMeasure({ content }) {
  const id = useId();

  return (
    <section id="brand-measure" aria-labelledby={`${id}-heading`} className="pb-14 pt-4 md:pb-[7vw] md:pt-[3vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-8 md:w-[79.2%] md:grid-cols-[640fr_750fr] md:gap-[8.5%]">
        <div className="min-w-0">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-2 text-[15px] leading-[1.35] text-black md:mt-[5%] md:space-y-[1.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[10%] md:px-[4%] md:py-[2.6%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
        <ul className="min-w-0 space-y-3 md:space-y-[0.7vw]">
          {content.cards.map((card) => (
            <li key={card.title} className="rounded-[clamp(10px,1vw,16px)] bg-white px-5 py-4 shadow-[0_4px_18px_rgba(27,80,232,0.08)] md:px-[5%] md:py-[3.3%]">
              <h3 className="montserrat-rg text-base font-bold uppercase leading-[1.2] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{card.title}</h3>
              <p className="satoshi-md mt-1.5 text-[15px] leading-[1.3] text-black md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BrandMeasure;

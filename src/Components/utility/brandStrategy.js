import { useId } from "react";
import { Link } from "react-router-dom";

function BrandStrategy({ content }) {
  const id = useId();

  return (
    <section id="brand-strategy" aria-labelledby={`${id}-heading`} className="bg-white pb-12 pt-4 md:pb-[7vw] md:pt-[2vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-8 md:w-[79.2%] md:grid-cols-[563fr_792fr] md:gap-[11%]">
        <div className="min-w-0">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[6%] md:space-y-[2.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[10%] md:px-[5%] md:py-[3.5%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
        <ul className="grid min-w-0 grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:gap-x-[2.5%] md:gap-y-[1.6vw]">
          {content.cards.map((card) => (
            <li key={card.title} className="rounded-[clamp(10px,1vw,16px)] border border-transparent [background:linear-gradient(180deg,#f5faff,#fff)_padding-box,linear-gradient(180deg,#aad3ff,#fff)_border-box] px-5 py-4 md:min-h-[clamp(80px,7.8vw,150px)] md:px-[7%] md:py-[5%]">
              <h3 className="montserrat-rg text-base font-bold leading-[1.2] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{card.title}</h3>
              <p className="satoshi-md mt-1 text-[15px] leading-[1.3] text-black md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BrandStrategy;

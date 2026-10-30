import { useId } from "react";
import { Link } from "react-router-dom";

// Card rows from the design: three per row with different widths.
const rowLayouts = ["md:grid-cols-[433fr_433fr_614fr]", "md:grid-cols-[611fr_434fr_435fr]"];

function BrandStages({ content }) {
  const id = useId();
  const rows = [content.cards.slice(0, 3), content.cards.slice(3)];

  return (
    <section id="brand-stages" aria-labelledby={`${id}-heading`} className="bg-white pb-12 md:pb-[7vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}{" "}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span><br />{content.subtitle}
        </h2>
        <p className="satoshi-md mt-4 text-center text-[15px] leading-[1.3] text-black md:mt-[1.8%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.text}</p>
        <div className="mt-6 space-y-3 md:mt-[3%] md:space-y-[1.05vw]">
          {rows.map((cards, rowIndex) => (
            <ul key={rowIndex} className={`grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-[1.3%] ${rowLayouts[rowIndex]}`}>
              {cards.map((card) => (
                <li key={card.title} className="min-w-0 rounded-[clamp(10px,1vw,16px)] border border-transparent [background:linear-gradient(180deg,#f5faff,#fff)_padding-box,linear-gradient(180deg,#aad3ff,#fff)_border-box] px-5 py-4 md:min-h-[clamp(90px,9.3vw,180px)] md:px-[7.5%] md:py-[7%]">
                  <h3 className="montserrat-rg text-base font-bold leading-[1.2] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{card.title}</h3>
                  <p className="satoshi-md mt-2 text-[15px] leading-[1.3] text-black md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-7 text-center md:mt-[2.3%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default BrandStages;

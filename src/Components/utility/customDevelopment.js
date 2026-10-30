import { useId } from "react";
import { Link } from "react-router-dom";

function CustomDevelopment({ content }) {
  const id = useId();

  return (
    <section id="custom-development" aria-labelledby={`${id}-heading`} className="relative pb-10 pt-6 text-white md:pb-[7vw] md:pt-[2.5vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          {content.subtitle}<span className="bg-[linear-gradient(to_right,transparent,rgba(161,193,255,0.65))] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[70ch] space-y-2 text-center text-[15px] leading-[1.35] md:mt-[1.6vw] md:w-[60%] md:space-y-[0.5vw] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[2vw] md:grid-cols-10 md:gap-[1vw]">
          {content.cards.map((card, index) => (
            <li key={card.title} className={`min-w-0 rounded-[clamp(10px,1.3vw,18px)] border border-[#b9dcff]/80 bg-white/8 p-5 md:px-[1.6vw] md:py-[1.7vw] ${index === 2 || index === 3 ? "md:col-span-4" : "md:col-span-3"}`}>
              <h3 className="satoshi-bd text-base leading-[1.25] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{card.title}</h3>
              <p className="satoshi-md mt-1.5 text-[15px] leading-[1.3] md:mt-[0.5vw] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center md:mt-[3.3vw]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default CustomDevelopment;

import { useId } from "react";
import { Link } from "react-router-dom";

function BrandExperience({ content }) {
  const id = useId();

  return (
    <section id="brand-experience" aria-labelledby={`${id}-heading`} className="pb-12 md:pb-[5.5vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] rounded-[clamp(16px,1.7vw,24px)] bg-white px-4 py-10 shadow-[0_4px_24px_rgba(27,80,232,0.08)] sm:px-6 md:w-[79.2%] md:px-[3.6%] md:py-[4.5%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />{content.subtitle}{" "}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[78ch] space-y-0.5 text-center text-[15px] leading-[1.35] text-black md:mt-[2.6%] md:w-[72%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="mt-7 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:mt-[2.6%] md:grid-cols-5 md:gap-[1.4%]">
          {content.cards.map((card) => (
            <li key={card.title} className="min-w-0 rounded-[clamp(10px,1vw,16px)] bg-[linear-gradient(180deg,#a8d0ff_0%,#e6f2ff_55%,#fff_100%)] px-4 py-5 text-center md:min-h-[clamp(110px,10.4vw,200px)] md:px-[6%] md:py-[9%]">
              <h3 className="montserrat-rg text-base font-bold uppercase leading-[1.2] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{card.title}</h3>
              <p className="satoshi-md mt-2 text-[15px] leading-[1.3] text-black md:mt-[7%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center md:mt-[2.6%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default BrandExperience;

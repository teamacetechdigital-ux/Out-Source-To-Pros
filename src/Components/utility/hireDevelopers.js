import { useId } from "react";
import { Link } from "react-router-dom";

function HireDevelopers({ content }) {
  const id = useId();

  return (
    <section id="hire-developers" aria-labelledby={`${id}-heading`} className="bg-white pb-8 pt-10 md:pb-[3.5vw] md:pt-[4.6vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] text-center text-black md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
          {content.title}<br />
          {content.subtitle}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[70ch] space-y-2 text-sm leading-[1.35] md:mt-[2.3vw] md:w-[60%] md:space-y-[0.5vw] md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link to={content.buttonLink} className="montserrat-bd mt-5 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[1.8vw] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(0.625rem,1.25vw,1.125rem)]">
          {content.buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default HireDevelopers;

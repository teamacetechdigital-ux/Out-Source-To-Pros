import { useId } from "react";
import { Link } from "react-router-dom";

function DesignCost({ content }) {
  const id = useId();

  return (
    <section id="web-design-cost" aria-labelledby={`${id}-heading`} className="bg-white pb-10 md:pb-[4vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] text-center md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[67ch] space-y-3 text-[15px] leading-[1.3] text-black md:mt-[2.5%] md:w-[60%] md:space-y-[2%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[2.5%] md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
      </div>
    </section>
  );
}

export default DesignCost;

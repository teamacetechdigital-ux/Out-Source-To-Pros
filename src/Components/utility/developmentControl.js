import { useId } from "react";
import { Link } from "react-router-dom";

function DevelopmentControl({ content }) {
  const id = useId();

  return (
    <section id="development-control" aria-labelledby={`${id}-heading`} className="pb-12 pt-6 md:pb-[6vw] md:pt-[2vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[760px] text-center text-black md:w-[42%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mt-5 text-[15px] leading-[1.35] md:mt-[3.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="satoshi-bd mt-4 text-[15px] leading-[1.35] md:mt-[3%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <p className="satoshi-md mt-4 text-[15px] leading-[1.35] md:mt-[3%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.closing}</p>
        <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[4%] md:px-[3%] md:py-[2.2%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
      </div>
    </section>
  );
}

export default DevelopmentControl;

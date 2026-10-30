import { useId } from "react";
import { Link } from "react-router-dom";

const buttonClass = "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm px-5 py-3 text-center text-xs uppercase leading-[1.3] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[1.6%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]";

function DesignGrowthCta({ content }) {
  const id = useId();

  return (
    <section id="grow-your-design-team" aria-labelledby={`${id}-heading`} className="bg-white pb-14 pt-12 md:pb-[10.5vw] md:pt-[6.2vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] text-center md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]">{content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span></h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[64ch] space-y-3 text-sm leading-[1.3] text-black md:mt-[2.3%] md:w-[63%] md:space-y-[2%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-[2.5%] md:gap-[1vw]">
          {content.buttons.map((button, index) => (
            <Link key={button.label} to={button.link} className={`${buttonClass} ${index === 0 ? "bg-[#1B50E8] text-white hover:bg-[#1242c8]" : "bg-[#bdd0ff] text-black hover:bg-[#a8c1fc]"}`}>{button.label}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignGrowthCta;

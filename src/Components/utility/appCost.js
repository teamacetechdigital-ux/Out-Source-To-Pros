import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdevelopment/fav-mark.svg";

function AppCost({ content }) {
  const id = useId();

  return (
    <section id="app-development-cost" aria-labelledby={`${id}-heading`} className="relative isolate pb-14 pt-14 text-white md:pb-[6vw] md:pt-[6.5vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] items-center gap-8 md:w-[79.2%] md:grid-cols-[674fr_750fr] md:gap-[6.3%] [&>*]:min-w-0">
        <div>
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.5))] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] md:mt-[4%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-[5%] md:px-[2.2vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {content.buttonLabel}
          </Link>
        </div>

        <div className="relative isolate overflow-hidden rounded-[clamp(14px,1.3vw,20px)] border border-white/40 bg-white/8 px-6 py-7 backdrop-blur-sm md:px-[6.5%] md:py-[6%]">
          <img src={brandMark} alt="" aria-hidden="true" width="76" height="76" className="pointer-events-none absolute -bottom-[8%] right-[2%] -z-10 w-[40%] opacity-20" />
          <h3 className="montserrat-rg text-xl font-bold leading-[1.3] md:text-[clamp(1.375rem,1.6vw,1.9375rem)]">{content.listTitle}</h3>
          <ul className="satoshi-md mt-4 gap-x-6 text-[15px] leading-[1.35] sm:columns-2 md:mt-[5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
            {content.items.map((item) => (
              <li key={item} className="flex break-inside-avoid items-start gap-2.5 pb-2">
                <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] bg-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AppCost;

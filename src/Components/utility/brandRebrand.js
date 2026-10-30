import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

function BrandRebrand({ content }) {
  const id = useId();

  return (
    <section id="brand-rebrand" aria-labelledby={`${id}-heading`} className="relative z-10 pb-12 md:pb-[4vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-8 md:w-[79.2%] md:grid-cols-[792fr_728fr] md:gap-0">
        <div className="relative z-10 min-w-0">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />{content.subtitle}{" "}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[4%] md:w-[80%] md:space-y-[1.8%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[4%] md:px-[3.8%] md:py-[2.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
        {/* On desktop the card slides under the text column so the faint logo sits behind the heading */}
        <div className="relative isolate min-w-0 overflow-hidden rounded-[clamp(16px,1.7vw,26px)] bg-[linear-gradient(90deg,#fff_0%,#eef5ff_35%,#a8cdf7_100%)] px-6 py-8 md:-ml-[36.7%] md:min-h-[clamp(280px,27.8vw,534px)] md:py-[5%] md:pl-[78%] md:pr-[3%]">
          <div aria-hidden="true" className="pointer-events-none absolute -left-[8%] top-1/2 -z-10 hidden aspect-square w-[62%] -translate-y-1/2 rounded-[9999px] bg-[radial-gradient(circle,#eaf2ff_0%,#f6f9ff_70%,transparent_71%)] md:block" />
          <img src={brandMark} alt="" aria-hidden="true" width="76" height="76" className="pointer-events-none absolute -right-[10%] top-1/2 -z-10 w-[55%] -translate-y-1/2 opacity-15 md:left-[8%] md:right-auto md:w-[34%] md:opacity-40" />
          <h3 className="montserrat-rg text-xl font-bold leading-[1.2] text-black md:text-[clamp(1.375rem,1.56vw,1.875rem)]">{content.listTitle}</h3>
          <ul className="satoshi-md mt-4 space-y-1.5 text-sm leading-[1.3] text-black md:mt-[4%] md:space-y-[0.45vw] md:text-[clamp(0.875rem,0.83vw,1rem)]">
            {content.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[0.45em] size-1.5 shrink-0 rounded-[9999px] bg-[#1B50E8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BrandRebrand;

import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

function BrandMessaging({ content }) {
  const id = useId();

  return (
    <section id="brand-messaging" aria-labelledby={`${id}-heading`} className="relative pb-12 md:pb-[7vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-6 rounded-[clamp(16px,1.7vw,24px)] bg-white p-3 shadow-[0_4px_24px_rgba(27,80,232,0.1)] sm:p-5 md:w-[79.2%] md:grid-cols-[669fr_646fr] md:gap-[5%] md:px-[4.3%] md:py-[6.2%]">
        <div className="min-w-0 rounded-[clamp(16px,1.7vw,26px)] border-[clamp(2px,0.3vw,6px)] border-transparent px-5 py-7 [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(215deg,#a8cdf7,rgba(168,205,247,0)_40%)_border-box] md:px-[3%] md:py-[5%]">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[5%] md:space-y-[2.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[6%] md:px-[3%] md:py-[3%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
        <div className="relative isolate min-w-0 overflow-hidden rounded-[clamp(10px,1vw,16px)] bg-[linear-gradient(135deg,#0846a0,#0075ff)] px-6 py-7 text-white md:px-[6%] md:py-[5%]">
          <img src={brandMark} alt="" aria-hidden="true" width="76" height="76" className="pointer-events-none absolute -bottom-[12%] right-[-10%] -z-10 w-[62%] opacity-15 brightness-0 invert" />
          <h3 className="montserrat-rg text-xl font-bold leading-[1.2] md:text-[clamp(1.4375rem,1.67vw,2rem)]">{content.listTitle}</h3>
          <ul className="satoshi-md mt-4 space-y-2 text-[15px] leading-[1.3] md:mt-[5%] md:space-y-[0.55vw] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
            {content.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[0.45em] size-1.5 shrink-0 rounded-[9999px] bg-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BrandMessaging;

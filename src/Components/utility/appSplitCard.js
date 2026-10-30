import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

// Faded blue corner line used to frame either the text column or the list card.
const cornerClass = "pointer-events-none absolute right-0 hidden rounded-tr-[clamp(20px,3vw,44px)] border-r-[clamp(4px,0.6vw,10px)] border-t-[clamp(4px,0.6vw,10px)] border-[#b5d9ff] mask-[linear-gradient(to_bottom,#000,transparent)] md:block";

// Look of the list card on the right for each variant.
const listStyles = {
  blue: { card: "bg-[linear-gradient(135deg,#0846a0,#0075ff)] text-white", title: "text-white", dot: "bg-white/80" },
  outline: { card: "bg-white text-black", title: "text-black", dot: "bg-[#1B50E8]" },
  light: { card: "bg-[linear-gradient(180deg,#a1d1ff,#fff_85%)] text-black", title: "text-black", dot: "bg-[#1B50E8]" },
};

function AppSplitCard({ content, variant = "outline", listColumns = 1 }) {
  const id = useId();
  const style = listStyles[variant] || listStyles.outline;
  const { list } = content;

  return (
    <section aria-labelledby={`${id}-heading`} className="relative pb-12 md:pb-[7vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-8 rounded-[clamp(16px,1.7vw,24px)] bg-white px-6 py-8 text-black shadow-[0_4px_20px_rgba(27,80,232,0.09)] sm:px-8 md:w-[79.2%] md:grid-cols-[1.05fr_1fr] md:gap-[3vw] md:px-[5.8%] md:py-[6%]">
        <div className="relative min-w-0 md:pr-[4vw] md:pt-[1.5vw]">
          {variant === "blue" && <div aria-hidden="true" className={`${cornerClass} -top-[1.5vw] h-[80%] w-[80%]`} />}
          <h2 id={`${id}-heading`} className="montserrat-rg relative text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md relative mt-5 space-y-2 text-[15px] leading-[1.35] md:mt-[5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "satoshi-bd" : undefined}>{paragraph}</p>)}
          </div>
          {content.items && (
            <ul className="satoshi-md relative mt-4 space-y-1 text-[15px] leading-[1.35] md:mt-[3.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
              {content.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] bg-[#b5d9ff]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <Link to={content.buttonLink} className="montserrat-bd relative mt-6 inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[6%] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {content.buttonLabel}
          </Link>
        </div>

        <div className={`relative isolate min-w-0 overflow-hidden rounded-[clamp(14px,1.3vw,20px)] px-6 py-7 md:px-[7%] md:py-[7%] ${style.card}`}>
          {variant === "blue" ? (
            <img src={brandMark} alt="" aria-hidden="true" width="76" height="76" className="pointer-events-none absolute -bottom-[10%] -right-[8%] -z-10 w-[60%] opacity-15 brightness-0 invert" />
          ) : (
            <div aria-hidden="true" className={`${cornerClass} top-0 -z-10 h-full w-full`} />
          )}
          <h3 className={`montserrat-rg text-xl font-bold leading-[1.3] md:text-[clamp(1.375rem,1.6vw,1.9375rem)] ${style.title}`}>{list.title}</h3>
          <ul className={`satoshi-md mt-4 gap-x-6 text-[15px] leading-[1.35] md:mt-[5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)] ${listColumns > 1 ? "sm:columns-2" : ""}`}>
            {list.items.map((item) => (
              <li key={item} className="flex break-inside-avoid items-start gap-2.5 pb-1.5">
                <span aria-hidden="true" className={`mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] ${style.dot}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AppSplitCard;

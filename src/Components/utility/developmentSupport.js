import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdevelopment/fav-mark.svg";

function DevelopmentSupport({ content }) {
  const id = useId();

  return (
    <section
      id="development-support"
      aria-labelledby={`${id}-heading`}
      className="relative isolate pb-12 pt-12 md:pb-[4.8vw] md:pt-[8.8vw]"
    >
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 rounded-[clamp(18px,1.7vw,26px)] bg-white shadow-[0_5px_24px_rgba(27,80,232,0.08)] md:w-[79.2%] md:grid-cols-[1.55fr_1fr]">
        <div className="min-w-0 px-6 py-8 sm:px-8 md:px-[3.8%] md:py-[5.3%]">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.2] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}
            <br />
            {content.subtitle}{" "}<span className="bg-[linear-gradient(to_right,transparent,#8ba6ff)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[3.5%] md:space-y-[1.4%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link
            to={content.buttonLink}
            className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[3.5%] md:px-[3.5%] md:py-[2.4%] md:text-[clamp(1.125rem,1.3vw,1.5625rem)]"
          >
            {content.buttonLabel}
          </Link>
        </div>
        <div aria-labelledby={`${id}-support-heading`} className="min-w-0 rounded-[clamp(18px,1.7vw,26px)] bg-[linear-gradient(135deg,#0846a0,#0075ff)] px-6 py-7 text-white sm:px-8 md:px-[6.5%] md:py-[6.5%]">
          <h3 id={`${id}-support-heading`} className="satoshi-md text-[22px] leading-[1.25] text-[#dceaff] md:text-[clamp(1.625rem,1.85vw,2.25rem)]">{content.supportTitle}</h3>
          <ul className="mt-5 md:mt-[5%]">
            {content.supportItems.map((item) => (
              <li key={item.title} className="animate-gif-img flex items-start gap-2 border-b border-white/20 py-4 first:pt-0 last:border-b-0 last:pb-0 md:gap-[2%] md:py-[3.5%]">
                <img src={brandMark} alt="" aria-hidden="true" width="76" height="76" className="-ml-1 size-6 shrink-0 opacity-20 brightness-0 invert" />
                <div className="min-w-0">
                  <h4 className="satoshi-bd text-base leading-[1.3] md:text-[clamp(1rem,1.04vw,1.25rem)]">{item.title}</h4>
                  <p className="satoshi-md mt-1 text-[15px] leading-[1.8] md:text-[clamp(0.9375rem,0.94vw,1.125rem)] md:leading-[2]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentSupport;

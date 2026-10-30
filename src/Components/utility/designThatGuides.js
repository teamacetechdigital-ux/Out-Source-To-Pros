import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

const buttonClass = "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[1.6%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]";

function ConversionCards({ cards, className }) {
  return (
    <ul className={`relative z-10 grid gap-3 md:gap-[1.4vw] ${className}`}>
      {cards.map((card) => (
        <li key={card.title} className="rounded-[clamp(12px,1.7vw,24px)] border border-transparent [background:linear-gradient(180deg,#f5faff,#fff)_padding-box,linear-gradient(180deg,#a8d4ff_0%,#cfe6ff_45%,#fff_100%)_border-box] p-4 md:min-h-[clamp(82px,8.2vw,118px)] md:px-[7%] md:py-[6.5%]">
          <h4 className="satoshi-bd text-base leading-[1.2] text-black md:text-[clamp(0.8125rem,1.3vw,1.1875rem)]">{card.title}</h4>
          <p className="satoshi-md mt-1 text-sm leading-[1.3] text-black md:mt-[2%] md:text-[clamp(0.5625rem,0.9vw,0.8125rem)]">{card.text}</p>
        </li>
      ))}
    </ul>
  );
}

function DesignThatGuides({ content }) {
  const id = useId();

  return (
    <section id="design-that-guides" aria-labelledby={`${id}-heading`} className="bg-white pb-14 md:pb-[6.8vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="text-center">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
            {content.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[58ch] space-y-2 text-sm leading-[1.3] text-black md:mt-[2%] md:w-[59%] md:space-y-[1.5%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className={`${buttonClass} mt-5 md:mt-[2%]`}>{content.buttonLabel}</Link>
        </div>
        <div className="mt-12 md:mt-[7vw]" aria-labelledby={`${id}-conversion-heading`}>
          <h3 id={`${id}-conversion-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
            {content.conversion.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.conversion.highlight}</span>
          </h3>
          <div className="relative mt-7 grid items-center gap-4 sm:grid-cols-2 md:mt-[3%] md:grid-cols-[1fr_1.5fr_1fr] md:gap-0">
            <svg aria-hidden="true" viewBox="0 0 1000 340" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full fill-none stroke-[#d5dce7] [stroke-dasharray:3_5] md:block">
              <path d="M280 48H335V292H280 M720 48H665V292H720 M280 170H720" />
            </svg>
            <ConversionCards cards={content.conversion.leftCards} className="order-2 md:order-1" />
            <div aria-hidden="true" className="relative z-10 order-1 mx-auto h-[120px] w-[120px] rounded-[50%] bg-[linear-gradient(180deg,#9eceff,#fff)] sm:col-span-2 md:order-2 md:col-span-1 md:h-[clamp(88px,14.6vw,210px)] md:w-[clamp(88px,14.6vw,210px)]">
              <img src={brandMark} alt="" width="76" height="76" className="h-full w-full opacity-20" />
            </div>
            <ConversionCards cards={content.conversion.rightCards} className="order-3" />
          </div>
          <div className="mt-7 text-center md:mt-[3%]">
            <Link to={content.buttonLink} className={buttonClass}>{content.conversion.buttonLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignThatGuides;

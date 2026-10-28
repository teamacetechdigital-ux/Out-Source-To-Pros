import { useId } from "react";
import { Link } from "react-router-dom";

function WhiteLabelDilvery({ content }) {
  const id = useId();

  return (
    <section
      id="white-label-delivery"
      aria-labelledby={`${id}-heading`}
      className="white-label-dilvery-section relative pb-16 pt-2 md:pb-[7.6vw] lg:pt-4"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[clamp(160px,14vw,200px)] -bottom-[clamp(200px,22vw,320px)] bg-[radial-gradient(ellipse_at_100%_100%,#fff_0%,transparent_45%),linear-gradient(180deg,transparent_65%,#bfcbdc_100%),linear-gradient(135deg,#101010_0%,#0c254f_30%,#1255bd_65%,#719be0_100%)]"
      />
      <div className="relative z-10 mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2
          id={`${id}-heading`}
          className="montserrat-rg text-center text-[clamp(1.75rem,3.23vw,2.875rem)] font-bold leading-[1.2] text-white"
        >
          {content.title}{" "}
          <span className="bg-[linear-gradient(to_right,transparent,rgba(126,167,255,0.55))] pr-2">
            {content.highlight}
          </span>
          <br />
          {content.subtitle}
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-10 md:gap-[clamp(10px,1vw,14px)] lg:mt-8">
          {content.cards.map((card, index) => (
            <li
              key={card.title}
              className={`flex min-w-0 flex-col justify-center rounded-[clamp(18px,1.67vw,24px)] border border-[#b9dcff] bg-white/8 p-5 text-white md:min-h-[clamp(82px,8.2vw,118px)] md:p-[clamp(16px,1.67vw,24px)] md:py-[clamp(14px,1.3vw,20px)] ${index === 2 || index === 3 ? "md:col-span-4" : "md:col-span-3"}`}
            >
              <h3 className="montserrat-rg text-base font-bold leading-[1.25] md:text-[clamp(0.8125rem,1.25vw,1.125rem)]">
                {card.title}
              </h3>
              <p className="satoshi-md mt-1.5 text-sm leading-[1.35] md:text-[clamp(0.5625rem,0.9vw,0.875rem)] md:leading-[1.2]">
                {card.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center lg:mt-11">
          <Link
            to={content.buttonLink}
            className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-6 py-3.5 text-center text-xs font-bold uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm md:px-[2%] md:py-[1.4%] md:text-[clamp(0.75rem,1.25vw,1.125rem)]"
          >
            {content.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhiteLabelDilvery;

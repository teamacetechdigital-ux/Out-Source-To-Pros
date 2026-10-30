import { useId, useRef } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";
import usePhysicsChips from "./usePhysicsChips";

function BrandTile({ className, light = false }) {
  return (
    <span
      data-agency-chip="brand"
      className={`absolute flex aspect-square w-[18%] items-center justify-center rounded-[2cqw] ${className}`}
    >
      <img
        src={brandMark}
        alt=""
        width="76"
        height="76"
        draggable="false"
        className={`block h-auto w-full ${light ? "" : "brightness-0 invert"}`}
      />
    </span>
  );
}

function AgencyArtwork({ labels }) {
  const containerRef = useRef(null);
  usePhysicsChips(containerRef);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Interactive design capabilities. Drag the tiles to throw them, or press Enter to shuffle."
      tabIndex={0}
      className="@container relative isolate mx-auto aspect-[440/456] w-full max-w-[520px] touch-pan-y overflow-clip rounded-[clamp(16px,1.5vw,24px)] bg-[linear-gradient(145deg,#9bceff_0%,#dfefff_90%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] [&_[data-agency-chip]]:cursor-grab [&_[data-agency-chip]]:touch-none [&_[data-agency-chip]]:select-none [&_[data-agency-chip]]:active:cursor-grabbing"
    >
      <BrandTile className="left-[28%] top-[42%] -rotate-5 bg-[#1B50E8]" />
      <span
        data-agency-chip="creative"
        className="satoshi-bd absolute -left-[3%] top-[64%] flex h-[17%] w-[39%] -rotate-15 items-center justify-center rounded-[2cqw] bg-[#005bd6] text-[5cqw] text-white"
      >
        {labels.creative}
      </span>
      <span
        data-agency-chip="responsive"
        className="satoshi-bd absolute left-[45%] top-[53%] flex h-[17%] w-[41%] rotate-[28deg] items-center justify-center rounded-[2cqw] bg-white text-[5cqw] text-[#1B50E8]"
      >
        {labels.responsive}
      </span>
      <BrandTile
        light
        className="left-[36%] top-[66%] -rotate-8 bg-[#9bceff]"
      />
      <BrandTile
        light
        className="-left-[1%] top-[84%] -rotate-15 bg-[#eeeeee]"
      />
      <span
        data-agency-chip="user-focused"
        className="satoshi-bd absolute left-[20%] top-[83%] flex h-[17%] w-[43%] rotate-[17deg] items-center justify-center rounded-[2cqw] bg-[#005bd6] text-[5cqw] text-white"
      >
        {labels.userFocused}
      </span>
      <span
        data-agency-chip="mobile"
        className="satoshi-bd absolute left-[60%] top-[80%] flex h-[17%] w-[44%] rotate-[18deg] items-center justify-center rounded-[2cqw] bg-[#9bceff] text-[5cqw] text-[#1B50E8]"
      >
        {labels.mobile}
      </span>
    </div>
  );
}

function DesignTeam({ content }) {
  const id = useId();
  const { agency } = content;

  return (
    <section
      id="web-design-team"
      aria-labelledby={`${id}-heading`}
      className="relative bg-white pb-12 pt-4 sm:pb-16 lg:pb-[70px]"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2
          id={`${id}-heading`}
          className="montserrat-rg text-center text-[clamp(1.875rem,3.23vw,3.75rem)] font-bold leading-[1.15] text-black"
        >
          {content.title}
          <br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">
            {content.highlight}
          </span>
        </h2>
        <dl className="mt-8 grid grid-cols-1 gap-y-5 min-[360px]:grid-cols-2 md:mt-10 md:grid-cols-4 md:gap-y-0 lg:mt-11">
          {content.capabilities.map((item) => (
            <div
              key={item.title}
              className="relative px-5 py-4 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-[linear-gradient(to_bottom,#a1d1ff,transparent)] md:px-[8%] md:py-[9%]"
            >
              <dt className="montserrat-rg text-base font-bold leading-[1.25] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
                {item.title}
              </dt>
              <dd className="satoshi-md mt-2 text-[15px] leading-[1.3] text-black md:text-[clamp(1rem,1.04vw,1.25rem)]">
                {item.text}
              </dd>
            </div>
          ))}
        </dl>
        <article
          aria-labelledby={`${id}-agency-heading`}
          className="relative z-10 mt-10 grid items-center gap-9 rounded-[clamp(16px,1.5vw,24px)] bg-white px-6 py-8 shadow-[0_0_30px_rgba(27,80,232,0.07)] sm:px-9 sm:py-10 md:mt-[7%] md:grid-cols-[490fr_440fr] md:gap-[6.7%] md:px-[4.5%] md:py-[5%]"
        >
          <div className="min-w-0">
            <h2
              id={`${id}-agency-heading`}
              className="montserrat-rg text-[clamp(1.875rem,3.23vw,3.75rem)] font-bold leading-[1.15] text-black"
            >
              {agency.title}
              <br />
              <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1 md:whitespace-nowrap">
                {agency.highlight}
              </span>
            </h2>
            <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.3] text-black md:mt-[5%] md:space-y-[2.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
              <p>{agency.intro}</p>
              <p>
                {agency.servicePrefix}{" "}
                <strong className="satoshi-bd">
                  {agency.serviceHighlight}
                </strong>{" "}
                {agency.serviceText}
              </p>
              <p>{agency.usage}</p>
            </div>
            <p className="satoshi-bd mt-3 text-lg leading-[1.3] text-black md:mt-[2.5%] md:text-[clamp(1.375rem,1.61vw,1.9375rem)]">
              {agency.closing}
            </p>
            <Link
              to={agency.buttonLink}
              className="montserrat-bd mt-4 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3.5 text-center text-xs font-bold uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] sm:text-sm md:mt-[3%] md:px-[5%] md:py-[3.5%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]"
            >
              {agency.buttonLabel}
            </Link>
          </div>
          <AgencyArtwork labels={agency.labels} />
        </article>
      </div>
    </section>
  );
}

export default DesignTeam;

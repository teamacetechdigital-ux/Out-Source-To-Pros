import { useEffect, useRef, useState } from "react";
import { withBreaks } from "../../utils/text";

// Time (ms) for one progress bar to fill before the next slide shows.
const SLIDE_DURATION = 5000;

const blueCardStyle = {
  background: "linear-gradient(135deg, #0075FF 0%, #1B50E8 100%)",
  boxShadow: "0px 10px 30px rgba(0, 117, 255, 0.35)",
};

const glassStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  backdropFilter: "blur(6px)",
};


const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const icons = {
  code: (
    <svg viewBox="0 0 32 32" {...iconProps}>
      <rect x="3" y="6" width="26" height="17" rx="2" />
      <path d="M12 26h8M16 23v3M13 12l-3 3 3 3M19 12l3 3-3 3" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 32 32" {...iconProps}>
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20l7 7M10.5 14h7" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 32 32" {...iconProps}>
      <path d="M5 27l4-1 15-15-3-3L6 23l-1 4zM19 10l3 3" />
      <path d="M22 5l5 5" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 32 32" {...iconProps}>
      <circle cx="16" cy="16" r="4" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 32 32" {...iconProps}>
      <circle cx="11" cy="11" r="4" />
      <circle cx="22" cy="12" r="3" />
      <path d="M4 26c0-4 3-7 7-7s7 3 7 7M18 20c1-1 2.5-1.5 4-1.5 3 0 6 2.5 6 6" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 32 32" {...iconProps}>
      <path d="M6 17v-2a10 10 0 0120 0v2" />
      <rect x="4" y="17" width="5" height="8" rx="2" />
      <rect x="23" y="17" width="5" height="8" rx="2" />
      <path d="M26 25c0 2-2 3-6 3" />
    </svg>
  ),
};

/* ---------- Right side visuals for each slide ---------- */

// Layout of each service card, by position (text comes from props).
const serviceCardLayouts = [
  { blue: true, className: "w-full max-w-[320px] py-6 sm:py-9 -mt-0 sm:-mt-8 justify-self-end" },
  { className: "w-full max-w-[270px] py-5 sm:py-7 self-end" },
  { className: "w-full max-w-[270px] py-5 sm:py-7 justify-self-end" },
  { blue: true, className: "w-full max-w-[290px] py-5 sm:py-7" },
];

// Angle (deg) of each numbered point around the white-label circle.
const whiteLabelAngles = [-55, -19, 19, 55];

function ServiceCards({ items }) {
  const cards = items.map((item, index) => ({
    ...item,
    ...serviceCardLayouts[index],
    icon: icons[item.icon],
  }));

  return (
    <div className="grid w-full min-w-0 grid-cols-2 gap-2 sm:gap-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`min-w-0 flex flex-col items-center rounded-2xl px-2 text-center text-white sm:px-5 ${card.className}`}
          style={card.blue ? blueCardStyle : glassStyle}
        >
          <span className="mb-3 h-9 w-9">{card.icon}</span>
          <h4
            className={`montserrat-rg font-bold leading-tight ${
              card.blue && card.title.startsWith("Web") ? "text-base sm:text-2xl" : "text-sm sm:text-xl"
            }`}
          >
            {card.title}
          </h4>
          <p className="satoshi-md pt-2 text-base leading-[1.4]">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

function WhiteLabelCircle({ title, items }) {
  const points = items.map((item, index) => ({
    ...item,
    angle: whiteLabelAngles[index],
  }));
  const size = 330;
  const radius = size / 2;

  return (
    <>
    <div className="relative hidden h-[330px] w-[720px] 2xl:block">
      <div
        className="absolute left-0 top-0 flex items-center justify-center rounded-[9999px] bg-[#1B50E8]"
        style={{ width: size, height: size }}
      >
        <div className="flex h-[250px] w-[250px] items-center justify-center rounded-[9999px] bg-[#0A1D5C] p-2">
          <div className="flex h-full w-full items-center justify-center rounded-[9999px] border border-white/40">
            <h4 className="montserrat-rg text-center text-[26px] font-bold leading-tight text-white">
              {withBreaks(title, "always")}
            </h4>
          </div>
        </div>
      </div>

      {points.map((point, index) => {
        const rad = (point.angle * Math.PI) / 180;
        const x = radius + radius * Math.cos(rad);
        const y = radius + radius * Math.sin(rad);
        return (
          <div
            key={point.title}
            className="absolute flex items-center gap-4"
            style={{ left: x - 22, top: y - 22 }}
          >
            <span             className="montserrat-rg flex h-11 w-11 shrink-0 items-center justify-center rounded-[9999px] border-4 border-[#1B50E8] bg-white text-sm font-bold text-[#1B50E8]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="text-white">
              <h5 className="montserrat-rg text-xl font-bold">
                {point.title}
              </h5>
              <p className="satoshi-md whitespace-nowrap pt-1 text-base">
                {point.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 2xl:hidden">
      {points.map((point, index) => (
        <div key={point.title} className="flex min-w-0 items-start gap-3 rounded-xl px-4 py-4 text-white" style={glassStyle}>
          <span className="montserrat-rg flex h-10 w-10 shrink-0 items-center justify-center rounded-[9999px] border-2 border-[#1B50E8] bg-white text-sm font-bold text-[#1B50E8]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h5 className="montserrat-rg text-base font-bold sm:text-lg">{point.title}</h5>
            <p className="satoshi-md pt-1 text-sm leading-[1.4] sm:text-base">{point.text}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

function DigitalTeam({ title, items }) {
  const roles = items.map((item) => ({ ...item, icon: icons[item.icon] }));

  const renderRole = (role) => (
    <div
      key={role.title}
      className="w-full min-w-0 max-w-[300px] rounded-xl px-4 py-5 text-white sm:px-6 sm:py-6"
      style={glassStyle}
    >
      <span className="block h-8 w-8">{role.icon}</span>
      <h5 className="montserrat-rg pt-3 text-xl font-bold">{role.title}</h5>
      <p className="satoshi-md pt-2 text-base leading-[1.4]">{role.text}</p>
    </div>
  );

  return (
    <div className="grid w-full min-w-0 grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">{roles.slice(0, 2).map(renderRole)}</div>
      <div className="relative hidden h-[120px] w-[120px] items-center justify-center xl:flex">
        <span className="absolute -inset-6 rounded-[9999px] border border-white/10" />
        <span className="absolute -inset-12 rounded-[9999px] border border-white/5" />
        <div className="flex h-full w-full items-center justify-center rounded-[9999px] bg-[#1B50E8]">
          <h4 className="montserrat-rg text-center text-2xl font-bold leading-tight text-white">
            {withBreaks(title, "always")}
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:col-start-2 sm:row-start-1 xl:col-start-auto xl:row-start-auto">{roles.slice(2).map(renderRole)}</div>
    </div>
  );
}

function ScaleCircles({ items }) {
  const circles = items.map((item, index) => ({ ...item, blue: index === 0 }));

  return (
    <div className="grid w-full max-w-[600px] grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 sm:gap-4">
      {circles.map((circle) => (
        <div
          key={circle.title}
          className="flex aspect-square w-full max-w-[285px] flex-col items-center justify-center rounded-[9999px] px-5 text-center text-white sm:px-8"
          style={
            circle.blue
              ? { background: "linear-gradient(135deg, #0075FF, #1B50E8)" }
              : glassStyle
          }
        >
          <h5 className="montserrat-rg text-xl font-bold">{circle.title}</h5>
          <p className="satoshi-md pt-2 text-base leading-[1.4]">
            {circle.text}
          </p>
        </div>
      ))}
    </div>
  );
}

// Picks the right side visual for a slide by its JSON "type".
const visuals = {
  serviceCards: ServiceCards,
  whiteLabelCircle: WhiteLabelCircle,
  digitalTeam: DigitalTeam,
  scaleCircles: ScaleCircles,
};

function SlideVisual({ visual }) {
  const Visual = visuals[visual.type];
  return Visual ? <Visual title={visual.title} items={visual.items} /> : null;
}

function ScaleDelivery({ content }) {
  const { slides } = content;
  const slideCount = slides.length;
  const [active, setActive] = useState(0);
  const fillRefs = useRef([]);

  // Fill the active bar from left to right, then move to the next slide.
  useEffect(() => {
    const fill = fillRefs.current[active];
    if (!fill) return undefined;

    const animation = fill.animate([{ width: "0%" }, { width: "100%" }], {
      duration: SLIDE_DURATION,
      easing: "linear",
      fill: "forwards",
    });
    animation.onfinish = () =>
      setActive((current) => (current + 1) % slideCount);

    return () => animation.cancel();
  }, [active, slideCount]);

  return (
    <section
      className="scale-delivery-section relative overflow-x-clip -mt-24 pb-20 pt-32 sm:-mt-32 sm:pb-28 sm:pt-48 lg:-mt-[220px] lg:pb-40 lg:pt-[320px]"
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="start-txt">
          <h2 className="montserrat-rg text-[32px] font-bold leading-tight text-white sm:text-4xl lg:text-[40px] xl:text-[44px]">
            {content.title}
            {" "}<br className="hidden sm:block" />
            <span>{content.highlight}</span>
          </h2>
          <p className="satoshi-md pt-4 text-base font-medium text-white lg:text-[15px]">
            {withBreaks(content.text)}
          </p>
        </div>

        {/* Progress bar tabs; on desktop the active bar is 1.67x wider, as in Figma */}
        <div className="mt-8 grid grid-cols-4 items-start gap-x-2 sm:mt-10 sm:gap-x-4 lg:mt-12 lg:flex lg:gap-x-5" role="tablist">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={`w-full min-w-0 cursor-pointer text-left lg:basis-0 lg:transition-[flex-grow] lg:duration-700 ${
                active === index ? "lg:grow-[1.67]" : "lg:grow"
              }`}
            >
              <span className="relative block h-1 w-full overflow-hidden bg-white">
                <span
                  ref={(el) => (fillRefs.current[index] = el)}
                  className="absolute inset-y-0 left-0 w-0 bg-[#1B50E8]"
                />
              </span>
              <span
                className={`hidden pt-4 transition-opacity duration-500 lg:block lg:whitespace-nowrap ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="satoshi-reg block text-sm text-white sm:text-xl">
                  {slide.label}
                </span>
                <span className="montserrat-rg block pt-1 text-sm font-bold leading-tight text-[#3086FF] sm:text-lg lg:text-[24px]">
                  {slide.tagline}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Phones and tablets: the bars sit in one row, so the active label goes below them */}
        <div className="pt-4 lg:hidden" aria-live="polite">
          <span className="satoshi-reg block text-sm text-white sm:text-xl">
            {slides[active].label}
          </span>
          <span className="montserrat-rg block pt-1 text-base font-bold leading-tight text-[#3086FF] sm:text-lg">
            {slides[active].tagline}
          </span>
        </div>

        {/* Slides fade into each other */}
        <div className="mt-10 grid min-w-0 sm:mt-12 lg:mt-16">
          {slides.map((slide, index) => (
            <div
              key={slide.label}
              className={`col-start-1 row-start-1 grid min-w-0 grid-cols-1 content-start items-center gap-8 lg:content-center transition-opacity duration-700 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10 ${
                active === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={active !== index}
            >
              <div className="min-w-0 max-w-[560px]">
                <h3 className="montserrat-rg text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[30px]">
                  {withBreaks(slide.title, "always")}
                </h3>
                <p className="satoshi-md pt-4 text-base font-medium leading-[1.5] text-white sm:pt-5 sm:text-lg lg:text-[15px]">
                  {slide.text}
                </p>
                <button className="montserrat-bd mt-6 rounded-md bg-[#1B50E8] px-6 py-4 text-base font-bold uppercase text-white sm:mt-8 sm:px-8 sm:text-lg lg:mt-10">
                  {content.buttonLabel}
                </button>
              </div>
              <div className="flex min-w-0 max-w-full justify-center overflow-hidden lg:overflow-visible"><SlideVisual visual={slide.visual} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScaleDelivery;

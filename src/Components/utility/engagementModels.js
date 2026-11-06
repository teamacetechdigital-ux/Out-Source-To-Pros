import { useId } from "react";
import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const cardShadow = { boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)" };

const circleStyle = {
  background: "linear-gradient(45deg, #fff, #F4F9FF, #A1D1FF)",
};

const VISUAL = { width: 690, height: 500, circle: 360, arc: 190, cardLeft: 450 };

const modelAngles = [-90, -19.47, 19.47, 90];

function ModelCard({ model, className = "", style }) {
  return (
    <div className={`rounded-xl bg-[#EAF2FF] px-4 py-3 ${className}`} style={style}>
      <h3 className="montserrat-rg text-base font-bold leading-tight text-[#1B50E8]">
        {model.title}
      </h3>
      <p className="satoshi-md pt-1.5 text-sm leading-[1.45] text-black">{model.text}</p>
    </div>
  );
}

function ModelsCircle({ models }) {
  const gradientId = useId();
  const { width, height, circle, arc, cardLeft } = VISUAL;
  const cx = circle / 2;
  const cy = height / 2;
  const points = models.map((model, index) => {
    const rad = (modelAngles[index] * Math.PI) / 180;
    return {
      ...model,
      x: cx + arc * Math.cos(rad),
      y: cy + arc * Math.sin(rad),
    };
  });

  return (
    <div className="relative hidden shrink-0 lg:-ml-20 lg:block lg:h-[375px] lg:w-[518px] xl:-ml-32 xl:h-[500px] xl:w-[690px]">
      <div
        className="absolute left-0 top-0 origin-top-left lg:scale-75 xl:scale-100"
        style={{ width, height }}
      >
        <div
          className="absolute rounded-[9999px]"
          style={{ ...circleStyle, width: circle, height: circle, left: 0, top: cy - circle / 2 }}
        />

        <svg
          className="absolute left-0 top-0"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id={`${gradientId}-arc`}
              x1={cx}
              y1={cy - arc}
              x2={cx + arc}
              y2={cy + arc}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#006BFF" />
              <stop offset="1" stopColor="#1B50E8" />
            </linearGradient>
            {points.map((point, index) => (
              <linearGradient
                key={point.title}
                id={`${gradientId}-connector-${index}`}
                x1={point.x}
                y1={point.y}
                x2={cardLeft}
                y2={point.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#006BFF" stopOpacity="0.65" />
                <stop offset="1" stopColor="#006BFF" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
          <path
            d={`M ${cx} ${cy - arc} A ${arc} ${arc} 0 0 1 ${cx} ${cy + arc}`}
            stroke={`url(#${gradientId}-arc)`}
            strokeWidth="1.2"
          />
          {points.map((point, index) => (
            <g key={point.title}>
              <line x1={point.x} y1={point.y} x2={cardLeft} y2={point.y} stroke={`url(#${gradientId}-connector-${index})`} />
              <circle cx={point.x} cy={point.y} r="4" fill="#1B50E8" />
            </g>
          ))}
        </svg>

        {points.map((point) => (
          <ModelCard
            key={point.title}
            model={point}
            className="absolute w-[240px] -translate-y-1/2"
            style={{ left: cardLeft, top: point.y }}
          />
        ))}
      </div>
    </div>
  );
}

function EngagementModels({ content }) {
  return (
    <section className="relative z-10 -mt-12 sm:-mt-16 lg:-mt-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div
          className="mx-auto flex max-w-[1140px] flex-col gap-10 overflow-hidden rounded-[20px] bg-white px-5 py-10 sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-12 lg:py-16 xl:px-16"
          style={cardShadow}
        >
          <div className="relative z-10 min-w-0 lg:flex-1">
            <h2 className="montserrat-rg relative z-10 text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:whitespace-nowrap lg:text-[40px] xl:text-[44px]">
              {withBreaks(content.title)}{" "}
              <span style={headingHighlightStyle}>{content.highlight}</span>
            </h2>
            <p className="satoshi-md pt-5 text-[15px] 2xl:text-[19px] leading-[1.5] text-black lg:max-w-[440px]">
              {content.text}
            </p>
            <button
              type="button"
              className="montserrat-bd mt-8 rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:mt-12 lg:text-lg"
            >
              {content.buttonLabel}
            </button>
          </div>

          <ModelsCircle models={content.models} />

          {/* Phones and tablets: plain list of the models */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {content.models.map((model) => (
              <ModelCard key={model.title} model={model} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngagementModels;

import { useId } from "react";
import { Link } from "react-router-dom";

const buttonClass =
  "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ec5ff] md:px-[1.6%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]";
const headingClass =
  "montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.5rem,3.23vw,2.875rem)]";

function SystemIllustration({ type, labels }) {
  const id = useId();
  const panel = `url(#${id}-panel)`;
  const glass = `url(#${id}-glass)`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 105"
      className="pointer-events-none block h-full w-full"
      fill="none"
    >
      <defs>
        <linearGradient
          id={`${id}-panel`}
          x1="90"
          y1="0"
          x2="90"
          y2="105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#eaf5ff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#a6caff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient
          id={`${id}-glass`}
          x1="35"
          y1="20"
          x2="160"
          y2="110"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.06" />
          <stop offset="0.5" stopColor="#b9d7ff" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {type === "typography" && (
        <>
          <path d="M23 18H157V100H23Z" stroke="#9ecfff" strokeOpacity="0.3" />
          <text
            x="29"
            y="101"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fontSize="93"
            fill={panel}
            opacity="0.48"
          >
            {labels.typographySample}
          </text>
          {[23, 157].map((x) =>
            [18, 100].map((y) => (
              <rect
                key={`${x}-${y}`}
                x={x - 2}
                y={y - 2}
                width="4"
                height="4"
                fill="#9cd8ff"
              />
            )),
          )}
          <circle cx="103" cy="25" r="14" fill="#e9f4ff" />
          <text
            x="95"
            y="34"
            fontFamily="Georgia, serif"
            fontSize="25"
            fill="#315576"
          >
            {labels.typographyBadge}
          </text>
        </>
      )}
      {type === "colors" && (
        <>
          <path
            d="M38 39C49 4 133 3 152 39"
            stroke="white"
            strokeOpacity="0.2"
          />
          <rect
            x="16"
            y="29"
            width="148"
            height="83"
            rx="8"
            fill={glass}
            stroke="#d7eaff"
            strokeOpacity="0.4"
          />
          {[
            "#343c46",
            "#4d555f",
            "#6b727b",
            "#8e949b",
            "#b5bac0",
            "#f5f7f9",
          ].map((color, index) => (
            <rect
              key={color}
              x={16 + index * 24.6}
              y="29"
              width="24.7"
              height="83"
              fill={color}
            />
          ))}
          <g transform="rotate(-15 46 34)">
            <rect
              x="24"
              y="26"
              width="42"
              height="13"
              rx="6.5"
              fill="#dbe5eb"
              fillOpacity="0.65"
            />
            <circle cx="31" cy="32.5" r="3" fill="white" />
            <path d="M38 31H57M38 34H51" stroke="white" strokeWidth="1.5" />
          </g>
        </>
      )}
      {type === "buttons" && (
        <>
          <rect
            x="22"
            y="36"
            width="138"
            height="47"
            stroke="#a2d7ff"
            strokeDasharray="3 3"
          />
          <rect
            x="26"
            y="41"
            width="130"
            height="37"
            rx="18.5"
            fill="#d7eeff"
          />
          <text
            x="91"
            y="65"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fill="#172d46"
          >
            {labels.buttonLabel}
          </text>
          {[
            [22, 36],
            [160, 36],
            [22, 83],
            [160, 83],
          ].map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              x={x - 2}
              y={y - 2}
              width="4"
              height="4"
              fill="#8bcaff"
            />
          ))}
          <path
            d="M91 27V32M91 88V93M13 59H18M165 59H170"
            stroke="#bde3ff"
            strokeWidth="2"
          />
        </>
      )}
      {type === "forms" && (
        <>
          <rect
            x="25"
            y="10"
            width="150"
            height="96"
            rx="9"
            fill={glass}
            stroke="#c3dbf1"
            strokeOpacity="0.3"
          />
          {[21, 38, 55].map((y) => (
            <rect
              key={y}
              x="36"
              y={y}
              width="128"
              height="12"
              rx="3"
              fill="#d7e8fa"
              fillOpacity="0.25"
            />
          ))}
          <path d="M76 44L94 50L86 54L84 63Z" fill="#1b50e8" stroke="#bde5ff" />
          <rect x="93" y="53" width="44" height="12" rx="2" fill="#e6f5ff" />
          <text
            x="96"
            y="61.5"
            fontFamily="Arial, sans-serif"
            fontSize="7"
            fill="#22507a"
          >
            {labels.formLabel}
          </text>
        </>
      )}
      {type === "cards" && (
        <>
          <rect
            x="14"
            y="11"
            width="162"
            height="100"
            rx="11"
            fill={glass}
            opacity="0.65"
          />
          {[22, 72, 122].map((x) => (
            <g key={x}>
              <rect
                x={x}
                y="23"
                width="44"
                height="77"
                rx="5"
                fill={panel}
                stroke="#edf7ff"
                strokeOpacity="0.25"
              />
              <path
                d={`M${x + 7} 38H${x + 29}M${x + 7} 44H${x + 24}`}
                stroke="#eef7ff"
                strokeOpacity="0.7"
                strokeWidth="2"
              />
              <path
                d={`M${x + 7} 54H${x + 36}M${x + 7} 59H${x + 36}M${x + 7} 64H${x + 30}`}
                stroke="#d2e6ff"
                strokeOpacity="0.3"
              />
            </g>
          ))}
        </>
      )}
      {type === "spacing" && (
        <>
          <rect
            x="29"
            y="12"
            width="146"
            height="91"
            rx="10"
            fill={glass}
            stroke="#d3eaff"
            strokeOpacity="0.45"
          />
          <rect
            x="39"
            y="23"
            width="126"
            height="57"
            rx="4"
            fill={panel}
            stroke="#ecf6ff"
            strokeOpacity="0.3"
          />
          <path
            d="M46 29V73M46 34H158M98 34V73"
            stroke="#e3f1ff"
            strokeOpacity="0.4"
          />
          <rect x="39" y="86" width="126" height="11" rx="2" fill="#c7e4ff" />
          <path
            d="M20 23V80M16 23H24M16 80H24M39 103H165"
            stroke="#a6d7ff"
            strokeWidth="1.5"
          />
          <rect x="0" y="59" width="25" height="12" rx="3" fill="#e1f2ff" />
          <text
            x="4"
            y="67.5"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fill="#315576"
          >
            {labels.spacingLabel}
          </text>
        </>
      )}
    </svg>
  );
}

function CopyParagraph({ paragraph }) {
  return (
    <p>
      {typeof paragraph === "string" ? paragraph : <>
        {paragraph.before}
        {paragraph.link ? <Link to={paragraph.link.to} className="text-[#70a7ff] underline-offset-2 hover:underline">{paragraph.link.label}</Link> : <strong className="satoshi-bd">{paragraph.strong}</strong>}
        {paragraph.after}
      </>}
    </p>
  );
}

function DesignWithSearch({ content }) {
  const id = useId();

  return (
    <section
      id="design-with-search"
      aria-labelledby={`${id}-search-heading`}
      className="relative isolate pb-6 pt-12 md:pb-[2.3vw] md:pt-[7.3vw]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[94%] bg-[#101112] bg-[linear-gradient(180deg,transparent_40%,rgba(45,112,218,0.2)_60%,#fff_96%),radial-gradient(ellipse_at_0%_45%,#1155bd_0%,#164d99_21%,transparent_63%),linear-gradient(120deg,#4f83d2_0%,#0b244d_23%,transparent_43%)]"
      />
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="text-center text-white">
          <h2 id={`${id}-search-heading`} className={headingClass}>
            {content.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.45))] px-1">
              {content.highlight}
            </span>
          </h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[64ch] space-y-2 text-sm leading-[1.3] md:mt-[2%] md:w-[60%] md:space-y-[1.5%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph, index) => <CopyParagraph key={index} paragraph={paragraph} />)}
          </div>
          <Link to={content.buttonLink} className={`${buttonClass} mt-5 md:mt-[2%]`}>
            {content.buttonLabel}
          </Link>
        </div>
        <div
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[8.3vw] md:grid-cols-4 md:gap-[1vw]"
          aria-labelledby={`${id}-system-heading`}
        >
          <div className="py-2 text-white sm:col-span-2 md:pr-[20%]">
            <h2 id={`${id}-system-heading`} className={headingClass}>
              {content.system.title}
              <br />
              <span className="bg-[linear-gradient(to_right,rgba(117,167,255,0.65),transparent)] pr-1">
                {content.system.highlight}
              </span>
            </h2>
            <p className="satoshi-md mt-4 max-w-[47ch] text-sm leading-[1.35] md:mt-[4%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">
              {content.system.text}
            </p>
          </div>
          {content.system.cards.map((card) => (
            <article
              key={card.type}
              className="relative flex min-h-[280px] min-w-0 flex-col overflow-hidden rounded-[clamp(10px,1vw,16px)] border border-transparent bg-white/8 p-5 text-white before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(130deg,rgba(176,221,255,0.7),rgba(176,221,255,0.18))] before:p-px before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]! before:content-[''] md:min-h-[clamp(148px,19.2vw,276px)] md:p-[9%]"
            >
              <h3 className="satoshi-bd text-lg leading-[1.2] md:text-[clamp(0.8125rem,1.25vw,1.125rem)]">
                {card.title}
              </h3>
              <p className="satoshi-md mt-1.5 text-sm leading-[1.3] md:mt-[3%] md:text-[clamp(0.5625rem,0.94vw,0.875rem)]">
                {card.text}
              </p>
              <div className="-mb-5 -mr-5 ml-auto mt-2 h-[125px] w-[94%] md:-mb-[11%] md:-mr-[11%] md:mt-auto md:h-auto md:aspect-[180/105]">
                <SystemIllustration type={card.type} labels={content.system.illustrationLabels} />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 text-center md:mt-[4%]">
          <Link to={content.system.buttonLink} className={buttonClass}>
            {content.system.buttonLabel}
          </Link>
        </div>
        <div
          aria-labelledby={`${id}-handoff-heading`}
          className="mt-12 rounded-[clamp(16px,1.7vw,24px)] bg-white px-6 py-10 text-center text-black shadow-[0_5px_22px_rgba(27,80,232,0.06)] md:mt-[6vw] md:px-[16%] md:py-[6.5%]"
        >
          <h2 id={`${id}-handoff-heading`} className={headingClass}>
            {content.handoff.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">
              {content.handoff.highlight}
            </span>
          </h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[74ch] space-y-2 text-sm leading-[1.3] md:mt-[3%] md:space-y-[2%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">
            {content.handoff.paragraphs.map((paragraph, index) => <CopyParagraph key={index} paragraph={paragraph} />)}
          </div>
          <Link
            to={content.handoff.buttonLink}
            className={`${buttonClass} mt-5 md:mt-[4%] md:px-[3%] md:py-[2.4%]`}
          >
            {content.handoff.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DesignWithSearch;

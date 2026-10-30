import { useId, useState } from "react";
import { withBreaks } from "../../utils/text";

// Same dark blue background as the web development service tabs, fading in from white at the top.
const headingHighlightStyle = {
  background: "linear-gradient(to right, #ffffff00, #ffffffbf)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const activeTabStyle = {
  background: "linear-gradient(to right, #A1D1FF 0%, #FFFFFF 100%)",
};

const barStyle = {
  background:
    "linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
};

const blueCardStyle = {
  background: "linear-gradient(135deg, #0846A0 0%, #0075FF 100%)",
};

function StrategyIcon() {
  return (
    <svg
      className="h-9 w-9 text-white"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20a7 7 0 1 1 8 0v2h-8z" />
      <path d="M13 25h6M14 28h4M16 3V1M6 7 4.5 5.5M26 7l1.5-1.5M3 13H1M31 13h-2" />
      <path d="m13.5 14 2.5 2.5 2.5-2.5" />
    </svg>
  );
}

function BrandServiceTabs({ content }) {
  const { tabs } = content;
  const id = useId();
  const [active, setActive] = useState(
    Math.min(Math.max(content.defaultTab || 0, 0), tabs.length - 1)
  );

  // Stacks every tab's content in one grid cell so the active one fades in.
  const fadeClass = (index) =>
    `col-start-1 row-start-1 transition-opacity duration-500 ${
      active === index ? "opacity-100" : "pointer-events-none opacity-0"
    }`;

  return (
    <section
      className="relative overflow-x-clip pb-20 pt-36 sm:pb-24 lg:pb-62 lg:pt-44"
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center text-white">
          <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] sm:text-[36px] lg:text-[40px] xl:text-[44px]">
            {content.title}
            <br className="hidden sm:block" />{" "}
            <span style={headingHighlightStyle}>{content.highlight}</span>
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="satoshi-md pt-4 text-[15px] 2xl:text-[19px] leading-[1.5]">
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="mt-10 border-0 border-t border-white/20 lg:mt-14" />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-[233fr_388fr] lg:grid-rows-[auto_1fr] [&>*]:min-w-0">
          {/* Tab list: a scrollable row of pills on phones, a card list on desktop */}
          <div className="rounded-[20px] bg-white p-3 sm:p-4 lg:row-span-2 lg:p-6">
            <div
              className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  id={`${id}-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls={`${id}-panel`}
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
                    if (!keys.includes(event.key)) return;
                    event.preventDefault();
                    const direction =
                      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
                    const next = (index + direction + tabs.length) % tabs.length;
                    setActive(next);
                    document.getElementById(`${id}-tab-${next}`)?.focus();
                  }}
                  className={`montserrat-rg shrink-0 cursor-pointer whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-semibold text-black transition-colors duration-300 sm:text-base lg:whitespace-normal lg:px-4 lg:py-4 lg:text-[18px] xl:text-[20px] ${
                    active === index ? "" : "bg-[#EEF4FF] lg:bg-transparent"
                  }`}
                  style={active === index ? activeTabStyle : undefined}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Decorative bar above the content card */}
          <div
            className="hidden h-[50px] rounded-[20px] lg:block"
            style={barStyle}
            aria-hidden="true"
          />

          <div
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${active}`}
            className="grid self-start rounded-[20px] px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-10"
            style={blueCardStyle}
          >
            {tabs.map((tab, index) => (
              <div key={tab.title} className={fadeClass(index)} aria-hidden={active !== index}>
                <StrategyIcon />
                <p className="satoshi-md pt-8 text-[15px] 2xl:text-[19px] leading-[1.5]">{withBreaks(tab.intro)}</p>
                <p className="satoshi-md pt-4 text-[15px] 2xl:text-[19px] leading-[1.5]">{tab.text}</p>
                <ul className="satoshi-md mt-4 space-y-1.5 text-sm">
                  {tab.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[9999px] bg-white" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandServiceTabs;

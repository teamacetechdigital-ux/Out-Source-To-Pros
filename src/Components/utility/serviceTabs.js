import { useState } from "react";
import { withBreaks } from "../../utils/text";

// Same dark blue background as the scale delivery section, fading in from white at the top.
const sectionStyle = {
  background:
    "linear-gradient(180deg, #FFFFFF 0px, rgba(255,255,255,0) 140px), radial-gradient(ellipse at 100% 100%, #C9D9FF 0%, rgba(201,217,255,0) 35%), linear-gradient(120deg, #111111 25%, #0B2A8C 60%, #1B50E8 100%)",
};

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

const includesCardStyle = {
  background: "linear-gradient(180deg, #A1D1FF 0%, #FFFFFF 100%)",
};

function SeoIcon() {
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
      <rect x="3" y="5" width="26" height="18" rx="2" />
      <path d="M3 9h26M12 27h8M16 23v4" />
      <text
        x="16"
        y="19"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
      >
        SEO
      </text>
    </svg>
  );
}

function ServiceTabs({ content }) {
  const { tabs } = content;
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
      className="relative overflow-x-clip pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44"
      style={sectionStyle}
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center text-white">
          <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] sm:text-[36px] lg:text-[40px] xl:text-[44px]">
            {withBreaks(content.title)}{" "}
            <span style={headingHighlightStyle}>{content.highlight}</span>
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="satoshi-md pt-4 text-[15px] leading-[1.5]">
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="mt-10 border-0 border-t border-white/20 lg:mt-14" />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-[233fr_202fr_186fr] lg:grid-rows-[auto_1fr] [&>*]:min-w-0">
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
                  id={`seo-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls="seo-tab-panel"
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
                    document.getElementById(`seo-tab-${next}`)?.focus();
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

          {/* Decorative bar above the two content cards */}
          <div
            className="hidden h-[50px] rounded-[20px] lg:col-span-2 lg:block"
            style={barStyle}
            aria-hidden="true"
          />

          <div
            id="seo-tab-panel"
            role="tabpanel"
            aria-labelledby={`seo-tab-${active}`}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 [&>*]:min-w-0"
          >
            <div className="grid rounded-[20px] px-6 py-8 text-white" style={blueCardStyle}>
              {tabs.map((tab, index) => (
                <div key={tab.title} className={fadeClass(index)} aria-hidden={active !== index}>
                  <SeoIcon />
                  <p className="satoshi-md pt-8 text-[15px] leading-[1.5]">{tab.intro}</p>
                  <p className="satoshi-md pt-4 text-[15px] leading-[1.5]">{tab.text}</p>
                </div>
              ))}
            </div>

            <div className="grid rounded-[20px] px-6 py-8" style={includesCardStyle}>
              {tabs.map((tab, index) => (
                <div key={tab.title} className={fadeClass(index)} aria-hidden={active !== index}>
                  <h3 className="montserrat-rg text-xl font-bold text-[#1B50E8] lg:text-[22px]">
                    {tab.includesTitle}
                  </h3>
                  <ul className="satoshi-md mt-4 space-y-1.5 text-sm text-black">
                    {tab.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B50E8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceTabs;

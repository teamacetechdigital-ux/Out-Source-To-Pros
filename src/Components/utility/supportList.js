import { useRef, useState } from "react";
import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const whiteCardStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const blueCardStyle = {
  background: "linear-gradient(135deg, #0846A0 0%, #0075FF 100%)",
  boxShadow: "0px 10px 30px rgba(0, 117, 255, 0.3)",
};

// Small version of the site logo mark for the highlighted list item.
function LogoMark() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 6h11a6 6 0 010 12h-3"
        stroke="#A1D1FF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M9 6v9a3 3 0 01-3 3"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupportList({ content }) {
  const { tabs } = content;
  const [active, setActive] = useState(content.defaultTab || 0);
  const panelRef = useRef(null);

  const selectTab = (index) => {
    setActive(index);

    // Below lg the list sits under the content box, so bring the box into view.
    const panel = panelRef.current;
    if (panel && window.innerWidth < 1024 && panel.getBoundingClientRect().top < 0) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-0 [&>*]:min-w-0">
          <div
            ref={panelRef}
            className="scroll-mt-24 rounded-[20px] bg-white px-6 py-8 sm:px-10 sm:py-10 lg:pr-14"
            style={whiteCardStyle}
          >
            <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
              {withBreaks(content.title)}{" "}
              <span style={headingHighlightStyle}>{content.highlight}</span>
            </h2>

            {/* All panels share one grid cell so the box keeps the tallest height */}
            <div className="grid">
              {tabs.map((tab, index) => (
                <div
                  key={tab.label}
                  id={`support-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`support-tab-${index}`}
                  aria-hidden={active !== index}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                    active === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <p className="montserrat-rg pt-6 text-lg font-bold text-[#1B50E8]">{tab.lead}</p>
                  {tab.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="satoshi-md pt-4 text-[15px] leading-[1.5] text-black"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {tab.closing && (
                    <p className="satoshi-md pt-4 text-[15px] leading-[1.5] text-black">
                      {tab.closing}{" "}
                      <span className="satoshi-bd text-[#1B50E8]">{tab.closingLink}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="montserrat-bd mt-8 rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
            >
              {content.buttonLabel}
            </button>
          </div>

          {/* Blue tab list sits slightly over the white card on desktop */}
          <div
            className="relative rounded-[20px] px-6 py-8 text-white sm:px-8 lg:-ml-4 lg:py-10"
            style={blueCardStyle}
          >
            <h3 className="montserrat-rg text-[22px] font-semibold leading-tight sm:text-[26px]">
              {content.listTitle}
            </h3>
            <div className="mt-4" role="tablist" aria-orientation="vertical">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  id={`support-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls={`support-panel-${index}`}
                  onClick={() => selectTab(index)}
                  className={`flex w-full cursor-pointer items-center gap-3 py-3.5 text-left text-[15px] transition-colors duration-300 ${
                    index < tabs.length - 1 ? "border-b border-white/20" : ""
                  } ${
                    active === index
                      ? "satoshi-md text-white"
                      : "satoshi-bd pl-3 text-white/75 hover:text-white"
                  }`}
                >
                  {active === index && <LogoMark />}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportList;

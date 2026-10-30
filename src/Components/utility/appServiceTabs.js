import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

function AppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-white md:size-[clamp(2rem,3.2vw,3rem)]">
      <rect x="13" y="5" width="14" height="24" rx="2.5" />
      <path d="M18 9h4M20 25h.01" />
      <path d="M6 33h28M10 33v-4m20 4v-4M16 17l-2 2 2 2m8-4 2 2-2 2" />
    </svg>
  );
}

function AppServiceTabs({ content }) {
  const { tabs } = content;
  const [active, setActive] = useState(Math.min(Math.max(content.defaultTab || 0, 0), tabs.length - 1));
  const id = useId();
  const tabRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!keys[event.key]) return;
    event.preventDefault();
    const next = (index + keys[event.key] + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  // Every tab's content sits in one grid cell, so the panel keeps the tallest height and the active one fades in.
  const fadeClass = (index) => `col-start-1 row-start-1 transition-opacity duration-500 ${active === index ? "opacity-100" : "pointer-events-none opacity-0"}`;

  return (
    <section id="app-development-services" aria-labelledby={`${id}-heading`} className="relative pb-14 pt-10 md:pb-[7vw] md:pt-[4vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="mx-auto max-w-[760px] text-center text-white">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.5))] pr-1">{content.highlight}</span>
          </h2>
          <div className="mt-5 space-y-2 text-[15px] leading-[1.35] md:mt-[3%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "satoshi-bd" : "satoshi-md"}>{paragraph}</p>)}
          </div>
        </div>
        <hr className="mb-8 mt-8 border-0 border-t border-white/20 md:mb-[4.3%] md:mt-[2.5%]" />

        <div className="grid gap-4 md:grid-cols-[692fr_804fr] md:gap-[1.6%] [&>*]:min-w-0">
          {/* Tab list: a scrollable row on phones, a vertical card list from md */}
          <div className="rounded-[clamp(16px,1.7vw,24px)] bg-white p-3 md:px-[7%] md:py-[6%]">
            <div role="tablist" aria-label={content.tabListLabel} aria-orientation="vertical" className="flex gap-2 overflow-x-auto md:flex-col md:gap-[0.2vw] md:overflow-visible">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`${id}-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls={`${id}-panel`}
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`montserrat-rg shrink-0 cursor-pointer whitespace-nowrap rounded-md px-3 py-3 text-left text-sm font-bold leading-[1.3] text-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B50E8] md:whitespace-normal md:px-[3.5%] md:py-[2.4%] md:text-[clamp(1.25rem,1.45vw,1.75rem)] ${active === index ? "bg-[linear-gradient(to_right,#ffffff,#abc5fc)]" : "bg-[#eef4ff] hover:bg-[#e2ecff] md:bg-transparent"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="flex flex-col gap-4 md:gap-[2.2%]">
            <div className="grid flex-1 rounded-[clamp(16px,1.7vw,24px)] bg-[linear-gradient(135deg,#0846a0,#0075ff)] px-6 py-8 text-white md:px-[7%] md:py-[5.5%]">
              {tabs.map((tab, index) => (
                <div key={tab.id} className={fadeClass(index)} aria-hidden={active !== index}>
                  <AppIcon />
                  <p className="satoshi-bd mt-5 text-[15px] leading-[1.4] md:mt-[4%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{tab.intro}</p>
                  <div className="satoshi-md mt-2 space-y-1 text-[15px] leading-[1.4] md:text-[clamp(1rem,1.04vw,1.25rem)]">
                    {tab.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid rounded-[clamp(16px,1.7vw,24px)] bg-[linear-gradient(180deg,#a1d1ff,#fff)] px-6 py-8 md:px-[7%] md:py-[5%]">
              {tabs.map((tab, index) => (
                <div key={tab.id} className={fadeClass(index)} aria-hidden={active !== index} inert={active !== index}>
                  <h3 className="montserrat-rg text-xl font-bold leading-[1.2] text-[#1B50E8] md:text-[clamp(1.375rem,1.6vw,1.9375rem)]">{tab.includesTitle}</h3>
                  <ul className="satoshi-md mt-4 gap-x-6 text-[15px] leading-[1.35] text-black sm:columns-2 md:mt-[3.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
                    {tab.includes.map((item) => (
                      <li key={item} className="flex break-inside-avoid items-start gap-2 pb-1.5">
                        <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] bg-[#1B50E8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to={tab.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[4%] md:px-[4%] md:py-[2.3%] md:text-[clamp(1rem,1.15vw,1.375rem)]">
                    {tab.buttonLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppServiceTabs;

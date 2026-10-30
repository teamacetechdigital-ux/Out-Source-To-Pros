import { useId, useRef, useState } from "react";
import react from "../../assets/imgs/marquee-icon6.svg";
import nextjs from "../../assets/imgs/marquee-icon7.svg";
import python from "../../assets/imgs/marquee-icon8.svg";
import flutter from "../../assets/imgs/marquee-icon9.svg";
import aws from "../../assets/imgs/marquee-icon10.svg";
import googleCloud from "../../assets/imgs/marquee-icon11.svg";
import hubspot from "../../assets/imgs/marquee-icon12.svg";
import stripe from "../../assets/imgs/marquee-icon13.svg";

const icons = { react, nextjs, python, flutter, aws, googleCloud, hubspot, stripe };

// Badge colours for technologies without an icon file (they show the JSON "badge" text).
const badgeColors = {
  javascript: "bg-[#f7df1e] text-black",
  typescript: "bg-[#3178c6] text-white",
  swift: "bg-[#f05138] text-white",
  kotlin: "bg-[#7f52ff] text-white",
  node: "bg-[#5fa04e] text-white",
  laravel: "bg-[#ff2d20] text-white",
  dotnet: "bg-[#512bd4] text-white",
  postgres: "bg-[#336791] text-white",
  mysql: "bg-[#00758f] text-white",
  mongodb: "bg-[#13aa52] text-white",
  firebase: "bg-[#ffca28] text-black",
  azure: "bg-[#0078d4] text-white",
  docker: "bg-[#2496ed] text-white",
  graphql: "bg-[#e10098] text-white",
};

function AppTechStack({ content }) {
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

  return (
    <section id="app-technology-stack" aria-labelledby={`${id}-heading`} className="bg-white pb-14 md:pb-[8vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <p className="satoshi-md mx-auto mt-5 max-w-[56ch] text-center text-[15px] leading-[1.35] text-black md:mt-[2%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.text}</p>

        <div className="mt-8 grid md:mt-[3.4%] md:grid-cols-[643fr_877fr] md:items-stretch [&>*]:min-w-0">
          <div className="relative z-10 rounded-[clamp(14px,1.3vw,20px)] bg-[linear-gradient(135deg,#1b6dff,#0846a0)] p-3 md:p-[3.8%]">
            <div role="tablist" aria-label={content.tabListLabel} aria-orientation="vertical" className="flex gap-2 overflow-x-auto md:flex-col md:gap-[0.6vw] md:overflow-visible">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
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
                  className={`montserrat-rg shrink-0 cursor-pointer whitespace-nowrap rounded-sm px-4 py-3 text-left text-sm font-bold leading-[1.3] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:whitespace-normal md:px-[3.5%] md:py-[2.6%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)] ${active === index ? "bg-[linear-gradient(180deg,#fff_40%,#abc5fc)] text-black" : "bg-white/15 text-white hover:bg-white/25"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="-mt-4 grid rounded-b-[clamp(14px,1.3vw,20px)] bg-[linear-gradient(135deg,#fff_10%,#a1c9ff)] px-5 pb-6 pt-10 md:my-[2.6%] md:rounded-l-none md:rounded-r-[clamp(14px,1.3vw,20px)] md:px-[5%] md:py-[2%]">
            {tabs.map((tab, index) => (
              <ul key={tab.label} aria-hidden={active !== index} className={`col-start-1 row-start-1 grid content-start gap-3 transition-opacity duration-500 sm:grid-cols-2 md:w-[80%] md:gap-[0.8vw] ${active === index ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                {tab.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-4 rounded-[clamp(8px,0.7vw,12px)] bg-white p-2 shadow-[0_2px_10px_rgba(27,80,232,0.06)] md:gap-[8%] md:p-[2.5%]">
                    <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#f0f0f0] md:size-[clamp(2.25rem,3.4vw,4rem)]">
                      {icons[item.icon] ? (
                        <img src={icons[item.icon]} alt="" className="size-[60%] object-contain" />
                      ) : (
                        <span className={`montserrat-bd flex size-[60%] items-center justify-center rounded-[3px] text-[11px] leading-none md:text-[clamp(0.875rem,0.85vw,1rem)] ${badgeColors[item.icon] || "bg-[#1B50E8] text-white"}`}>{item.badge}</span>
                      )}
                    </span>
                    <span className="satoshi-md text-[15px] leading-[1.3] text-black md:text-[clamp(1rem,1.04vw,1.25rem)]">{item.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppTechStack;

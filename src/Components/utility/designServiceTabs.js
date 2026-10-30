import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import wordpress from "../../assets/imgs/webdesign/wordpress.svg";
import shopify from "../../assets/imgs/webdesign/shopify.svg";
import woocommerce from "../../assets/imgs/webdesign/woocommerce.svg";
import webflow from "../../assets/imgs/webdesign/webflow.svg";
import squarespace from "../../assets/imgs/webdesign/squarespace.svg";
import wix from "../../assets/imgs/webdesign/wix.svg";

const platformIcons = {
  wordpress,
  shopify,
  woocommerce,
  webflow,
  squarespace,
  wix,
};

function DesignServiceTabs({ content }) {
  const { tabs } = content;
  const [active, setActive] = useState(content.defaultTab ?? 0);
  const id = useId();
  const tabRefs = useRef([]);
  const selected = tabs[active];

  const handleKeyDown = (event, index) => {
    let next;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % tabs.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (index - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="web-design-services"
      aria-labelledby={`${id}-heading`}
      className="pb-16 pt-8 sm:pb-20 md:pb-[26rem] md:pt-5 lg:pt-10"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1140px] md:w-[79.2%]">
        <h2
          id={`${id}-heading`}
          className="montserrat-rg text-center text-[clamp(1.875rem,3.23vw,3.75rem)] font-bold leading-[1.2] text-white"
        >
          {content.title}
          <br />
          <span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.5))] pr-3">
            {content.highlight}
          </span>
        </h2>
        <hr className="mb-8 mt-10 border-0 border-t border-white/20 md:mb-[3%] md:mt-[3.7%]" />
        <div className="grid items-center gap-6 md:grid-cols-[480fr_710fr] md:gap-[1.1%]">
          <div className="rounded-[22px] bg-white p-4 md:rounded-[24px] md:p-[5.7%]">
            <div
              role="tablist"
              aria-label="Web design services"
              aria-orientation="vertical"
              className="flex flex-col gap-0.5"
            >
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
                  className={`montserrat-rg cursor-pointer rounded-md px-3 py-3 text-left text-[15px] font-bold leading-[1.45] text-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B50E8] md:px-[3%] md:py-[3.2%] md:text-[clamp(1.375rem,1.3vw,1.9375rem)] ${active === index ? "bg-[linear-gradient(to_right,#ffffff,#abc5fc)]" : "hover:bg-[#edf3ff]"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${active}`}
            tabIndex={0}
            className="min-w-0 rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <div className="min-h-[310px] rounded-[24px] bg-[linear-gradient(135deg,#0846a0,#0075ff)] px-6 py-8 text-white md:min-h-[clamp(14.5rem,24.5vw,22.125rem)] md:px-[7%] md:py-[5.6%]">
              <div
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-sm bg-white md:size-[clamp(2.375rem,4vw,3.625rem)]"
              >
                {platformIcons[selected.id] ? (
                  <img
                    src={platformIcons[selected.id]}
                    alt=""
                    className="size-[80%] object-contain"
                  />
                ) : (
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="size-8 text-[#1B50E8]"
                  >
                    <rect x="3" y="5" width="26" height="22" rx="3" />
                    <path d="M3 11h26M7 8h1m2 0h1m2 0h1" />
                    {selected.id === "saas" ? (
                      <path d="m12 16-4 4 4 4m8-8 4 4-4 4m-3-9-2 10" />
                    ) : (
                      <path d="M8 16h7v7H8zm11 0h5m-5 4h5m-5 4h3" />
                    )}
                  </svg>
                )}
              </div>
              <div className="satoshi-md mt-7 space-y-2 text-[15px] leading-[1.4] md:mt-[5%] md:space-y-[1.5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
                {selected.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="mt-7 text-center md:mt-[5.7%]">
              <Link
                to={content.buttonLink}
                className="montserrat-rg inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-6 py-4 text-sm font-bold uppercase leading-[1.4] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-[3.3%] md:py-[2.3%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]"
              >
                {selected.closingLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignServiceTabs;

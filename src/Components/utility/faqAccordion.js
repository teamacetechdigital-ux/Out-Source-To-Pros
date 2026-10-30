import { useId, useState } from "react";
import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const cardShadow = { boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)" };

const rowStyle = { background: "linear-gradient(90deg, #EEF4FF 0%, #E6E6E6 100%)" };

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#1B50E8] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqAccordion({ content, variant }) {
  const { items } = content;
  const [open, setOpen] = useState(0);
  const id = useId();
  const webDesign = variant === "web-design";

  return (
    <section
      id={webDesign ? "web-design-faqs" : undefined}
      aria-labelledby={webDesign ? `${id}-heading` : undefined}
      className={webDesign ? `relative isolate ${content.noBackdrop ? "" : "bg-white "}pt-4 md:pt-[3.4vw]` : "relative z-10 -mt-12 pb-12 sm:-mt-16 lg:-mt-[120px] lg:pb-16"}
    >
      {webDesign && !content.noBackdrop && <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[clamp(240px,48vw,700px)] bg-[linear-gradient(180deg,transparent,#fff_95%),linear-gradient(115deg,#0c254f,#1255bd_65%,#bfd5f3)]" />}
      <div className={webDesign ? "mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]" : "custom-container px-5 sm:px-8 lg:px-12"}>
        <div
          className={webDesign ? "rounded-[clamp(16px,1.7vw,24px)] bg-white px-4 pb-10 pt-8 shadow-[0_4px_20px_rgba(27,80,232,0.08)] sm:px-6 md:px-[4%] md:pb-[10%] md:pt-[7.5%]" : "mx-auto max-w-[1140px] rounded-[20px] bg-white px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:pb-28 lg:pt-20"}
          style={webDesign ? undefined : cardShadow}
        >
          <h2 id={webDesign ? `${id}-heading` : undefined} className={webDesign ? "montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]" : "montserrat-rg text-center text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]"}>
            {withBreaks(content.title)}{" "}
            <span className={webDesign ? "bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1" : undefined} style={webDesign ? undefined : headingHighlightStyle}>{content.highlight}</span>
          </h2>

          <ul className={webDesign ? "mt-6 flex flex-col gap-2 md:mt-[3.5%] md:gap-[0.7vw]" : "mt-8 flex flex-col gap-2 lg:mt-8"}>
            {items.map((item, index) => {
              const isOpen = open === index;
              const buttonId = `${id}-faq-question-${index}`;
              const panelId = `${id}-faq-answer-${index}`;

              return (
                <li key={item.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className={webDesign ? "flex w-full cursor-pointer items-center justify-between gap-3 rounded-sm bg-[linear-gradient(90deg,#f4faff,#dceaf7_55%,#e3e3e3)] px-4 py-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B50E8] md:gap-[2%] md:px-[5.3%] md:py-[1.8%]" : "flex w-full cursor-pointer items-center justify-between gap-4 rounded-md px-4 py-4 text-left sm:px-8 sm:py-5 lg:px-[54px]"}
                      style={webDesign ? undefined : rowStyle}
                    >
                      <span className={webDesign ? "satoshi-bd text-sm leading-[1.25] text-black md:text-[clamp(1.25rem,1.45vw,1.75rem)]" : "satoshi-md text-base text-black sm:text-lg lg:text-xl"}>
                        {item.question}
                      </span>
                      <span className={webDesign ? "[&>svg]:size-4 md:[&>svg]:size-[clamp(10px,1.5vw,20px)]" : undefined}><ChevronIcon open={isOpen} /></span>
                    </button>
                  </h3>

                  {/* Grid rows 0fr -> 1fr animates the answer to its natural height */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    inert={!isOpen}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className={webDesign ? "mx-2 border border-t-0 border-[#eeeeee] bg-white px-3 py-4 md:mx-[2.5%] md:px-[2.8%] md:py-[2.2%]" : "mx-3 border border-t-0 border-[#E6E6E6] bg-white px-4 py-5 sm:mx-7 sm:px-7 sm:py-6"}>
                        <p className={webDesign ? "satoshi-md text-[15px] leading-[1.3] text-black md:text-[clamp(1rem,1.04vw,1.25rem)]" : "satoshi-md text-[15px] leading-[1.5] text-black"}>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;

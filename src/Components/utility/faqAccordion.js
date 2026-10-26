import { useState } from "react";
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

function FaqAccordion({ content }) {
  const { items } = content;
  const [open, setOpen] = useState(0);

  return (
    <section className="relative z-10 -mt-12 pb-12 sm:-mt-16 lg:-mt-[120px] lg:pb-16">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div
          className="mx-auto max-w-[1140px] rounded-[20px] bg-white px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:pb-28 lg:pt-20"
          style={cardShadow}
        >
          <h2 className="montserrat-rg text-center text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
            {withBreaks(content.title)}{" "}
            <span style={headingHighlightStyle}>{content.highlight}</span>
          </h2>

          <ul className="mt-8 flex flex-col gap-2 lg:mt-8">
            {items.map((item, index) => {
              const isOpen = open === index;
              const buttonId = `seo-faq-question-${index}`;
              const panelId = `seo-faq-answer-${index}`;

              return (
                <li key={item.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md px-4 py-4 text-left sm:px-8 sm:py-5 lg:px-[54px]"
                      style={rowStyle}
                    >
                      <span className="satoshi-md text-base text-black sm:text-lg lg:text-xl">
                        {item.question}
                      </span>
                      <ChevronIcon open={isOpen} />
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
                      <div className="mx-3 border border-t-0 border-[#E6E6E6] bg-white px-4 py-5 sm:mx-7 sm:px-7 sm:py-6">
                        <p className="satoshi-md text-[15px] leading-[1.5] text-black">{item.answer}</p>
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

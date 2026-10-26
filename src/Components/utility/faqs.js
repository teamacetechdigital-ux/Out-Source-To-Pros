import { useState } from "react";
import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 1.5rem 0rem 0rem",
};


function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-[#1B50E8] transition-transform duration-300 ${
        open ? "-rotate-90" : ""
      }`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 3.5l4 4 4-4M4 8.5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A white card around the section, as used on the SEO page.
const boxStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

function Faqs({ content }) {
  const { faqs } = content;
  const [active, setActive] = useState(content.defaultActive || 0);

  return (
    <section
      id="faqs"
      className={`faqs-section ${
        content.boxed
          ? "relative z-10 -mt-12 pb-16 sm:-mt-16 sm:pb-20 lg:-mt-28 lg:pb-24"
          : "py-16 sm:py-20 lg:pb-32 lg:pt-28"
      }`}
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 items-start gap-8 xl:grid-cols-[576fr_482fr] xl:items-end xl:gap-[82px] [&>*]:min-w-0 ${
            content.boxed
              ? "rounded-[20px] bg-white px-5 py-10 sm:px-10 xl:items-center xl:px-[78px] xl:py-16"
              : ""
          }`}
          style={content.boxed ? boxStyle : undefined}
        >
          <div>
            <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold leading-[1.2] text-black">
              {withBreaks(content.title)}{" "}
              <span style={headingHighlightStyle}>{content.highlight}</span>
            </h2>
            {content.description &&
              content.description.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`satoshi-md text-[15px] text-black ${index === 0 ? "pt-5" : "pt-2"}`}
                >
                  {withBreaks(paragraph)}
                </p>
              ))}

            <ul className={content.description ? "mt-6 lg:mt-8" : "mt-8 lg:mt-14"}>
              {faqs.map((faq, index) => (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-expanded={active === index}
                    className={`flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left ${
                      index < faqs.length - 1 ? "border-b border-[#1B50E8]/40" : ""
                    }`}
                  >
                    <span
                      className={`satoshi-md text-base lg:text-lg ${
                        active === index ? "text-[#1B50E8]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronIcon open={active === index} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Answer for the selected question fades in */}
          <div
            className="grid min-w-0 overflow-hidden rounded-3xl px-6 py-8 answer-bg sm:px-10 lg:min-h-[430px] lg:py-12"
          >
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`relative col-start-1 row-start-1 transition-opacity duration-500 ${
                  active === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={active !== index}
              >
                {faq.answerList ? (
                  <>
                    <h3 className="montserrat-rg pb-3 text-xl font-bold text-white">
                      {faq.answerTitle}
                    </h3>
                    <ul className="satoshi-md list-disc space-y-1 pl-5 text-base leading-[1.5] text-white lg:text-[15px]">
                      {faq.answerList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  faq.answer.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="satoshi-md pb-4 text-base lg:text-[15px] leading-[1.5] text-white"
                    >
                      {paragraph}
                    </p>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;

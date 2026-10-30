import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const numberStyle = {
  background: "linear-gradient(180deg, #A1D1FF 0%, rgba(161, 209, 255, 0) 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const cardStyle = {
  background: "linear-gradient(90deg, #F5F5F5 0%, #EDEDED 100%)",
};

function ProcessTimeline({ content }) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <h2 className="montserrat-rg text-center text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
          {withBreaks(content.title)}{" "}
          <span style={headingHighlightStyle}>{content.highlight}</span>
        </h2>

        <ol className="mt-10 flex flex-col gap-5 sm:mt-14 sm:gap-6 mx-auto w-full max-w-6xl">
          {content.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-1 items-center sm:grid-cols-[110px_minmax(0,1fr)] lg:grid-cols-[150px_110px_minmax(0,1fr)] xl:grid-cols-[170px_120px_minmax(0,1fr)]"
            >
              <span
                className="montserrat-rg block text-[56px] font-extrabold leading-none tracking-tight sm:text-[80px] lg:text-[110px] xl:text-[120px]"
                style={numberStyle}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="hidden items-center lg:flex" aria-hidden="true">
                <span className="h-3.5 w-3.5 shrink-0 rounded-[9999px] bg-[#1B50E8]" />
                <span className="h-px w-14 bg-[#E2E2E2]" />
              </span>

              <div
                className="-mt-3 min-w-0 rounded-2xl px-5 py-6 sm:mt-0 sm:px-8 sm:py-8 lg:px-[60px]"
                style={cardStyle}
              >
                <h3 className="montserrat-rg text-[24px] font-bold uppercase leading-tight text-black sm:text-[24px] lg:text-[26px]">
                  <span className="sr-only">{`Step ${index + 1}: `}</span>
                  {step.title}
                </h3>
                <p className="satoshi-md pt-2 text-[18px] leading-[1.5] text-black">
                  {withBreaks(step.text, "lg")}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center sm:mt-12">
          <button
            type="button"
            className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
          >
            {content.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;

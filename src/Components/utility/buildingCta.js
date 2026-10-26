import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

function BuildingCta({ content }) {
  return (
    <section
      className={`building-cta-section relative z-10 pt-16 sm:pt-24 lg:pt-32 ${
        content.beforeFooter ? "pb-24 sm:pb-32 lg:pb-40" : "pb-12 sm:pb-20"
      }`}
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12 text-center">
        <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold leading-[1.25] text-black">
          {withBreaks(content.title)}{" "}
          <span style={headingHighlightStyle}>{content.highlight}</span>
        </h2>
        {content.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`satoshi-md ${
              index === 0 ? "pt-6" : "pt-3"
            } text-base lg:text-[15px] text-black`}
          >
            {withBreaks(paragraph)}
          </p>
        ))}
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
          <button className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base lg:text-lg font-bold uppercase text-white">
            {content.primaryButton}
          </button>
          <button className="montserrat-bd rounded-md bg-[#C9D9FF] px-8 py-4 text-base lg:text-lg font-bold uppercase text-black">
            {content.secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuildingCta;

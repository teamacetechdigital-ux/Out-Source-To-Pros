import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #ffffff00, #ffffffbf)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const sectionStyle = {
  background:
    "radial-gradient(ellipse at 100% 100%, #C9D9FF 0%, rgba(201,217,255,0) 35%), linear-gradient(120deg, #111111 30%, #0B2A8C 65%, #1B50E8 100%)",
};

const glassStyle = {
  background: "rgba(255, 255, 255, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
};

// Index of the short paragraph shown in bold ("Some organizations use both.").
const BOLD_PARAGRAPH = 2;

function Column({ column, boldIndex }) {
  return (
    <>
      <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] text-white sm:text-[36px] lg:text-[40px] xl:text-[44px]">
        {withBreaks(column.title)}{" "}
        <span style={headingHighlightStyle}>{column.highlight}</span>
      </h2>
      <div className="pt-4 sm:pt-6">
        {column.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`pt-3 text-[15px] leading-[1.5] text-white ${
              index === boldIndex ? "satoshi-bd" : "satoshi-md"
            }`}
          >
            {withBreaks(paragraph)}
          </p>
        ))}
      </div>
      <button
        type="button"
        className="montserrat-bd mt-8 rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
      >
        {column.buttonLabel}
      </button>
    </>
  );
}

function TwoColumnDark({ content }) {
  return (
    <section
      className="relative overflow-x-clip pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24"
      style={sectionStyle}
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20 [&>*]:min-w-0">
          <div className="lg:pt-8">
            <Column column={content.left} boldIndex={BOLD_PARAGRAPH} />
          </div>
          <div className="rounded-[20px] px-5 py-8 sm:p-10" style={glassStyle}>
            <Column column={content.right} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoColumnDark;

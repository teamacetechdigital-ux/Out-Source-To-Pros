import { withBreaks } from "../../utils/text";
import caseBefore from "../../assets/imgs/seo/case-before.png";
import caseAfter from "../../assets/imgs/seo/case-after.png";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

// Images by JSON key. The Figma exports include the blue frame and shadow.
const images = { caseBefore, caseAfter };

const placeholderStyle = {
  background: "linear-gradient(135deg, #EEF4FF 0%, #D6E4FF 100%)",
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const vsStyle = {
  background: "linear-gradient(135deg, #0846A0 0%, #0075FF 100%)",
  boxShadow: "0px 10px 30px rgba(0, 117, 255, 0.35)",
};

function CaseImage({ image, alt }) {
  const src = images[image];

  if (src) {
    return <img src={src} alt={alt} className="block h-auto w-full" />;
  }

  return (
    <div
      className="flex aspect-[810/290] w-full items-center justify-center rounded-2xl border-2 border-[#A1D1FF] px-4 text-center"
      style={placeholderStyle}
      role="img"
      aria-label={alt}
    >
      <span className="satoshi-md text-xs text-[#1B50E8]/70 sm:text-sm">{alt}</span>
    </div>
  );
}

function VsCircle({ label }) {
  return (
    <span
      className="montserrat-rg relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-[9999px] text-2xl font-bold text-white sm:h-[100px] sm:w-[100px] sm:text-[28px] lg:h-[120px] lg:w-[120px] lg:text-[34px]"
      style={vsStyle}
    >
      {label}
    </span>
  );
}

function VsConnector({ label }) {
  return (
    <>
      {/* Phones: short vertical line through the VS circle */}
      <div className="flex flex-col items-center py-2 sm:hidden" aria-hidden="true">
        <span className="h-8 w-2 rounded-b-[9999px] bg-[#A1D1FF]" />
        <VsCircle label={label} />
        <span className="h-8 w-2 rounded-t-[9999px] bg-[#A1D1FF]" />
      </div>

      {/* Tablet and up: line from the before image's bottom right to the after block's top left */}
      <div className="relative hidden h-[200px] sm:block lg:h-[260px]" aria-hidden="true">
        <span className="absolute left-1/2 right-[25%] top-0 h-[calc(50%+4px)] rounded-br-[48px] border-b-8 border-r-8 border-[#A1D1FF]" />
        <span className="absolute bottom-0 left-[25%] right-1/2 top-[calc(50%-4px)] rounded-tl-[48px] border-l-8 border-t-8 border-[#A1D1FF]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <VsCircle label={label} />
        </div>
      </div>
    </>
  );
}

function CaseStudy({ content }) {
  const { before, after } = content;

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <h2 className="montserrat-rg text-center text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
          {withBreaks(content.title)}{" "}
          <span style={headingHighlightStyle}>{content.highlight}</span>
        </h2>

        <div className="mx-auto mt-10 max-w-[810px] lg:mt-12">
          <div className="mx-auto max-w-[740px]">
            <h3 className="montserrat-rg text-[22px] font-bold leading-tight text-black sm:text-[26px]">
              {before.title}
            </h3>
            <p className="satoshi-md pt-2 text-[15px] leading-[1.5] text-black">{before.text}</p>
          </div>
          <div className="mt-5">
            <CaseImage image={before.image} alt={before.imageAlt} />
          </div>

          <VsConnector label={content.vsLabel} />

          <div className="mx-auto max-w-[740px] sm:pt-4">
            <h3 className="montserrat-rg text-[22px] font-bold leading-tight text-black sm:text-[26px]">
              {after.title}
            </h3>
            <p className="satoshi-md pt-2 text-[15px] leading-[1.5] text-black">
              {after.textParts.map((part, index) => (
                <span key={index} className={part.highlight ? "font-bold text-[#1B50E8]" : undefined}>
                  {withBreaks(part.text)}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-5">
            <CaseImage image={after.image} alt={after.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;

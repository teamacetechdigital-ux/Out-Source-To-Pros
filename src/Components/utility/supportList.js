import { withBreaks } from "../../utils/text";
import brandMark from "../../assets/imgs/webdevelopment/fav-mark.svg";
import "./supportList.css";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const whiteCardStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const blueCardStyle = {
  background: "linear-gradient(135deg, #0846A0 0%, #0075FF 100%)",
  boxShadow: "0px 10px 30px rgba(0, 117, 255, 0.3)",
};

function SupportList({ content }) {
  return (
    <section id="seo-support" className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-0 [&>*]:min-w-0">
          <div
            className="rounded-[20px] bg-white px-6 py-8 sm:px-10 sm:py-10 lg:pr-14"
            style={whiteCardStyle}
          >
            <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
              {withBreaks(content.title)}{" "}
              <span style={headingHighlightStyle}>{content.highlight}</span>
            </h2>

            <p className="montserrat-rg pt-6 text-lg font-bold text-[#1B50E8]">{content.lead}</p>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="satoshi-md pt-4 text-[15px] 2xl:text-[19px] leading-[1.5] text-black">
                {paragraph}
              </p>
            ))}
            {content.closing && (
              <p className="satoshi-md pt-4 text-[15px] 2xl:text-[19px] leading-[1.5] text-black">
                {content.closing}{" "}
                <span className="satoshi-bd text-[#1B50E8]">{content.closingLink}</span>
              </p>
            )}

            <button
              type="button"
              className="montserrat-bd mt-8 rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
            >
              {content.buttonLabel}
            </button>
          </div>

          {/* Blue support list sits slightly over the white card on desktop. */}
          <div
            className="relative rounded-[20px] px-6 py-8 text-white sm:px-8 lg:-ml-4 lg:py-10"
            style={blueCardStyle}
          >
            <h3 className="montserrat-rg text-[22px] font-semibold leading-tight sm:text-[26px]">
              {content.listTitle}
            </h3>
            <ul className="mt-4">
              {content.items.map((item, index) => (
                <li
                  key={item}
                  className={`seo-support-item satoshi-bd flex w-full items-center py-3.5 text-left text-[15px] 2xl:text-[19px] ${
                    index < content.items.length - 1 ? "border-b border-white/20" : ""
                  }`}
                >
                  <img
                    src={brandMark}
                    alt=""
                    aria-hidden="true"
                    width="20"
                    height="20"
                    className="seo-support-item__mark"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportList;

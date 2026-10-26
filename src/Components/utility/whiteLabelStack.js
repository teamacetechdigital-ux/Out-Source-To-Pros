import { useState } from "react";
import { withBreaks } from "../../utils/text";

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

// Flat square turned into an isometric diamond.
const plateTransform = "rotateX(68deg) rotateZ(45deg)";

const plateColors = {
  blue: {
    face: "linear-gradient(135deg, #0075FF 0%, #1B50E8 100%)",
    edge: "linear-gradient(135deg, #0B2A8C 0%, #1B50E8 100%)",
  },
  grey: {
    face: "linear-gradient(135deg, #FFFFFF 0%, #EFEFEF 100%)",
    edge: "linear-gradient(135deg, #C4C4C4 0%, #E4E4E4 100%)",
  },
};

// Stack geometry in design pixels (stack is 292px wide in the prototype).
const STACK_WIDTH = 292;
const PLATE_SIZE = 206; // 292 / sqrt(2)
const PLATE_STEP = 40;
const TOP_CENTER = 54.5; // half the visible diamond height
const stackHeight = (count) => TOP_CENTER * 2 + (count - 1) * PLATE_STEP + 16;
const toStackPercent = (px, count) => `${(px / stackHeight(count)) * 100}%`;
const plateCenter = (index, count) =>
  toStackPercent(TOP_CENTER + index * PLATE_STEP, count);

// One plate face or edge: grey layer with a blue layer that fades in when active.
function PlateLayer({ active, color, className, onActivate }) {
  return (
    <span
      className={`pointer-events-auto absolute inset-x-0 block aspect-square cursor-pointer ${className}`}
      style={{ transform: plateTransform }}
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      <span
        className="absolute inset-0"
        style={{ background: plateColors.grey[color] }}
      />
      <span
        className={`absolute inset-0 transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: plateColors.blue[color] }}
      />
    </span>
  );
}

function PlateStack({ count, active, onActivate }) {
  return (
    <div
      className="relative ml-[10%] w-[70%]"
      style={{
        aspectRatio: `${STACK_WIDTH} / ${stackHeight(count)}`,
        filter: "drop-shadow(0px 10px 12px rgba(0, 0, 0, 0.08))",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="pointer-events-none absolute left-[14.64%] aspect-square w-[70.72%]"
          style={{
            top: toStackPercent(
              TOP_CENTER + index * PLATE_STEP - PLATE_SIZE / 2,
              count,
            ),
            zIndex: count - index,
          }}
        >
          <PlateLayer
            active={active === index}
            color="edge"
            className="top-[5%]"
            onActivate={() => onActivate(index)}
          />
          <PlateLayer
            active={active === index}
            color="face"
            className="top-0"
            onActivate={() => onActivate(index)}
          />
        </div>
      ))}
    </div>
  );
}

function WhiteLabelStack({ content }) {
  const { boldParagraph, supportItems } = content;
  const [active, setActive] = useState(0);
  const lineTop = plateCenter(active, supportItems.length);

  return (
    <section className="relative z-10 py-12 sm:py-16 lg:py-20">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div
          className="rounded-[20px] bg-white px-5 py-8 sm:px-10 sm:py-12 lg:px-[76px] lg:py-16"
          style={whiteCardStyle}
        >
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-10 xl:gap-16 [&>*]:min-w-0">
            <div>
              <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
                {withBreaks(content.title)}{" "}
                <span style={headingHighlightStyle}>{content.highlight}</span>
                {content.titleEnd && <> {withBreaks(content.titleEnd)}</>}
              </h2>
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="satoshi-md pt-5 text-[15px] leading-[1.5] text-black"
                >
                  {withBreaks(paragraph)}
                </p>
              ))}
              {boldParagraph && (
                <p className="satoshi-md pt-3 text-[15px] leading-[1.5] text-black">
                  {boldParagraph.before}{" "}
                  <strong className="satoshi-bd">{boldParagraph.bold}</strong>{" "}
                  {boldParagraph.after}
                </p>
              )}
              <h3 className="satoshi-bd pt-6 text-[20px] capitalize text-black lg:text-[22px]">
                {content.listTitle}
              </h3>
              <ul className="satoshi-md flex list-disc flex-col gap-2 pl-5 pt-4 text-[15px] text-black marker:text-[#1B50E8]">
                {content.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                type="button"
                className="montserrat-bd mt-8 rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
              >
                {content.buttonLabel}
              </button>
            </div>

            <div className="mx-auto w-full max-w-[420px]">
              <h3 className="satoshi-md text-[20px] text-black lg:text-[22px]">
                {content.visualTitle}
              </h3>

              {/* Hovering (or tapping) a plate shows its item; leaving the stack goes back to the first */}
              <div className="relative mt-8" onMouseLeave={() => setActive(0)}>
                <PlateStack
                  count={supportItems.length}
                  active={active}
                  onActivate={setActive}
                />
                <span
                  className="absolute left-[80%] right-0 border-t border-dashed border-[#C9C9C9] transition-[top] duration-500"
                  style={{ top: lineTop }}
                />
                <span
                  className="absolute bottom-0 right-0 border-r border-dashed border-[#C9C9C9] transition-[top] duration-500"
                  style={{ top: lineTop }}
                />
              </div>

              <div className="pt-10 sm:pt-14">
                <div className="relative w-[88%]">
                  <span className="absolute -top-10 bottom-1/2 left-[calc(113.64%-1px)] border-l border-dashed border-[#C9C9C9] sm:-top-14" />
                  <span className="absolute left-full top-1/2 w-[13.64%] border-t border-dashed border-[#C9C9C9]" />
                  <div
                    className="relative rounded-xl px-5 pb-6 pt-7 text-center text-white sm:px-6"
                    style={blueCardStyle}
                    aria-live="polite"
                  >
                    <span className="montserrat-rg absolute -left-3 -top-4 flex h-9 w-9 items-center justify-center rounded-[9999px] border-[3px] border-[#A1D1FF] bg-white text-xs font-bold text-[#0A1F44]">
                      {String(active + 1).padStart(2, "0")}
                    </span>
                    {/* All items share one grid cell so the card keeps the tallest height */}
                    <div className="grid">
                      {supportItems.map((item, index) => (
                        <div
                          key={item.title}
                          className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                            active === index ? "opacity-100" : "opacity-0"
                          }`}
                          aria-hidden={active !== index}
                        >
                          <h4 className="montserrat-rg text-lg font-semibold leading-tight sm:text-[22px]">
                            {item.title}
                          </h4>
                          <p className="satoshi-md pt-2 text-[15px] leading-[1.4]">
                            {withBreaks(item.text)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhiteLabelStack;

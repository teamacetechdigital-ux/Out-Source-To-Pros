import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #ffffff00, #ffffffbf)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const cardStyle = {
  background: "rgba(255, 255, 255, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  backdropFilter: "blur(6px)",
};

// On lg+ the cards sit on a 12 column grid, so a row of n cards spans 12 / n each.
const lgSpans = {
  1: "lg:col-span-12",
  2: "lg:col-span-6",
  3: "lg:col-span-4",
  4: "lg:col-span-3",
  6: "lg:col-span-2",
};

// Gives each card the lg column span of the row it falls in (content.layout).
function withSpans(cards, layout = []) {
  const rows = layout.length ? layout : [cards.length];
  const spans = [];
  let row = 0;
  while (spans.length < cards.length) {
    const count = rows[Math.min(row, rows.length - 1)];
    for (let i = 0; i < count && spans.length < cards.length; i += 1) {
      spans.push(lgSpans[count] || "lg:col-span-4");
    }
    row += 1;
  }
  return cards.map((card, index) => ({ ...card, span: spans[index] }));
}

function GlassCards({ content }) {
  const cards = withSpans(content.cards, content.layout);
  const paragraphs = content.paragraphs || [];
  const oddCount = cards.length % 2 === 1;

  return (
    <section
      className="relative overflow-x-clip pb-24 pt-20 text-white sm:pb-32 sm:pt-24 lg:pb-[200px] lg:pt-[120px]"
    >
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1140px]">
          <h2 className="montserrat-rg text-center text-[30px] font-bold leading-[1.2] text-white sm:text-[36px] lg:text-[40px] xl:text-[44px]">
            {withBreaks(content.title)}{" "}
            <span style={headingHighlightStyle}>{content.highlight}</span>
          </h2>

          {paragraphs.length > 0 && (
            <div className="mx-auto mt-6 max-w-[760px] text-center">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="satoshi-md pt-1 text-[15px] 2xl:text-[19px] leading-[1.5] text-white">
                  {withBreaks(paragraph, "lg")}
                </p>
              ))}
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-12">
            {cards.map((card, index) => (
              <article
                key={card.title}
                className={`min-w-0 rounded-xl px-6 py-6 lg:px-[30px] ${card.span} ${
                  oddCount && index === cards.length - 1 ? "sm:max-lg:col-span-2" : ""
                }`}
                style={cardStyle}
              >
                <h3 className="montserrat-rg text-lg font-semibold leading-tight text-white">
                  {card.title}
                </h3>
                <p className="satoshi-md pt-2 text-sm leading-[1.5] text-white/85">
                  {card.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:mt-12">
            <button
              type="button"
              className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
            >
              {content.buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlassCards;

import { useId } from "react";
import { Link } from "react-router-dom";

function CapabilityCard({ card }) {
  const light = card.tone === "light";

  return (
    <article
      className={`flex min-w-0 flex-col justify-between rounded-[clamp(10px,1vw,16px)] p-5 md:min-h-[clamp(124px,16vw,230px)] md:p-[clamp(16px,2.2vw,32px)] ${light ? "bg-[#c5e2ff] text-[#0062ff]" : "bg-[linear-gradient(110deg,#0075ff,#0046c6)] text-white"}`}
    >
      <h3 className="satoshi-bd text-lg leading-[1.25] md:text-[clamp(0.75rem,1.61vw,1.375rem)]">
        {card.title}
      </h3>
      <div className="mt-3 flex flex-col gap-1 md:mt-[5%]">
        {card.tagRows.map((row, index) => (
          <ul key={index} className="flex flex-wrap gap-1">
            {row.map((tag) => (
              <li
                key={tag}
                className={`satoshi-md rounded-[999px] border px-[clamp(8px,1vw,14px)] py-[clamp(4px,0.4vw,6px)] text-xs leading-[1.2] md:px-[clamp(4px,0.52vw,8px)] md:text-[clamp(0.5rem,1.04vw,0.9375rem)] ${light ? `${card.emphasizedTags?.includes(tag) ? "bg-[#9fc5ff]" : "bg-white/15"} border-white/65 text-black` : "border-white/65 bg-white/10 text-white"}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </article>
  );
}

function WhyOutSource({ content }) {
  const id = useId();
  const [planning, ux, ...capabilities] = content.capabilities.cards;

  return (
    <section
      id="why-outsource-web-design"
      aria-labelledby={`${id}-heading`}
      className="why-out-source-section relative pb-16 pt-1 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(200px,22vw,320px)] bg-[linear-gradient(to_bottom,transparent,#fff_90%)]"
      />
      <div className="relative z-10 mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="mx-auto w-full text-center md:w-[58%]">
          <h2
            id={`${id}-heading`}
            className="montserrat-rg text-[28px] font-bold leading-[1.2] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]"
          >
            {content.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-2">
              {content.highlight}
            </span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[3.5%] md:space-y-2 md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to={content.buttonLink}
            className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-6 py-3.5 text-center text-xs font-bold uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[3.5%] md:px-[3.5%] md:py-[2.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]"
          >
            {content.buttonLabel}
          </Link>
        </div>
        <section
          aria-labelledby={`${id}-capabilities-heading`}
          className="mt-10 rounded-[clamp(16px,1.5vw,24px)] bg-white p-6 shadow-[0_4px_20px_rgba(27,80,232,0.07)] sm:p-8 md:mt-[6.2vw] md:px-[6.8%] md:pb-[2.5%] md:pt-[5.3%]"
        >
          <div className="grid gap-[clamp(8px,0.8vw,12px)] sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_0.94fr]">
            <h2
              id={`${id}-capabilities-heading`}
              className="montserrat-rg mb-4 text-[28px] font-bold leading-[1.2] text-black sm:col-span-2 md:col-span-1 md:mb-0 md:text-[clamp(1.5rem,3.23vw,2.875rem)]"
            >
              {content.capabilities.title}
              <br />
              <span className="bg-[linear-gradient(to_right,transparent,#8ba6ff)] pr-2">
                {content.capabilities.highlight}
              </span>
            </h2>
            <CapabilityCard card={planning} />
            <CapabilityCard card={ux} />
          </div>
          <div className="mt-[clamp(8px,0.8vw,12px)] grid gap-[clamp(8px,0.8vw,12px)] sm:grid-cols-2 md:grid-cols-3">
            {capabilities.map((card) => (
              <CapabilityCard key={card.title} card={card} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyOutSource;

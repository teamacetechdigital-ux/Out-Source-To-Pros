import { useId } from "react";
import { Link } from "react-router-dom";

function AppFrontendBackend({ content }) {
  const id = useId();
  const { api } = content;

  return (
    <section id="frontend-backend-api" aria-labelledby={`${id}-heading`} className="pb-12 pt-6 md:pb-[7vw] md:pt-[3vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[70ch] space-y-2 text-center text-[15px] leading-[1.35] text-black md:mt-[2%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="mt-7 grid gap-3 md:mt-[2.6%] md:grid-cols-2 md:gap-[1.3vw]">
          {content.cards.map((card) => (
            <div key={card.title} className="min-w-0 rounded-[clamp(14px,1.3vw,20px)] bg-[linear-gradient(180deg,#d6e9ff,#f7fbff)] px-6 py-7 text-black md:px-[7.3%] md:py-[6%]">
              <h3 className="montserrat-rg text-[22px] font-bold leading-[1.2] md:text-[clamp(1.625rem,1.9vw,2.25rem)]">{card.title}</h3>
              <p className="satoshi-md mt-2 text-[15px] leading-[1.35] md:mt-[2.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.text}</p>
              <h4 className="satoshi-bd mt-3 text-[15px] leading-[1.35] text-[#1B50E8] md:mt-[2.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{card.listTitle}</h4>
              <ul className="satoshi-md mt-2 space-y-1 text-[15px] leading-[1.35] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] bg-[#1B50E8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3 grid items-center gap-6 rounded-[clamp(14px,1.3vw,20px)] bg-[linear-gradient(110deg,#0846a0,#0075ff)] px-6 py-7 text-white md:mt-[1.3vw] md:grid-cols-[1fr_auto] md:gap-[4%] md:px-[3.6%] md:py-[2.8%]">
          <div className="min-w-0 md:max-w-[54ch]">
            <h3 className="montserrat-rg text-[22px] font-bold leading-[1.2] md:text-[clamp(1.625rem,1.9vw,2.25rem)]">{api.title}</h3>
            <div className="mt-2 space-y-2 text-[15px] leading-[1.35] md:mt-[1.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
              {api.paragraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "satoshi-md" : "satoshi-bd"}>{paragraph}</p>)}
            </div>
          </div>
          <Link to={api.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center justify-self-start rounded-md bg-white px-5 py-3 text-center text-xs uppercase leading-[1.3] text-[#1B50E8] transition-colors hover:bg-[#e8f0ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mr-[4%] md:justify-self-end md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {api.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AppFrontendBackend;

import { useId } from "react";
import { Link } from "react-router-dom";

const buttonClass =
  "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85baff] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(0.625rem,1.25vw,1.125rem)]";
const headingClass =
  "montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.5rem,3.1vw,2.875rem)]";

function AroundYourAgency({ content }) {
  const id = useId();
  const { whiteLabel } = content;

  return (
    <section
      id="around-your-agency"
      aria-labelledby={`${id}-heading`}
      className="around-your-agency relative isolate bg-white pb-10 pt-12 md:pb-[4.4vw] md:pt-[7.3vw]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_38%,rgba(255,255,255,0.75)_75%,#fff_96%),linear-gradient(125deg,#101010_12%,#0c254f_42%,#0c4ab6_66%,#a5bfe9_100%)]"
      />

      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <div className="text-center text-white">
          <h2 id={`${id}-heading`} className={headingClass}>
            {content.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,rgba(210,220,241,0.65))] px-1">
              {content.highlight}
            </span>
          </h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[70ch] space-y-2 text-sm leading-[1.35] md:mt-[2.3vw] md:w-[62%] md:space-y-[0.5vw] md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to={content.buttonLink}
            className={`${buttonClass} mt-5 md:mt-[1.7vw]`}
          >
            {content.buttonLabel}
          </Link>
        </div>

        <div
          aria-labelledby={`${id}-white-label-heading`}
          className="mt-10 grid grid-cols-1 items-center gap-8 rounded-[clamp(16px,1.7vw,24px)] bg-white px-6 py-8 text-black shadow-[0_4px_20px_rgba(27,80,232,0.08)] sm:px-8 md:mt-[6.8vw] md:grid-cols-2 md:gap-[5.5vw] md:px-[5.4vw] md:py-[3.5vw]"
        >
          <div className="min-w-0 md:max-w-[29.5vw]">
            <h2 id={`${id}-white-label-heading`} className={headingClass}>
              {whiteLabel.title}
              <br />
              <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">
                {whiteLabel.highlight}
              </span>
            </h2>
            <div className="satoshi-md mt-4 space-y-2 text-sm leading-[1.35] md:mt-[1.7vw] md:space-y-[0.5vw] md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
              <p className="satoshi-bd">{whiteLabel.intro}</p>
              {whiteLabel.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              to={whiteLabel.buttonLink}
              className={`${buttonClass} mt-5 md:mt-[2.3vw]`}
            >
              {whiteLabel.buttonLabel}
            </Link>
          </div>

          <ul className="mx-auto grid w-full max-w-[420px] grid-cols-2 items-end gap-2 sm:gap-3 md:w-[27vw] md:translate-x-[1vw] md:-translate-y-[1.8vw] md:gap-[1vw]">
            {whiteLabel.cards.map((card, index) => (
              <li
                key={card.title}
                className={`min-w-0 rounded-[clamp(10px,1.3vw,18px)] p-4 md:min-h-[8.8vw] md:p-[1.3vw] ${index === 0 || index === 3 ? "bg-[linear-gradient(110deg,#0075ff,#0047c8)] text-white" : "bg-[linear-gradient(180deg,#a5d1ff,#fff)] text-black"} ${index > 1 ? "self-start" : ""} ${index === 0 ? "md:-ml-[3.6vw] md:min-h-[11.5vw] md:w-[calc(100%+3.6vw)] md:p-[1.6vw]" : ""}`}
              >
                <h3
                  className={`satoshi-bd text-sm leading-[1.25] ${index === 0 ? "md:text-[clamp(0.625rem,1.25vw,1.125rem)]" : "md:text-[clamp(0.5rem,1.04vw,0.9375rem)]"}`}
                >
                  {card.title}
                </h3>
                <p className="satoshi-md mt-1 text-xs leading-[1.4] md:mt-[0.5vw] md:text-[clamp(0.375rem,0.73vw,0.75rem)]">
                  {card.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AroundYourAgency;

import { useId } from "react";
import { Link } from "react-router-dom";

function ProjectConnectors({ count }) {
  const centers = Array.from(
    { length: count },
    (_, index) => ((index + 0.5) / count) * 1000,
  );

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 125"
      preserveAspectRatio="none"
      className="hidden h-[8vw] w-full overflow-visible md:block"
    >
      <g
        fill="none"
        stroke="#d8dde5"
        strokeWidth="1"
        strokeDasharray="6 7"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M500 7V119" />
        {centers
          .filter((center) => center !== 500)
          .map((center) => {
            const direction = center < 500 ? -1 : 1;
            return (
              <path
                key={center}
                d={`M500 10V13Q500 40 ${500 + direction * 30} 40H${center - direction * 30}Q${center} 40 ${center} 70V119`}
              />
            );
          })}
      </g>
      <rect x="493" y="0" width="14" height="14" fill="#1B50E8" />
      {centers.map((center) => (
        <rect
          key={center}
          x={center - 6}
          y="113"
          width="12"
          height="12"
          fill="#a1d1ff"
        />
      ))}
    </svg>
  );
}

function ClientProjects({ content, sharedBackground = false }) {
  const id = useId();

  return (
    <section
      id="client-projects"
      aria-labelledby={`${id}-heading`}
      className={`relative isolate overflow-hidden pb-10 pt-8 md:pb-[4vw] md:pt-[3.5vw] ${sharedBackground ? "" : "bg-white"}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%]"
      />
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] text-center text-black md:w-[79.2%]">
        <h2
          id={`${id}-heading`}
          className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]"
        >
          {content.title}
          <br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">
            {content.highlight}
          </span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[70ch] space-y-2 text-[15px] leading-[1.35] md:mt-[1.8vw] md:w-[60%] md:space-y-[0.5vw] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-7 md:mt-[1.7vw]">
          <ProjectConnectors count={content.cards.length} />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[1.6vw] md:grid-cols-5 md:gap-[1vw]">
            {content.cards.map((card) => (
              <li
                key={card.title}
                className="min-w-0 rounded-[clamp(10px,1.1vw,16px)] bg-[linear-gradient(180deg,#a1d1ff,#fff)] px-5 py-6 md:min-h-[11.4vw] md:px-[1.2vw] md:py-[2vw]"
              >
                <h3 className="satoshi-bd text-base leading-[1.25] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
                  {card.title}
                </h3>
                <p className="satoshi-md mt-2 text-[15px] leading-[1.3] md:mt-[0.6vw] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
                  {card.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={content.buttonLink}
          className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-[2.5vw] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]"
        >
          {content.buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default ClientProjects;

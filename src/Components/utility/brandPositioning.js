import { useId } from "react";
import { Link } from "react-router-dom";

// x positions (in the 1230 wide tree) where each branch drops onto a card.
const branchPoints = [10, 312, 617, 919, 1219];

// Dashed connector from the center square down to the five cards (desktop only).
function PositioningTree() {
  const radius = 24;
  const top = 14;
  const rail = 56;
  const bottom = 178;

  return (
    <svg aria-hidden="true" viewBox="0 0 1230 192" fill="none" className="mx-auto hidden aspect-[1230/192] w-[81%] md:block">
      <g stroke="#b9c4d6" strokeWidth="1.5" strokeDasharray="6 6">
        <path d={`M615 ${top}V${rail - radius}`} />
        {branchPoints.map((x) => {
          if (Math.abs(x - 615) < radius) return <path key={x} d={`M615 ${rail - radius}V${bottom}`} />;
          const direction = x < 615 ? -1 : 1;
          return (
            <path
              key={x}
              d={`M615 ${rail - radius}Q615 ${rail} ${615 + direction * radius} ${rail}H${x - direction * radius}Q${x} ${rail} ${x} ${rail + radius}V${bottom}`}
            />
          );
        })}
      </g>
      <rect x="609" y="0" width="12" height="12" fill="#1B50E8" />
      {branchPoints.map((x) => <rect key={x} x={x - 5} y={bottom + 4} width="10" height="10" fill="#9fcfff" />)}
    </svg>
  );
}

function BrandPositioning({ content }) {
  const id = useId();

  return (
    <section id="brand-positioning" aria-labelledby={`${id}-heading`} className="bg-white pb-12 md:pb-[7vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[78ch] space-y-2 text-center text-[15px] leading-[1.35] text-black md:mt-[2.6%] md:w-[59.3%] md:space-y-[1%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-8 md:mt-[2.3%]">
          <PositioningTree />
          <ol className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:mt-[1.2%] md:grid-cols-5 md:gap-[1.3%]">
            {content.steps.map((step) => (
              <li key={step.title} className="min-w-0 rounded-[clamp(10px,1vw,16px)] bg-[linear-gradient(180deg,#a8d0ff_0%,#e6f2ff_55%,#fff_100%)] px-4 py-5 text-center md:min-h-[clamp(100px,9.7vw,186px)] md:px-[7%] md:py-[11%]">
                <h3 className="montserrat-rg text-base font-bold leading-[1.2] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{step.title}</h3>
                <p className="satoshi-md mt-2 text-[15px] leading-[1.3] text-black md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 text-center md:mt-[2.3%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default BrandPositioning;

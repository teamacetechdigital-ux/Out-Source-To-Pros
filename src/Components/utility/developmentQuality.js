import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

function DevelopmentQuality({ content }) {
  const id = useId();
  const points = [[156, 40], [294, 120], [319, 203], [297, 286], [156, 372]];

  return (
    <section id="development-quality" aria-labelledby={`${id}-heading`} className="bg-white pb-12 md:pb-[7vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-center gap-8 text-black md:w-[79.2%] md:grid-cols-[0.81fr_1.19fr] md:gap-8 2xl:gap-0">
        <div className="relative z-10 min-w-0 md:pr-[1vw]">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.1vw,3.75rem)]">
            {content.title}<br /><span className="md:whitespace-nowrap">{content.subtitle}</span><br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mt-5 space-y-2 text-[15px] leading-[1.35] md:mt-[1vw] md:space-y-[0.5vw] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-5 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[1.6vw] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
        <div className="relative grid min-w-0 grid-cols-2 items-center gap-4 2xl:block 2xl:aspect-[604/406]">
          <svg aria-hidden="true" viewBox="0 0 604 406" className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible fill-none 2xl:block">
            <defs>
              <linearGradient id={`${id}-connector`} gradientUnits="userSpaceOnUse" x1="156" y1="0" x2="390" y2="0">
                <stop stopColor="#0067ff" stopOpacity="0.7" />
                <stop offset="1" stopColor="#0067ff" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <path d="M156 40C246 40 319 114 319 206C319 298 246 372 156 372" stroke="#0067ff" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
            {points.map(([x, y]) => (
              <g key={y}>
                <path d={`M${x} ${y}H390`} stroke={`url(#${id}-connector)`} strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
                <circle cx={x} cy={y} r="3.5" fill="#005de8" />
              </g>
            ))}
          </svg>
          <div aria-hidden="true" className="relative flex aspect-square w-full items-center justify-center rounded-[50%] bg-[linear-gradient(110deg,#0075ff,#0052d8)] 2xl:absolute 2xl:left-0 2xl:top-[13.054%] 2xl:w-[50.828%]">
            <img src={brandMark} alt="" width="76" height="76" className="h-auto w-full brightness-0 invert" />
          </div>
          <ul className="relative grid gap-2 2xl:absolute 2xl:inset-y-0 2xl:left-[64.57%] 2xl:right-0 2xl:grid-rows-5 2xl:gap-[2.22%]">
            {content.steps.map((step) => (
              <li key={step.title} className="flex min-w-0 flex-col justify-center rounded-[clamp(10px,1.17vw,18px)] bg-[#edf6ff] p-3 2xl:px-[1.15vw] 2xl:py-2">
                <h3 className="satoshi-bd text-sm leading-[1.2] text-[#0060d9] sm:text-base 2xl:text-[clamp(1rem,1.17vw,1.375rem)]">{step.title}</h3>
                <p className="satoshi-md mt-1 text-[13px] leading-[1.3] 2xl:mt-[0.4vw] 2xl:text-[clamp(0.875rem,0.72vw,0.875rem)]">{step.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentQuality;

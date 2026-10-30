import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

const buttonClass =
  "montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#85baff] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]";
const headingClass =
  "montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-white";
const highlightClass =
  "bg-[linear-gradient(to_right,transparent,rgba(156,187,255,0.65))] pr-1";

// Desktop orbit layout in % of the 1520 x 779 design box: reason circles, their connector lines and the rings.
const reasonLayout = [
  {
    left: "10.6%",
    top: "24%",
    line: { left: "20.6%", width: "13.6%", top: "23.7%" },
    dot: "left",
  },
  {
    left: "86.3%",
    top: "30%",
    line: { left: "58.7%", width: "17.6%", top: "26.5%" },
    dot: "right",
  },
  {
    left: "15.8%",
    top: "75%",
    line: { left: "25.8%", width: "8.4%", top: "75.7%" },
    dot: "left",
  },
  {
    left: "89.4%",
    top: "74%",
    line: { left: "70.5%", width: "8.9%", top: "74.5%" },
    dot: "right",
  },
];
const rings = ["36%", "45%", "53%"];

// Logo badges travelling around the rings; duration (s) and starting angle differ so they never line up.
const orbiters = [
  { ring: "45%", duration: 38, delay: 0, badge: "bg-white", mark: "" },
  {
    ring: "53%",
    duration: 52,
    delay: -18,
    badge: "bg-[#0b0b0c]",
    mark: "brightness-0 invert",
  },
  {
    ring: "36%",
    duration: 30,
    delay: -11,
    badge: "bg-[linear-gradient(135deg,#2f80ff,#1452d8)]",
    mark: "brightness-0 invert",
  },
];

function DevelopmentEngagement({ content }) {
  const id = useId();
  const why = content.whyOutsource;

  return (
    <section
      id="development-engagement"
      aria-labelledby={`${id}-heading`}
      className="relative pb-12 pt-14 text-white md:pb-[5vw] md:pt-[6.5vw]"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2
          id={`${id}-heading`}
          className={`${headingClass} md:text-[clamp(1.875rem,3.23vw,3.75rem)]`}
        >
          {content.title}
          <br />
          <span className={highlightClass}>{content.highlight}</span>
        </h2>
        <p className="satoshi-md mx-auto mt-4 max-w-[56ch] text-center text-[15px] leading-[1.35] md:mt-[1.4%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.text}
        </p>
        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[3%] md:grid-cols-5 md:gap-[0.8vw]">
          {content.models.map((model) => (
            <li
              key={model.title}
              className="min-w-0 rounded-[clamp(8px,0.8vw,12px)] border border-[#bbdaff]/60 bg-white/8 px-5 py-4 md:min-h-[clamp(96px,12.9vw,186px)] md:px-[8%] md:py-[9%]"
            >
              <h3 className="satoshi-bd text-base leading-[1.2] md:text-[clamp(1rem,1.04vw,1.25rem)]">
                {model.title}
              </h3>
              <p className="satoshi-md mt-2 text-sm leading-[1.35] md:mt-[9%] md:text-[clamp(0.875rem,0.83vw,1rem)]">
                <span className="satoshi-bd text-[#86b8ff]">
                  {content.bestForLabel}
                </span>{" "}
                {model.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center md:mt-[2.5%]">
          <Link to={content.buttonLink} className={buttonClass}>
            {content.buttonLabel}
          </Link>
        </div>

        {/* Why outsource: reason circles around a ringed centre, with logo badges orbiting the rings */}
        <div className="relative mt-14 xl:mt-[6vw] xl:aspect-[1520/779]">
          <div aria-hidden="true" className="absolute inset-0 hidden xl:block">
            {rings.map((size, index) => (
              <span
                key={size}
                className={`absolute left-1/2 top-[58.5%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/12 ${index === 0 ? "bg-[radial-gradient(circle,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]" : ""}`}
                style={{ width: size }}
              />
            ))}
            {orbiters.map((orbiter) => (
              <span
                key={orbiter.ring}
                className="absolute left-1/2 top-[58.5%] aspect-square -translate-x-1/2 -translate-y-1/2 motion-safe:animate-[spin_var(--orbit)_linear_infinite]"
                style={{
                  width: orbiter.ring,
                  "--orbit": `${orbiter.duration}s`,
                  animationDelay: `${orbiter.delay}s`,
                }}
              >
                {/* Counter-rotate the badge so the logo stays upright while it travels */}
                <span
                  className={`absolute left-1/2 top-0 flex size-[clamp(32px,4.3vw,82px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] shadow-[0_6px_18px_rgba(0,0,0,0.25)] motion-safe:animate-[spin_var(--orbit)_linear_infinite_reverse] ${orbiter.badge}`}
                  style={{ animationDelay: `${orbiter.delay}s` }}
                >
                  <img
                    src={brandMark}
                    alt=""
                    width="76"
                    height="76"
                    className={`h-auto w-[56%] ${orbiter.mark}`}
                  />
                </span>
              </span>
            ))}
            {reasonLayout.map((layout) => (
              <span
                key={layout.top}
                className="absolute h-px bg-white/45"
                style={layout.line}
              >
                <span
                  className={`absolute top-1/2 size-[clamp(5px,0.45vw,7px)] -translate-y-1/2 rounded-[50%] bg-white ${layout.dot === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                />
              </span>
            ))}
          </div>

          <div className="relative text-center xl:absolute xl:left-1/2 xl:top-[58.5%] xl:z-10 xl:w-[29%] xl:-translate-x-1/2 xl:-translate-y-1/2">
            <h2
              className={`${headingClass} xl:text-[clamp(1.875rem,2.4vw,2.875rem)]`}
            >
              {why.title}
              <br />
              <span className={highlightClass}>{why.highlight}</span>
            </h2>
            <p className="satoshi-md mx-auto mt-3 max-w-[48ch] text-sm leading-[1.35] xl:mt-[3%] xl:text-[clamp(0.875rem,0.73vw,0.875rem)]">
              {why.text}
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:mt-0 xl:block">
            {why.reasons.map((reason, index) => (
              <li
                key={reason.title}
                className="flex min-w-0 flex-col items-center justify-center rounded-[clamp(12px,1.4vw,20px)] bg-white/10 px-5 py-6 text-center xl:absolute xl:aspect-square xl:w-[21%] xl:-translate-x-1/2 xl:-translate-y-1/2 xl:rounded-[50%] xl:bg-white/8 xl:px-[2.4%] xl:py-0"
                style={{
                  left: reasonLayout[index]?.left,
                  top: reasonLayout[index]?.top,
                }}
              >
                <h3 className="satoshi-bd text-base leading-[1.2] xl:text-[clamp(1rem,1.15vw,1.375rem)]">
                  {reason.title}
                </h3>
                <p className="satoshi-md mt-1.5 text-sm leading-[1.3] xl:mt-[5%] xl:text-[clamp(0.875rem,0.83vw,1rem)]">
                  {reason.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center md:mt-[7vw]">
          <Link to={why.buttonLink} className={buttonClass}>
            {why.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentEngagement;

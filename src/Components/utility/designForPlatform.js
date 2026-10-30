import { useId } from "react";
import { Link } from "react-router-dom";

function DesignForPlatform({ content }) {
  const id = useId();

  return (
    <section
      id="design-for-your-platform"
      aria-labelledby={`${id}-heading`}
      className="relative z-10 -mt-5 pb-10 md:-mt-[3.5vw] md:pb-[6.5vw]"
    >
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] gap-8 rounded-[clamp(16px,1.7vw,24px)] bg-white p-6 shadow-[0_4px_20px_rgba(27,80,232,0.09)] sm:grid-cols-[1.03fr_1fr] sm:gap-[4%] md:w-[79.2%] md:px-[4.6%] md:py-[4.1%]">
        <div className="relative flex flex-col items-start sm:pr-[8%] sm:pt-[9%]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-[78%] w-[72%] rounded-tr-[clamp(20px,3vw,44px)] border-r-[clamp(4px,0.8vw,10px)] border-t-[clamp(4px,0.8vw,10px)] border-[#9fc5ff] mask-[linear-gradient(to_bottom,#000,transparent)] sm:block"
          />
          <h2 id={`${id}-heading`} className="montserrat-rg relative text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.6rem)]">
            {content.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1 sm:whitespace-nowrap">{content.highlight}</span>
          </h2>
          <p className="satoshi-md relative mt-4 max-w-[34ch] text-[15px] leading-[1.3] text-black md:mt-[5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.text}
          </p>
          <Link
            to={content.buttonLink}
            className="montserrat-bd relative mt-7 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] sm:mt-auto md:px-[5%] md:py-[4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]"
          >
            {content.buttonLabel}
          </Link>
        </div>
        <ul className="flex flex-col gap-2 sm:py-[6%] md:gap-[0.65vw] md:pb-0">
          {content.platforms.map((platform) => (
            <li key={platform.title} className="rounded-[clamp(8px,0.8vw,12px)] border border-[#b6d9ff] bg-[linear-gradient(110deg,#f4f9ff,#a7c3fa)] px-4 py-3 md:px-[7%] md:py-[3.5%]">
              <h3 className="satoshi-bd text-base leading-[1.2] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{platform.title}</h3>
              <p className="satoshi-md mt-1 text-[15px] leading-[1.25] text-black md:mt-[1%] md:text-[clamp(0.875rem,0.9vw,1.0625rem)]">{platform.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DesignForPlatform;

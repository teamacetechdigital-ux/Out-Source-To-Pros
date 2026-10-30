import { useId } from "react";
import { Link } from "react-router-dom";

function AppIdeaToLaunch({ content }) {
  const id = useId();

  return (
    <section id="app-idea-to-launch" aria-labelledby={`${id}-heading`} className="relative pb-10 pt-12 md:pb-[3vw] md:pt-[6.5vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        {/* White intro card; the blue support card overlaps its bottom edge */}
        <div className="rounded-[clamp(16px,1.7vw,24px)] bg-white px-6 pb-20 pt-10 text-center text-black shadow-[0_4px_22px_rgba(27,80,232,0.08)] md:px-[12%] md:pb-[11%] md:pt-[3%]">
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[66ch] space-y-2 text-[15px] leading-[1.35] md:mt-[2.5%] md:space-y-[1%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[2.5%] md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {content.buttonLabel}
          </Link>
        </div>

        <div aria-labelledby={`${id}-support-heading`} className="relative -mt-12 rounded-[clamp(16px,1.7vw,24px)] bg-[linear-gradient(135deg,#0846a0,#0075ff)] px-5 py-8 text-white sm:mx-4 sm:px-8 md:mx-[2.1%] md:-mt-[7.2%] md:px-[5.5%] md:py-[4.5%]">
          <h3 id={`${id}-support-heading`} className="montserrat-rg text-center text-[22px] font-semibold leading-[1.2] md:text-[clamp(1.625rem,1.85vw,2.25rem)]">
            {content.supportTitle}
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3 md:mt-[4%] md:gap-[1.2vw]">
            {content.supportItems.map((item) => (
              <li key={item.title} className="w-full rounded-[clamp(10px,1vw,14px)] border border-white/20 bg-white/8 px-5 py-5 text-center sm:w-[calc(50%-0.375rem)] md:w-[calc((100%-2.4vw)/3)] md:px-[2.5%] md:py-[2.6%]">
                <h4 className="montserrat-rg text-base font-medium leading-[1.25] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{item.title}</h4>
                <p className="satoshi-md mt-2 text-[15px] leading-[1.35] text-white/90 md:mt-[4%] md:text-[clamp(0.875rem,0.9vw,1.0625rem)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AppIdeaToLaunch;

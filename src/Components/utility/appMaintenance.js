import { useId } from "react";
import { Link } from "react-router-dom";
import { withBreaks } from "../../utils/text";

function AppMaintenance({ content }) {
  const id = useId();

  return (
    <section id="app-maintenance" aria-labelledby={`${id}-heading`} className="relative isolate overflow-hidden pb-14 pt-16 text-white md:pb-[7vw] md:pt-[10vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1150px] text-center md:w-[60%]">
        <div className="relative">
          {/* Large soft circle behind the heading */}
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[min(110%,46rem)] -translate-x-1/2 -translate-y-[45%] rounded-[50%] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] md:w-[73%]" />
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {withBreaks(content.title, "always")}
          </h2>
          <div className="satoshi-md mx-auto mt-5 max-w-[62ch] space-y-2 text-[15px] leading-[1.35] md:mt-[3%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <div className="mt-8 rounded-[clamp(14px,1.3vw,20px)] bg-[linear-gradient(180deg,#a1d1ff,#fff)] px-6 py-7 text-left text-black md:mx-auto md:mt-[3.5%] md:w-[83%] md:px-[8.5%] md:py-[4.5%]">
          <h3 className="montserrat-rg text-center text-xl font-bold leading-[1.3] md:text-[clamp(1.375rem,1.6vw,1.9375rem)]">{content.listTitle}</h3>
          <ul className="satoshi-md mt-4 gap-x-6 text-[15px] leading-[1.35] sm:columns-2 md:mt-[4%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
            {content.items.map((item) => (
              <li key={item} className="flex break-inside-avoid items-start gap-2.5 pb-1.5">
                <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] bg-[#1B50E8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="satoshi-md mx-auto mt-6 max-w-[62ch] text-[15px] leading-[1.35] md:mt-[3%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.note}</p>
        <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-[3%] md:px-[2.4vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
          {content.buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default AppMaintenance;

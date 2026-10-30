import { useId } from "react";
import { Link } from "react-router-dom";

function SystemIntegrations({ content }) {
  const id = useId();

  return (
    <section id="system-integrations" aria-labelledby={`${id}-heading`} className="relative pb-12 md:pb-[8vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] grid-cols-1 items-start gap-8 rounded-[clamp(16px,1.7vw,24px)] bg-white px-6 py-8 text-black shadow-[0_4px_20px_rgba(27,80,232,0.09)] sm:px-8 md:w-[79.2%] md:grid-cols-[1.03fr_1fr] md:gap-[3.1vw] md:px-[4.6vw] md:py-[6.2vw]">
        <div className="relative min-w-0 md:pr-[2vw]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-[2vw] right-0 hidden h-[24vw] w-[85%] rounded-tr-[clamp(20px,3vw,44px)] border-r-[clamp(4px,0.8vw,10px)] border-t-[clamp(4px,0.8vw,10px)] border-[#b5d9ff] mask-[linear-gradient(to_bottom,#000,transparent)] md:block" />
          <h2 id={`${id}-heading`} className="montserrat-rg relative text-[28px] font-bold leading-[1.15] md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
            {content.title}<br />{content.subtitle}<br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
          </h2>
          <div className="satoshi-md relative mt-5 space-y-2 text-sm leading-[1.35] md:mt-[1.7vw] md:space-y-[0.5vw] md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link to={content.buttonLink} className="montserrat-bd relative mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[2.2vw] md:px-[1.6vw] md:py-[1.1vw] md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{content.buttonLabel}</Link>
        </div>
        <ul className="grid gap-3 md:gap-[1vw]">
          {content.integrations.map((item) => (
            <li key={item.title} className="min-w-0 rounded-[clamp(8px,0.8vw,12px)] bg-[linear-gradient(110deg,#0075ff,#0047c8)] px-5 py-4 text-white md:px-[2.3vw] md:py-[1.5vw]">
              <h3 className="satoshi-bd text-base leading-[1.25] md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{item.title}</h3>
              <p className="satoshi-md mt-1 text-sm leading-[1.3] md:mt-[0.5vw] md:text-[clamp(0.5rem,0.94vw,0.875rem)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SystemIntegrations;

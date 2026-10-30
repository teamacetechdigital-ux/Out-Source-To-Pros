import { useId } from "react";
import { Link } from "react-router-dom";

function DesignWorkModels({ content }) {
  const id = useId();

  return (
    <section id="design-work-models" aria-labelledby={`${id}-heading`} className="bg-white pb-12 pt-8 md:pb-[7.6vw] md:pt-[3.5vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
          {content.title}{" "}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <p className="satoshi-md mt-4 text-center text-sm leading-[1.3] text-black md:mt-[1.8%] md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">{content.text}</p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[2.2%] md:gap-[1.4vw]">
          {content.models.map((model) => (
            <li key={model.title} className="rounded-[clamp(8px,0.8vw,12px)] border border-transparent [background:linear-gradient(180deg,#f5faff,#fff)_padding-box,linear-gradient(180deg,#aad3ff,#fff)_border-box] px-5 py-4 md:min-h-[clamp(60px,7.4vw,106px)] md:px-[6.5%] md:py-[3.7%]">
              <h3 className="satoshi-bd text-base leading-[1.2] text-black md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{model.title}</h3>
              <p className="satoshi-md mt-1 text-sm leading-[1.3] text-black md:text-[clamp(0.4375rem,0.94vw,0.875rem)]">{model.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center md:mt-[3.5%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[2%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default DesignWorkModels;

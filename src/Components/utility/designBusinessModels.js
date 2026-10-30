import { useId } from "react";
import { Link } from "react-router-dom";

function DesignBusinessModels({ content }) {
  const id = useId();

  return (
    <section
      id="design-business-models"
      aria-labelledby={`${id}-heading`}
      className="bg-[linear-gradient(180deg,#d5e9ff_0%,#e4f1ff_50%,#fff_100%)] pb-10 pt-10 md:pb-[7vw] md:pt-[4vw]"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,#97bdf9)] pr-1">{content.highlight}</span>
        </h2>
        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[4%] md:grid-cols-10 md:gap-[1vw]">
          {content.models.map((model, index) => (
            <li
              key={model.title}
              className={`rounded-[clamp(14px,1.7vw,24px)] border border-transparent [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(180deg,#a7ceff,#fff)_border-box] p-5 shadow-[0_4px_12px_rgba(39,100,187,0.06)] md:min-h-[clamp(74px,9.3vw,134px)] md:p-[clamp(14px,1.65vw,24px)] ${index === 2 || index === 3 ? "md:col-span-4" : "md:col-span-3"}`}
            >
              <h3 className="satoshi-bd text-base leading-[1.2] text-black md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{model.title}</h3>
              <p className="satoshi-md mt-1.5 text-sm leading-[1.3] text-black md:mt-[3%] md:text-[clamp(0.4375rem,0.94vw,0.875rem)]">{model.text}</p>
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

export default DesignBusinessModels;

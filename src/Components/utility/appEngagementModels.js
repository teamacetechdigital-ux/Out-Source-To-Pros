import { useId } from "react";
import { Link } from "react-router-dom";

function AppEngagementModels({ content }) {
  const id = useId();

  return (
    <section id="app-engagement-models" aria-labelledby={`${id}-heading`} className="bg-white pb-12 md:pb-[6vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[2.3%] md:grid-cols-5 md:gap-[0.6vw]">
          {content.models.map((model, index) => (
            <li key={model.title} className={`min-w-0 rounded-[clamp(10px,1vw,16px)] bg-[linear-gradient(180deg,#c9e4ff,#fff)] px-5 py-5 text-center md:min-h-[clamp(110px,11.5vw,220px)] md:px-[5%] md:py-[8%] ${index === content.models.length - 1 ? "sm:max-md:col-span-2" : ""}`}>
              <h3 className="montserrat-rg text-base font-bold leading-[1.2] text-black md:text-[clamp(1rem,1.15vw,1.375rem)]">{model.title}</h3>
              <p className="satoshi-md mt-2 text-[15px] leading-[1.35] text-black md:mt-[6%] md:text-[clamp(0.875rem,0.9vw,1.0625rem)]">{model.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center md:mt-[2.5%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {content.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AppEngagementModels;

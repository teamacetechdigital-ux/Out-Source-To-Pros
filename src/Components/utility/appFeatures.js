import { useId } from "react";

// Desktop column spans on a 17-column grid: row one ends with a wide card, row two starts with one.
const spans = ["md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5", "md:col-span-5"];

function AppFeatures({ content }) {
  const id = useId();

  return (
    <section id="app-features" aria-labelledby={`${id}-heading`} className="bg-white pb-10 pt-4 md:pb-[3vw] md:pt-[2vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mt-5 space-y-2 text-center text-[15px] leading-[1.35] md:mt-[2%] md:space-y-[0.6%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          <p className="text-black">{content.text}</p>
          <p className="text-[#1B50E8]">{content.subtext}</p>
        </div>
        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[3.3%] md:grid-cols-17 md:gap-[0.9vw]">
          {content.cards.map((card, index) => (
            <li key={card.title} className={`min-w-0 rounded-[clamp(10px,1.3vw,18px)] border border-transparent [background:linear-gradient(180deg,#fff,#f3f8ff)_padding-box,linear-gradient(180deg,#b7dbff,#fff)_border-box] px-5 py-4 md:min-h-[clamp(90px,9.6vw,180px)] md:px-[1.75vw] md:py-[1.5vw] ${spans[index % spans.length]}`}>
              <h3 className="montserrat-rg text-base font-bold leading-[1.25] text-black md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{card.title}</h3>
              <p className="satoshi-md mt-1.5 text-[15px] leading-[1.35] text-black md:mt-[0.6vw] md:text-[clamp(0.875rem,0.9vw,1.0625rem)]">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AppFeatures;

import { useId } from "react";
import { Link } from "react-router-dom";
import brandMark from "../../assets/imgs/webdesign/brand-mark.svg";

const panelClass = "absolute inset-x-[10%] bottom-0 top-[18%] rounded-t-[4cqw] border border-b-0 border-white/25 bg-white/10 backdrop-blur-sm";

const waveHeights = [30, 55, 40, 75, 50, 90, 65, 45, 80, 35, 70, 95, 55, 40, 75, 50, 30];

// Small illustrations at the bottom of each guideline card, drawn with CSS.
function GuidelineArt({ type, text = [] }) {
  if (type === "typography") {
    return (
      <div className="absolute inset-x-[8%] bottom-[8%] top-[12%] border border-white/40">
        {[["-left-[3px]", "-top-[3px]"], ["-right-[3px]", "-top-[3px]"], ["-left-[3px]", "-bottom-[3px]"], ["-right-[3px]", "-bottom-[3px]"]].map(([x, y]) => (
          <span key={x + y} className={`absolute ${x} ${y} size-[5px] bg-white`} />
        ))}
        <span className="montserrat-rg absolute inset-x-0 -bottom-[0.18em] text-center text-[34cqw] font-extrabold leading-none text-transparent [-webkit-background-clip:text] [background-clip:text] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.1))]">{text[0]}</span>
        <span className="montserrat-rg absolute right-[14%] top-0 flex size-[11cqw] -translate-y-1/2 items-center justify-center rounded-[9999px] bg-white text-[6cqw] font-bold text-[#1B50E8] shadow-[0_4px_12px_rgba(0,0,0,0.25)]">{text[1]}</span>
      </div>
    );
  }

  if (type === "colors") {
    return (
      <div className="absolute bottom-0 left-[8%] right-[4%] top-[10%]">
        <div className="absolute inset-x-0 bottom-0 top-[18%] flex overflow-hidden rounded-t-[30cqw]">
          {["bg-[#3f6fe6]", "bg-[#7ea1f5]", "bg-[#b8ccfa]", "bg-[#e7eefd]", "bg-white"].map((color) => <span key={color} className={`h-full flex-1 ${color}`} />)}
        </div>
        <span className="satoshi-bd absolute left-0 top-[8%] flex items-center gap-[2cqw] rounded-[9999px] bg-[#1B50E8] py-[1.2cqw] pl-[1.2cqw] pr-[3cqw] text-[3.4cqw] text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
          <span className="size-[4.5cqw] rounded-[9999px] bg-white" />{text[0]}
        </span>
      </div>
    );
  }

  if (type === "logo") {
    return (
      <div className="absolute bottom-[6%] left-[10%] right-[12%] top-[8%] text-white/60">
        <span className="satoshi-md absolute left-0 top-0 flex size-[7cqw] items-center justify-center border border-white/40 text-[3.5cqw]">{text[0]}</span>
        <span className="absolute left-[18%] right-0 top-[3.5cqw] border-t border-white/40" />
        <span className="satoshi-md absolute left-[55%] top-0 text-[3cqw]">{text[1]}</span>
        <span className="absolute bottom-0 left-[3.5cqw] top-[18%] border-l border-white/40" />
        <span className="satoshi-md absolute left-0 top-[55%] -translate-x-1/3 -rotate-90 text-[3cqw]">{text[1]}</span>
        <img src={brandMark} alt="" width="76" height="76" className="absolute bottom-0 left-[22%] w-[62%] opacity-50 brightness-0 invert" />
      </div>
    );
  }

  if (type === "imagery") {
    return (
      <div className={panelClass}>
        <div className="absolute inset-[7%] bottom-0 flex gap-[3%]">
          {[1, 2, 3].map((tile) => <span key={tile} className="flex-1 rounded-t-[2.5cqw] bg-[linear-gradient(180deg,#fff,rgba(255,255,255,0.45))]" />)}
        </div>
      </div>
    );
  }

  if (type === "voice") {
    return (
      <div className={panelClass}>
        <div className="absolute inset-0 flex items-center justify-center gap-[2.2%] px-[8%]">
          {waveHeights.map((height, index) => <span key={index} className="w-[3%] rounded-[9999px] bg-white/70" style={{ height: `${height * 0.7}%` }} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={panelClass}>
      <div className="absolute inset-x-[7%] bottom-0 top-[10%] rounded-t-[2cqw] bg-white/20 p-[4%]">
        <div className="flex gap-[1.5cqw]">{[1, 2, 3].map((dot) => <span key={dot} className="size-[1.6cqw] rounded-[9999px] bg-white/70" />)}</div>
        <div className="mt-[4%] grid grid-cols-[1fr_auto] gap-[4%]">
          <span className="space-y-[2cqw] pt-[2%]">
            <span className="block h-[2cqw] w-full rounded-[9999px] bg-white/50" />
            <span className="block h-[2cqw] w-[70%] rounded-[9999px] bg-white/50" />
          </span>
          <span className="relative block h-[16cqw] w-[22cqw] overflow-hidden rounded-[1.5cqw] bg-white/70">
            <span className="absolute right-[18%] top-[18%] size-[3.5cqw] rounded-[9999px] bg-[#9fbdf5]" />
            <span className="absolute -bottom-[30%] left-[10%] size-[14cqw] rotate-45 bg-[#9fbdf5]" />
          </span>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-[10%] bg-[linear-gradient(90deg,#8bb2ff,#ffffff)]" />
      </div>
    </div>
  );
}

function BrandGuidelines({ content }) {
  const id = useId();

  return (
    <section id="brand-guidelines" aria-labelledby={`${id}-heading`} className="relative isolate pb-14 pt-24 md:pb-[4.5vw] md:pt-[11.5vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-[1.6%]">
          <li className="min-w-0 text-white sm:col-span-2 lg:pr-[8%] lg:pt-[1%]">
            <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
              {content.title}<br /><span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.45))] pr-1">{content.highlight}</span>
            </h2>
            <p className="satoshi-md mt-5 text-[15px] leading-[1.35] md:mt-[5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.text}</p>
          </li>
          {content.cards.map((card) => (
            <li key={card.title} className="@container relative flex min-w-0 flex-col overflow-hidden rounded-[clamp(12px,1vw,18px)] border border-white/30 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] text-white">
              <div className="relative z-10 px-[9%] pt-[9%]">
                <h3 className="satoshi-bd text-[max(15px,6cqw)] leading-[1.2]">{card.title}</h3>
                <p className="satoshi-md mt-[2cqw] text-[max(14px,3.9cqw)] leading-[1.35] text-white/90">{card.text}</p>
              </div>
              <div aria-hidden="true" className="relative mt-auto aspect-[370/200] w-full">
                <GuidelineArt type={card.art} text={card.artText} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center md:mt-[3%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default BrandGuidelines;

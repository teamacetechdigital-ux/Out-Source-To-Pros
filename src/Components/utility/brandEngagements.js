import { useId, useState } from "react";
import { withBreaks } from "../../utils/text";
import brandIdentityBoard1 from "../../assets/imgs/branding/brand-identity-board1.png";
import brandIdentityBoard2 from "../../assets/imgs/branding/brand-identity-board2.png";
import brandIdentityBoard3 from "../../assets/imgs/branding/brand-identity-board3.png";
import brandIdentityBoard4 from "../../assets/imgs/branding/brand-identity-board4.png";
import brandIdentityBoard5 from "../../assets/imgs/branding/brand-identity-board5.png";
import brandIdentityBoard6 from "../../assets/imgs/branding/brand-identity-board6.png";

const images = {
  brandIdentityBoard1,
  brandIdentityBoard2,
  brandIdentityBoard3,
  brandIdentityBoard4,
  brandIdentityBoard5,
  brandIdentityBoard6,
};

function BrandEngagements({ content }) {
  const { tabs } = content;
  const id = useId();
  const [active, setActive] = useState(0);

  const fadeClass = (index) =>
    `col-start-1 row-start-1 grid grid-cols-1 items-center gap-8 transition-opacity duration-500 md:grid-cols-[560fr_728fr] md:gap-[15%] ${
      active === index ? "opacity-100" : "pointer-events-none opacity-0"
    }`;

  return (
    <section
      id="brand-engagements"
      aria-labelledby={`${id}-heading`}
      className="bg-white pb-12 pt-14 md:pb-[3.5vw] md:pt-[5.5vw]"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2
          id={`${id}-heading`}
          className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.875rem,3.23vw,3.75rem)]"
        >
          {content.title}
          <br />
          <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">
            {content.highlight}
          </span>
        </h2>

        <div
          role="tablist"
          aria-label={content.title + " " + content.highlight}
          className="mt-7 flex overflow-x-auto rounded-[clamp(10px,1vw,16px)] border border-[#dbe9ff] bg-[linear-gradient(90deg,#eaf4ff,#fff)] [scrollbar-width:none] md:mt-[2.6%] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              id={`${id}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls={`${id}-panel`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft")
                  return;
                event.preventDefault();
                const next =
                  (index +
                    (event.key === "ArrowRight" ? 1 : -1) +
                    tabs.length) %
                  tabs.length;
                setActive(next);
                document.getElementById(`${id}-tab-${next}`)?.focus();
              }}
              className={`montserrat-rg relative min-w-[132px] flex-1 cursor-pointer px-3 py-4 text-center text-[15px] font-bold leading-[1.25] text-black transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#1B50E8] after:transition-opacity after:duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1B50E8] md:min-h-[clamp(56px,6.6vw,126px)] md:min-w-0 md:px-[1%] md:text-[clamp(1rem,1.04vw,1.25rem)] md:after:h-[clamp(2px,0.26vw,5px)] ${
                active === index
                  ? "bg-[linear-gradient(180deg,#d4e8ff,#eef6ff)] after:opacity-100"
                  : "after:opacity-0 hover:bg-[#eef6ff]"
              }`}
            >
              {withBreaks(tab.title, "always")}
            </button>
          ))}
        </div>

        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${active}`}
          className="mt-8 grid md:mt-[3.7%]"
        >
          {tabs.map((tab, index) => {
            const image = images[tab.image];

            return (
              <div
                key={tab.title}
                className={fadeClass(index)}
                aria-hidden={active !== index}
              >
                <p className="satoshi-md min-w-0 self-start text-[15px] leading-[1.35] text-black md:text-[clamp(1rem,1.04vw,1.25rem)]">
                  {tab.text}
                </p>
                {image ? (
                  <img
                    src={image}
                    alt={tab.imageAlt}
                    width="736"
                    height="552"
                    loading="lazy"
                    className="block h-auto w-full min-w-0 rounded-[clamp(12px,1.3vw,24px)]"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={tab.imageAlt}
                    className="aspect-[736/552] w-full min-w-0 rounded-[clamp(12px,1.3vw,24px)] bg-[#eeeeee] p-[3%]"
                  >
                    <div className="h-full w-full rounded-[clamp(8px,0.8vw,14px)] bg-[linear-gradient(135deg,#eef4ff_0%,#d6e4ff_100%)]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BrandEngagements;

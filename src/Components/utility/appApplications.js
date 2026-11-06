import { useEffect, useId, useRef, useState } from "react";
import "./appApplications.css";

// Image per application type (keyed by the JSON "image" value); missing ones show a placeholder.
const images = {};

function AppApplications({ content }) {
  const { items } = content;
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const id = useId();
  const tabListRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    observer.observe(tabListRef.current);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const playing = inView && pageVisible;
  const stepWidth = 100 / items.length;
  const firstMarker = stepWidth / 2;

  const handleKeyDown = (event, index) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!keys[event.key]) return;
    event.preventDefault();
    const next = (index + keys[event.key] + items.length) % items.length;
    setActive(next);
    stepRefs.current[next]?.focus();
  };

  return (
    <section id="applications-we-build" aria-labelledby={`${id}-heading`} className="relative pb-12 pt-6 md:pb-[6.5vw] md:pt-[3vw]">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1424px] overflow-hidden rounded-[clamp(16px,1.7vw,24px)] bg-[linear-gradient(160deg,#fff_45%,#d9ebff_100%)] shadow-[0_4px_22px_rgba(27,80,232,0.08)] md:w-[85.4%]">
        <h2 id={`${id}-heading`} className="montserrat-rg px-5 pt-10 text-center text-[28px] font-bold leading-[1.15] text-black md:pt-[5.5%] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}{" "}<span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
        </h2>

        <div className="mx-4 mt-8 md:mx-[3.7%] md:mt-[3.7%]">
          <div ref={tabListRef} role="tablist" aria-label={content.stepsLabel} className="app-applications-tabs" data-playing={playing}>
            <span aria-hidden="true" className="app-applications-track">
              <span
                key={active}
                className="app-applications-progress"
                style={{
                  left: `${firstMarker}%`,
                  "--progress-from": `${active * stepWidth}%`,
                  "--progress-to": `${Math.min((active + 1) * stepWidth, 100 - firstMarker)}%`,
                }}
                onAnimationEnd={() => setActive((active + 1) % items.length)}
              />
            </span>
            {items.map((item, index) => (
              <button
                key={item.title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                id={`${id}-step-${index}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls={`${id}-panel`}
                aria-label={item.title}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="relative flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B50E8]"
              >
                <span aria-hidden="true" className="flex size-8 items-center justify-center md:size-[clamp(2rem,2.6vw,3rem)]">
                  <span className={`block rounded-[2px] transition-all duration-300 ${active === index ? "size-6 bg-[#1B50E8] md:size-[clamp(1.25rem,2.4vw,2.875rem)]" : "size-4 bg-[#e5e5e5] hover:bg-[#c9d8f5] md:size-[clamp(0.875rem,1.5vw,2.25rem)]"}`} />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-step-${active}`} className="grid">
          {items.map((item, index) => {
            const image = images[item.image];

            return (
              <div key={item.title} aria-hidden={active !== index} className={`col-start-1 row-start-1 grid items-end gap-6 transition-opacity duration-500 md:grid-cols-[1fr_0.9fr] md:gap-[4%] ${active === index ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                <div className="min-w-0 self-center px-6 pt-8 md:py-[6%] md:pl-[9.5%] md:pr-0">
                  <h3 className="montserrat-rg text-[22px] font-bold leading-[1.2] text-black md:text-[clamp(1.625rem,1.9vw,2.25rem)]">{item.title}</h3>
                  <div className="satoshi-md mt-4 space-y-3 text-[15px] leading-[1.35] text-black md:mt-[4%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
                    {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
                <div className="min-w-0 px-6 pb-6 md:px-0 md:pb-0 md:pr-[8%]">
                  {image ? (
                    <img src={image} alt={item.imageAlt} className="mx-auto block h-auto w-full max-w-[420px] md:max-w-none" />
                  ) : (
                    <div role="img" aria-label={item.imageAlt} className="mx-auto aspect-[581/722] w-full max-w-[320px] rounded-t-[clamp(16px,1.7vw,24px)] border border-b-0 border-[#A1D1FF] bg-[linear-gradient(135deg,#EEF4FF_0%,#D6E4FF_100%)] md:mt-[5%] md:max-w-[85%]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AppApplications;

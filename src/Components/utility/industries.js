import { useEffect, useRef } from "react";

const industries = [
  { id: "healthcare", title: <>Healthcare</>, imageClass: "industry-slide-1" },
  {
    id: "legal-services",
    title: (
      <>
        Legal
        {" "}<br className="hidden sm:block" />
        Services
      </>
    ),
    imageClass: "industry-slide-2",
  },
  {
    id: "financial-services",
    title: (
      <>
        Financial
        {" "}<br className="hidden sm:block" />
        Services
      </>
    ),
    imageClass: "industry-slide-3",
  },
  {
    id: "real-estate",
    title: (
      <>
        Real
        {" "}<br className="hidden sm:block" />
        Estate
      </>
    ),
    imageClass: "industry-slide-4",
  },
  {
    id: "construction-home",
    title: (
      <>
        Construction
        {" "}<br className="hidden sm:block" />
        &amp; Home
      </>
    ),
    imageClass: "industry-slide-5",
  },
];

function Industries() {
  const trackRef = useRef(null);
  const firstGroupRef = useRef(null);
  const dragState = useRef({ active: false, lastX: 0 });
  const offset = useRef(0);
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;
    if (!track || !firstGroup) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frameId;
    let previousTime;

    const animate = (timestamp) => {
      if (previousTime === undefined) previousTime = timestamp;
      const elapsed = timestamp - previousTime;
      previousTime = timestamp;

      const loopWidth = firstGroup.getBoundingClientRect().width;
      if (!paused.current && !dragState.current.active && loopWidth > 0) {
        offset.current = (offset.current + (120 * elapsed) / 1000) % loopWidth;
      }

      track.style.transform = `translate3d(-${offset.current}px, 0, 0)`;
      frameId = window.requestAnimationFrame(animate);
    };

    if (!reduceMotion) {
      frameId = window.requestAnimationFrame(animate);
    }

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragState.current = { active: true, lastX: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.active) return;

    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;
    if (!track || !firstGroup) return;

    const delta = event.clientX - dragState.current.lastX;
    dragState.current.lastX = event.clientX;

    const loopWidth = firstGroup.getBoundingClientRect().width;
    if (loopWidth <= 0) return;

    offset.current =
      (((offset.current - delta) % loopWidth) + loopWidth) % loopWidth;
    track.style.transform = `translate3d(-${offset.current}px, 0, 0)`;
  };

  const handlePointerUp = () => {
    dragState.current.active = false;
  };

  const renderIndustryCards = (duplicate = false) => (
    <div
      className="industry-slider-group"
      ref={duplicate ? undefined : firstGroupRef}
      aria-hidden={duplicate}
    >
      {industries.map((industry) => (
        <article
          className={`industry-slider-card ${industry.imageClass}`}
          key={`${industry.id}-${duplicate ? "duplicate" : "original"}`}
        >
          <h3 className="montserrat-rg font-bold text-white">
            {industry.title}
          </h3>
        </article>
      ))}
    </div>
  );

  return (
    <section className="industry-section">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="start-txt text-center">
          <h2 className="montserrat-rg font-extrabold text-[30px] sm:text-[40px] lg:text-[48px] xl:text-[60px] capitalize text-white">
            Industries <span>We Serve</span>
          </h2>
          <p className="satoshi-reg py-4 text-base sm:text-lg lg:text-xl font-medium text-white">
            Every industry has different buying cycles, compliance
            considerations,
            {" "}<br className="hidden sm:block" /> customer questions, competitive pressures, and conversion
            paths.
          </p>
          <p className="satoshi-reg text-base sm:text-lg lg:text-xl font-medium text-white">
            We study those differences before recommending a strategy.
          </p>
        </div>
      </div>

      <div
        className="industry-slider-viewport mt-8 px-4"
        role="region"
        aria-label="Industries we serve. Drag to browse."
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
        onFocus={() => {
          paused.current = true;
        }}
        onBlur={() => {
          paused.current = false;
        }}
      >
        <div className="industry-slider-track" ref={trackRef}>
          {renderIndustryCards()}
          {renderIndustryCards(true)}
        </div>
        <div className="text-center cust-gap">
          <button className="bg-[#1B50E8] text-base sm:text-lg lg:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
            View Industry Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Industries;

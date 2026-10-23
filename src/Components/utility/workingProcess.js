import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery",
    text: (
      <>
        We understand your business, target audience, goals,
        {" "}<br className="hidden sm:block" /> competitors, and current digital presence.
      </>
    ),
  },
  {
    title: "Research",
    text: (
      <>
        We analyze market trends, audience behavior, keywords,
        {" "}<br className="hidden sm:block" /> competitors, and growth opportunities.
      </>
    ),
  },
  {
    title: "Strategy",
    text: (
      <>
        We create a customized roadmap aligned with your
        {" "}<br className="hidden sm:block" /> business goals and measurable results.
      </>
    ),
  },
  {
    title: "Design & Development",
    text: (
      <>
        We design engaging experiences and build high-
        {" "}<br className="hidden sm:block" />
        performing, scalable digital solutions.
      </>
    ),
  },
  {
    title: "Testing & Launch",
    text: (
      <>
        We thoroughly test every detail, optimize performance,
        {" "}<br className="hidden sm:block" /> and launch with confidence.
      </>
    ),
  },
  {
    title: "Support & Growth",
    text: (
      <>
        We monitor, maintain, and continuously optimize to help
        {" "}<br className="hidden sm:block" /> your business achieve long-term success.
      </>
    ),
  },
];

// Scroll distance (px) that brings in one new card.
const SCROLL_PER_STEP = 350;
// How far each stacked card sits below the one behind it.
const STACK_OFFSET = 14;

const boxStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const cardStyle = {
  background: "linear-gradient(180deg, #A1D1FF 0%, #FFFFFF 100%)",
};

function WorkingProcess() {
  const [stacked, setStacked] = useState(false);
  const boxRef = useRef(null);
  const cardRefs = useRef([]);

  // Keep every step in normal document flow on small or very short screens.
  useLayoutEffect(() => {
    const query = window.matchMedia(
      "(min-width: 768px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setStacked(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Pin the box on desktop and laptop viewports with room for the card stack.
  useLayoutEffect(() => {
    if (!stacked) return undefined;
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;

      cards.forEach((card, index) => {
        gsap.set(card, {
          y: index * STACK_OFFSET + (index === 0 ? 0 : 160),
          opacity: index === 0 ? 1 : 0,
          transformOrigin: "top center",
        });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 24px",
          end: `+=${(steps.length - 1) * SCROLL_PER_STEP}`,
          pin: true,
          scrub: 1,
        },
      });

      cards.slice(1).forEach((card, i) => {
        const index = i + 1;
        timeline
          .to(card, { y: index * STACK_OFFSET, duration: 1 })
          .to(card, { opacity: 1, duration: 0.3 }, "<")
          // Text of the card being covered fades so it doesn't show through.
          .to(
            cards[index - 1].querySelector(".process-card-content"),
            { opacity: 0, duration: 0.3 },
            "<",
          )
          // Cards behind shrink slightly so the stack has depth.
          .to(
            cards.slice(0, index),
            { scale: (behind) => 1 - (index - behind) * 0.012 },
            "<",
          );
      });
    }, boxRef);

    return () => ctx.revert();
  }, [stacked]);

  return (
    <section className="working-process-section relative z-10 -mt-16 sm:-mt-20 lg:-mt-[120px]">
      <div ref={boxRef}>
        <div className="custom-container w-full px-5 sm:px-8 lg:px-12">
          <div
            className="rounded-[20px] bg-white px-5 py-8 sm:px-10 sm:pb-14 sm:pt-12"
            style={boxStyle}
          >
            <div className="start-txt-2 text-center">
              <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-5xl font-extrabold leading-tight text-black">
                Our Working <span>Process</span>
              </h2>
            </div>

            {/* Cards stack on top of each other as the page scrolls */}
            <div
              className="relative mx-auto mt-8 grid max-w-[1140px] gap-4 sm:mt-10"
              style={stacked ? { height: 330 + (steps.length - 1) * STACK_OFFSET } : undefined}
            >
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`${stacked ? "absolute inset-x-0 top-0 min-h-[330px]" : "relative"} min-w-0 rounded-2xl p-5 sm:p-8 lg:p-10`}
                  style={{ ...cardStyle, zIndex: index }}
                >
                  <div className="process-card-content">
                    <div className="flex items-center gap-5 sm:gap-10">
                      <span className="montserrat-rg text-base sm:text-lg lg:text-xl font-semibold text-[#0A1F44]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-[2px] flex-1 bg-[#1B50E8]/70" />
                    </div>
                    <div className="pt-6 sm:pl-[72px] sm:pt-8">
                      <h3 className="montserrat-rg text-2xl sm:text-[36px] lg:text-[44px] font-semibold leading-tight text-[#0A1F44]">
                        {step.title}
                      </h3>
                      <p className="satoshi-md pt-3 text-lg sm:text-xl lg:text-2xl leading-[1.4] text-[#0A1F44]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base sm:text-lg lg:text-xl font-bold uppercase text-white">
                Outsource With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;

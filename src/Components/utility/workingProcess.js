import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { withBreaks } from "../../utils/text";

gsap.registerPlugin(ScrollTrigger);
// Phones resize the viewport when the address bar hides; don't re-pin on that.
ScrollTrigger.config({ ignoreMobileResize: true });

// Scroll distance (px) that brings in one new card.
const SCROLL_PER_STEP = 350;
// How far each stacked card sits below the one behind it.
const STACK_OFFSET = 14;
// Height of one card (matches min-h-[380px] below).
const CARD_HEIGHT = 380;

const boxStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const cardStyle = {
  background: "linear-gradient(180deg, #A1D1FF 0%, #FFFFFF 100%)",
};

function WorkingProcess({ content }) {
  const { steps } = content;
  const stepCount = steps.length;
  const boxRef = useRef(null);
  const cardStackRef = useRef(null);
  const cardRefs = useRef([]);

  // Cards stack on scroll on every screen size. Pin the whole box (heading,
  // cards, CTA) like the prototype when it fits on screen; on shorter screens
  // pin only the card stack.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      const box = boxRef.current;
      const pinTarget =
        box.offsetHeight <= window.innerHeight - 16 ? box : cardStackRef.current;

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
          trigger: pinTarget,
          // Pin once the box reaches the middle of the screen so it stays centred.
          start: "center center",
          end: `+=${(stepCount - 1) * SCROLL_PER_STEP}`,
          pin: pinTarget,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
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
  }, [stepCount]);

  return (
    <section className="working-process-section relative z-10 -mt-16 sm:-mt-20 lg:-mt-[120px]">
      <div className="custom-container w-full px-5 sm:px-8 lg:px-12">
        <div
          ref={boxRef}
          className="rounded-[20px] bg-white px-5 py-8 sm:px-10 sm:pb-14 sm:pt-12"
          style={boxStyle}
        >
          <div className="start-txt-2 text-center">
            <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold leading-tight text-black">
              {content.title} <span>{content.highlight}</span>
            </h2>
          </div>

          {/* Cards stack on top of each other as the page scrolls */}
          <div
            ref={cardStackRef}
            className="relative mx-auto mt-8 max-w-[1140px] sm:mt-10"
            style={{ height: CARD_HEIGHT + (steps.length - 1) * STACK_OFFSET }}
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute inset-x-0 top-0 min-h-[380px] min-w-0 rounded-2xl p-5 sm:p-8 lg:p-10"
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
                    <h3 className="montserrat-rg text-2xl sm:text-[36px] lg:text-[50px] font-semibold leading-tight text-[#0A1F44]">
                      {step.title}
                    </h3>
                    <p className="satoshi-md pt-3 text-lg sm:text-xl lg:text-[28px] leading-[1.4] text-[#0A1F44]">
                      {withBreaks(step.text, "lg")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base lg:text-lg font-bold uppercase text-white">
              {content.buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;

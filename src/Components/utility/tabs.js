import { useState } from "react";

function Tabs({ content }) {
  const services = content.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="outsource-tabs">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto">
          <h2
            aria-hidden="true"
            className="gridiant-text-cust montserrat-rg text-center font-extrabold capitalize text-black"
          >
            {content.title}
          </h2>

          <div className="tab-prnt-cont relative mt-10 flex flex-col overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(17,48,112,0.16)] xl:flex-row">
            <div className="tabs-col-1 text-white min-w-0 xl:w-[38%]">
              <div
                className="service-tab-list flex max-h-80 flex-col overflow-y-auto xl:max-h-none"
                role="tablist"
                aria-label={content.tabListLabel}
                aria-orientation="vertical"
              >
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    id={`service-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls={`service-panel-${index}`}
                    tabIndex={activeIndex === index ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => {
                      if (
                        event.key === "ArrowDown" ||
                        event.key === "ArrowUp"
                      ) {
                        event.preventDefault();
                        const direction = event.key === "ArrowDown" ? 1 : -1;
                        const nextIndex =
                          (index + direction + services.length) %
                          services.length;
                        setActiveIndex(nextIndex);
                        document
                          .getElementById(`service-tab-${nextIndex}`)
                          ?.focus();
                      }
                    }}
                    className={`montserrat-rg border-b border-white/20 text-left text-sm capitalize transition-colors duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                      activeIndex === index
                        ? "rounded-md border-b-transparent bg-white/20 font-medium"
                        : "font-regular"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <div
              id={`service-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeIndex}`}
              className="relative min-w-0 flex-1 overflow-hidden bg-white tabs-col-2"
            >
              <div className="relative z-10">
                <h3 className="montserrat-rg font-bold text-[#0A1653]">
                  {activeService.title}
                </h3>
                <p className="satoshi-rg mt-3 max-w-3xl text-[15px]">
                  {activeService.description}
                </p>

                <div className="grid-gaping grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="montserrat-rg text-base lg:text-[15px] 2xl:text-[19px] font-bold text-[#0A1653]">
                      {content.includesHeading}
                    </h4>
                    <ul className="satoshi-reg mt-3 list-disc space-y-2 pl-4 text-[15px]">
                      {activeService.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="montserrat-rg text-base lg:text-[15px] 2xl:text-[19px] font-bold text-[#0A1653]">
                      {content.problemsHeading}
                    </h4>
                    <ul className="satoshi-reg mt-3 list-disc space-y-2 pl-4 text-[15px] 2xl:text-[19px] text-gray-800">
                      {activeService.problems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="tab-button-inner bg-[#1B50E8] text-base lg:text-lg 2xl:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                  {content.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;

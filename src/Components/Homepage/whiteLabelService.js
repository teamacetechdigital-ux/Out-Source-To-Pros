import React from "react";
import { withBreaks } from "../../utils/text";

function whiteLabelService({ content }) {
  return (
    <>
      <section className="white-label-service-section">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="prnt-text-box bg-white">
            <div className="grid-box-gap items-start grid lg:grid-cols-2 white-label-flex">
              <div className="white-col-1">
                <h2 className="montserrat-rg font-bold text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[56px] text-black">
                  {withBreaks(content.title)}
                  {" "}<br className="hidden sm:block" />
                  <span>{content.highlight}</span>
                </h2>
                {content.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="satoshi-md text-[15px] 2xl:text-[19px] font-medium text-black"
                  >
                    {withBreaks(paragraph)}
                  </p>
                ))}
                <h3 className="satoshi-bd font-extrabold text-[20px] lg:text-[22px] 2xl:text-[26px] capitalize text-black">
                  {content.listTitle}
                </h3>
                <ul className="white-label-list satoshi-md text-[15px] 2xl:text-[19px] font-medium flex flex-col list-disc">
                  {content.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className="bg-[#1B50E8] text-base lg:text-lg 2xl:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                  {content.buttonLabel}
                </button>
              </div>
              <div className="white-col-2">
                <h3 className="satoshi-bd font-extrabold text-[20px] lg:text-[22px] 2xl:text-[26px] capitalize text-black">
                  {content.optionsTitle}
                </h3>
                {content.options.map((option, index) => (
                  <div
                    key={option.title}
                    className={index === 0 ? "label-box" : "label-box space-set"}
                  >
                    <h3 className="satoshi-bd font-extrabold text-[20px] lg:text-[22px] 2xl:text-[26px] capitalize text-white">
                      {option.title}
                    </h3>
                    <p className="satoshi-md text-[15px] 2xl:text-[19px] font-medium text-white">
                      {withBreaks(option.text)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default whiteLabelService;

import React from "react";
import SourceImg1 from "../../assets/imgs/sourceimg1.svg";
import SourceImg2 from "../../assets/imgs/sourceimg2.svg";
import SourceImg3 from "../../assets/imgs/sourceimg3.svg";
import SourceImg4 from "../../assets/imgs/sourceimg4.svg";
import SourceImg5 from "../../assets/imgs/sourceimg5.svg";
import SourceImg6 from "../../assets/imgs/sourceimg6.svg";
import { withBreaks } from "../../utils/text";

// Icon keys used in the JSON content.
const icons = {
  sourceImg1: SourceImg1,
  sourceImg2: SourceImg2,
  sourceImg3: SourceImg3,
  sourceImg4: SourceImg4,
  sourceImg5: SourceImg5,
  sourceImg6: SourceImg6,
};

const benefitCardStyle = {
  border: "1px solid transparent",
  background:
    "linear-gradient(#fff, #fff) padding-box, linear-gradient(180deg, #A1D1FF, #FFFFFF) border-box",
};

function businessOustsource({ content }) {
  return (
    <>
      <section className="business-outsource-section">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="start-txt-2 text-center">
            <h2 className="montserrat-rg font-bold text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] text-black">
              {withBreaks(content.title)} <span>{content.highlight}</span>
              {" "}<br className="hidden sm:block" />
              {content.titleEnd}
            </h2>
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="satoshi-md text-[15px] font-medium text-black"
              >
                {withBreaks(paragraph)}
              </p>
            ))}
            {content.benefitsTitle ? (
              <h4 className="satoshi-bd font-bold text-[20px] lg:text-[22px]">
                {content.benefitsTitle}
              </h4>
            ) : (
              <div className="pt-10" />
            )}
          </div>
          <div
            className={`mx-auto grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 ${
              content.columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {content.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
                style={benefitCardStyle}
              >
                {benefit.icon && (
                  <div className="box-img-source shrink-0">
                    <img
                      className="h-[52px] w-[52px]"
                      src={icons[benefit.icon]}
                      alt=""
                    />
                  </div>
                )}
                <div className="box-txt-source min-w-0">
                  <h4 className="montserrat-rg text-lg font-bold leading-tight">
                    {benefit.title}
                  </h4>
                  {/* Text can be one paragraph or a list of paragraphs */}
                  {[].concat(benefit.text).map((text) => (
                    <p
                      key={text}
                      className="satoshi-md pt-2 text-sm font-medium leading-[1.4] text-black"
                    >
                      {withBreaks(text)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {content.buttonLabel && (
            <div className="mt-10 text-center">
              <button className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base lg:text-lg font-bold uppercase text-white">
                {content.buttonLabel}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default businessOustsource;

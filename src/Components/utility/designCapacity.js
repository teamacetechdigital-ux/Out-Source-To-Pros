import React from 'react'
import { withBreaks } from "../../utils/text";

function designCapacity({ content }) {
  return (
    <>
      <section className="design-capacity-section pt-24 pb-42">
        <div className="custom-container">
          <div className="prnt-text-box bg-white w-6xl mx-auto">
            <div className="mx-auto w-full max-w-[860px] px-5 text-center sm:px-10">
              <h2 className="montserrat-rg font-bold text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] capitalize text-black">
                {withBreaks(content.title, "always")}{" "}
                <span>{content.highlight}</span>
              </h2>
              {content.paragraphs.map((paragraph) => (
                <p className="satoshi-md text-[15px] font-medium text-black" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <button className="bg-[#1B50E8] text-base lg:text-lg text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                {content.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default designCapacity
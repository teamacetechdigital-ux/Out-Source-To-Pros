import React from "react";

function whiteTextarea({ content }) {
  return (
    <>
      <section id="about" className="white-textarea">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="prnt-text-box bg-white">
            <div className="mx-auto w-full max-w-[860px] text-center">
              <h2 className="montserrat-rg font-bold text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[56px] capitalize text-black">
                {content.title}{" "}
                <span>{content.highlight}</span>
              </h2>
              {content.paragraphs.map((paragraph) => (
                <p className="satoshi-md text-[15px] 2xl:text-[19px] font-medium text-black" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <h3 className="satoshi-bd font-bold text-[20px] lg:text-[22px] 2xl:text-[26px] capitalize text-black">{content.subheading}</h3>
              {content.subParagraphs.map((paragraph) => (
                <p className="satoshi-md text-[15px] 2xl:text-[19px] font-medium text-black" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <button className="bg-[#1B50E8] text-base lg:text-lg 2xl:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                {content.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default whiteTextarea;

import React from "react";

function whiteTextarea() {
  return (
    <>
      <section id="about" className="white-textarea">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="prnt-text-box bg-white">
            <div className="mx-auto w-full max-w-5xl px-5 text-center sm:px-10">
              <h2 className="montserrat-rg font-extrabold text-[30px] sm:text-[40px] lg:text-[48px] xl:text-[60px] capitalize text-black">
                Digital Work Should Create Measurable{" "}
                <span>Business Value</span>
              </h2>
              <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                A website is not only a visual asset. SEO is not only a rankings
                report. Automation is not only a collection of workflows.
              </p>
              <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                Every digital investment should support a practical business
                objective, such as attracting better leads, reducing manual
                work, improving customer experience, increasing sales,
                supporting a sales team, entering new markets, or building a
                stronger brand.
              </p>
              <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                We connect strategy and execution so every project contributes
                to a larger business goal.
              </p>
              <h3 className="satoshi-bd font-bold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-black">Supporting Statement</h3>
              <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                Our team works across design, engineering, search, content, paid
                acquisition, analytics, branding, automation, and ongoing
                digital operations.
              </p>
              <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                That means you do not need to coordinate multiple freelancers,
                vendors, and disconnected agencies to move one project forward.
              </p>
              <button className="bg-[#1B50E8] text-base sm:text-lg lg:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                Discuss Your Business Goals
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default whiteTextarea;

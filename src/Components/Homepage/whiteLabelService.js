import React from "react";

function whiteLabelService() {
  return (
    <>
      <section className="white-label-service-section">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="prnt-text-box bg-white">
            <div className="grid-box-gap items-start grid lg:grid-cols-2 white-label-flex">
              <div className="white-col-1">
                <h2 className="montserrat-rg font-extrabold text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[50px] capitalize text-black">
                  White-label Service
                  {" "}<br className="hidden sm:block" />
                  <span>for agency's</span>
                </h2>
                <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                  Growing an agency often creates a difficult choice.
                </p>
                <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                  You can turn down work, hire before revenue is secure, depend
                  on multiple freelancers, or find a delivery team that can work
                  behind your brand.
                </p>
                <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                  Our white-label services help agencies expand capacity across
                  design, development, SEO, content, paid media, automation,
                  creative production, and technical support.
                </p>
                <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
                  We follow your processes, use your preferred communication
                  structure, and complete work under agreed confidentiality
                  requirements.
                </p>
                <h3 className="satoshi-bd font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-black">
                  Why Agencies Use Our White-Label Model
                </h3>
                <ul className="white-label-list satoshi-md font-medium flex flex-col list-disc">
                  <li>Accept more projects</li>
                  <li>Reduce hiring pressure</li>
                  <li>Access specialists when required</li>
                  <li>Improve delivery consistency</li>
                  <li>Expand service offerings</li>
                  <li>Protect internal team capacity</li>
                  <li>Reduce dependence on individual freelancers</li>
                  <li>Maintain ownership of the client relationship</li>
                </ul>
                <button className="bg-[#1B50E8] text-base sm:text-lg lg:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                  Explore White-Label Services
                </button>
              </div>
              <div className="white-col-2">
                <h3 className="satoshi-bd font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-black">
                  Engagement Options
                </h3>
                <div className="label-box">
                  <h3 className="satoshi-bd font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-white">
                    Per-Project Delivery
                  </h3>
                  <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-white">
                    Use our team for a defined client project with an agreed
                    scope, timeline, and delivery process.
                  </p>
                </div>
                <div className="label-box space-set">
                  <h3 className="satoshi-bd font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-white">
                    Monthly Production Support
                  </h3>
                  <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-white">
                    Reserve ongoing capacity for recurring design, development,
                    SEO, content, or maintenance work.
                  </p>
                </div>
                <div className="label-box space-set">
                  <h3 className="satoshi-bd font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-white">
                    Dedicated Team Members
                  </h3>
                  <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-white">
                    Add professionals who work as an extension of your existing
                    operation.
                  </p>
                </div>
                <div className="label-box space-set">
                  <h3 className="satoshi-bd font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] capitalize text-white">
                    Full White-Label Department
                  </h3>
                  <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-white">
                    Use a multi-disciplinary delivery team to support several
                    client accounts and service categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default whiteLabelService;

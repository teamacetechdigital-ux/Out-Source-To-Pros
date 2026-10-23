import React from "react";
import SourceImg1 from "../../assets/imgs/sourceimg1.svg";
import SourceImg2 from "../../assets/imgs/sourceimg2.svg";
import SourceImg3 from "../../assets/imgs/sourceimg3.svg";
import SourceImg4 from "../../assets/imgs/sourceimg4.svg";
import SourceImg5 from "../../assets/imgs/sourceimg5.svg";
import SourceImg6 from "../../assets/imgs/sourceimg6.svg";

const benefitCardStyle = {
  border: "1px solid transparent",
  background:
    "linear-gradient(#fff, #fff) padding-box, linear-gradient(180deg, #A1D1FF, #FFFFFF) border-box",
};

function businessOustsource() {
  return (
    <>
      <section className="business-outsource-section">
        <div className="custom-container px-5 sm:px-8 lg:px-12">
          <div className="start-txt-2 text-center">
            <h2 className="montserrat-rg font-extrabold text-[30px] sm:text-[40px] lg:text-[48px] xl:text-[60px] capitalize text-black">
              Why Business <span>Outsource</span>
              {" "}<br className="hidden sm:block" />
              Digital Works
            </h2>
            <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
              Digital growth requires a wide range of capabilities.
            </p>
            <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
              A single employee is unlikely to be equally strong in strategy,
              design, development, SEO,
              {" "}<br className="hidden sm:block" /> copywriting, advertising, analytics, automation, security,
              and project management.
            </p>
            <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
              Outsourcing gives businesses access to the right skill at the
              right stage without creating a{" "}<br className="hidden sm:block" /> full-time internal position
              for every requirement.
            </p>
            <h4 className="satoshi-bd font-bold text-[22px] sm:text-[26px] lg:text-[30px]">
              Key Benefits
            </h4>
          </div>
          <div className="mx-auto grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
              style={benefitCardStyle}
            >
              <div className="box-img-source shrink-0">
                <img className="h-[52px] w-[52px]" src={SourceImg1} alt="" />
              </div>
              <div className="box-txt-source min-w-0">
                <h4 className="montserrat-rg text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  Broader Skill Access
                </h4>
                <p className="satoshi-md pt-2 text-base lg:text-lg font-medium leading-[1.4] text-black">
                  Bring in specialists based on the work that needs to be
                  completed rather than forcing one person to cover every
                  discipline.
                </p>
              </div>
            </div>
            <div
              className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
              style={benefitCardStyle}
            >
              <div className="box-img-source shrink-0">
                <img className="h-[52px] w-[52px]" src={SourceImg2} alt="" />
              </div>
              <div className="box-txt-source min-w-0">
                <h4 className="montserrat-rg text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  Lower Fixed Costs
                </h4>
                <p className="satoshi-md pt-2 text-base lg:text-lg font-medium leading-[1.4] text-black">
                  Reduce the expenses connected with recruitment, full-time
                  salaries, benefits, software, equipment, management, and
                  unused capacity.
                </p>
              </div>
            </div>
            <div
              className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
              style={benefitCardStyle}
            >
              <div className="box-img-source shrink-0">
                <img className="h-[52px] w-[52px]" src={SourceImg3} alt="" />
              </div>
              <div className="box-txt-source min-w-0">
                <h4 className="montserrat-rg text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  Faster Team Formation
                </h4>
                <p className="satoshi-md pt-2 text-base lg:text-lg font-medium leading-[1.4] text-black">
                  Begin work without waiting through lengthy recruiting,
                  onboarding, and training cycles.
                </p>
              </div>
            </div>
            <div
              className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
              style={benefitCardStyle}
            >
              <div className="box-img-source shrink-0">
                <img className="h-[52px] w-[52px]" src={SourceImg4} alt="" />
              </div>
              <div className="box-txt-source min-w-0">
                <h4 className="montserrat-rg text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  Easier Capacity Changes
                </h4>
                <p className="satoshi-md pt-2 text-base lg:text-lg font-medium leading-[1.4] text-black">
                  Increase or reduce support as priorities, workload, and
                  budgets change.
                </p>
              </div>
            </div>
            <div
              className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
              style={benefitCardStyle}
            >
              <div className="box-img-source shrink-0">
                <img className="h-[52px] w-[52px]" src={SourceImg5} alt="" />
              </div>
              <div className="box-txt-source min-w-0">
                <h4 className="montserrat-rg text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  Clear Deliverables
                </h4>
                <p className="satoshi-md pt-2 text-base lg:text-lg font-medium leading-[1.4] text-black">
                  Use defined scopes, timelines, roles, and measurements for
                  each engagement.
                </p>
              </div>
            </div>
            <div
              className="bus-out-source-box flex items-start gap-3 rounded-md p-4"
              style={benefitCardStyle}
            >
              <div className="box-img-source shrink-0">
                <img className="h-[52px] w-[52px]" src={SourceImg6} alt="" />
              </div>
              <div className="box-txt-source min-w-0">
                <h4 className="montserrat-rg text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  Vendor Streamlining
                </h4>
                <p className="satoshi-md pt-2 text-base lg:text-lg font-medium leading-[1.4] text-black">
                  Keep connected digital services within one coordinated
                  delivery structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default businessOustsource;

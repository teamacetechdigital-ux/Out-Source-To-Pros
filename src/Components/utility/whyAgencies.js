import React from "react";

const columns = [
  "Features",
  "Freelancers",
  <>
    Traditional
    {" "}<br className="hidden sm:block" />
    Agencies
  </>,
  <>
    Full-Time
    {" "}<br className="hidden sm:block" />
    Team
  </>,
  <>
    Outsource to
    {" "}<br className="hidden sm:block" />
    Pros
  </>,
];

const rows = [
  {
    feature: "Range of Services",
    freelancers: "Usually limited to one or two specialties",
    agencies: "Broader services, but often split across departments",
    fullTime: "Depends on who you hire",
    outsource:
      "Web, development, SEO, paid media, design, automation, software, and support in one team",
  },
  {
    feature: "Turnaround Speed",
    freelancers: "Depends on schedule and workload",
    agencies: "Can slow down through multiple approval layers",
    fullTime: "Limited to internal capacity",
    outsource: "Dedicated delivery teams built around project needs",
  },
  {
    feature: "Technical Expertise",
    freelancers: "Based on one person's skill set",
    agencies: "Varies by agency team",
    fullTime: "Requires multiple specialist hires",
    outsource:
      "Access developers, SEO specialists, designers, marketers, and automation experts as needed",
  },
  {
    feature: "White-Label Support",
    freelancers: "Rarely structured for agencies",
    agencies: "Often limited or unavailable",
    fullTime: "Not applicable",
    outsource:
      "Built for confidential white-label fulfillment and agency delivery",
  },
  {
    feature: "Cost Structure",
    freelancers: "Lower upfront, but inconsistent availability",
    agencies: "Higher agency overhead",
    fullTime: "Salaries, benefits, recruitment, and software costs",
    outsource:
      "Flexible project, monthly, dedicated team, and staff augmentation models",
  },
  {
    feature: "Project Management",
    freelancers: "Often managed by the client",
    agencies: "Usually included",
    fullTime: "Managed internally",
    outsource:
      "Structured communication, workflows, QA, and delivery ownership",
  },
  {
    feature: "Consistency & Quality",
    freelancers: "Can vary from project to project",
    agencies: "Depends on internal processes",
    fullTime: "Depends on individual employees",
    outsource:
      "Defined workflows, specialist review, and quality control across services",
  },
  {
    feature: "Ongoing Support",
    freelancers: "Often ends after project completion",
    agencies: "Depends on retainer structure",
    fullTime: "Limited by team bandwidth",
    outsource:
      "Ongoing maintenance, marketing, development, and digital operations support",
  },
  {
    feature: "Service Expansion",
    freelancers: "Requires finding additional freelancers",
    agencies: "May require another vendor",
    fullTime: "Requires additional hiring",
    outsource: "Add new capabilities without rebuilding your team",
  },
];

const gridColumns = "grid-cols-[19fr_18fr_18fr_18fr_20fr]";

const tableCardStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const headerCellStyle = {
  background: "linear-gradient(180deg, #A1D1FF 0%, #FFFFFF 100%)",
};

const highlightColumnStyle = {
  width: "calc(100% * 20 / 93)",
  background: "linear-gradient(180deg, #1B50E8 0%, #0075FF 100%)",
};

function CrossIcon() {
  return (
    <svg
      className="mt-[3px] h-[18px] w-[18px] shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8.5" stroke="#1E1E1E" strokeWidth="1.5" />
      <path
        d="M7.2 7.2l5.6 5.6M12.8 7.2l-5.6 5.6"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-[3px] h-[18px] w-[18px] shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8.5" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M6.5 10.2l2.4 2.4 4.6-4.9"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhyAgencies() {
  return (
    <section className="why-agencies-section relative z-10 pb-16 lg:pb-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="start-txt-2 text-center">
          <h2 className="montserrat-rg font-extrabold text-[30px] sm:text-[40px] lg:text-[48px] xl:text-[60px] text-black">
            Why Agencies Choose
            {" "}<br className="hidden sm:block" />
            <span>Outsource to Pros</span>
          </h2>
          <p className="satoshi-md text-base sm:text-lg lg:text-xl font-medium text-black">
            Compare the most common ways to handle digital delivery, from
            one-off
            {" "}<br className="hidden sm:block" /> freelancers to building a full internal team.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-[#1B50E8] xl:hidden">
          Swipe left or right to compare all options.
        </p>
        <div
          role="region" aria-label="Compare delivery options. Scroll horizontally to see all columns." tabIndex={0}
          className="mt-8 max-w-full overflow-x-auto overscroll-x-contain rounded-[20px] bg-white p-3 lg:mt-12"
          style={tableCardStyle}
        >
          <div className={`relative grid min-w-[1100px] ${gridColumns}`}>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 rounded-xl"
              style={highlightColumnStyle}
              aria-hidden="true"
            />

            {columns.map((column, index) => {
              const isHighlight = index === columns.length - 1;
              return (
                <div
                  key={index}
                  className={`relative px-6 pb-10 pt-8 montserrat-rg text-[22px] lg:text-[28px] font-bold leading-tight ${
                    isHighlight ? "text-white" : "text-black"
                  } ${index === 0 ? "rounded-tl-xl" : ""} ${
                    index > 0 && index < 4 ? "border-l border-[#E5E9F2]" : ""
                  }`}
                  style={isHighlight ? undefined : headerCellStyle}
                >
                  {column}
                </div>
              );
            })}

            {rows.map((row) => (
              <React.Fragment key={row.feature}>
                <div className="relative border-t border-[#E5E9F2] px-6 py-8 montserrat-rg text-base lg:text-lg font-bold text-[#1B50E8]">
                  {row.feature}
                </div>
                {[row.freelancers, row.agencies, row.fullTime].map((text) => (
                  <div
                    key={text}
                    className="relative flex items-start gap-2 border-l border-t border-[#E5E9F2] px-6 py-8"
                  >
                    <CrossIcon />
                    <p className="satoshi-md text-base lg:text-lg font-medium leading-[1.4] text-[#1E1E1E]">
                      {text}
                    </p>
                  </div>
                ))}
                <div className="relative flex items-start gap-2 px-6 py-8">
                  <CheckIcon />
                  <p className="satoshi-bd text-base lg:text-lg leading-[1.4] text-white">
                    {row.outsource}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAgencies;

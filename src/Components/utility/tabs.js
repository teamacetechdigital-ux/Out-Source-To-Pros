import { useState } from "react";

const services = [
  {
    title: "Web Design Services",
    description:
      "Your website should build trust, communicate your services clearly, and encourage visitors to take the next step. We create responsive, user-focused websites for businesses across a wide range of industries.",
    includes: [
      "Custom Website Design",
      "UI Design",
      "Website Redesign",
      "Landing Page Design",
      "SaaS Website Design",
    ],
    problems: [
      "Outdated Website Design",
      "Poor Mobile Experience",
      "Confusing Navigation",
      "High Bounce Rates",
    ],
  },
  {
    title: "Web Development Services",
    description:
      "We build fast, responsive, and reliable websites that turn your design and business goals into a smooth experience across devices.",
    includes: [
      "Responsive Web Development",
      "Front-End Development",
      "CMS Development",
      "E-commerce Development",
      "Website Integrations",
    ],
    problems: [
      "Slow Page Loads",
      "Broken Website Features",
      "Difficult Content Updates",
      "Inconsistent Mobile Layouts",
    ],
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improve your visibility in search and attract more qualified visitors through practical, data-informed SEO strategies.",
    includes: [
      "Technical SEO",
      "On-Page Optimization",
      "Keyword Research",
      "Local SEO",
      "SEO Reporting",
    ],
    problems: [
      "Low Search Visibility",
      "Declining Organic Traffic",
      "Technical Search Issues",
      "Unqualified Website Traffic",
    ],
  },
  {
    title: "Content, Authority, and Digital PR",
    description:
      "Build a stronger online presence with useful content and digital PR that earns trust, supports your audience, and strengthens your brand.",
    includes: [
      "Content Strategy",
      "Blog and Website Content",
      "Thought Leadership",
      "Digital PR Campaigns",
      "Authority Building",
    ],
    problems: [
      "Inconsistent Publishing",
      "Low Brand Awareness",
      "Unclear Brand Messaging",
      "Limited Online Authority",
    ],
  },
  {
    title: "Paid Media and Demand Generation",
    description:
      "Reach the right audience with well-managed paid campaigns designed to create demand and bring measurable opportunities to your business.",
    includes: [
      "Paid Search Campaigns",
      "Paid Social Advertising",
      "Campaign Strategy",
      "Landing Page Optimization",
      "Performance Reporting",
    ],
    problems: [
      "Wasted Ad Spend",
      "Low-Quality Leads",
      "Weak Campaign Performance",
      "Unclear Return on Ad Spend",
    ],
  },
  {
    title: "AI, Automation, and CRM Systems",
    description:
      "Connect your tools and simplify repetitive work with thoughtful automation, useful AI workflows, and CRM systems tailored to your process.",
    includes: [
      "CRM Setup and Optimization",
      "Workflow Automation",
      "AI Process Integration",
      "Lead Management Systems",
      "Business Tool Integrations",
    ],
    problems: [
      "Repetitive Manual Tasks",
      "Missed Follow-Ups",
      "Disconnected Business Tools",
      "Inconsistent Lead Handling",
    ],
  },
  {
    title: "Software, SaaS, and App Development",
    description:
      "Turn your product idea or business requirements into dependable digital tools built around real users and practical needs.",
    includes: [
      "Custom Software",
      "SaaS Product Development",
      "Web Application Development",
      "Product Prototyping",
      "Ongoing Product Improvements",
    ],
    problems: [
      "Manual or Disconnected Processes",
      "Off-the-Shelf Tool Limitations",
      "Unclear Product Requirements",
      "Difficulty Scaling a Product",
    ],
  },
  {
    title: "Branding Services",
    description:
      "Create a consistent identity that helps your business stand out, communicate clearly, and build recognition with the right audience.",
    includes: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Brand Guidelines",
      "Marketing Assets",
    ],
    problems: [
      "Inconsistent Brand Materials",
      "Unclear Market Positioning",
      "Low Brand Recognition",
      "Outdated Visual Identity",
    ],
  },
  {
    title: "Support, Maintenance, Hosting, and Security",
    description:
      "Keep your website and digital tools healthy with reliable hosting, routine maintenance, proactive security, and ongoing technical support.",
    includes: [
      "Managed Website Hosting",
      "Website Maintenance",
      "Security Monitoring",
      "Backups and Updates",
      "Ongoing Technical Support",
    ],
    problems: [
      "Unplanned Website Downtime",
      "Outdated Software",
      "Security Vulnerabilities",
      "No Reliable Technical Support",
    ],
  },
];

function Tabs() {
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
            Our Services
          </h2>

          <div className="tab-prnt-cont relative mt-10 flex flex-col overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(17,48,112,0.16)] xl:flex-row">
            <div className="tabs-col-1 text-white min-w-0 xl:w-[38%]">
              <div
                className="service-tab-list flex max-h-80 flex-col overflow-y-auto xl:max-h-none"
                role="tablist"
                aria-label="Our services"
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
                    className={`montserrat-rg border-b border-white/20 text-left text-md capitalize transition-colors duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
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
                <p className="satoshi-rg mt-3 max-w-3xl text-base lg:text-lg">
                  {activeService.description}
                </p>

                <div className="grid-gaping grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="montserrat-rg text-base sm:text-lg lg:text-xl font-bold text-[#0A1653]">
                      Services Include
                    </h4>
                    <ul className="satoshi-reg mt-3 list-disc space-y-2 pl-4 text-base lg:text-lg">
                      {activeService.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="montserrat-rg text-base sm:text-lg lg:text-xl font-bold text-[#0A1653]">
                      Problems We Help Solve
                    </h4>
                    <ul className="satoshi-reg mt-3 list-disc space-y-2 pl-4 text-base lg:text-lg text-gray-800">
                      {activeService.problems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="tab-button-inner bg-[#1B50E8] text-base sm:text-lg lg:text-xl text-white px-8 py-4 rounded-md uppercase montserrat-bd font-bold">
                  Outsource with US
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

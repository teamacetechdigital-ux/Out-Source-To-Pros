import { useState } from "react";

// Only the first answer comes from the Figma design; the rest are drafts to replace.
const faqs = [
  {
    question: "How much should a professional website cost?",
    answer: [
      "Website cost depends on the number of pages, design depth, content needs, functionality, integrations, platform, technical complexity, ecommerce requirements, and ongoing support.",
      "A small informational website and a custom customer platform should not be priced the same way.",
      "A useful proposal should explain what is included, what is not included, how revisions work, who provides content, which integrations are required, and what happens after launch.",
    ],
  },
  {
    question: "How long does a website project take?",
    answer: [
      "Timelines depend on the size of the site, how quickly content and feedback are provided, and how many integrations or custom features are involved.",
      "A focused marketing website usually takes a few weeks, while larger platforms with custom functionality take longer.",
      "A clear plan should show each stage, from discovery and design to development, testing, and launch.",
    ],
  },
  {
    question: "Should we redesign our website or improve the current one?",
    answer: [
      "If the current site is built on a solid platform and mainly needs better content, speed, or conversion paths, improving it is often the faster option.",
      "A redesign makes more sense when the structure, technology, or brand no longer supports your goals.",
      "An audit of performance, usability, and SEO helps decide which path gives the better return.",
    ],
  },
  {
    question: "How soon can SEO produce results?",
    answer: [
      "Technical fixes and on-page improvements can show early movement within a few weeks.",
      "Stronger rankings and steady organic traffic usually build over several months, depending on competition and the current state of the site.",
      "SEO works best as an ongoing effort with clear reporting on rankings, traffic, and leads.",
    ],
  },
  {
    question: "Can automation replace employees?",
    answer: [
      "Automation is best at removing repetitive tasks such as data entry, follow-ups, reporting, and routing information between tools.",
      "It usually frees your team to focus on work that needs judgment, relationships, and creativity rather than replacing them.",
      "The right starting point is the processes that take the most time and follow clear rules.",
    ],
  },
  {
    question: "Should we hire in-house or outsource digital work?",
    answer: [
      "In-house hires make sense for ongoing work that needs daily attention and deep company knowledge.",
      "Outsourcing gives you access to a wider range of specialists without the cost of recruiting, salaries, and training for every skill.",
      "Many businesses combine both, keeping core roles internal and outsourcing specialist or overflow work.",
    ],
  },
];

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 1.5rem 0rem 0rem",
};


function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-[#1B50E8] transition-transform duration-300 ${
        open ? "-rotate-90" : ""
      }`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 3.5l4 4 4-4M4 8.5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Faqs() {
  const [active, setActive] = useState(0);

  return (
    <section className="faqs-section py-16 sm:py-20 lg:pb-32 lg:pt-28">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-2 xl:items-end xl:gap-12 [&>*]:min-w-0">
          <div>
            <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-5xl font-extrabold leading-[1.2] text-black">
              Start With the Questions
              {" "}<br className="hidden sm:block" />
              That <span style={headingHighlightStyle}>Matter Most</span>
            </h2>

            <ul className="mt-8 lg:mt-14">
              {faqs.map((faq, index) => (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-expanded={active === index}
                    className={`flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left ${
                      index < faqs.length - 1 ? "border-b border-[#1B50E8]/40" : ""
                    }`}
                  >
                    <span
                      className={`satoshi-md text-base lg:text-lg ${
                        active === index ? "text-[#1B50E8]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronIcon open={active === index} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Answer for the selected question fades in */}
          <div
            className="grid min-w-0 overflow-hidden rounded-3xl px-6 py-8 answer-bg sm:px-10 lg:min-h-[430px] lg:py-12"
          >
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`relative col-start-1 row-start-1 transition-opacity duration-500 ${
                  active === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={active !== index}
              >
                {faq.answer.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="satoshi-md pb-4 text-base lg:text-lg leading-[1.5] text-white"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;

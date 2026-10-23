const boxStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const baseFieldClass =
  "satoshi-md w-full rounded-md bg-[#F2F2F2] min-w-0 px-4 py-4 text-base sm:px-6 sm:py-5 lg:text-lg placeholder:text-[#9A9A9A] outline-none focus:ring-2 focus:ring-[#1B50E8]/40";
const fieldClass = `${baseFieldClass} text-black`;
// Selects start grey like a placeholder until an option is picked.
const selectClass = `${baseFieldClass} text-[#9A9A9A] has-[option:checked:not([value=""])]:text-black`;

const services = [
  "Web Design & Development",
  "SEO & Marketing",
  "Paid Media",
  "Creative & Design",
  "AI Automation",
  "Software & App Development",
  "White-Label Services",
  "Support & Maintenance",
];

const sources = ["Google Search", "Social Media", "Referral", "Other"];

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="contact-form-section relative z-10 -mt-16 sm:-mt-24 lg:-mt-[200px]">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="rounded-[20px] bg-white px-5 py-10 sm:px-10 lg:px-14 lg:py-14" style={boxStyle}>
          <div className="text-center">
            <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-5xl font-extrabold text-black">
              Start the <span style={headingHighlightStyle}>Conversation</span>
            </h2>
            <p className="satoshi-md pt-5 text-base lg:text-lg text-black">
              Tell us a little about your business and what you need help
              with. A member of
              {" "}<br className="hidden sm:block" /> our team will review your information and contact you to
              discuss the next step.
            </p>
          </div>

          <form className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input className={fieldClass} type="text" name="name" placeholder="Full Name" />
            <input className={fieldClass} type="email" name="email" placeholder="Business Email" />
            <input className={fieldClass} type="tel" name="phone" placeholder="Phone Number" />
            <select className={selectClass} name="service" defaultValue="">
              <option value="" disabled>
                Services Needed
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="text-black">
                  {service}
                </option>
              ))}
            </select>
            <input className={fieldClass} type="url" name="website" placeholder="Website URL" />
            <select className={selectClass} name="source" defaultValue="">
              <option value="" disabled>
                How Did You Hear About Us?
              </option>
              {sources.map((source) => (
                <option key={source} value={source} className="text-black">
                  {source}
                </option>
              ))}
            </select>
            <textarea
              className={`${fieldClass} sm:col-span-2 h-36 resize-none`}
              name="message"
              placeholder="Message"
            />
            <div className="sm:col-span-2 pt-4 text-center">
              <button
                type="submit"
                className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base sm:text-lg lg:text-xl font-bold uppercase text-white"
              >
                Request My Strategy Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

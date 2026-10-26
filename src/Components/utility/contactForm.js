import { withBreaks } from "../../utils/text";

const boxStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const baseFieldClass =
  "satoshi-md w-full rounded-md bg-[#F2F2F2] min-w-0 px-4 py-4 text-base sm:px-6 sm:py-5 lg:py-[14px] lg:text-[15px] placeholder:text-[#9A9A9A] outline-none focus:ring-2 focus:ring-[#1B50E8]/40";
const fieldClass = `${baseFieldClass} text-black`;
// Selects start grey like a placeholder until an option is picked.
const selectClass = `${baseFieldClass} text-[#9A9A9A] has-[option:checked:not([value=""])]:text-black`;

function ContactForm({ content }) {
  const { fields } = content;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="contact-form-section relative z-10 -mt-16 sm:-mt-24 lg:-mt-[200px]">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="rounded-[20px] bg-white px-5 py-10 sm:px-10 lg:px-14 lg:py-14" style={boxStyle}>
          <div className="text-center">
            <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-bold text-black">
              {content.title}{" "}
              <span style={headingHighlightStyle}>{content.highlight}</span>
            </h2>
            <p className="satoshi-md pt-5 text-base lg:text-[15px] text-black">
              {withBreaks(content.description)}
            </p>
          </div>

          <form className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input className={fieldClass} type="text" name="name" placeholder={fields.name} />
            <input className={fieldClass} type="email" name="email" placeholder={fields.email} />
            <input className={fieldClass} type="tel" name="phone" placeholder={fields.phone} />
            <select className={selectClass} name="service" defaultValue="">
              <option value="" disabled>
                {fields.service}
              </option>
              {content.services.map((service) => (
                <option key={service} value={service} className="text-black">
                  {service}
                </option>
              ))}
            </select>
            <input className={fieldClass} type="url" name="website" placeholder={fields.website} />
            <select className={selectClass} name="source" defaultValue="">
              <option value="" disabled>
                {fields.source}
              </option>
              {content.sources.map((source) => (
                <option key={source} value={source} className="text-black">
                  {source}
                </option>
              ))}
            </select>
            <textarea
              className={`${fieldClass} sm:col-span-2 h-36 resize-none`}
              name="message"
              placeholder={fields.message}
            />
            <div className="sm:col-span-2 pt-4 text-center">
              <button
                type="submit"
                className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base lg:text-lg font-bold uppercase text-white"
              >
                {content.buttonLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

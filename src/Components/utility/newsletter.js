import Mobile from "../../assets/imgs/mobile-cont.png";

function Newsletter() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter-section relative z-10 pt-12 lg:pt-20">
      <div className="mx-auto max-w-[1616px] px-6 sm:px-12">
        <div className="relative rounded-[28px] bg-white px-6 pb-0 pt-12 shadow-[0px_10px_40px_rgba(27,80,232,0.12)] sm:px-12 lg:px-[76px] lg:pb-20 lg:pt-24">
          <div className="max-w-[634px] lg:w-[48%]">
            <h2 className="montserrat-rg text-[28px] font-bold leading-tight text-black sm:text-[32px] 2xl:text-[40px]">
              Get Practical Digital Growth
              {" "}<br className="hidden sm:block" />
              Insights
            </h2>
            <p className="satoshi-md pt-6 text-base leading-[1.4] sm:text-lg text-black">
              Receive useful guidance about websites, SEO, marketing,
              automation,
              {" "}software, conversion, and digital operations.
            </p>
            <p className="satoshi-md pt-4 text-base leading-[1.4] sm:text-lg text-black">
              No generic motivational emails. Only practical information
              designed
              {" "}to help you make better business decisions.
            </p>
            <form className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-0" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                aria-label="Your email address"
                placeholder="Your Email Address"
                className="satoshi-md min-w-0 flex-1 rounded-md sm:rounded-r-none bg-[#F5F5F5] px-5 py-6 text-lg text-black outline-none placeholder:text-[#9A9A9A] sm:px-10"
              />
              <button
                type="submit"
                className="montserrat-bd shrink-0 rounded-md bg-[#1B50E8] px-7 py-5 text-xl sm:py-0 font-bold uppercase text-white"
              >
                Join
              </button>
            </form>
          </div>

          <img
            src={Mobile}
            alt="Outsource to Pros mobile preview"
            width={554}
            height={581}
            className="mx-auto mt-10 block h-auto w-full max-w-[360px] lg:absolute lg:bottom-0 lg:right-[6%] lg:mt-0 lg:w-[44%] lg:max-w-[554px] 2xl:w-[36.45%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

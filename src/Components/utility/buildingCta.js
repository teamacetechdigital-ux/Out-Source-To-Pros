const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

function BuildingCta() {
  return (
    <section className="building-cta-section pb-12 pt-16 sm:pb-20 sm:pt-24 lg:pt-32">
      <div className="custom-container px-5 sm:px-8 lg:px-12 text-center">
        <h2 className="montserrat-rg text-[30px] sm:text-[36px] lg:text-[40px] xl:text-5xl font-extrabold leading-[1.25] text-black">
          Tell Us What You Are Building,
          {" "}<br className="hidden sm:block" />
          Improving, or <span style={headingHighlightStyle}>Trying to Solve</span>
        </h2>
        <p className="satoshi-md pt-6 text-base lg:text-lg text-black">
          You may need a new website, better search visibility, a custom
          platform, stronger campaign
          {" "}<br className="hidden sm:block" /> performance, automated workflows, or additional capacity for
          your agency.
        </p>
        <p className="satoshi-md pt-3 text-base lg:text-lg text-black">
          You do not need to determine every service before contacting us.
        </p>
        <p className="satoshi-md pt-3 text-base lg:text-lg text-black">
          Share your current situation, goals, timeline, and challenges. We
          will help you organize the
          {" "}<br className="hidden sm:block" /> priorities and identify a practical path forward.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
          <button className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base sm:text-lg lg:text-xl font-bold uppercase text-white">
            Request a Proposal
          </button>
          <button className="montserrat-bd rounded-md bg-[#C9D9FF] px-8 py-4 text-base sm:text-lg lg:text-xl font-bold uppercase text-black">
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuildingCta;

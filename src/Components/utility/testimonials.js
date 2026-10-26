const headingHighlightStyle = {
  background: "linear-gradient(to right, #ffffff00, #ffffffbf)",
  padding: "0rem 1.5rem 0rem 0rem",
};

const cardStyle = {
  background: "rgba(255, 255, 255, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  backdropFilter: "blur(6px)",
};

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} className="h-4 w-4" viewBox="0 0 20 20" fill="#FFFFFF" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
      <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="9" fill="#FFFFFF" />
        <path
          d="M6 10.2l2.6 2.6L14 7.5"
          stroke="#111111"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Testimonials({ content }) {
  // Cards list review keys in grid order, so a review can appear more than once.
  const cards = content.cards.map((key) => content.reviews[key]);

  return (
    <section id="testimonials" className="testimonials-section pb-40 pt-16 sm:pb-52 sm:pt-20 lg:pb-[280px] lg:pt-32">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <h2 className="montserrat-rg text-3xl font-bold text-white sm:text-4xl lg:text-[40px] xl:text-[44px]">
          <span style={headingHighlightStyle}>{content.highlight}</span>
        </h2>

        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12 xl:grid-cols-4 xl:gap-5">
          {cards.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl p-5 text-white sm:w-auto"
              style={cardStyle}
            >
              <div className="flex items-start justify-between">
                <span className="montserrat-rg flex h-11 w-11 items-center justify-center rounded-[9999px] bg-white/20 text-sm font-bold">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <GoogleIcon />
              </div>
              <h3 className="montserrat-rg pt-4 text-[17px] font-semibold">
                {review.name}
              </h3>
              <p className="satoshi-md flex-1 pt-3 text-xs leading-[1.5] text-white/90">
                {review.text}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <Stars />
                <span className="satoshi-md text-sm">
                  {content.reviewLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

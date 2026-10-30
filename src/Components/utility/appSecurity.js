import { useId } from "react";
import { Link } from "react-router-dom";

// Security visual per JSON "image" key; until one is added a CSS shield is shown.
const images = {};

function ShieldPlaceholder({ label }) {
  return (
    <div role="img" aria-label={label} className="relative mx-auto flex aspect-[795/550] w-full max-w-[560px] items-center justify-center md:max-w-none">
      <div aria-hidden="true" className="absolute inset-[8%] rounded-[50%] bg-[radial-gradient(circle,rgba(72,170,255,0.55)_0%,rgba(27,80,232,0.25)_40%,transparent_70%)] blur-xl" />
      <svg aria-hidden="true" viewBox="0 0 120 140" fill="none" className="relative w-[30%] drop-shadow-[0_0_24px_rgba(110,200,255,0.8)]">
        <path d="M60 6 108 24v38c0 33-21 58-48 72C33 120 12 95 12 62V24L60 6Z" fill="rgba(110,200,255,0.35)" stroke="#bfe6ff" strokeWidth="3" />
        <circle cx="60" cy="62" r="12" fill="#0c254f" />
        <path d="M54 70h12l-3 26h-6l-3-26Z" fill="#0c254f" />
      </svg>
    </div>
  );
}

function AppSecurity({ content }) {
  const id = useId();
  const image = images[content.image];

  return (
    <section id="application-security" aria-labelledby={`${id}-heading`} className="relative pb-16 pt-16 text-white md:pb-[10vw] md:pt-[8vw]">
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1320px] items-center gap-8 md:w-[79.2%] md:grid-cols-[709fr_795fr] md:gap-[5%] [&>*]:min-w-0">
        <div>
          <h2 id={`${id}-heading`} className="montserrat-rg text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
            {content.title}<br />
            <span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.5))] pr-1">{content.highlight}</span>
          </h2>
          <p className="satoshi-md mt-5 text-[15px] leading-[1.35] md:mt-[5%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.text}</p>
          <h3 className="satoshi-bd mt-3 text-[15px] leading-[1.35] md:mt-[2%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.listTitle}</h3>
          <ul className="satoshi-md mt-3 gap-x-6 text-[15px] leading-[1.35] sm:columns-2 md:mt-[2.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
            {content.items.map((item) => (
              <li key={item} className="flex break-inside-avoid items-start gap-2.5 pb-1.5">
                <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-[9999px] bg-white" />
                {item}
              </li>
            ))}
          </ul>
          <p className="satoshi-md mt-4 text-[15px] leading-[1.35] md:mt-[3%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.note}</p>
          <Link to={content.buttonLink} className="montserrat-bd mt-6 inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-[5%] md:px-[2.2vw] md:py-[1.1vw] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {content.buttonLabel}
          </Link>
        </div>
        {image ? (
          <img src={image} alt={content.imageAlt} className="block h-auto w-full" />
        ) : (
          <ShieldPlaceholder label={content.imageAlt} />
        )}
      </div>
    </section>
  );
}

export default AppSecurity;

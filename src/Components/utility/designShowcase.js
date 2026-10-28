import { useId, useState } from "react";
import { Link } from "react-router-dom";
import web1 from "../../assets/imgs/webdesign/web1.webp";
import web2 from "../../assets/imgs/webdesign/web2.webp";
import web3 from "../../assets/imgs/webdesign/web3.webp";
import web4 from "../../assets/imgs/webdesign/web4.webp";
import web5 from "../../assets/imgs/webdesign/web5.webp";
import web6 from "../../assets/imgs/webdesign/web6.webp";
import web7 from "../../assets/imgs/webdesign/web7.webp";
import web8 from "../../assets/imgs/webdesign/web8.webp";
import web9 from "../../assets/imgs/webdesign/web9.webp";
import web10 from "../../assets/imgs/webdesign/web10.webp";

const images = { web1, web2, web3, web4, web5, web6, web7, web8, web9, web10 };

function DesignCard({ project }) {
  return (
    <img
      src={images[project.image]}
      alt={project.alt}
      width={project.width}
      height={project.height}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full"
    />
  );
}

function DesignColumn({ projects, index }) {
  return (
    <div
      className={`flex flex-col motion-reduce:animate-none ${index % 2 === 0 ? "animate-design-scroll-up" : "animate-design-scroll-down"}`}
    >
      {[false, true].map((duplicate) => (
        <div
          key={String(duplicate)}
          aria-hidden={duplicate ? true : undefined}
          className="flex shrink-0 flex-col gap-[clamp(12px,1.4vw,20px)] pb-[clamp(12px,1.4vw,20px)]"
        >
          {projects.map((project) => (
            <DesignCard key={project.id} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
}

function DesignShowcase({ content }) {
  const id = useId();
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="relative isolate pb-16 mt-[-7rem] sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1140px] md:w-[79.2%]">
        <div className="rounded-[clamp(16px,1.7vw,24px)] bg-white p-[clamp(12px,2.5vw,36px)] shadow-[0_8px_20px_rgba(27,80,232,0.07)]">
          <div
            role="group"
            aria-label={content.ariaLabel}
            className={`group relative h-[360px] overflow-clip sm:h-auto sm:aspect-[1072/682] ${paused ? "[&_[class*='animate-design-scroll']]:[animation-play-state:paused]" : ""}`}
          >
            <div className="absolute left-1/2 top-0 grid w-[740px] -translate-x-1/2 grid-cols-5 items-start gap-[clamp(12px,1.4vw,20px)] sm:w-[135.5%]">
              {content.columns.map((projects, index) => (
                <DesignColumn key={index} projects={projects} index={index} />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,transparent_14%,transparent_86%,#fff_100%)]"
            />
            <button
              type="button"
              aria-label={
                paused
                  ? "Play portfolio animation"
                  : "Pause portfolio animation"
              }
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
              className="absolute bottom-2 right-2 flex size-9 cursor-pointer items-center justify-center rounded-[50%] bg-white/95 text-[#1B50E8] opacity-0 shadow-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B50E8] [@media(hover:none)]:opacity-100 motion-reduce:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  d={paused ? "m8 5 11 7-11 7V5Z" : "M6 5h4v14H6zm8 0h4v14h-4z"}
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[860px] text-center sm:mt-[7.4vw] lg:mt-[108px]">
          <h2
            id={`${id}-heading`}
            className="montserrat-rg text-[clamp(1.6rem,3.23vw,2.875rem)] font-bold leading-[1.2] text-black"
          >
            {content.title}
            <br />
            <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] px-1">
              {content.highlight}
            </span>
          </h2>
          <div className="satoshi-md mt-5 space-y-3 text-[15px] leading-[1.4] text-black">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to={content.buttonLink}
            className="montserrat-bd mt-8 inline-flex items-center justify-center rounded-sm bg-[#1B50E8] px-7 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] sm:text-base lg:text-lg"
          >
            {content.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DesignShowcase;

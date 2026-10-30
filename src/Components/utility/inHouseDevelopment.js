import { useId } from "react";
import { Link } from "react-router-dom";

function ComparisonMark({ included }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={`size-3 shrink-0 md:size-[clamp(8px,1.1vw,16px)] ${included ? "text-[#9bd3ff]" : "text-black"}`}
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" />
      <path
        d={included ? "M5 8L7 10L11 6" : "M6 6L10 10M10 6L6 10"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InHouseDevelopment({ content }) {
  const id = useId();

  return (
    <section
      id="in-house-development"
      aria-labelledby={`${id}-heading`}
      className="in-house-development bg-white py-12 md:pb-[6.4vw] md:pt-[3.5vw]"
    >
      <h2
        id={`${id}-heading`}
        className="montserrat-rg mx-auto w-[calc(100%-2.5rem)] text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]"
      >
        {content.title}
        <br />
        <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] px-1">
          {content.highlight}
        </span>
      </h2>

      <div className="mx-auto mt-7 w-[calc(100%-2rem)] max-w-[1424px] rounded-[clamp(14px,1.7vw,24px)] bg-white p-2.5 shadow-[0_3px_18px_rgba(27,80,232,0.09)] md:mt-[3.3vw] md:w-[85.4%] md:p-[1.2vw]">
        <div
          role="region"
          aria-label={content.tableLabel}
          tabIndex={0}
          className="overflow-x-auto rounded-[clamp(10px,1vw,16px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8]"
        >
          <table className="w-full min-w-[640px] table-fixed border-separate border-spacing-0 text-left md:min-w-0">
            <caption className="sr-only">
              {content.tableCaption}
            </caption>
            <colgroup>
              <col className="w-[26.5%]" />
              <col className="w-[32.5%]" />
              <col className="w-[41%]" />
            </colgroup>
            <thead className="bg-[linear-gradient(180deg,#9fcfff,#fff)]">
              <tr className="satoshi-bd h-20 text-base leading-[1.2] text-black md:h-[8.3vw] md:text-[clamp(0.875rem,1.93vw,1.75rem)]">
                <th
                  scope="col"
                  className="rounded-tl-[clamp(10px,1vw,16px)] border-b border-r border-[#a7c6e4]/25 px-4 py-5 align-top md:px-[2vw] md:py-[1.9vw]"
                >
                  {content.columns.factor}
                </th>
                <th
                  scope="col"
                  className="border-b border-[#a7c6e4]/25 px-5 py-5 align-top md:px-[4.8vw] md:py-[1.9vw]"
                >
                  {content.columns.inHouse}
                </th>
                <th
                  scope="col"
                  className="rounded-t-[clamp(10px,1vw,16px)] border-b border-white/15 bg-[linear-gradient(110deg,#0069e8,#08439d)] px-5 py-5 align-top text-white md:px-[4.1vw] md:py-[1.9vw]"
                >
                  {content.columns.outsourced}
                </th>
              </tr>
            </thead>
            <tbody className="satoshi-md text-xs leading-[1.25] text-black md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
              {content.rows.map((row, index) => {
                const isLast = index === content.rows.length - 1;

                return (
                  <tr
                    key={row.factor}
                    className={`h-12 md:h-[4.55vw] ${isLast ? "md:h-[5.7vw]" : ""}`}
                  >
                    <th
                      scope="row"
                      className={`satoshi-bd border-r border-[#edf0f5] px-4 py-3 text-[#164eff] md:px-[2vw] md:py-[1.3vw] ${isLast ? "" : "border-b"}`}
                    >
                      {row.factor}
                    </th>
                    <td
                      className={`border-[#edf0f5] px-5 py-3 md:px-[4.8vw] md:py-[1.3vw] ${isLast ? "" : "border-b"}`}
                    >
                      <div className="flex items-center gap-1.5 md:gap-[0.55vw]">
                        <ComparisonMark />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td
                      className={`satoshi-bd border-white/15 bg-[linear-gradient(110deg,#0075ff,#0750ba)] px-5 py-3 text-white md:px-[4.1vw] md:py-[1.3vw] ${isLast ? "rounded-b-[clamp(10px,1vw,16px)]" : "border-b"}`}
                    >
                      <div className="flex items-center gap-1.5 md:gap-[0.55vw]">
                        <ComparisonMark included />
                        <span>{row.outsourced}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto mt-6 w-[calc(100%-2.5rem)] text-center md:mt-[3.2vw]">
        <Link
          to={content.buttonLink}
          className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:px-[1.6vw] md:py-[1.25vw] md:text-[clamp(0.625rem,1.3vw,1.1875rem)]"
        >
          {content.buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default InHouseDevelopment;

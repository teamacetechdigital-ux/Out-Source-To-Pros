import { useId } from "react";
import { Link } from "react-router-dom";

function ComparisonMark({ included }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`mt-[0.1em] size-3 shrink-0 md:size-[clamp(8px,1.1vw,16px)] ${included ? "text-[#9bd3ff]" : "text-black"}`}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" />
      <path d={included ? "M5 8L7 10L11 6" : "M6 6L10 10M10 6L6 10"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesignComparison({ content }) {
  const id = useId();

  return (
    <section id="design-comparison" aria-labelledby={`${id}-heading`} className="bg-white pb-10 md:pb-[2vw]">
      <h2 id={`${id}-heading`} className="montserrat-rg mx-auto w-[calc(100%-2.5rem)] text-center text-[28px] font-bold leading-[1.15] text-black md:text-[clamp(1.5rem,3.23vw,2.875rem)]">
        {content.title}<br />
        <span className="bg-[linear-gradient(to_right,transparent,#abc5fc)] pr-1">{content.highlight}</span>
      </h2>
      <div className="mx-auto mt-7 w-[calc(100%-2rem)] max-w-[1424px] rounded-[clamp(14px,1.7vw,24px)] bg-white p-2.5 shadow-[0_3px_18px_rgba(27,80,232,0.09)] md:mt-[4vw] md:w-[85.4%] md:p-[1.2vw]">
        <div role="region" aria-label={content.tableAriaLabel} tabIndex={0} className="overflow-x-auto rounded-[clamp(10px,1vw,16px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8]">
          <table className="w-full min-w-[720px] table-fixed border-separate border-spacing-0 text-left md:min-w-0">
            <caption className="sr-only">{content.tableCaption}</caption>
            <colgroup><col className="w-[20.5%]" /><col className="w-[19.4%]" /><col className="w-[19.4%]" /><col className="w-[19.4%]" /><col className="w-[21.3%]" /></colgroup>
            <thead className="bg-[linear-gradient(180deg,#9fcfff,#fff)]">
              <tr className="montserrat-rg text-base font-bold leading-[1.15] text-black md:text-[clamp(0.875rem,1.93vw,1.75rem)]">
                {content.columns.map((label, index) => (
                  <th key={label} scope="col" className={`whitespace-pre-line px-3 py-5 align-top md:px-[1.2vw] md:py-[1.9vw] ${index === 4 ? "rounded-t-[clamp(10px,1vw,16px)] bg-[linear-gradient(110deg,#006eff,#0644a4)] text-white" : "border-b border-r border-[#a7c6e4]/25 last:border-r-0"}`}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="satoshi-md text-xs leading-[1.25] text-black md:text-[clamp(0.5rem,1.04vw,0.9375rem)]">
              {content.rows.map((row, rowIndex) => (
                <tr key={row.feature}>
                  <th scope="row" className={`satoshi-bd px-3 py-4 align-top text-[#164eff] md:px-[1.2vw] md:py-[1.8vw] ${rowIndex < content.rows.length - 1 ? "border-b border-[#edf0f5]" : ""}`}>{row.feature}</th>
                  {row.values.map((value, index) => (
                    <td key={index} className={`px-3 py-4 align-top md:px-[1.2vw] md:py-[1.8vw] ${index === 3 ? `satoshi-bd border-b border-white/15 bg-[linear-gradient(110deg,#006eff,#0750ba)] text-white ${rowIndex === content.rows.length - 1 ? "rounded-b-[clamp(10px,1vw,16px)] border-b-0" : ""}` : `border-r border-[#edf0f5] ${rowIndex < content.rows.length - 1 ? "border-b" : ""}`}`}>
                      <div className="flex items-start gap-1.5 md:gap-[0.55vw]"><ComparisonMark included={index === 3} /><span>{value}</span></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto mt-6 w-[calc(100%-2.5rem)] text-center md:mt-[3vw]">
        <p className="satoshi-md text-sm leading-[1.3] text-black md:text-[clamp(0.625rem,1.04vw,0.9375rem)]">{content.text}</p>
        <Link to={content.buttonLink} className="montserrat-bd mt-4 inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B50E8] md:mt-[1.4%] md:px-[1.6%] md:py-[1.4%] md:text-[clamp(0.625rem,1.25vw,1.125rem)]">{content.buttonLabel}</Link>
      </div>
    </section>
  );
}

export default DesignComparison;

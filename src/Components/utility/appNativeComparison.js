import { useId } from "react";
import { Link } from "react-router-dom";

function AppNativeComparison({ content }) {
  const id = useId();
  const lastRow = content.rows.length - 1;

  return (
    <section id="native-vs-cross-platform" aria-labelledby={`${id}-heading`} className="relative isolate overflow-hidden pb-14 pt-12 text-white md:pb-[8vw] md:pt-[6vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />
          <span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.5))] pr-1">{content.highlight}</span>
        </h2>
        <p className="satoshi-md mt-5 text-center text-[15px] leading-[1.35] md:mt-[2%] md:text-[clamp(1rem,1.04vw,1.25rem)]">{content.text}</p>

        <div className="mt-7 rounded-[clamp(14px,1.7vw,24px)] border border-white/10 bg-white/8 p-2.5 md:mt-[3.3%] md:p-[1vw]">
          <div role="region" aria-label={content.tableAriaLabel} tabIndex={0} className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <div className="relative min-w-[680px] md:min-w-0">
              {/* Blue card behind the first column */}
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[26%] rounded-[clamp(10px,1.2vw,18px)] bg-[linear-gradient(180deg,#1b6dff,#0846a0)]" />
              <table className="relative w-full table-fixed border-separate border-spacing-0 text-left">
                <caption className="sr-only">{content.tableCaption}</caption>
                <colgroup><col className="w-[26%]" /><col className="w-[34%]" /><col className="w-[40%]" /></colgroup>
                <thead>
                  <tr className="montserrat-rg text-base font-bold leading-[1.2] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
                    {content.columns.map((label) => (
                      <th key={label} scope="col" className="px-4 pb-3 pt-5 align-top md:px-[1.4vw] md:pb-[0.8vw] md:pt-[1.6vw]">{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="satoshi-md text-[15px] leading-[1.35] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
                  {content.rows.map((row, rowIndex) => {
                    const cellClass = `px-4 py-3 align-top md:px-[1.4vw] md:py-[1.1vw] ${rowIndex < lastRow ? "border-b border-dashed border-white/25" : "pb-6 md:pb-[1.6vw]"}`;

                    return (
                      <tr key={row.label}>
                        <th scope="row" className={`font-normal ${cellClass}`}>
                          <span aria-hidden="true">• </span>{row.label}
                        </th>
                        {row.values.map((value, index) => (
                          <td key={index} className={cellClass}>
                            <span aria-hidden="true">• </span>{value}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="satoshi-md mx-auto mt-8 max-w-[66ch] space-y-1.5 text-center text-[15px] leading-[1.35] md:mt-[3.5%] md:text-[clamp(0.9375rem,0.94vw,1.125rem)]">
          {content.notes.map((note, index) => <p key={note} className={index === 0 ? "satoshi-bd" : undefined}>{note}</p>)}
        </div>
        <div className="mt-6 text-center md:mt-[2.5%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-md bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">
            {content.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AppNativeComparison;

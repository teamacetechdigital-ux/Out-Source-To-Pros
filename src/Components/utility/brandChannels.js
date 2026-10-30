import { useId } from "react";
import { Link } from "react-router-dom";

const headerHeight = "h-12 md:h-[clamp(44px,5vw,96px)]";

function Bullet() {
  return <span aria-hidden="true" className="mt-[0.55em] size-1 shrink-0 rounded-[9999px] bg-white" />;
}

function BrandChannels({ content }) {
  const id = useId();
  const lastRow = content.rows.length - 1;

  return (
    <section id="brand-channels" aria-labelledby={`${id}-heading`} className="relative isolate pb-14 pt-16 md:pb-[7vw] md:pt-[8.5vw]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1320px] md:w-[79.2%]">
        <h2 id={`${id}-heading`} className="montserrat-rg text-center text-[28px] font-bold leading-[1.15] text-white md:text-[clamp(1.875rem,3.23vw,3.75rem)]">
          {content.title}<br />{content.subtitle}{" "}<span className="bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.75))] pr-1">{content.highlight}</span>
        </h2>
        <div className="satoshi-md mx-auto mt-5 max-w-[78ch] space-y-2 text-center text-[15px] leading-[1.35] text-white md:mt-[2.4%] md:w-[59.5%] md:space-y-[1%] md:text-[clamp(1rem,1.04vw,1.25rem)]">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        {/* Two background cards sit behind the table columns: blue for channels, glass for applications */}
        <div className="relative mx-auto mt-8 w-full md:mt-[3%] md:w-[69.3%]">
          <div aria-hidden="true" className="absolute bottom-0 left-[34%] right-0 top-12 rounded-[clamp(12px,1.3vw,20px)] border border-white/10 bg-white/10 backdrop-blur-sm md:top-[clamp(44px,5vw,96px)]" />
          <div aria-hidden="true" className="absolute bottom-3 left-0 top-[calc(3rem+8px)] w-[36%] rounded-[clamp(12px,1.3vw,20px)] bg-[linear-gradient(180deg,#0075ff,#1b50e8)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:bottom-[0.6vw] md:top-[calc(clamp(44px,5vw,96px)+0.6vw)]" />
          <table className="relative w-full table-fixed border-separate border-spacing-0 text-left text-white">
            <caption className="sr-only">{content.tableCaption}</caption>
            <colgroup><col className="w-[36%]" /><col /></colgroup>
            <thead>
              <tr className="montserrat-rg text-base font-bold leading-[1.2] md:text-[clamp(1.25rem,1.45vw,1.75rem)]">
                <th scope="col" className={`${headerHeight} px-3 align-top md:px-[5%]`}>{content.columns.channel}</th>
                <th scope="col" className={`${headerHeight} pl-6 pr-3 align-top md:pl-[5%]`}>{content.columns.application}</th>
              </tr>
            </thead>
            <tbody className="satoshi-md text-[13px] leading-[1.3] md:text-[clamp(1rem,1.04vw,1.25rem)]">
              {content.rows.map((row, index) => {
                const rowBorder = index < lastRow ? "border-b border-dashed border-white/25" : "";
                const rowSpacing = `${index === 0 ? "pt-5 md:pt-[2.4vw]" : ""} ${index === lastRow ? "pb-6 md:pb-[2.6vw]" : ""}`;

                return (
                  <tr key={row.channel}>
                    <th scope="row" className={`px-3 font-normal md:px-[5%] ${rowSpacing}`}>
                      <span className={`flex gap-2 py-3 md:gap-[4%] md:py-[1.15vw] ${rowBorder}`}><Bullet />{row.channel}</span>
                    </th>
                    <td className={`pl-6 pr-3 md:pl-[5%] md:pr-[3%] ${rowSpacing}`}>
                      <span className={`flex gap-2 py-3 md:gap-[1.2%] md:py-[1.15vw] ${rowBorder}`}><Bullet />{row.application}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center md:mt-[3.4%]">
          <Link to={content.buttonLink} className="montserrat-bd inline-flex max-w-full items-center justify-center rounded-sm bg-[#1B50E8] px-5 py-3 text-center text-xs uppercase leading-[1.3] text-white transition-colors hover:bg-[#1242c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-[2%] md:py-[1.4%] md:text-[clamp(1.0625rem,1.25vw,1.5rem)]">{content.buttonLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default BrandChannels;

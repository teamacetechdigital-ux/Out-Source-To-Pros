import React, { useCallback, useEffect, useRef, useState } from "react";
import { withBreaks } from "../../utils/text";

// Column widths from the homepage Figma table; pages can pass their own.
const defaultColumnWidths = [19, 18, 18, 18, 20];

const tableCardStyle = {
  boxShadow: "0px 10px 40px rgba(27, 80, 232, 0.12)",
};

const headerCellStyle = {
  background: "linear-gradient(180deg, #A1D1FF 0%, #FFFFFF 100%)",
};

const highlightBackground = "linear-gradient(180deg, #1B50E8 0%, #0075FF 100%)";

function CrossIcon() {
  return (
    <svg
      className="mt-[3px] h-[18px] w-[18px] shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8.5" stroke="#1E1E1E" strokeWidth="1.5" />
      <path
        d="M7.2 7.2l5.6 5.6M12.8 7.2l-5.6 5.6"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-[3px] h-[18px] w-[18px] shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8.5" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M6.5 10.2l2.4 2.4 4.6-4.9"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhyAgencies({ content }) {
  const { columns, rows } = content.table;
  const columnWidths = content.table.columnWidths || defaultColumnWidths;
  const totalWidth = columnWidths.reduce((sum, width) => sum + width, 0);
  const lastColumn = columns.length - 1;
  const tableRef = useRef(null);
  const [scrollbar, setScrollbar] = useState({ size: 1, offset: 0 });

  // Custom scrollbar under the table: phones hide the native one, so this
  // shows how much of the table is visible and where it is scrolled to.
  const updateScrollbar = useCallback(() => {
    const table = tableRef.current;
    if (!table) return;
    const size = table.clientWidth / table.scrollWidth;
    const maxScroll = table.scrollWidth - table.clientWidth;
    const offset = maxScroll > 0 ? (table.scrollLeft / maxScroll) * (1 - size) : 0;
    setScrollbar({ size, offset });
  }, []);

  useEffect(() => {
    updateScrollbar();
    window.addEventListener("resize", updateScrollbar);
    return () => window.removeEventListener("resize", updateScrollbar);
  }, [updateScrollbar]);

  return (
    <section className="why-agencies-section relative z-10 pb-16 lg:pb-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="start-txt-2 text-center">
          <h2 className="montserrat-rg font-bold text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] text-black">
            {content.title}
            {" "}<br className="hidden sm:block" />
            <span>{content.highlight}</span>
          </h2>
          <p className="satoshi-md text-[15px] font-medium text-black">
            {withBreaks(content.description)}
          </p>
        </div>

        {/* Shown above the table so it's visible before the long rows */}
        {scrollbar.size < 1 && (
          <div
            className="relative mx-auto mt-6 h-2 w-full max-w-[320px] overflow-hidden rounded-[9999px] bg-[#E5E9F2]"
            aria-hidden="true"
          >
            <div
              className="absolute inset-y-0 rounded-[9999px] bg-[#1B50E8]"
              style={{
                width: `${scrollbar.size * 100}%`,
                left: `${scrollbar.offset * 100}%`,
              }}
            />
          </div>
        )}

        <div
          ref={tableRef}
          onScroll={updateScrollbar}
          role="region" aria-label={content.tableAriaLabel} tabIndex={0}
          className="mt-4 max-w-full overflow-x-auto overscroll-x-contain rounded-[20px] bg-white p-3 [scrollbar-width:none] lg:mt-12 xl:-mx-7 xl:max-w-none [&::-webkit-scrollbar]:hidden"
          style={tableCardStyle}
        >
          <div
            className="relative grid"
            style={{
              gridTemplateColumns: columnWidths.map((width) => `${width}fr`).join(" "),
              minWidth: columns.length >= 5 ? 880 : 640,
            }}
          >
            <div
              className="pointer-events-none absolute inset-y-0 right-0 rounded-xl"
              style={{
                width: `calc(100% * ${columnWidths[lastColumn]} / ${totalWidth})`,
                background: highlightBackground,
              }}
              aria-hidden="true"
            />

            {columns.map((column, index) => {
              const isHighlight = index === lastColumn;
              return (
                <div
                  key={index}
                  className={`relative px-6 pb-10 pt-8 montserrat-rg text-[22px] xl:text-[26px] font-bold leading-tight ${
                    isHighlight ? "text-white" : "text-black"
                  } ${index === 0 ? "rounded-tl-xl" : ""} ${
                    index > 0 && index < lastColumn ? "border-l border-[#E5E9F2]" : ""
                  }`}
                  style={isHighlight ? undefined : headerCellStyle}
                >
                  {withBreaks(column)}
                </div>
              );
            })}

            {rows.map((row) => (
              <React.Fragment key={row.feature}>
                <div className="relative border-t border-[#E5E9F2] px-6 py-6 montserrat-rg text-base lg:text-[15px] font-bold text-[#1B50E8]">
                  {row.feature}
                </div>
                {(row.cells || [row.freelancers, row.agencies, row.fullTime]).map((text) => (
                  <div
                    key={text}
                    className="relative flex items-start gap-2 border-l border-t border-[#E5E9F2] px-4 py-6"
                  >
                    <CrossIcon />
                    <p className="satoshi-md text-base font-medium leading-[1.4] text-[#1E1E1E]">
                      {text}
                    </p>
                  </div>
                ))}
                <div className="relative flex items-start gap-2 px-4 py-6">
                  <CheckIcon />
                  <p className="satoshi-bd text-base leading-[1.4] text-white">
                    {row.highlight || row.outsource}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyAgencies;

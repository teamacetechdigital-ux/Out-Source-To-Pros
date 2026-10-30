import { Fragment } from "react";

const breakClasses = { sm: "hidden sm:block", lg: "hidden lg:block" };

export function withBreaks(text, mode = "sm") {
  if (!text) return null;

  return text.split("\n").map((line, index) => (
    <Fragment key={index}>
      {index > 0 &&
        (mode === "always" ? (
          <br />
        ) : (
          <>
            {" "}
            <br className={breakClasses[mode]} />
          </>
        ))}
      {line}
    </Fragment>
  ));
}

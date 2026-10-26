import { Fragment } from "react";

// Turns "\n" in JSON text into line breaks.
// mode "sm" (default) breaks only from the sm breakpoint up, like the rest of
// the site; "lg" only from lg up (for text that wraps on tablets); "always"
// breaks on every screen size.
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

import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.svg";
import site from "../../data/site.json";
import { withBreaks } from "../../utils/text";

// theme "light" is for pages with a light hero: dark logo text, links and menu button.
function Header({ content = site.header, theme = "dark" }) {
  const [open, setOpen] = useState(false);
  const light = theme === "light";

  return (
    <header className="main-header py-5 lg:py-8" onKeyDown={(event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("navigation-toggle")?.focus();
      }
    }}>
      <div className="custom-container relative px-5 sm:px-8 lg:px-12">
        <div className="out-nav flex items-center justify-between gap-4">
          <Link to="/" aria-label={content.logo.homeLabel} className="out-logo flex shrink-0 items-center gap-3">
            <img src={Logo} alt={content.logo.alt} className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
            <span className={`satoshi-bd text-lg uppercase leading-tighttracking-wide sm:text-xl lg:text-2xl ${light ? "text-black" : "text-white"}`}>{withBreaks(content.logo.text, "always")}</span>
          </Link>
          <button
            id="navigation-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-navigation"
            aria-label={open ? content.menuCloseLabel : content.menuOpenLabel}
            onClick={() => setOpen(!open)}
            className={`flex h-12 w-12 items-center justify-center rounded-lg border focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden ${
              light
                ? "border-black/30 text-black focus-visible:outline-black"
                : "border-white/40 text-white focus-visible:outline-white"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
            </svg>
          </button>
          <nav id="site-navigation" aria-label={content.navLabel} className={`${open ? "block" : "hidden"} absolute inset-x-5 top-full z-50 mt-4 rounded-xl border border-white/20 bg-[#0A1653] p-3 shadow-xl sm:inset-x-8 lg:static lg:mt-0 lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
            <ul className="satoshi-md flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-5 xl:gap-10">
              {content.links.map(({ label, href }) => (
                <li key={href}><Link to={href} onClick={() => setOpen(false)} className={`block rounded-md px-3 py-3 text-lg text-white hover:bg-white/10 lg:px-0 lg:text-xl ${light ? "lg:text-black" : ""}`}>{label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

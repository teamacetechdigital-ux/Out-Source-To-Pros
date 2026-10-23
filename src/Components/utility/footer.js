import { useEffect, useRef } from "react";
import Logo from "../../assets/imgs/logo.svg";

const footerStyle = {
  background:
    "radial-gradient(ellipse at 100% 100%, #1B50E8 0%, rgba(27,80,232,0) 45%), linear-gradient(180deg, #FFFFFF 0%, #6F96F5 8%, #1B50E8 18%, #0B2A8C 35%, #111111 70%)",
};

const iconBoxClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#1B50E8] text-white";

const quickLinks = ["About Us", "Services", "Contact", "Testimonials", "FAQs", "Contact"];

const columns = [
  {
    title: "Services",
    links: [
      "Web Design",
      "Web Development",
      "WordPress",
      "Shopify",
      "Search Engine Optimization",
      "Technical SEO",
      "Local SEO",
      "Content Marketing",
      "Paid Media",
      "AI Automation",
      "Software Development",
      "Mobile Apps",
      "Branding",
      "Website Maintenance",
      "White-Label Services",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Startups",
      "Small Businesses",
      "Growing Companies",
      "Enterprise",
      "Ecommerce",
      "SaaS",
      "Professional Services",
      "Agencies",
      "Dedicated Teams",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Guides",
      "Case Studies",
      "Free Tools",
      "Website Cost Calculator",
      "SEO Audit Tool",
      "Resource Center",
      "Knowledge Center",
      "FAQs",
    ],
  },
  {
    title: "Company",
    links: ["About", "Our Process", "Work", "Careers", "Contact", "Agency Partnerships"],
  },
];

const legalLinks = ["Privacy Policy", "Terms and Conditions", "Accessibility", "Cookie Policy"];

const iconProps = {
  className: "h-4 w-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const socials = [
  {
    label: "Facebook",
    icon: (
      <svg {...iconProps} fill="currentColor" stroke="none">
        <path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v7h4v-7H16l.5-4h-3V8.8c0-.5.3-.8.5-.8z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" />
      </svg>
    ),
  },
];

function Footer() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation;

    const updateAnimation = () => {
      animation?.cancel();
      if (reducedMotion.matches) return;

      animation = marqueeRef.current.animate(
        [{ transform: "translateX(-50%)" }, { transform: "translateX(0)" }],
        { duration: 50000, iterations: Infinity, easing: "linear" },
      );
    };

    updateAnimation();
    reducedMotion.addEventListener("change", updateAnimation);

    return () => {
      animation?.cancel();
      reducedMotion.removeEventListener("change", updateAnimation);
    };
  }, []);

  return (
    <footer
      className="relative -mt-24 overflow-hidden pt-40 text-white sm:-mt-[120px] lg:pt-[200px] [overflow-wrap:anywhere]"
      style={footerStyle}
    >
      <div className="custom-container relative px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1.2fr] xl:gap-16 [&>*]:min-w-0">
          <div className="md:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Outsource to Pros" className="w-16 shrink-0 sm:w-24" />
              <span className="satoshi-bd text-2xl sm:text-3xl lg:text-4xl uppercase leading-none tracking-wide">
                outsource
                <br /> to pros
              </span>
            </div>
            <p className="satoshi-md pt-8 text-base leading-[1.5]">
              Outsource to Pros helps US businesses and agencies plan, build,
              market, improve, and support their digital operations through
              connected strategy, design, development, SEO, content, paid
              media, automation, software, and technical services.
            </p>
          </div>

          <div>
            <h4 className="satoshi-md text-xl sm:text-2xl lg:text-3xl text-white/90">Quick Links</h4>
            <ul className="satoshi-md mt-5 space-y-1 text-base">
              {quickLinks.map((link, index) => (
                <li key={`${link}-${index}`}>
                  <a href="#" className="hover:text-[#A1D1FF]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="satoshi-md text-xl sm:text-2xl lg:text-3xl text-white/90">Contact</h4>
            <ul className="satoshi-md mt-5 space-y-4 text-base">
              <li className="flex items-center gap-4">
                <span className={iconBoxClass}>
                  <svg {...iconProps}>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                  </svg>
                </span>
                <a href="tel:+17203384491">(720) 338-4491</a>
              </li>
              <li className="flex items-center gap-4">
                <span className={iconBoxClass}>
                  <svg {...iconProps}>
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
                <span>
                  6501 E. Belleview Ave, Suite 110
                  <br /> Greenwood Village, CO 80111
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className={iconBoxClass}>
                  <svg {...iconProps}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <a href="mailto:info@outsourcetopros.com">info@outsourcetopros.com</a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B50E8]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-10 lg:mt-14 lg:grid-cols-4 [&>*]:min-w-0 border-t border-white/20 pt-10">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="satoshi-md text-xl sm:text-2xl lg:text-3xl">{column.title}</h4>
              <ul className="satoshi-md mt-4 space-y-1 text-base">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#A1D1FF]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Equal groups fill the footer width and loop seamlessly to the right. */}
      <div
        className="pointer-events-none -mt-8 w-full lg:-mt-28 overflow-hidden select-none montserrat-rg text-[clamp(64px,14vw,220px)] font-extrabold leading-none text-white/10"
        aria-hidden="true"
      >
        <div ref={marqueeRef} className="flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex min-w-[100vw] shrink-0 justify-around">
              <span className="shrink-0 pr-16">OUTSOURCE</span>
              <span className="shrink-0 pr-16">OUTSOURCE</span>
            </div>
          ))}
        </div>
      </div>

      <div className="custom-container relative px-5 sm:px-8 lg:px-12">
        <div className="satoshi-md flex flex-col items-start justify-between gap-5 border-t lg:flex-row lg:items-center border-white/20 py-8 text-sm">
          <p>© Copyright, 2026. All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#A1D1FF]">
                  • {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react'
import marqueeIcon1 from "../../assets/imgs/marquee-icon1.svg";
import marqueeIcon2 from "../../assets/imgs/marquee-icon2.svg";
import marqueeIcon3 from "../../assets/imgs/marquee-icon3.svg";
import marqueeIcon4 from "../../assets/imgs/marquee-icon4.svg";
import marqueeIcon5 from "../../assets/imgs/marquee-icon5.svg";
import marqueeIcon6 from "../../assets/imgs/marquee-icon6.svg";
import marqueeIcon7 from "../../assets/imgs/marquee-icon7.svg";
import marqueeIcon8 from "../../assets/imgs/marquee-icon8.svg";
import marqueeIcon9 from "../../assets/imgs/marquee-icon9.svg";
import marqueeIcon10 from "../../assets/imgs/marquee-icon10.svg";
import marqueeIcon11 from "../../assets/imgs/marquee-icon11.svg";
import marqueeIcon12 from "../../assets/imgs/marquee-icon12.svg";
import marqueeIcon13 from "../../assets/imgs/marquee-icon13.svg";

const marqueeItems = [
  { icon: marqueeIcon1, label: "WordPress" },
  { icon: marqueeIcon2, label: "Shopify" },
  { icon: marqueeIcon3, label: "Webflow" },
  { icon: marqueeIcon4, label: "Duda" },
  { icon: marqueeIcon5, label: "GoHighLevel" },
  { icon: marqueeIcon6, label: "React" },
  { icon: marqueeIcon7, label: "Next.js" },
  { icon: marqueeIcon8, label: "Python" },
  { icon: marqueeIcon9, label: "Flutter" },
  { icon: marqueeIcon10, label: "AWS" },
  { icon: marqueeIcon11, label: "Google Cloud" },
  { icon: marqueeIcon12, label: "HubSpot" },
  { icon: marqueeIcon13, label: "Stripe" },
];

function Marquee() {
  const renderButtons = (duplicate = false) => (
    <div className="marquee-track-group" aria-hidden={duplicate}>
      {marqueeItems.map(({ icon, label }, index) => (
        <button
          className="marquee-icon-button flex items-center justify-center uppercase montserrat-bd font-bold text-1xl text-black"
          aria-label={label}
          key={`${label}-${duplicate ? "duplicate" : "original"}`}
          tabIndex={duplicate ? -1 : 0}
        >
          <img src={icon} alt="" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <section className="marquee-section">
        <div className="marquee-row marquee-row-left">
          {renderButtons()}
          {renderButtons(true)}
        </div>
        <div className="marquee-row marquee-row-right">
          {renderButtons()}
          {renderButtons(true)}
        </div>
      </section>
    </>
  )
}

export default Marquee
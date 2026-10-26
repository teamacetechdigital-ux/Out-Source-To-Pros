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

const icons = {
  wordpress: marqueeIcon1,
  shopify: marqueeIcon2,
  webflow: marqueeIcon3,
  duda: marqueeIcon4,
  goHighLevel: marqueeIcon5,
  react: marqueeIcon6,
  nextjs: marqueeIcon7,
  python: marqueeIcon8,
  flutter: marqueeIcon9,
  aws: marqueeIcon10,
  googleCloud: marqueeIcon11,
  hubspot: marqueeIcon12,
  stripe: marqueeIcon13,
};

function Marquee({ content }) {
  const renderButtons = (duplicate = false) => (
    <div className="marquee-track-group" aria-hidden={duplicate}>
      {content.items.map(({ icon, label }, index) => (
        <button
          className="marquee-icon-button flex items-center justify-center uppercase montserrat-bd font-bold text-1xl text-black"
          aria-label={label}
          key={`${label}-${duplicate ? "duplicate" : "original"}`}
          tabIndex={duplicate ? -1 : 0}
        >
          <img src={icons[icon]} alt="" />
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
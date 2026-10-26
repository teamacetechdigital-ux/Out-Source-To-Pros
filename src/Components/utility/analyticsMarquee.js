import analytics1 from "../../assets/imgs/seo/analytics-1.png";
import analytics2 from "../../assets/imgs/seo/analytics-2.png";
import analytics3 from "../../assets/imgs/seo/analytics-3.png";
import analytics4 from "../../assets/imgs/seo/analytics-4.png";
import analytics5 from "../../assets/imgs/seo/analytics-5.png";
import analytics6 from "../../assets/imgs/seo/analytics-6.png";
import analytics7 from "../../assets/imgs/seo/analytics-7.png";
import analytics8 from "../../assets/imgs/seo/analytics-8.png";

// Images by JSON key.
const images = {
  analytics1,
  analytics2,
  analytics3,
  analytics4,
  analytics5,
  analytics6,
  analytics7,
  analytics8,
};

const cardStyle = {
  boxShadow: "0px 10px 30px rgba(27, 80, 232, 0.12)",
};

const placeholderStyle = {
  background: "linear-gradient(135deg, #EEF4FF 0%, #D6E4FF 100%)",
};

function AnalyticsCard({ image, caption }) {
  const src = images[image];

  return (
    <figure
      className="relative m-0 w-[250px] shrink-0 -rotate-2 rounded-lg border-2 border-[#A1D1FF] bg-white p-1.5 sm:w-[340px] lg:w-[440px]"
      style={cardStyle}
    >
      {src ? (
        <img
          src={src}
          alt={caption}
          className="block aspect-[440/170] w-full rounded-md object-cover object-left-top"
        />
      ) : (
        <div
          className="aspect-[440/170] w-full rounded-md border border-[#A1D1FF]"
          style={placeholderStyle}
        />
      )}
      <figcaption className="satoshi-bd absolute -bottom-2.5 left-2 rounded-sm bg-black px-2 py-0.5 text-[9px] text-white sm:text-[10px]">
        {caption}
      </figcaption>
    </figure>
  );
}

function AnalyticsMarquee({ content }) {
  const [rowOne = [], rowTwo = []] = content.rows;

  const renderGroup = (cards, duplicate = false) => (
    <div className="marquee-track-group" aria-hidden={duplicate}>
      {cards.map((card) => (
        <AnalyticsCard
          key={`${card.image}-${duplicate ? "duplicate" : "original"}`}
          image={card.image}
          caption={card.caption}
        />
      ))}
    </div>
  );

  return (
    <section
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-label={content.ariaLabel}
    >
      <div className="marquee-row marquee-row-left py-4">
        {renderGroup(rowOne)}
        {renderGroup(rowOne, true)}
      </div>
      <div className="marquee-row marquee-row-right py-4">
        {renderGroup(rowTwo)}
        {renderGroup(rowTwo, true)}
      </div>
    </section>
  );
}

export default AnalyticsMarquee;

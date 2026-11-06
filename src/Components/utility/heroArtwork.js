import { useId } from "react";
import "./heroArtwork.css";

function HeroArtwork({ artwork, alt }) {
  const id = useId();
  const { image, width, height, icons, connectors, repairs = [] } = artwork;
  const source = `#${id}-image`;
  const maskUrl = (name) => `url(#${id}-${name})`;

  return (
    <svg
      className="hero-artwork"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label={alt}
    >
      <defs>
        <image id={`${id}-image`} href={image} width={width} height={height} />
        <mask id={`${id}-base`} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
          <rect width={width} height={height} fill="white" />
          {icons.map(({ crop }) => (
            <rect key={crop.x} {...crop} fill="black" />
          ))}
          {connectors.map(({ d, cut = d, dot }) => (
            <g key={d} fill="black">
              <path d={cut} fill="none" stroke="black" strokeWidth="5" />
              {dot && <circle cx={dot[0]} cy={dot[1]} r="9" />}
            </g>
          ))}
        </mask>

        {repairs.map(({ d, dot }, index) => (
          <mask key={d ?? dot.join(",")} id={`${id}-repair-${index}`} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
            {dot ? (
              <circle cx={dot[0]} cy={dot[1]} r="9" fill="white" />
            ) : (
              <path d={d} fill="none" stroke="white" strokeWidth="5" />
            )}
          </mask>
        ))}
        {icons.map(({ crop }, index) => (
          <clipPath key={crop.x} id={`${id}-icon-${index}`}>
            <rect {...crop} />
          </clipPath>
        ))}
        {connectors.map(({ d }, index) => (
          <mask key={d} id={`${id}-line-${index}`} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
            <path
              className="hero-artwork__reveal"
              d={d}
              pathLength="1"
              stroke="white"
              strokeWidth="5"
              style={{ "--hero-line-delay": `${120 + index * 150}ms` }}
            />
          </mask>
        ))}
      </defs>

      <use href={source} mask={maskUrl("base")} />
      {repairs.map(({ d, dot, x = 0, y = 0 }, index) => (
        <g key={d ?? dot.join(",")} mask={maskUrl(`repair-${index}`)}>
          <use href={source} x={x} y={y} />
        </g>
      ))}
      {connectors.map(({ d, color, dash, dot }, index) => (
        <g key={d} style={{ "--hero-line-delay": `${120 + index * 150}ms` }}>
          <path
            d={d}
            mask={maskUrl(`line-${index}`)}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray={dash}
          />
          {dot && <circle className="hero-artwork__dot" cx={dot[0]} cy={dot[1]} r="7" fill="#1B50E8" />}
        </g>
      ))}
      {icons.map(({ crop, backing }, index) => (
        <g key={crop.x}>
          {backing && <rect {...crop} fill={backing} />}
          <g
            className="hero-artwork__icon"
            style={{
              "--hero-float-delay": `${index * -390}ms`,
              "--hero-float-duration": `${1350 + index * 160}ms`,
              "--hero-float-x": `${width * (index % 2 ? -0.006 : 0.006)}px`,
              "--hero-float-y": `${height * -0.012}px`,
            }}
          >
            <use href={source} clipPath={maskUrl(`icon-${index}`)} />
          </g>
        </g>
      ))}
    </svg>
  );
}

export default HeroArtwork;

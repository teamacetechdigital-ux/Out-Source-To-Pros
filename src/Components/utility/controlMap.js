import { withBreaks } from "../../utils/text";

const headingHighlightStyle = {
  background: "linear-gradient(to right, #1b50e80f, #a1d1ffba)",
  padding: "0rem 0.5rem 0rem 0rem",
};

const nodeStyle = {
  boxShadow: "0px 10px 30px rgba(27, 80, 232, 0.08)",
};

// Desktop position of each card (percent of the map box), as in Figma.
const NODE_WIDTH = 24;
const NODE_HALF_HEIGHT = 12;
const nodeLayout = {
  accountOwnership: { left: 0, top: 0 },
  permissionControl: { left: 31.3, top: 7.5 },
  confidentiality: { left: 63.6, top: 0.6 },
  changeApproval: { left: 6.6, top: 44.8 },
  documentation: { left: 42.6, top: 40.3 },
  transparentReporting: { left: 76, top: 47.1 },
  controlledAccess: { left: 32.9, top: 75.6 },
};

const connections = [
  ["accountOwnership", "permissionControl"],
  ["permissionControl", "confidentiality"],
  ["permissionControl", "documentation"],
  ["permissionControl", "changeApproval"],
  ["confidentiality", "transparentReporting"],
  ["documentation", "controlledAccess"],
];

// Lines run between card centres; the white cards cover the ends.
const centre = (id) => ({
  x: nodeLayout[id].left + NODE_WIDTH / 2,
  y: nodeLayout[id].top + NODE_HALF_HEIGHT,
});

function NodeCard({ node, className = "", style }) {
  return (
    <div
      className={`rounded-xl border border-[#1B50E8]/60 bg-white px-4 py-4 text-center xl:px-5 ${className}`}
      style={{ ...nodeStyle, ...style }}
    >
      <h3 className="montserrat-rg text-base font-bold leading-tight text-black xl:text-lg">
        {node.title}
      </h3>
      <p className="satoshi-md pt-2 text-[13px] leading-[1.45] text-black">
        {node.text}
      </p>
    </div>
  );
}

function ControlMap({ content }) {
  const placedNodes = content.nodes.filter((node) => nodeLayout[node.id]);
  const lines = connections.filter(
    ([from, to]) =>
      placedNodes.some((node) => node.id === from) &&
      placedNodes.some((node) => node.id === to),
  );

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="custom-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="montserrat-rg text-[30px] font-bold leading-[1.2] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px]">
            {withBreaks(content.title)}{" "}
            <span style={headingHighlightStyle}>{content.highlight}</span>
          </h2>
        </div>
        <p className="satoshi-md mx-auto max-w-[760px] pt-5 text-center text-[15px] leading-[1.5] text-black">
          {withBreaks(content.description)}
        </p>

        {/* Desktop: cards placed as a connected map */}
        <div className="relative mt-12 hidden h-[640px] lg:block xl:h-[580px]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {lines.map(([from, to]) => {
              const a = centre(from);
              const b = centre(to);
              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="#D6D6D6"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
          {placedNodes.map((node) => (
            <NodeCard
              key={node.id}
              node={node}
              className="absolute"
              style={{
                left: `${nodeLayout[node.id].left}%`,
                top: `${nodeLayout[node.id].top}%`,
                width: `${NODE_WIDTH}%`,
              }}
            />
          ))}
        </div>

        {/* Phones and tablets: simple grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {content.nodes.map((node) => (
            <NodeCard
              key={node.id}
              node={node}
              className="sm:last:odd:col-span-2 sm:last:odd:mx-auto sm:last:odd:w-[calc(50%-0.5rem)]"
            />
          ))}
        </div>

        <div className="mt-12 border-t border-[#E5E5E5] pt-8 text-center sm:mt-14 sm:pt-10">
          <button
            type="button"
            className="montserrat-bd rounded-md bg-[#1B50E8] px-8 py-4 text-base font-bold uppercase text-white lg:text-lg"
          >
            {content.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ControlMap;

// Background used across the Figma design: a "Work" frame with four blurred ellipses
// (Ellipse 43, 42, 41, 40 from bottom to top) over a 10% white fill. Every section uses the
// same ellipses; only the frame size and the vertical offset of the group change.
// Each blurred ellipse is drawn as a radial gradient whose falloff follows the Figma layer blur
// (sigma = 0.4 x blur, checked against Figma exports of these frames), which is much lighter
// for the browser than CSS blur(). Frames are often mirrored in Figma, hence flipX / flipY.

const ellipses = [
  { x: -359, y: 0, w: 3488, h: 3488, blur: 500 },
  { x: -297, y: -201, w: 2562, h: 2562, blur: 500 },
  { x: 707, y: 684, w: 1618, h: 1618, blur: 500 },
  { x: 295, y: -59, w: 2233, h: 1894, blur: 621 },
];

// Fill colour and opacity of Ellipse 43, 42, 41, 40.
const palettes = {
  dark: [[255, 255, 255, 1], [0, 76, 199, 1], [10, 43, 97, 1], [16, 16, 16, 1]],
  hero: [[255, 255, 255, 1], [48, 134, 255, 0.8], [27, 80, 232, 0.6], [10, 22, 83, 0.7]],
};

const STEPS = 14;
const SIGMA_PER_BLUR = 0.4;

// Normal CDF via the Abramowitz-Stegun erf approximation.
function normalCdf(z) {
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const erf = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return z >= 0 ? (1 + erf) / 2 : (1 - erf) / 2;
}

const percent = (value, total) => `${((value / total) * 100).toFixed(3)}%`;

function ellipseGradient({ x, y, w, h, blur }, [r, g, b, opacity], frame) {
  const sigma = blur * SIGMA_PER_BLUR;
  const radius = (w + h) / 4;
  const reach = radius + 3 * sigma;
  const stops = Array.from({ length: STEPS + 1 }, (_, index) => {
    const t = index / STEPS;
    const alpha = normalCdf((radius - t * reach) / sigma) * opacity;
    return `rgba(${r},${g},${b},${alpha.toFixed(3)}) ${(t * 100).toFixed(1)}%`;
  });
  const size = `${percent(w / 2 + 3 * sigma, frame.width)} ${percent(h / 2 + 3 * sigma, frame.height)}`;
  const cx = frame.shiftX + x + w / 2;
  const cy = frame.offset + y + h / 2;
  const center = `${percent(frame.flipX ? frame.width - cx : cx, frame.width)} ${percent(frame.flipY ? frame.height - cy : cy, frame.height)}`;
  return `radial-gradient(ellipse ${size} at ${center}, ${stops.join(", ")})`;
}

// frame: { height, offset, flipX, flipY, palette } from the Figma "Work" frame (offset = y of
// Ellipse 43); width / shiftX default to a full-width 1920 frame.
export function figmaBackdropStyle({ height, offset, width = 1920, shiftX = 0, flipX = false, flipY = false, palette = "dark" }) {
  const colors = palettes[palette];
  const frame = { width, height, offset, shiftX, flipX, flipY };
  // CSS paints the first background on top, so list Ellipse 40 first.
  const layers = ellipses.map((ellipse, index) => ellipseGradient(ellipse, colors[index], frame)).reverse();
  return { backgroundColor: "#fff", backgroundImage: layers.join(", ") };
}

// Design px (1920 wide frame) to vw, so insets scale with the layout.
const toVw = (px = 0) => `${(px / 19.2).toFixed(3)}vw`;

// Wraps sections that share one Figma background frame. frame.top / frame.bottom (design px)
// say where the Figma frame starts and ends inside the wrapped sections; negative values let a
// frame begin above the wrapper and get clipped, as it does in the design. clip={false} keeps
// negative margins of the first section working (they collapse through an unclipped wrapper).
// frame.phone / frame.tablet / frame.laptop ({ top, bottom } in px) move the frame below 1536px, where sections
// are much taller than in the design and a stretched white fade could otherwise sit behind white text.
function FigmaBackdrop({ frame, clip = true, className = "", children }) {
  const top = toVw(frame.top);
  const bottom = toVw(frame.bottom);
  const laptop = frame.laptop ? { top: `${frame.laptop.top}px`, bottom: `${frame.laptop.bottom}px` } : { top, bottom };
  const tablet = frame.tablet ? { top: `${frame.tablet.top}px`, bottom: `${frame.tablet.bottom}px` } : { top, bottom };
  const phone = frame.phone ? { top: `${frame.phone.top}px`, bottom: `${frame.phone.bottom}px` } : tablet;
  const layerStyle = {
    ...figmaBackdropStyle(frame),
    "--frame-top": top,
    "--frame-bottom": bottom,
    "--frame-laptop-top": laptop.top,
    "--frame-laptop-bottom": laptop.bottom,
    "--frame-tablet-top": tablet.top,
    "--frame-tablet-bottom": tablet.bottom,
    "--frame-phone-top": phone.top,
    "--frame-phone-bottom": phone.bottom,
  };

  return (
    <div className={`relative isolate bg-white ${clip ? "overflow-hidden" : ""} ${className}`}>
      <div aria-hidden="true" data-frame={JSON.stringify(frame)} className="pointer-events-none absolute inset-x-0 -z-10 top-(--frame-phone-top) bottom-(--frame-phone-bottom) md:top-(--frame-tablet-top) md:bottom-(--frame-tablet-bottom) lg:top-(--frame-laptop-top) lg:bottom-(--frame-laptop-bottom) 2xl:top-(--frame-top) 2xl:bottom-(--frame-bottom)" style={layerStyle} />
      {children}
    </div>
  );
}

export default FigmaBackdrop;

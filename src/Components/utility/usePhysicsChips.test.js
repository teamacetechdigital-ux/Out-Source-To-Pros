import { useRef } from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import usePhysicsChips from "./usePhysicsChips";

function Fixture() {
  const ref = useRef(null);
  usePhysicsChips(ref);
  return (
    <div ref={ref} data-testid="stage" tabIndex={0}>
      <span data-agency-chip="test" data-testid="chip">Creative UI</span>
    </div>
  );
}

let frames;
let nextFrame;
let clock;
let onIntersection;
let onResize;
let resizeObserver;
let intersectionObserver;
let media;

beforeEach(() => {
  frames = new Map();
  nextFrame = 0;
  clock = 0;
  jest.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
    frames.set(++nextFrame, callback);
    return nextFrame;
  });
  jest.spyOn(window, "cancelAnimationFrame").mockImplementation((id) => frames.delete(id));
  media = { matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() };
  window.matchMedia = jest.fn(() => media);
  window.IntersectionObserver = jest.fn((callback) => {
    onIntersection = callback;
    intersectionObserver = { observe: jest.fn(), disconnect: jest.fn() };
    return intersectionObserver;
  });
  window.ResizeObserver = jest.fn((callback) => {
    onResize = callback;
    resizeObserver = { observe: jest.fn(), disconnect: jest.fn() };
    return resizeObserver;
  });
});

afterEach(() => jest.restoreAllMocks());

async function mount() {
  const view = render(<Fixture />);
  const stage = view.getByTestId("stage");
  const chip = view.getByTestId("chip");
  const size = { width: 400, height: 420 };
  Object.defineProperties(stage, {
    clientWidth: { get: () => size.width },
    clientHeight: { get: () => size.height },
  });
  Object.defineProperties(chip, {
    offsetWidth: { get: () => 100 },
    offsetHeight: { get: () => 40 },
    offsetLeft: { get: () => 100 },
    offsetTop: { get: () => 200 },
  });
  await waitFor(() => expect(stage.dataset.physicsReady).toBe("true"));
  return { ...view, stage, chip, size };
}

function advance(count) {
  act(() => {
    for (let index = 0; index < count; index += 1) {
      const callbacks = [...frames.values()];
      frames.clear();
      clock += 1000 / 60;
      callbacks.forEach((callback) => callback(clock));
    }
  });
}

test("starts falling on entry and releases animation resources on unmount", async () => {
  const { stage, chip, unmount } = await mount();
  const initial = chip.style.transform;
  expect(frames.size).toBe(0);
  act(() => onIntersection([{ isIntersecting: true }]));
  advance(20);
  expect(chip.style.transform).not.toBe(initial);
  unmount();
  expect(frames.size).toBe(0);
  expect(stage.dataset.physicsReady).toBeUndefined();
  expect(chip.getAttribute("style")).toBeNull();
  expect(resizeObserver.disconnect).toHaveBeenCalled();
  expect(intersectionObserver.disconnect).toHaveBeenCalled();
});

test("reduced motion stays settled, resizes inside the box, and allows keyboard play", async () => {
  media.matches = true;
  const { stage, chip, size } = await mount();
  act(() => onIntersection([{ isIntersecting: true }]));
  const settled = chip.style.transform;
  advance(20);
  expect(chip.style.transform).toBe(settled);
  expect(frames.size).toBe(0);

  size.width = 280;
  size.height = 290;
  act(() => onResize());
  expect(chip.style.transform).not.toBe(settled);
  const [, x, y] = chip.style.transform.match(/translate\(([-\d.]+)px, ([-\d.]+)px\)/);
  expect(Number(x)).toBeGreaterThanOrEqual(-1);
  expect(Number(x) + 100).toBeLessThanOrEqual(size.width + 1);
  expect(Number(y) + 40).toBeLessThanOrEqual(size.height + 1);

  const beforeShuffle = chip.style.transform;
  fireEvent.keyDown(stage, { key: "Enter" });
  advance(8);
  expect(chip.style.transform).not.toBe(beforeShuffle);
});

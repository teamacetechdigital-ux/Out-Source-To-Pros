import { useEffect } from "react";

const STEP = 1000 / 60;
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

export default function usePhysicsChips(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let disposed = false;
    let cleanup = () => {};

    // Load the physics engine separately from the page's initial bundle.
    import("matter-js").then((module) => {
      if (disposed) return;
      const { Bodies, Body, Composite, Constraint, Engine, Sleeping } = module.default || module;
      const elements = [...container.querySelectorAll("[data-agency-chip]")];
      const originalStyles = elements.map((element) => element.getAttribute("style"));
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const engine = Engine.create({ enableSleeping: true });
      engine.gravity.y = 1;

      let items = [];
      let size = { width: 0, height: 0 };
      let visible = false;
      let frame = 0;
      let lastTime = 0;
      let elapsed = 0;
      let drag = null;

      const render = () => {
        items.forEach(({ element, body, width, height }) => {
          element.style.transform = `translate(${body.position.x - width / 2}px, ${body.position.y - height / 2}px) rotate(${body.angle}rad)`;
        });
      };

      const pause = () => {
        window.cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
        elapsed = 0;
      };

      const tick = (time) => {
        frame = 0;
        if (!visible || document.hidden) return;
        elapsed += lastTime ? Math.min(time - lastTime, STEP * 3) : STEP;
        lastTime = time;
        while (elapsed >= STEP) {
          Engine.update(engine, STEP);
          elapsed -= STEP;
        }
        render();
        if (drag || items.some(({ body }) => !body.isSleeping)) {
          frame = window.requestAnimationFrame(tick);
        } else {
          lastTime = 0;
          elapsed = 0;
        }
      };

      const wake = () => {
        if (!frame && visible && !document.hidden) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      const release = () => {
        if (!drag) return;
        const { constraint, pointerId, element } = drag;
        drag = null;
        Composite.remove(engine.world, constraint);
        element.style.zIndex = "";
        if (container.hasPointerCapture(pointerId)) {
          container.releasePointerCapture(pointerId);
        }
        wake();
      };

      const settle = () => {
        for (let index = 0; index < 180; index += 1) Engine.update(engine, STEP);
        items.forEach(({ body }) => Sleeping.set(body, true));
        render();
      };

      const rebuild = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (!width || !height || (width === size.width && height === size.height)) return;
        release();
        pause();
        const previous = items;
        const previousSize = size;
        size = { width, height };
        Composite.clear(engine.world, false);
        Engine.clear(engine);

        const wall = 100;
        Composite.add(engine.world, [
          Bodies.rectangle(width / 2, height + wall / 2, width + wall * 2, wall, { isStatic: true }),
          Bodies.rectangle(width / 2, -wall / 2, width + wall * 2, wall, { isStatic: true }),
          Bodies.rectangle(-wall / 2, height / 2, wall, height + wall * 2, { isStatic: true }),
          Bodies.rectangle(width + wall / 2, height / 2, wall, height + wall * 2, { isStatic: true }),
        ]);

        items = elements.map((element, index) => {
          const chipWidth = element.offsetWidth;
          const chipHeight = element.offsetHeight;
          const old = previous[index];
          const angle = old ? old.body.angle : (parseFloat(getComputedStyle(element).rotate) || 0) * Math.PI / 180;
          const halfWidth = (Math.abs(Math.cos(angle)) * chipWidth + Math.abs(Math.sin(angle)) * chipHeight) / 2 + 2;
          const halfHeight = (Math.abs(Math.sin(angle)) * chipWidth + Math.abs(Math.cos(angle)) * chipHeight) / 2 + 2;
          const x = old ? old.body.position.x / previousSize.width * width : element.offsetLeft + chipWidth / 2;
          const y = old ? old.body.position.y / previousSize.height * height : element.offsetTop + chipHeight / 2 - height * 0.25;
          const body = Bodies.rectangle(
            clamp(x, halfWidth, width - halfWidth),
            clamp(y, halfHeight, height - halfHeight),
            chipWidth,
            chipHeight,
            {
              angle,
              chamfer: { radius: Math.min(chipWidth, chipHeight) * 0.1 },
              restitution: 0.3,
              friction: 0.45,
              frictionAir: 0.018,
              sleepThreshold: 45,
            },
          );
          element.style.left = "0px";
          element.style.top = "0px";
          element.style.rotate = "none";
          Composite.add(engine.world, body);
          return { element, body, width: chipWidth, height: chipHeight };
        });
        render();
        if (motion.matches) settle();
        else wake();
      };

      const pointerPosition = (event) => {
        const rect = container.getBoundingClientRect();
        return {
          x: clamp((event.clientX - rect.left) * size.width / rect.width, 0, size.width),
          y: clamp((event.clientY - rect.top) * size.height / rect.height, 0, size.height),
        };
      };

      const onPointerDown = (event) => {
        if (drag || !event.isPrimary || event.button !== 0) return;
        const element = event.target.closest("[data-agency-chip]");
        const item = items.find((entry) => entry.element === element);
        if (!item) return;
        event.preventDefault();
        container.focus({ preventScroll: true });
        const point = pointerPosition(event);
        Sleeping.set(item.body, false);
        const constraint = Constraint.create({
          pointA: point,
          bodyB: item.body,
          pointB: { x: point.x - item.body.position.x, y: point.y - item.body.position.y },
          length: 0,
          stiffness: 0.18,
          damping: 0.15,
        });
        drag = { constraint, pointerId: event.pointerId, element };
        element.style.zIndex = "1";
        container.setPointerCapture(event.pointerId);
        Composite.add(engine.world, constraint);
        wake();
      };

      const onPointerMove = (event) => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        drag.constraint.pointA = pointerPosition(event);
        Sleeping.set(drag.constraint.bodyB, false);
        wake();
      };

      const onPointerEnd = (event) => {
        if (drag && event.pointerId === drag.pointerId) release();
      };

      const onKeyDown = (event) => {
        if (event.target !== container || (event.key !== "Enter" && event.key !== " ")) return;
        event.preventDefault();
        items.forEach(({ body }, index) => {
          Sleeping.set(body, false);
          Body.setVelocity(body, { x: index % 2 ? 2.5 : -2.5, y: -5 - index % 3 });
          Body.setAngularVelocity(body, index % 2 ? 0.05 : -0.05);
        });
        wake();
      };

      const onVisibilityChange = () => document.hidden ? pause() : wake();
      const onMotionChange = () => {
        if (motion.matches) {
          release();
          pause();
          settle();
        } else wake();
      };
      const intersection = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) wake();
        else {
          release();
          pause();
        }
      }, { threshold: 0.05 });
      const resize = new ResizeObserver(rebuild);

      rebuild();
      intersection.observe(container);
      resize.observe(container);
      container.dataset.physicsReady = "true";
      container.addEventListener("pointerdown", onPointerDown);
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerup", onPointerEnd);
      container.addEventListener("pointercancel", onPointerEnd);
      container.addEventListener("lostpointercapture", onPointerEnd);
      container.addEventListener("keydown", onKeyDown);
      document.addEventListener("visibilitychange", onVisibilityChange);
      motion.addEventListener("change", onMotionChange);

      cleanup = () => {
        intersection.disconnect();
        resize.disconnect();
        release();
        pause();
        Composite.clear(engine.world, false);
        Engine.clear(engine);
        container.removeEventListener("pointerdown", onPointerDown);
        container.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerup", onPointerEnd);
        container.removeEventListener("pointercancel", onPointerEnd);
        container.removeEventListener("lostpointercapture", onPointerEnd);
        container.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        motion.removeEventListener("change", onMotionChange);
        delete container.dataset.physicsReady;
        elements.forEach((element, index) => {
          if (originalStyles[index] === null) element.removeAttribute("style");
          else element.setAttribute("style", originalStyles[index]);
        });
      };
    }).catch(() => {
      // Keep the authored static layout if the optional animation cannot load.
      cleanup();
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [containerRef]);
}

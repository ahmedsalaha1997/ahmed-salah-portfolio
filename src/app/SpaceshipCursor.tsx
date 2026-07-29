import { useEffect, useRef } from "react";

const trailLength = 9;

export default function SpaceshipCursor() {
  const shipRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches || coarsePointer.matches) return;

    const ship = shipRef.current;
    if (!ship) return;
    const points = Array.from({ length: trailLength }, () => ({ x: -100, y: -100 }));
    let targetX = -100;
    let targetY = -100;
    let frame = 0;
    let visible = false;

    document.documentElement.classList.add("spaceship-cursor-active");

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
    };

    const leave = () => { visible = false; };
    const render = () => {
      points[0].x += (targetX - points[0].x) * 0.34;
      points[0].y += (targetY - points[0].y) * 0.34;
      for (let index = 1; index < points.length; index += 1) {
        points[index].x += (points[index - 1].x - points[index].x) * 0.26;
        points[index].y += (points[index - 1].y - points[index].y) * 0.26;
      }

      ship.style.opacity = visible ? "1" : "0";
      ship.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;
        const point = points[index];
        const size = Math.max(0.22, 1 - index * 0.095);
        trail.style.opacity = visible ? String(Math.max(0, 0.42 - index * 0.035)) : "0";
        trail.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${size})`;
      });
      frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("spaceship-cursor-active");
    };
  }, []);

  return (
    <div className="spaceship-cursor" aria-hidden="true">
      {Array.from({ length: trailLength }, (_, index) => (
        <span className="spaceship-cursor-trail" key={index} ref={(element) => { trailRefs.current[index] = element; }} />
      ))}
      <div className="spaceship-cursor-ship" ref={shipRef}>
        <svg viewBox="0 0 40 40" fill="none" role="presentation">
          <ellipse cx="20" cy="20" rx="18" ry="6.5" transform="rotate(-19 20 20)" fill="#0a1d34" stroke="#8dcaff" strokeWidth="1.4" />
          <ellipse cx="20" cy="20" rx="14" ry="3.5" transform="rotate(-19 20 20)" stroke="#397fc6" strokeWidth="1.15" opacity=".9" />
          <circle cx="20" cy="20" r="10.2" fill="#174a7d" stroke="#b7e2ff" strokeWidth="1.2" />
          <path d="M13.5 14.6c2.8-3 7.7-4.1 11.5-2.2" stroke="#70b8ff" strokeWidth="2" strokeLinecap="round" opacity=".8" />
          <circle cx="16.4" cy="22.5" r="1.6" fill="#0f3865" opacity=".85" />
          <circle cx="22.9" cy="25.3" r="1.1" fill="#0f3865" opacity=".8" />
        </svg>
      </div>
    </div>
  );
}

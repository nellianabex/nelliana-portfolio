"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouch(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const bindClickables = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 19}px, ${ring.current.y - 19}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);
    bindClickables();

    const observer = new MutationObserver(bindClickables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, [isTouch, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? 18 : 12,
          height: hovered ? 18 : 12,
          background: "#CCFF53",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "multiply",
          opacity: visible ? 1 : 0,
          transition: "width 0.15s ease, height 0.15s ease, opacity 0.3s",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? 48 : 38,
          height: hovered ? 48 : 38,
          border: "1.5px solid #CCFF53",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 0.45 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}

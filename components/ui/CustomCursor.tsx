"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SunflowerCursor({ size, opacity }: { size: number; opacity: number }) {
  const petalCount = 12;
  const cx = size / 2;
  const cy = size / 2;
  const petalLen = size * 0.38;
  const petalW = size * 0.13;
  const coreR = size * 0.18;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ opacity, display: "block" }}
    >
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (i * 360) / petalCount;
        const rad = (angle * Math.PI) / 180;
        const px = Math.round((cx + Math.cos(rad) * (coreR + petalLen / 2)) * 1000) / 1000;
        const py = Math.round((cy + Math.sin(rad) * (coreR + petalLen / 2)) * 1000) / 1000;
        return (
          <ellipse
            key={i}
            cx={px}
            cy={py}
            rx={petalW / 2}
            ry={petalLen / 2}
            stroke="#D4FF00"
            strokeWidth={1.2}
            transform={`rotate(${angle + 90}, ${px}, ${py})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={coreR} stroke="#D4FF00" strokeWidth={1.2} />
    </svg>
  );
}

export default function CustomCursor() {
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const animate = () => {
      cursorRef.current.x = lerp(cursorRef.current.x, targetRef.current.x, 0.1);
      cursorRef.current.y = lerp(cursorRef.current.y, targetRef.current.y, 0.1);
      setPos({ x: cursorRef.current.x, y: cursorRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);

    const clickables = document.querySelectorAll("a, button, [data-cursor]");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const newClickables = document.querySelectorAll("a, button, [data-cursor]");
      newClickables.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, [visible]);

  const size = hovered ? 52 : 22;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none"
      style={{ x: pos.x - size / 2, y: pos.y - size / 2 }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ width: size, height: size, rotate: hovered ? 30 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <SunflowerCursor size={size} opacity={visible ? 1 : 0} />
      </motion.div>
    </motion.div>
  );
}

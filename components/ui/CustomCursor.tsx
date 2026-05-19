"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
      style={{ x: pos.x - (hovered ? 20 : 6), y: pos.y - (hovered ? 20 : 6) }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: hovered ? 40 : 12,
          height: hovered ? 40 : 12,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-full bg-fluo flex items-center justify-center overflow-hidden"
      >
        {hovered && (
          <span className="text-[6px] font-display text-noir leading-none tracking-wider">
            VOIR
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

"use client";

interface TickerProps {
  text: string;
  speed?: "fast" | "slow";
  className?: string;
  separator?: string;
}

export default function Ticker({
  text,
  speed = "fast",
  className = "",
  separator = "·",
}: TickerProps) {
  const repeated = Array(8).fill(`${text} ${separator} `).join("");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <span
        className={`inline-block ${speed === "fast" ? "animate-ticker" : "animate-ticker-slow"}`}
      >
        {repeated}
        {repeated}
      </span>
    </div>
  );
}

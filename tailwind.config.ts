import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fluo: "#D4FF00",
        noir: "#0A0A0A",
        "blanc-casse": "#F5F5F0",
        "gris-sombre": "#6B6B6B",
        surface: "#141414",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
      animation: {
        ticker: "ticker 20s linear infinite",
        "ticker-slow": "ticker 30s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

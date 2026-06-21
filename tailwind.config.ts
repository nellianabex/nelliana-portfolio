import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fluo: "#CCFF53",
        noir: "#212121",
        "blanc-casse": "#FAFAFA",
        "gris-sombre": "#888888",
        surface: "#F7F7F5",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-dm-mono)", "monospace"],
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

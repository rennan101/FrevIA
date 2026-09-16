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
        frevo: {
          cyan: "#16C7D9",
          green: "#39D98A",
          yellow: "#FFD928",
          orange: "#FF8A00",
          red: "#F0442E",
          pink: "#F04FA3",
          purple: "#7447E8",
        },
        ink: {
          DEFAULT: "#171717",
          soft: "#383838",
        },
        paper: "#FFFDF8",
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F4F1EA",
        },
        line: "#DDD8CE",
        muted: "#716E68",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      boxShadow: {
        card: "0 12px 30px rgba(23, 23, 23, 0.08)",
        floating: "0 20px 50px rgba(23, 23, 23, 0.14)",
        sticker: "0 10px 25px rgba(23, 23, 23, 0.15)",
      },
      backgroundImage: {
        "gradient-frevo": "linear-gradient(135deg, #16C7D9 0%, #39D98A 30%, #FFD928 55%, #FF8A00 75%, #F0442E 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(22, 199, 217, 0.12) 0%, rgba(255, 217, 40, 0.08) 50%, rgba(255, 253, 248, 1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

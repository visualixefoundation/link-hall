import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1115",
        surface: "#171A21",
        surface2: "#1D212A",
        hairline: "#2A2D35",
        paper: "#E7E5DE",
        muted: "#9B9A93",
        amber: "#E8A33D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

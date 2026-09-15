import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F4F5F7",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        ink: "#111827",
        soft: "#6B7280",
        faint: "#9CA3AF",
        accent: "#0D9488",
        "accent-soft": "#CCFBF1",
        "accent-hover": "#0F766E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        "card-hover":
          "0 4px 12px rgba(16, 24, 40, 0.08), 0 2px 4px rgba(16, 24, 40, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;

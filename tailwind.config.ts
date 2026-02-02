import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-dark": "#4338ca",
        secondary: "#3b82f6",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "surface-dark": "#1e293b",
        "accent-emerald": "#10b981",
        "accent-purple": "#a855f7",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
};

export default config;

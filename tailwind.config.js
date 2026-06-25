/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1B2240", light: "#262F58", dark: "#11162C" },
        parchment: { DEFAULT: "#F2E9D8", dark: "#E3D5B8" },
        gold: "#FFD23F",
        violet: "#6C4AB6",
        teal: "#2FBFA0",
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        sleeve: "inset 0 0 0 2px rgba(27,34,64,0.08), 0 6px 16px -8px rgba(27,34,64,0.35)",
      },
    },
  },
  plugins: [],
};

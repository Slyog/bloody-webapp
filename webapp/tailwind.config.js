/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b10010",
          foreground: "#ffffff",
        },
        muted: "#9ca3af",
        dark: "#0a0a0a",
        light: "#f5f5f5",
      },
      fontFamily: {
        futuristic: ["var(--font-futuristic)", "Orbitron", "sans-serif"],
        body: ["var(--font-futuristic)", "Orbitron", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(177, 0, 16, 0.35)",
      },
      backgroundImage: {
        "noise-texture": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
        "dark-gradient": "linear-gradient(180deg, #0b0b0b 0%, #141414 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

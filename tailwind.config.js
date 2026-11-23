/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pt.html", "./impressum.html", "./datenschutz.html"],
  theme: {
    extend: {
      colors: {
        navy: "#102033",
        ink: "#1C2836",
        muted: "#3E4C5E",
        paper: "#F4F6F8",
        line: "#E3E7EE",
        accent: "#6F5433",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 32, 51, 0.04), 0 12px 32px rgba(16, 32, 51, 0.05)",
      },
      letterSpacing: {
        heading: "-0.03em",
      },
    },
  },
  plugins: [],
};

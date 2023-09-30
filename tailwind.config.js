/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#059669",
        secondary: "#113F57",
        success: "#22C55E",
        btnPrimary: "#15ADB7",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        last: "#C87959",
        hoverColor: "#2575a0",
        button: "#15ADB7",
        textPrimary: "#DC8F47",
        textSecondary: "#D22C62",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

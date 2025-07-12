/** @type {import'tailwindcss').Config} */
module.exports = {
  darkMode: "class", // This enables manual dark mode control via CSS classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        text: "#181818",
        accent: "#000000",
        card: "#FFFFFF",
        // Dark mode colors
        "dark-background": "#0a0a0a",
        "dark-text": "#ededed",
        "dark-accent": "#ffffff",
        "dark-card": "#1a1a1a",
        // Custom text colors for better readability
        "text-primary": "#1e293b", // Warm dark slate
        "text-secondary": "#334155", // Medium slate
        "text-muted": "#64748b", // Light slate for less important text
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

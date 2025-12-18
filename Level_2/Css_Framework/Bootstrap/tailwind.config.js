/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brandPrimary: "#2563eb",
        brandSecondary: "#1e293b",
        brandAccent: "#22c55e",
      },
    },
  },
  plugins: [],
};

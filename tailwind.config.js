/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        connectu: {
          teal: "#008C95",
          navy: "#12324A",
          light: "#F4FAFB",
          soft: "#EAF6F7",
        },
      },
    },
  },
  plugins: [],
};
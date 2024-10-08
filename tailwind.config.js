/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07bfa5",
        primaryLight: "#f2fff9",
      },
      backgroundImage: {
        "shadow-image": "url('/src/assets/shadow_image.svg')",
      },
    },
  },
  plugins: [],
};

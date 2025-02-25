/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "serif"],
      Train_One: ["Train One", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "110px",
      },
    },
    extend: {},
  },
  plugins: [],
};

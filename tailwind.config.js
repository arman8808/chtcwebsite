/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-green": "#77CFA1",
      "primary-green": "#0A9A73",
      "secondry-green": "#6BC6B4",
      white: "#fff",
      gray: "#A7A7A7",
      "light-gray": "#F1F1F1",
      "navy-blue": "#2B2C76",
      "black-shade": "#3D3D3D",
    },
    fontSize: {
      mainHeading: "3rem",
      seconderyHeading: "2rem",
      normalHeading: "1.5rem",
      para: "1rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "800",
      extrabold: "900",
    },

    screens: {
      mobile: { min: "280px", max: "639px" },
      tablet: { min: "640px", max: "767px" },
      // => @media (min-width: 640px) { ... }
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
    },

    extend: {},
  },
  plugins: [],
};

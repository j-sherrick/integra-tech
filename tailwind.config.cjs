/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    extend: {
      colors: {
        'itblue': {
          100: "#99dcfa",
          200: "#66caf7",
          300: "#33b9f5",
          400: "#00a7f2",
          500: "#0086c2",
          600: "#006491",
          700: "#004361",
          800: "#002130",
          900: "#001118",
        },
        'itred': {
          100: "#fcb4bc",
          200: "#fa8e9a",
          300: "#f96979",
          400: "#f74357",
          500: "#c63646",
          600: "#942834",
          700: "#631b23",
          800: "#310d11",
          900: "#190709",
        },
        'itgreen': {
          100: "#ccf3e6",
          200: "#b3ecda",
          300: "#99e6cd",
          400: "#80e0c1",
          500: "#66b39a",
          600: "#4d8674",
          700: "#335a4d",
          800: "#1a2d27",
          900: "#0d1613",
        },
        'ityellow': {
          100: "#ffefc7",
          200: "#ffe7ac",
          300: "#ffdf90",
          400: "#ffd774",
          500: "#ccac5d",
          600: "#998146",
          700: "#66562e",
          800: "#332b17",
          900: "#19150c",
        },
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};

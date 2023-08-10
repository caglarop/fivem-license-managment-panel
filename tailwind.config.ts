import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "8px",
      },
      colors: {
        primary: {
          DEFAULT: "#E3FB86",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FEFFFC",
          300: "#F5FED5",
          400: "#ECFCAD",
          500: "#E3FB86",
          600: "#D6F950",
          700: "#CAF719",
          800: "#A8D207",
          900: "#7D9B05",
          950: "#678004",
        },

        secondary: {
          DEFAULT: "#5E5F74",
          50: "#BFBFCB",
          100: "#B3B4C2",
          200: "#9D9EB0",
          300: "#86879D",
          400: "#70718B",
          500: "#5E5F74",
          600: "#454655",
          700: "#2C2C36",
          800: "#131317",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;

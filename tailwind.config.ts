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
          DEFAULT: "#C5111C",
          50: "#F6989D",
          100: "#F4858C",
          200: "#F15F68",
          300: "#EE3A45",
          400: "#EB1421",
          500: "#C5111C",
          600: "#910D15",
          700: "#5E080D",
          800: "#2A0406",
          900: "#000000",
          950: "#000000",
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

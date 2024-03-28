import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        charcoal: "#161616",
        snow: "#FEFEFE",
        meadow: "#70C387",
        azure: "#38B6FF",
        lavender: "#A259FF",
        marigold: "#FDCF53",
        tangerine: "#FF914D",
        void: "#010101",
        graphite: "#242424",
        steel: "#A5A5A5",
        iron: "#4C4C4C",
        lightVoid: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;

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
      fontFamily :{
        array: ["array","sans-serif",],
        inter: ["Inter","sans-serif"],
        mono: ["mono","sans-serif"],
        nodeCamera: ["nodeCamera","sans-serif"],
        telegraphic: ["telegraphic","sans-serif"],
        ledcounter7: ["ledcounter7","sans-serif"],
        neopixelregular: ["neopixelregular","sans-serif"],

    },
    colors: {
      'blue-violet': '#8a2be2',
      'royal-blue': '#4169e1',
      'frosted-morning': '#e6e1d3',
      'dark-blue': '#00008b',
    },
    clipPath: {
      'polygon-closed': 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      'polygon-open': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    },
  },
  plugins: [],
};
export default config;

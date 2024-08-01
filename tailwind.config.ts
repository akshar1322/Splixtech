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

    },
    },
  },
  plugins: [],
};
export default config;

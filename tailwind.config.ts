import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: { min: "0px", max: "768px" },
    },
    extend: {
      boxShadow: {
        around:
          "inset 0 0 3px 1px rgba(0,0,0,0.1), 0 0 3px 1px rgba(0,0,0,0.1)",
        "around-sm":
          "inset 0 0 2px 1px rgba(0,0,0,0.1), 0 0 3px 1px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

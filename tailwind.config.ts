import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: "0%", transform: "translateX(100px)" },
          '100%': { opacity: "100%", transform: "translateX(0px)" },
        },
      },
      animation: {
        "fade-in": "fade 0.2s ease-in-out"

      },
      colors: {
        "primary": "#683C21",
        "secondary": "#EDEDED",
        "highlight": "#FF914D",
      },

    },
  },
  plugins: [],
};
export default config;

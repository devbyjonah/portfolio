import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        slidein: "slideIn 0.5s ease-in-out",
        fadeUp: "fadeUp 0.5s ease-in-out forwards",
        pulsing: "pulseGlow 2s ease-in-out infinite",
        pulseShadow: "pulseShadow 2s ease-in-out infinite", // Added pulseShadow animation
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseShadow: {
          "0%, 100%": {
            boxShadow: "0px 5px 25px rgba(66, 144, 248, 1)",
          },
          "50%": {
            boxShadow: "0px 5px 25px rgba(66, 144, 248, 0.5)",
          },
        },
      },
      screens: {
        short: { raw: "(max-height: 755px)" },
        xshort: { raw: "(max-height: 655px)" },
      },
      colors: {
        "light-text": "#0C0A03",
        "dark-text": "#fcfaf3",
        "light-bg": "#fbf7ef",
        "dark-bg": "#100c04",
        "black-transparent": "rgba(0, 0, 0, 0.5)",
        "logo-blue": "rgb(66, 180, 248)",
      },
      dropShadow: {
        "logo-blue": "0px 0px 1px rgba(66, 144, 248, 1)",
        gray: "0px 5px 20px rgba(50, 50, 50, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
export default config;

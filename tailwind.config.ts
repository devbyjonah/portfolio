import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 755px)" },
        xshort: { raw: "(max-height: 655px)" },
      },
      colors: {
        "black-transparent": "rgba(0, 0, 0, 0.5)",
        "logo-blue": "rgb(66, 180, 248)",
      },
      dropShadow: {
        "logo-blue": "0px 5px 25px rgba(66, 144, 248, 1)",
        gray: "0px 5px 20px rgba(50, 50, 50, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
export default config;

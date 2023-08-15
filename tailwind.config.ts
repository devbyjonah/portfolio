import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-transparent": "rgba(0, 0, 0, 0.5)",
      },
      dropShadow: {
        yellow: "0px 5px 25px rgba(253, 250, 132, 0.8)",
        gray: "0px 5px 20px rgba(50, 50, 50, 1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

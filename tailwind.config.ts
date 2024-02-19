import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      colors:{
        "white":"#fff",
        "black":"#333333",
        "beige":"#ebe7e3",
        "lightGrey":"#bdbab4",
        "darlGrey":"#7a7772",
        "blue":"#0d99ff",
        "darkBlack":"#0a0a0a"
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'roboto': ['Roboto'],
        'mohave': [ 'Mohave']
      }
    },
  },
  plugins: [],
};
export default config;

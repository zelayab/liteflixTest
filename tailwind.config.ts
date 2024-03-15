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
        gradient:
          "linear-gradient(0deg, rgba(36,36,36,1) 15%, rgba(247,247,247,0) 70%)",
      },
      colors: {
        primary: "#64EEBC",
        secondary: "#242424",
        tertiary: "#DC493A",
      },
    },
  },
  plugins: [],
};
export default config;

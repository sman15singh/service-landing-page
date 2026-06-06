import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#050a4f",
          ink: "#090b2d",
          red: "#c7172f",
          mist: "#f5f7ff",
          line: "#d9def7"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(5, 10, 79, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        primary: "#1E3A2B",
        cream: "#F7F5EE",
        line: "rgba(30,58,43,0.12)",
        green1: "#3B604D",
        gold: "#D4A359",
        muted: "#5a564c",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.07)" },
        },
      },
      animation: {
        fadein: "fadein .7s cubic-bezier(.22,1,.36,1) forwards",
        kenburns: "kenburns 9s cubic-bezier(.22,1,.36,1) forwards",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;

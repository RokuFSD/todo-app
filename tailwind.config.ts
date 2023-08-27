import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "var(--font-josefin-sans)",
      },
    },
  },
  plugins: [],
} satisfies Config;

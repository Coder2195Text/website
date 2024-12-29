import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-dm-sans)",
        mono: "var(--font-space-mono)",
      },
      width: {
        screen: "100dvw",
      },
      height: {
        screen: "100dvh",
      },
      borderWidth: {
        "1": "0.05rem",
        "2": "0.1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

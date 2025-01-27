import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marquee3: "marquee3 25s linear infinite",
        marquee4: "marquee4 25s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-dm-sans)",
        mono: "var(--font-space-mono)",
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
      },
      screens: {
        xs: "480px",
        xxs: "320px",
        sm: "640px",
        // pattern
        md: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
      },
    },
  },
  plugins: [],
} satisfies Config;

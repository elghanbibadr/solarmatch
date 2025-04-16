import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "850px", // Change 'md' breakpoint to 850px
      },
      colors: {
        textColor:'#545454',
        paleGray:"#EFEFEF",
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundPaleYellow:"#f5c441",
        darkshadegray:"#121212",
        backgroundImage: {
          'hero-pattern': "url('/public/hero.jpg')",
        },
        animation: {
          'bounce-custom': 'bounce-custom 2s infinite',
        },
        keyframes: {
          'bounce-custom': {
            '0%, 100%': { transform: 'translateY(0)' },
            '20%': { transform: 'translateY(-10px)' },
            '40%': { transform: 'translateY(0)' },
            '60%': { transform: 'translateY(-5px)' },
            '80%': { transform: 'translateY(0)' },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

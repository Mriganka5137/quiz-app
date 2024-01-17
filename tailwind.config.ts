import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    container: {
      padding: {
        DEFAULT: "24px",
        mobile: "36px",
        tablet: "64px",
        laptop: "96px",
        desktop: "144px",
      },
    },
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      backgroundImage: {
        desktopLight:
          "url('/assets/images/pattern-background-desktop-light.svg')",

        desktopDark:
          "url('/assets/images/pattern-background-desktop-dark.svg')",
        mobileLight:
          "url('/assets/images/pattern-background-mobile-light.svg')",
        mobileDark: "url('/assets/images/pattern-background-mobile-dark.svg')",

        tabletLight:
          "url('/assets/images/pattern-background-tablet-light.svg')",
        tabletDark: "url('/assets/images/pattern-background-tablet-dark.svg')",
      },

      colors: {
        /**
         *     --purple: 277, 91%, 56%, 1;
    --dark-navy: 216, 25%, 25%, 1;
    --navy: 216, 25%, 25%, 1;
    --gray-navy: 219, 13%, 44%, 1;
    --light-bluish: 216, 47%, 78%, 1;
    --light-gray: 220, 38%, 97%, 1;
    --pure-white: 0, 0%, 100%, 1;
    --green: 151, 70%, 50%, 1;
    --red: 0, 82%, 63%, 1;
         */
        purpleCustom: "hsl(var(--purple))",
        darkNavy: "hsl(var(--dark-navy))",
        navyCustom: "hsl(var(--navy))",
        grayNavy: "hsl(var(--gray-navy))",
        lightBluish: "hsl(var(--light-bluish))",
        lightGray: "hsl(var(--light-gray))",
        pureWhite: "hsl(var(--pure-white))",
        greenCustom: "hsl(var(--green))",
        redCustom: "hsl(var(--red))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

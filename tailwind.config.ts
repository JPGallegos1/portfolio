import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        brand: {
          lightblue: {
            100: '#dfeff8',
            200: '#c3edfa',
            300: '#c1def1',
            400: '#a4cde9',
            500: '#9dddf9'
          },
          blue: {
            100: '#72b9e1',
            200: '#4ba5d5',
            300: '#33b4e2',
            400: '#2c80af',
            500: '#04638c',
          },
          darkblue: {
            100: '#044562',
            200: '#043653',
            300: '#053c6c',
            400: '#042444',
            500: '#041b2f'
          },
          grayblue: {
            100: '#86a6be',
            200: '#6798ba',
            300: '#4c7798',
            400: '#8494a4',
            500: '#9ca4a4'
          },
          greenblue: {
            100: '#74b4cc',
            200: '#138db8',
            300: '#148ca4',
            400: '#047599',
            500: '#0c7484'
          },
          black: {
            100: '#1B1B1B',
          }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

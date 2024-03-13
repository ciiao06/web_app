import type { Config } from "tailwindcss"

const config = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    },
    // screens: {
    //   'sm': {'max': '767px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': {'min': '768px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   // 'lg': {'min': '1024px'}
    //   // // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   // 'xl': {'min': '1280px', 'max': '1535px'},
    //   // // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   // '2xl': {'min': '1536px'},
    //   // // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      colors: {
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
        'violet': {
          '50': '#efeeff',
          '100': '#e2e0ff',
          '200': '#cac7fe',
          '300': '#aaa5fc',
          '400': '#8881f8',
          '500': '#6b63f1',
          '600': '#4f46e5',
          '700': '#4038ca',
          '800': '#3730a3',
          '900': '#332e81',
          '950': '#1e1b4b',
      },
      'desc': {
        '50': '#f4f6f7',
        '100': '#e3e6ea',
        '200': '#cad1d7',
        '300': '#a5afbb',
        '400': '#798797',
        '500': '#5d6c7d',
        '600': '#4b5563',
        '700': '#454d59',
        '800': '#3e444c',
        '900': '#373b42',
        '950': '#21242b',
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
  variants: {
    lineClamp: ["responsive"]
  },
  plugins: 
  [require("tailwindcss-animate"),
  require('tailwindcss-line-clamp'),]
} satisfies Config

export default config
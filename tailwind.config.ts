import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - sophisticated and calm
        slate: {
          950: '#0c1220',
          900: '#1e293b',
          800: '#2d3a4f',
          700: '#3d4a5f',
          600: '#4d5a6f',
        },
        // Warm backgrounds
        cream: {
          50: '#fdfcfb',
          100: '#faf9f7',
          200: '#f5f3f0',
          300: '#ebe8e4',
          400: '#ddd9d3',
        },
        // Muted navy accent
        navy: {
          400: '#6b8cae',
          500: '#4a6d8c',
          600: '#3d5a80',
          700: '#2f4a6b',
          800: '#243a55',
        },
        // Warm grays
        warm: {
          100: '#f7f6f4',
          200: '#eeece8',
          300: '#e0ddd7',
          400: '#c9c5bc',
          500: '#a8a39a',
          600: '#87827a',
          700: '#666259',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra': '0.3em',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const pxToRem = (px: number, base = 16) => {
  return `${px / base}rem`;
};

const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const generateValues = (start: number, end: number) => {
  return range(start, end).reduce(
    (obj, px) => {
      obj[`${px}pxr`] = pxToRem(px);
      return obj;
    },
    {} as Record<string, string>,
  );
};

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        desktop: '1044px',
      },
      spacing: generateValues(0, 1200),
      maxHeight: generateValues(0, 1200),
      borderRadius: generateValues(0, 64),
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#ff6b6b',
          600: '#fa5252',
          700: '#f03e3e',
          800: '#e03131',
          900: '#c92a2a',
          DEFAULT: '#ff6b6b', // 500
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          DEFAULT: '#262626', // 800
        },
        dim: {
          '005': 'rgba(0, 0, 0, 0.05)',
          '010': 'rgba(0, 0, 0, 0.1)',
          '020': 'rgba(0, 0, 0, 0.2)',
          '030': 'rgba(0, 0, 0, 0.3)',
          '040': 'rgba(0, 0, 0, 0.4)',
          '050': 'rgba(0, 0, 0, 0.5)',
          '060': 'rgba(0, 0, 0, 0.6)',
          '070': 'rgba(0, 0, 0, 0.7)',
          '080': 'rgba(0, 0, 0, 0.8)',
          '090': 'rgba(0, 0, 0, 0.9)',
        },
        white: '#ffffff',
        black: '#262626',
      },
      keyframes: {
        showMenuItem: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      zIndex: {
        header: '1000',
      },
    },
  },
  plugins: [],
};

export default config;

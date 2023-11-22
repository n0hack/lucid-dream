import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      pretendard: ['Pretendard', 'sans-serif'],
      fira: ['Fira Code', 'monospace'],
    },
    extend: {
      fontSize: {
        xl: ['1.25rem', '1.5rem'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
          DEFAULT: '#8B5CF6', // primary-500
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
        },
        dim: {
          '005': 'rgba(0, 0, 0, 0.05)',
          '010': 'rgba(0, 0, 0, 0.10)',
          '020': 'rgba(0, 0, 0, 0.20)',
          '030': 'rgba(0, 0, 0, 0.30)',
          '040': 'rgba(0, 0, 0, 0.40)',
          '050': 'rgba(0, 0, 0, 0.50)',
          '060': 'rgba(0, 0, 0, 0.60)',
          '070': 'rgba(0, 0, 0, 0.70)',
          '080': 'rgba(0, 0, 0, 0.80)',
          '090': 'rgba(0, 0, 0, 0.90)',
        },
        white: '#ffffff',
        black: '#262626', // gray-800
      },
      zIndex: {
        header: '1000',
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
    },
  },
};

export default config;

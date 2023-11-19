import { defineConfig } from '@pandacss/dev';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

const pxToRem = (px: number, base = 16) => {
  return `${px / base}rem`;
};

const generateValues = (start: number, end: number) => {
  return range(start, end).reduce((acc, cur) => {
    acc[`${cur}pxr`] = { value: pxToRem(cur) };
    return acc;
  }, {});
};

export default defineConfig({
  preflight: true,
  hash: false,
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}', './pages/**/*.{js,jsx,ts,tsx,astro}'],
  outdir: 'styled-system',
  theme: {
    extend: {
      breakpoints: {
        desktop: '1044px',
      },
      keyframes: {
        showMenuItem: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      tokens: {
        sizes: generateValues(1, 1440),
        spacing: generateValues(1, 128),
        radii: generateValues(1, 128),
        fonts: {
          pretendard: { value: 'var(--font-pretendard)' },
          fira: { value: 'var(--font-fira-code)' },
        },
        colors: {
          // primary: {
          //   50: { value: '#fff5f5' },
          //   100: { value: '#ffe3e3' },
          //   200: { value: '#ffc9c9' },
          //   300: { value: '#ffa8a8' },
          //   400: { value: '#ff8787' },
          //   500: { value: '#ff6b6b' },
          //   600: { value: '#fa5252' },
          //   700: { value: '#f03e3e' },
          //   800: { value: '#e03131' },
          //   900: { value: '#c92a2a' },
          //   DEFAULT: { value: '{colors.primary.500}' },
          // },
          primary: {
            50: { value: '#f5f3ff' },
            100: { value: '#ede9fe' },
            200: { value: '#ddd6fe' },
            300: { value: '#c4b5fd' },
            400: { value: '#a78bfa' },
            500: { value: '#8b5cf6' },
            600: { value: '#7c3aed' },
            700: { value: '#6d28d9' },
            800: { value: '#5b21b6' },
            900: { value: '#4c1d95' },
            950: { value: '#2e1065' },
            DEFAULT: { value: '{colors.primary.500}' },
          },
          gray: {
            50: { value: '#fafafa' },
            100: { value: '#f5f5f5' },
            200: { value: '#e5e5e5' },
            300: { value: '#d4d4d4' },
            400: { value: '#a3a3a3' },
            500: { value: '#737373' },
            600: { value: '#525252' },
            700: { value: '#404040' },
            800: { value: '#262626' },
            900: { value: '#171717' },
            950: { value: '#0a0a0a' },
            DEFAULT: { value: '{colors.gray.800}' },
          },
          dim: {
            '005': { value: 'rgba(0, 0, 0, 0.05)' },
            '010': { value: 'rgba(0, 0, 0, 0.1)' },
            '020': { value: 'rgba(0, 0, 0, 0.2)' },
            '030': { value: 'rgba(0, 0, 0, 0.3)' },
            '040': { value: 'rgba(0, 0, 0, 0.4)' },
            '050': { value: 'rgba(0, 0, 0, 0.5)' },
            '060': { value: 'rgba(0, 0, 0, 0.6)' },
            '070': { value: 'rgba(0, 0, 0, 0.7)' },
            '080': { value: 'rgba(0, 0, 0, 0.8)' },
            '090': { value: 'rgba(0, 0, 0, 0.9)' },
          },
          white: { value: '#ffffff' },
          black: { value: '{colors.gray}' },
        },
        zIndex: {
          header: { value: 1000 },
        },
      },
    },
  },
});

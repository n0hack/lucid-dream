/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  importOrder: ['^react', '<THIRD_PARTY_MODULES>', '^@', '^[./]'],
};

export default config;

import type { Config } from 'prettier';

export const config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSameLine: false,
  arrowParens: 'avoid',
} satisfies Config;

export default config;

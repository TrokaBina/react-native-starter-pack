import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import globals from 'globals';
import tseslint, { parser } from 'typescript-eslint';
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  reactJsxRuntime,
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'warn',
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ['scripts/', 'commitlint.config.js', 'babel.config.js', 'node_modules'],
  },
];

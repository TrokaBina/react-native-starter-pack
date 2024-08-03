import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint, { parser } from 'typescript-eslint';
// const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

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
    //  'tseslint/no-require-imports': 'off'
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-require-imports': 'warn',
        },
    },
    eslintPluginPrettierRecommended,
    {
        ignores: ['scripts/', 'commitlint.config.js', 'babel.config.js', 'node_modules'],
    },
];
